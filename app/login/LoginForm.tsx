import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useState } from 'react';
import { Icons } from '@/components/icons';
import Cookies from 'js-cookie';


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
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const router = useRouter();
  const onSubmit = (_values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      Cookies.set('token', 'hoaa');
      router.push('/');
    }, 1500);
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
