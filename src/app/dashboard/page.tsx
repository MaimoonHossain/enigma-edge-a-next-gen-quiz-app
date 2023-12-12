import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import SignOut from '../../components/signout/SignOut';

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div>
      <SignOut />
      <h1>Welcome to the Dashboard, {session?.user.username}!</h1>
    </div>
  );
}
