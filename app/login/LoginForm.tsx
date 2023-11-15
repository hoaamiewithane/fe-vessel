import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useState } from 'react';
import { Icons } from '@/components/icons';
import { useMutation } from '@tanstack/react-query';
import httpClient from '@/configs/AxiosClient';
import Cookies from 'js-cookie';
import { useBoundStore } from '@/app/store';


const formSchema = z.object({
  email: z.string().email({
    message: 'Email is not valid',
  }),
  password: z.string().min(1, {
    message: 'Password is required',
  }),
});

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const setAuth = useBoundStore(state => state.setAuth);
  const router = useRouter();
  const { mutate: loginMutation } = useMutation({
    'mutationFn': (payload: z.infer<typeof formSchema>) => {
      return httpClient.post<{ accessToken: string, refreshToken: string }>('/auth/sign-in', payload);
    },
    'onSuccess': (data) => {
      setIsLoading(false);
      Cookies.set('token', data.data['accessToken']);
      Cookies.set('refreshToken', data.data['refreshToken']);
      setAuth(true);
      router.push('/');
    },
  });


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    loginMutation(values);
  };

  return (<Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
      <FormField
        control={form.control}
        name='email'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input
                placeholder='name@example.com'
                type='text'
                autoCapitalize='none'
                autoComplete='email'
                autoCorrect='off'
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name='password'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input
                placeholder='Enter your password'
                type='password'
                autoCapitalize='none'
                autoComplete='email'
                autoCorrect='off'
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type='submit' className='w-full' disabled={isLoading}> {isLoading && (
        <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
      )}Sign in</Button>
    </form>
  </Form>);
};

export default LoginForm;
