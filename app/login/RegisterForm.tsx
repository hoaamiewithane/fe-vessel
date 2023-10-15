import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';


const formSchema = z.object({
  email: z.string().email({
    message: 'Email is not valid',
  }),
  password: z.string().min(1, {
    message: 'Password is required',
  }),
  firstName: z.string().min(1, {
    message: 'First name is required',
  }),
  lastName: z.string().min(1, {
    message: 'Last name is required',
  }),
});

const RegisterForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
    },
  });
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (<Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
      <FormField
        control={form.control}
        name='email'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email:</FormLabel>
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
        name='firstName'
        render={({ field }) => (
          <FormItem>
            <FormLabel>First name:</FormLabel>
            <FormControl>
              <Input
                placeholder='Joe'
                type='text'
                autoCapitalize='none'
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
        name='lastName'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Last name:</FormLabel>
            <FormControl>
              <Input
                placeholder='Chloe'
                type='text'
                autoCapitalize='none'
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
            <FormLabel>Password:</FormLabel>
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
      <Button type='submit' className='w-full'>Sign up</Button>
    </form>
  </Form>);
};

export default RegisterForm;
