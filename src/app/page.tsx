'use client';
import { useState } from 'react';

import Image from 'next/image';
import useSWR from 'swr';

import { useAuth } from '@/components/authProvider';
import { ThemeToggleButton } from '@/components/ui/ThemeToggleButton';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-10"></div>
  );
}
