'use client';

import { getSession, signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
// components/SignInForm.js
import React from 'react';
import { useForm } from 'react-hook-form';

const SignInForm = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const { data: session } = useSession();

  const onSubmit = async (data: any) => {
    try {
      const signInData = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false, // Do not redirect automatically
      });

      console.log('signInData', signInData);

      if (signInData?.error) {
        console.error(signInData.error);
        return null;
      }

      // Access the user object from the session

      // Check the user's role
      if (session?.user && session.user.role === 'teacher') {
        router.push('/dashboard');
      } else {
        router.push('/student');
      }
    } catch (error) {
      console.error('Error during sign in:', error);
    }
  };

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
    </div>
  );
};

export default SignInForm;

// import { useForm } from 'react-hook-form';
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '../ui/form';
// import * as z from 'zod';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { Input } from '../ui/input';
// import { Button } from '../ui/button';
// import Link from 'next/link';
// import GoogleSignInButton from '../GoogleSignInButton';
// import { useRouter } from 'next/navigation';

// const FormSchema = z.object({
//   email: z.string().min(1, 'Email is required').email('Invalid email'),
//   password: z
//     .string()
//     .min(1, 'Password is required')
//     .min(8, 'Password must have than 8 characters'),
// });

// const SignInForm = () => {
//   const router = useRouter();
//   const form = useForm<z.infer<typeof FormSchema>>({
//     resolver: zodResolver(FormSchema),
//     defaultValues: {
//       email: '',
//       password: '',
//     },
//   });

//   const onSubmit = (values: z.infer<typeof FormSchema>) => {
//     const response = await fetch('/api/user', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         email: values.email,
//         password: values.password,
//         username: values.username,
//         role: values.role,
//       }),
//     });

//     if (response.ok) {
//       router.push('/sign-in');
//     } else {
//       console.log('Registration failed.');
//     }
//   };

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className='w-full'>
//         <div className='space-y-2'>
//           <FormField
//             control={form.control}
//             name='email'
//             render={({ field }: any) => (
//               <FormItem>
//                 <FormLabel>Email</FormLabel>
//                 <FormControl>
//                   <Input placeholder='mail@example.com' {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name='password'
//             render={({ field }: any) => (
//               <FormItem>
//                 <FormLabel>Password</FormLabel>
//                 <FormControl>
//                   <Input
//                     type='password'
//                     placeholder='Enter your password'
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//         </div>
//         <Button className='w-full mt-6' type='submit'>
//           Sign in
//         </Button>
//       </form>
//       <div className='mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400'>
//         or
//       </div>
//       <GoogleSignInButton>Sign in with Google</GoogleSignInButton>
//       <p className='text-center text-sm text-gray-600 mt-2'>
//         If you don&apos;t have an account, please&nbsp;
//         <Link className='text-blue-500 hover:underline' href='/sign-up'>
//           Sign up
//         </Link>
//       </p>
//     </Form>
//   );
// };

// export default SignInForm;
