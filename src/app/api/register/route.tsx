'use server';

import { NextResponse } from 'next/server';

import { DJANGO_ENDPOINTS } from '@/config/default';

import ApiProxy from '../proxy';

export async function POST(req: Request) {
  const requestPayload = await req.json();

  const { data, status } = await ApiProxy.post(
    DJANGO_ENDPOINTS.accounts.register,
    requestPayload,
    true
  );

  if (status === 200) {
    return NextResponse.json({ status: 200, ...data });
  }
  return NextResponse.json({ registered: false, ...data }, { status });
}
