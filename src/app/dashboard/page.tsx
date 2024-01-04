import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import SignOut from '../../components/signout/SignOut';
import { redirect } from 'next/navigation';
import QuestionForm from '@/components/question/QuestionForm';

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (session?.user.role !== 'teacher') {
    redirect('/signin');
  }
  console.log(session);

  return (
    <div>
      <SignOut />
      <h1 className='text-3xl font-bold mb-8'>
        Welcome to the Dashboard, {session?.user.username}!
      </h1>

      <QuestionForm ownerId={session.user.id} />

    </div>
  );
}
