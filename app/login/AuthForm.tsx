'use client';

import * as React from 'react';
import { useState } from 'react';

import LoginForm from '@/app/login/LoginForm';
import RegisterForm from '@/app/login/RegisterForm';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useBoundStore } from '../store';


interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
}


export function AuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter()
  const setAuth = useBoundStore(state => state.setAuth)
  const handleTglBtn = () => setIsLogin(!isLogin);
  const handleLoginGoogle = () => {
    setAuth(true)
    router.push('/user')
  }
  const renderForm = isLogin ? <LoginForm /> : <RegisterForm />;
  const renderContent = isLogin ? <div className={'text-sm text-muted-foreground'}>Don't have account? <span
    className={'underline cursor-pointer'} onClick={handleTglBtn}>Sign up</span>
  </div> : <div className={'text-sm text-muted-foreground'}>Already have account? <span
    className={'underline cursor-pointer'} onClick={handleTglBtn}>Sign in</span>
  </div>;
  return (
    <div className={cn('grid gap-6', className)} {...props}>
      {renderForm}
      {renderContent}
      <div className='relative'>
        <div className='absolute inset-0 flex items-center'>
          <span className='w-full border-t' />
        </div>
        <div className='relative flex justify-center text-xs uppercase'>
          <span className='bg-background px-2 text-muted-foreground'>
            Or continue with
          </span>
        </div>
      </div>
      <Button variant='outline' type='button' onClick={handleLoginGoogle}>
        <Icons.google className='mr-2 h-4 w-4' />
        Google
      </Button>

    </div>
  );
}
