'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import MultipleChoiceAnswer from '../question/MultipleChoiceAnswer';

function AvailableQuiz(data: any) {
  const router = useRouter();
  const handleQuizClick = (id: number) => {
    // Redirect to a page with the quiz form, passing the quizId as a query parameter
    router.push(`/quiz/${id}`);
  };
  const { quizzes } = data;
  console.log('quizzes', data);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {quizzes.map((quiz: any) => (
        <div
          key={quiz.id}
          onClick={() => handleQuizClick(quiz.id)}
          className='bg-gray-900 text-white p-6 rounded-lg shadow-md hover:shadow-lg cursor-pointer transition duration-300'
        >
          <h3 className='text-xl font-bold mb-2'>{quiz.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default AvailableQuiz;
