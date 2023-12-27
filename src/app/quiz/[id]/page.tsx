import { useRouter } from 'next/router';
import prisma from '@/lib/prisma';
import { getQuizData } from '@/lib/getQuizData';
import MultipleChoiceAnswer from '@/components/question/MultipleChoiceAnswer';

export default async function QuizPage({ params }: { params: { id: string } }) {
  // const router = useRouter();
  // const { quizId } = router.query;

  const quiz = await getQuizData(params.id);
  console.log('quiz data', quiz);

  if (!quiz) {
    // Handle the case where the quiz is not found
    return <div>Quiz not found</div>;
  }

  return (
    <div>
      <h1>{quiz.title}</h1>
      {/* Render the quiz form based on the data from the 'quiz' object */}
      <MultipleChoiceAnswer quiz={quiz} />
    </div>
  );
}
