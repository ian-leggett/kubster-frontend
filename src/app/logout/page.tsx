'use client';

import React from 'react';

import { useAuth } from '@/components/authProvider';
import { Button } from '@/components/ui/Button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/Card';

const LOGOUT_URL = '/api/logout/';

export default function Page() {
  const auth = useAuth();
  async function handleClick(e: React.SyntheticEvent) {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: ''
    };
    const response = await fetch(LOGOUT_URL, requestOptions);
    if (response.ok) {
      auth?.logout();
    }
  }
  return (
    <div className="mx-auto max-w-sm lg:min-w-96">
      <Card className="mx-auto ">
        <CardHeader>
          <CardTitle className="text-2xl">Logout</CardTitle>
          <CardDescription>Are you sure you want to logout?</CardDescription>
        </CardHeader>
        <CardContent>
          <Button type="submit" onClick={handleClick}>
            Yes I am sure
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
