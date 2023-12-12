import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import SignOut from '../../components/signout/SignOut';

export default async function Student() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div>
      <SignOut />
      <h1>Welcome to the Quiz Page, {session?.user.username}!</h1>
    </div>
  );
}
