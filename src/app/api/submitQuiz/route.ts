// pages/api/submitQuiz.js
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import prisma from '@/lib/prisma';

export async function POST(req: Request, res: NextApiResponse) {
  const session = await getSession();

  // if (!session) {
  //   return res.status(401).json({ error: 'Unauthorized' });
  // }

  // const body = await req.json();

  // const { email, username, password, role } = body;

  console.log('I am outside post ', req.body);

  if (req.method === 'POST') {
    try {
      const body = await req.json();
      console.log('Hello from post', body);
      const { quizTitle, type, questions } = body;
      console.log('I am from post ', quizTitle, questions);

      // Assume the owner's user ID is in the session
      const ownerId = session?.user.id ? session.user.id : '1';

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

      res.status(200).json({ success: true, quiz });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
