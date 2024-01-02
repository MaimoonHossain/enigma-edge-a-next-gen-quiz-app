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

  if (!data?.userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (req.method === 'POST') {
    try {
      const { quizId, status, percentage, username, userId } = data;


      const quizResult = await prisma.quizResult.create({
        data: {
          username: username,
          quizId: parseInt(quizId),
          userId: parseInt(userId),
          percentage: percentage,
          status: status, 
        },
      });

      return NextResponse.json({ success: true, quizResult }, { status: 200 });
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
