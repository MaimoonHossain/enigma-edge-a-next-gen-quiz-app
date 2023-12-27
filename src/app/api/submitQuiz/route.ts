// pages/api/submitQuiz.js
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession, useSession } from 'next-auth/react';
import prisma from '@/lib/prisma';
import getServerSession from 'next-auth';
import { authOptions } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();
  console.log('data', data);

  // return NextResponse.json(data);

  if (!data.ownerId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // console.log('I am outside post ', req.json());

  if (req.method === 'POST') {
    try {
      // const body = await req.json();
      // console.log('Hello from post', body);
      const { quizTitle, type, questions, ownerId } = data;
      console.log('I am from post ', quizTitle, questions);

      // Assume the owner's user ID is in the session

      const quiz = await prisma.quiz.create({
        data: {
          title: quizTitle,
          ownerId: parseInt(ownerId),
          questions: {
            create: questions.map((question: any) => ({
              type: question.type,
              questionText: question.question,
              options: question.options,
              correctOption: parseInt(question.correctOption),
            })),
          },
        },
      });

      return NextResponse.json({ success: true, quiz }, { status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { error: 'Internal Server Error' },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
  }
}
