'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery } from '@tanstack/react-query';
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
import { NEXT_ENDPOINTS } from '@/config/default';
export const description =
  // eslint-disable-next-line prettier/prettier
  'A login form with email and password. There\'s an option to login with Google and a link to sign up if you don\'t have an account.';

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
  // const [error, setError] = useState<null | string>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const hasRegistered = searchParams.get('registered');
  const auth = useAuth();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: searchParams.get('email') || '',
      password: ''
    }
  });

  const loginUser = async (values: z.infer<typeof formSchema>) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    };
    const response = await fetch(NEXT_ENDPOINTS.login, requestOptions);
    const data = await response.json();
    if (response.ok) {
      if (auth) {
        auth.login();
      }
      router.replace('/dashboard');
    } else {
      throw new Error(data.error);
    }
  };

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: loginUser
  });

  const onSubmit = (formData: z.infer<typeof formSchema>) => mutate(formData);

  return (
    <div>
      <div className="mx-auto max-w-sm">
        {isError && (
          <Notification title="Error" message={error.message} error />
        )}
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
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  disabled={isPending}
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
                  disabled={isPending}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <Input placeholder="" type="password" {...field} />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isPending}>
                  Submit
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
