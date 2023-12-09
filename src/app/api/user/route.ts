import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';
import { hash } from 'bcrypt';
import { ZCOOL_KuaiLe } from 'next/font/google';
import z from 'zod';

//validation

const userSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  username: z.string().min(1, 'Username is required').max(100),
  password: z
    .string()
    .min(1, 'Password is required')
    .max(8, 'Password must be at least 8 characters'),
  role: z.enum(['student', 'teacher']),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { email, username, password, role } = userSchema.parse(body);
    console.log('I am from server 2');

    const existingUserByEmail = await prisma.user.findUnique({
      where: { email: email },
    });

    if (existingUserByEmail) {
      return NextResponse.json(
        {
          user: null,
          message: 'Email already exists.',
        },
        { status: 409 }
      );
    }

    const existingUserByUsername = await prisma.user.findUnique({
      where: { username: username },
    });

    if (existingUserByUsername) {
      return NextResponse.json(
        {
          user: null,
          message: 'Username already exists.',
        },
        { status: 409 }
      );
    }

    const newUser = await prisma.user.create({
      data: {
        email,
        username,
        password: await hash(password, 10),
        role,
      },
    });

    const { password: newUserPassword, ...rest } = newUser;

    return NextResponse.json(
      {
        user: rest,
        message: 'User created successfully',
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: 'Something went very high',
      },
      { status: 500 }
    );
  }
}
