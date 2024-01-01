import { useRouter } from 'next/router';
import prisma from '@/lib/prisma';
import MultipleChoiceAnswer from './../../../components/question/MultipleChoiceAnswer';
import { useState } from 'react';
import { getQuizData } from '@/lib/getQuizData';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export default async function QuizPage({ params }: { params: { id: string } }) {
  // const router = useRouter();
  // const { quizId } = router.query;
  // console.log('helllllloooo');
  const quiz = await getData(params.id);

  const session = await getServerSession(authOptions);

  console.log('session again', session);

  const username = session?.user?.username;
  const userId = session?.user?.id;

  console.log('quiz', quiz);

  if (!quiz) {
    return <div>Quiz not found</div>;
  }

  // if (!quiz) {
  //   // Handle the case where the quiz is not found
  //   return <div>Quiz not found</div>;
  // }

  return (
    <div>
      <h1>{quiz.title}</h1>
      {/* Render the quiz form based on the data from the 'quiz' object */}
      <MultipleChoiceAnswer quiz={quiz} username={username} userId={userId} />
    </div>
  );
}

export async function getData(id: any) {
  console.log('id', id);
  const quizId = parseInt(id, 10);
  const quiz = await prisma.quiz.findUnique({
    where: { id: quizId },
    include: {
      questions: true,
    },
  });

  return quiz;
}
