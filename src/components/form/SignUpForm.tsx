'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useToast } from '../ui/use-toast';
import Link from 'next/link';

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const { toast } = useToast();

  const onSubmit = async (values: any) => {
    const response = await fetch('/api/user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
        username: values.username,
        role: values.role,
      }),
    });

    if (response.ok) {
      toast({
        title: 'Success',
        description: 'Account created successfully',
        style: { background: 'green', color: 'white' },
      });
      router.push('/signin');
    } else {
      toast({
        title: 'Error',
        description: 'Something went wrong',
        variant: 'destructive',
        style: { background: 'red', color: 'white' },
      });
    }
  };

  return (
    <div className='max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-md shadow-md'>
      <h2 className='text-2xl font-semibold mb-6'>Signup Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='username'
          >
            Username
          </label>
          <input
            type='text'
            id='username'
            className='border rounded-md py-2 px-3 w-full'
            {...register('username', { required: 'Username is required' })}
          />
        </div>

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
            className={`border rounded-md py-2 px-3 w-full ${
              errors.email ? 'border-red-500' : ''
            }`}
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Please provide a correct email',
              },
            })}
            aria-invalid={!!errors.email}
          />
        </div>
        {errors?.email?.message && (
          <p className='text-red-500 text-sm mt-1'>
            {String(errors.email.message)}
          </p>
        )}

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
            className={`border rounded-md py-2 px-3 w-full ${
              errors.password ? 'border-red-500' : ''
            }`}
            {...register('password', {
              required: 'Password is required',
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d.*\d.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  'Password must be 8 characters long with at least 3 numbers.',
              },
            })}
            aria-invalid={!!errors.password}
          />
          {errors?.password?.message && (
            <p className='text-red-500 text-sm mt-1'>
              {String(errors.password.message)}
            </p>
          )}
        </div>

        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='role'
          >
            Role
          </label>
          <select
            id='role'
            className='border rounded-md py-2 px-3 w-full'
            {...register('role')}
          >
            <option value='student'>Student</option>
            <option value='teacher'>Teacher</option>
          </select>
        </div>

        <button
          type='submit'
          className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600'
        >
          Sign Up
        </button>
      </form>
      <h2 className='text-center text-sm text-gray-600 mt-4'>
        Already have an account?
        <Link href='/signin'>
          <h3 className='text-blue-500 hover:underline font-bold'>Sign In</h3>
        </Link>
      </h2>
    </div>
  );
};

export default SignupForm;
