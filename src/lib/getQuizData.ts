import prisma from './prisma';

export async function getQuizData(id: any) {
  console.log('prisma', prisma);
  // Fetch available quizzes from Prisma
  const quizId = parseInt(id);
  console.log(quizId);
  const quiz = await prisma.quiz.findUnique({
    where: { id: quizId },
  });

  return quiz;
}
