'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { z } from 'zod';

import { Button } from '@/components/ui/Button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/Card';
import Error from '@/components/ui/Error';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
export const description =
  // eslint-disable-next-line prettier/prettier
  'A login form with email and password. There\'s an option to login with Google and a link to sign up if you don\'t have an account.';

const REGISTER_URL = '/api/register';

type ApiResponse = {
  email: string;
  error: string;
};

const formSchema = z
  .object({
    email: z.string().email().min(5).max(50),
    password: z.string().min(1, {
      message: 'Please enter your password'
    }),
    confirmPassword: z.string().min(1, {
      message: 'This password must match'
    })
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'The passwords did not match',
        path: ['confirmPassword']
      });
    }
  });

export default function Page() {
  const [error, setError] = useState<null | string>(null);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: ''
    }
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    let data: ApiResponse;
    const { email, password } = values;
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    };
    try {
      const response = await fetch(REGISTER_URL, requestOptions);
      data = await response.json();
      if (response.ok) {
        if (data.error) {
          setError(data.error);
          return;
        }
        router.replace(`/login?registered=true&email=${data.email}`);
      }
    } catch (error) {
      setError(`Ooops something went wrong: ${error}`);
    }
  }
  return (
    <div className="mx-auto max-w-sm lg:min-w-96">
      {error && <Error error={error} />}
      <Card className="mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Register</CardTitle>
          <CardDescription>
            Please enter your details below to register
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
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Repeat password</FormLabel>
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
