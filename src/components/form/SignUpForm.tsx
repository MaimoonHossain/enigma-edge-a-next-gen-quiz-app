// 'use client';

'use client';

// components/SignupForm.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

const SignupForm = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

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
      router.push('/signin');
    } else {
      console.log('Registration failed.');
    }
  };

  // const onSubmit = (data) => {
  //   console.log(data); // You can handle form submission logic here
  // };

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
    </div>
  );
};

export default SignupForm;

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

// const FormSchema = z
//   .object({
//     username: z.string().min(1, 'Username is required').max(100),
//     email: z.string().min(1, 'Email is required').email('Invalid email'),
//     password: z
//       .string()
//       .min(1, 'Password is required')
//       .min(8, 'Password must have than 8 characters'),
//     confirmPassword: z.string().min(1, 'Password confirmation is required'),
//   })
//   .refine((data) => data.password === data.confirmPassword, {
//     path: ['confirmPassword'],
//     message: 'Password do not match',
//   });

// const SignUpForm = () => {
//   const form = useForm<z.infer<typeof FormSchema>>({
//     resolver: zodResolver(FormSchema),
//     defaultValues: {
//       username: '',
//       email: '',
//       password: '',
//       confirmPassword: '',
//     },
//   });

//   const onSubmit = (values: z.infer<typeof FormSchema>) => {
//     console.log(values);
//   };

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className='w-full'>
//         <div className='space-y-2'>
//           <FormField
//             control={form.control}
//             name='username'
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Username</FormLabel>
//                 <FormControl>
//                   <Input placeholder='johndoe' {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name='email'
//             render={({ field }) => (
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
//             render={({ field }) => (
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
//           <FormField
//             control={form.control}
//             name='confirmPassword'
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Re-Enter your password</FormLabel>
//                 <FormControl>
//                   <Input
//                     placeholder='Re-Enter your password'
//                     type='password'
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//         </div>
//         <Button className='w-full mt-6' type='submit'>
//           Sign up
//         </Button>
//       </form>
//       <div className='mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400'>
//         or
//       </div>
//       <GoogleSignInButton>Sign up with Google</GoogleSignInButton>
//       <p className='text-center text-sm text-gray-600 mt-2'>
//         If you don&apos;t have an account, please&nbsp;
//         <Link className='text-blue-500 hover:underline' href='/sign-in'>
//           Sign in
//         </Link>
//       </p>
//     </Form>
//   );
// };

// export default SignUpForm;
