import React from 'react';
import Image from 'next/image';
import { AuthForm } from '@/app/login/AuthForm';

const Login = () => {
  return (
    <div
      className='container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
      <div className='relative hidden h-full flex-col bg-muted text-white dark:border-r lg:flex'>
        <Image src='/login_bg.jpg' alt={'bg'} layout={'fill'} objectFit={'cover'} />
      </div>
      <div>
        <div
          className=' mx-auto flex w-full px-8 py-6 flex-col justify-center space-y-6 sm:w-[400px] border rounded-lg shadow-2xl'>
          <div className=' flex flex-col space-y-2 text-center'>
            <h1 className='text-2xl font-semibold tracking-tight'>
              Welcome to Cyberlogitec
            </h1>
            <p className='text-sm text-muted-foreground'>
              Delivering services contribute to the customer’s business through self innovation and creativity
            </p>
          </div>
          <AuthForm />
          <p className='px-8 text-center text-sm text-muted-foreground'>
            <span
              className='underline underline-offset-4 hover:text-primary'
            >
                Terms of Service
              </span>{' '}
            and{' '}
            <span
              className='underline underline-offset-4 hover:text-primary'
            >
                Privacy Policy
              </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
