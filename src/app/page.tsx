'use client';
import { useState } from 'react';

import Image from 'next/image';
import useSWR from 'swr';

import { useAuth } from '@/components/authProvider';
import { ThemeToggleButton } from '@/components/ui/ThemeToggleButton';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const auth = useAuth();
  const { data, error, isLoading } = useSWR(
    'http://127.0.0.1:8000/api/hello',
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      {auth.isAuthenticated ? 'Hello user' : 'Hello guest'}
      {JSON.stringify(data)}
      <ThemeToggleButton />
    </div>
  );
}
