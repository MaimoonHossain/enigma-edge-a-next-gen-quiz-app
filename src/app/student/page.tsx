import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import SignOut from '../../components/signout/SignOut';
import { redirect, useRouter } from 'next/navigation';
import prisma from '@/lib/prisma';
import AvailableQuiz from '../../components/quiz/AvailableQuiz';
import { getQuizes } from '@/lib/quiz';

// interface Quiz {
//   id: number;
//   title: string;
//   // Add other properties as needed
// }

// interface StudentDashboardProps {
//   quizzes: Quiz[];
// }

export default async function Student() {
  // const router = useRouter();
  const session = await getServerSession(authOptions);
  const quizzes = await getQuizes();

  if (session?.user.role !== 'student') {
    redirect('/signin');
  }
  console.log(session);

  return (
    <div>
      <SignOut />
      <h1>Welcome to the Quiz Page, {session?.user.username}!</h1>
      <h2 className='text-2xl font-bold mb-4'>Available Quizzes:</h2>
      <AvailableQuiz quizzes={quizzes} />
    </div>
  );
}
