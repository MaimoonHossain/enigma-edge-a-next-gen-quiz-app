import NextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface User {
    role: string;
    username: string;
  }
  interface Session {
    user: User & {
      role: string;
      username: string;
    };
    token: {
      role: string;
      username: string;
    };
  }
}
