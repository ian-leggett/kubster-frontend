'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { z } from 'zod';

import { useAuth } from '@/components/authProvider';
import { Button } from '@/components/ui/Button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/Card';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
import Notification from '@/components/ui/Notification';
export const description =
  // eslint-disable-next-line prettier/prettier
  'A login form with email and password. There\'s an option to login with Google and a link to sign up if you don\'t have an account.';

const LOGIN_URL = '/api/login/';

type ApiResponse = {
  email: string;
  password: string;
};

const formSchema = z.object({
  email: z
    .string()
    .min(2, {
      message: 'email must be at least 2 charaters'
    })
    .max(50),
  password: z.string().min(1, {
    message: 'Please enter your password'
  })
});

export default function Page() {
  const [error, setError] = useState<null | string>(null);
  const auth = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const hasRegistered = searchParams.get('registered');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: searchParams.get('email') || '',
      password: ''
    }
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    let data: ApiResponse;
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    };
    try {
      const response = await fetch(LOGIN_URL, requestOptions);
      data = await response.json();
      if (response.ok) {
        auth?.login(data?.email);
        router.replace('/');
      }
    } catch (error) {
      setError(`Ooops something went wrong: ${error}`);
    }
  }
  return (
    <div className="mx-auto max-w-sm">
      {error && <Notification title="Error" message={error} error />}
      {hasRegistered && (
        <Notification
          title="Registered"
          message=" Thank you for registering. Please now login."
        />
      )}
      <Card className="mx-auto ">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <Input placeholder="Your email" {...field} />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <Input placeholder="" type="password" {...field} />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
