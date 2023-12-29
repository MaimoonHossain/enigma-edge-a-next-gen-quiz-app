'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import MultipleChoiceAnswer from '../question/MultipleChoiceAnswer';
import Link from 'next/link';

function AvailableQuiz(data: any) {
  const router = useRouter();

  console.log('quiz data', data);

  // const handleQuizClick = (id: number, event: any) => {
  //   event.preventDefault();
  //   console.log('helllo');
  //   // Redirect to a page with the quiz form, passing the quizId as a query parameter
  //   router.push(`/quiz/${id}`);
  // };
  const { quizzes } = data;
  console.log('quizzes', data);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {quizzes.map((quiz: any) => (
        <div
          key={quiz.id}
          // onClick={(e) => handleQuizClick(quiz.id, e)}
          className='bg-gray-900 text-white p-6 shadow-lg hover:shadow-lg cursor-pointer transition duration-300 m-2 rounded-xl'
        >
          <h3 className='text-xl font-bold mb-2'>{quiz.title}</h3>
          <Link href={`/quiz/${quiz.id}`}>
            <button className='btn bg-teal-400 rounded p-2'>Start Quiz</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default AvailableQuiz;
