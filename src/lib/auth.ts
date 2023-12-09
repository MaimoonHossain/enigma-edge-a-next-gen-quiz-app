import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from './prisma';
import { compare } from 'bcrypt';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/signin',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'john@gmail.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials): Promise<any | null> {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const existingUser = await prisma.user.findUnique({
          where: { email: credentials?.email },
        });

        if (!existingUser) {
          return null;
        }

        const passwordMatch = await compare(
          credentials.password,
          existingUser.password
        );

        if (!passwordMatch) {
          return null;
        }

        console.log('existing user: ', existingUser);

        return {
          id: existingUser.id,
          email: existingUser.email,
          username: existingUser.username,
          role: existingUser.role,
        };
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.uid = user;
      }

      return token;
    },
    session: async ({ session, token }: any) => {
      console.log('token ', token);
      // here we put session.useData and put inside it whatever you want to be in the session
      // here try to console.log(token) and see what it will have
      // sometimes the user get stored in token.uid.userData
      // sometimes the user data get stored in just token.uid
      (session.user.role = token.uid.role), console.log('session ', session);

      return session;
    },
  },
};
