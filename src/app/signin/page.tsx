import SignInForm from '@/components/form/SignInForm';
import Navbar from '../../components/navbar/Navbar';
import Link from 'next/link';

export default function SignIn() {
  // function body
  return (
    <div>
      <Link href='/'>
        <button className='bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-blue-200 focus:outline-none focus:ring focus:border-blue-300 m-4'>
          Back to Home
        </button>
      </Link>
      <SignInForm />
    </div>
  );
}
