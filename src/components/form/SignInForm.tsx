'use client';

import { getSession, signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
// components/SignInForm.js
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useToast } from '@/components/ui/use-toast';
import Link from 'next/link';

const SignInForm = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const { data: session } = useSession();
  const { toast } = useToast();

  const onSubmit = async (data: any) => {
    try {
      const signInData = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false, // Do not redirect automatically
      });

      console.log('signInData', signInData);

      if (signInData?.error) {
        toast({
          title: 'Error',
          description: 'Invalid email or password',
          variant: 'destructive',
          style: { background: 'red', color: 'white' },
        });
      }

      // Access the user object from the session

      // Check the user's role
      console.log('session', session);

      // if (
      //   !signInData?.error &&
      //   session?.user &&
      //   session.user.role === 'teacher'
      // ) {
      //   router.push('/dashboard');
      // } else if (
      //   !signInData?.error &&
      //   session?.user &&
      //   session.user.role === 'student'
      // ) {
      //   router.push('/student');
      // }
    } catch (error) {
      console.error('Error during sign in:', error);
    }
  };

  useEffect(() => {
    if (session?.user) {
      if (session.user.role === 'teacher') {
        router.push('/dashboard');
      } else if (session.user.role === 'student') {
        router.push('/student');
      }
    }
  }, [session]);

  return (
    <div className='max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-md shadow-md'>
      <h2 className='text-2xl font-semibold mb-6'>Sign In Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='email'
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            className='border rounded-md py-2 px-3 w-full'
            {...register('email', {
              required: 'Email is required',
              pattern: /^\S+@\S+$/i,
            })}
          />
        </div>

        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='password'
          >
            Password
          </label>
          <input
            type='password'
            id='password'
            className='border rounded-md py-2 px-3 w-full'
            {...register('password', { required: 'Password is required' })}
          />
        </div>

        <button
          type='submit'
          className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600'
        >
          Sign In
        </button>
      </form>
      <h2 className='text-center text-sm text-gray-600 mt-4'>
        Don't have an account?
        <Link href='/signup'>
          <h3 className='text-blue-500 hover:underline font-bold'>Sign up</h3>
        </Link>
      </h2>
    </div>
  );
};

export default SignInForm;
