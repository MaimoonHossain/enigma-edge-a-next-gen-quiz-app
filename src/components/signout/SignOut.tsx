'use client';

import { signOut } from 'next-auth/react';
import Link from 'next/link';

export default function SingOut() {
  return (
    <button
      onClick={() =>
        signOut({
          redirect: true,
          callbackUrl: '/',
        })
      }
      className='bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-blue-200 focus:outline-none focus:ring focus:border-blue-300 m-4'
    >
      Sign Out
    </button>
  );
}
