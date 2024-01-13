import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import SignOut from '../../components/signout/SignOut';
import { redirect } from 'next/navigation';
import QuestionForm from '@/components/question/QuestionForm';
import Sidebar from '@/components/dashboard/Sidebar';
import Navbar from '@/components/dashboard/Navbar';
import MainContent from '@/components/dashboard/MainContent';

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (session?.user.role !== 'teacher') {
    redirect('/signin');
  }
  console.log(session);

  return (
    <>
      {/* <SignOut />
      <h1 className='text-3xl font-bold mb-8'>
        Welcome to the Dashboard, {session?.user.username}!
      </h1>

      <QuestionForm ownerId={session.user.id} /> */}
      <Navbar />
      <Sidebar />
      <MainContent />
    </>
  );
}
