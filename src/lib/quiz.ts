import prisma from './prisma';

export async function getQuizes() {
  // Fetch available quizzes from Prisma
  const quizzes = await prisma.quiz.findMany();

  return quizzes;
}


