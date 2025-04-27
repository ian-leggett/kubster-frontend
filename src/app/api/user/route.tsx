'use server';

import { NextResponse } from 'next/server';

import { DJANGO_ENDPOINTS } from '@/config/default';

import ApiProxy from '../proxy';

export async function GET() {
  const { data, status } = await ApiProxy.get(
    DJANGO_ENDPOINTS.accounts.user,
    true
  );

  if (status === 200) {
    return NextResponse.json({ status: 200, ...data });
  }
  return NextResponse.json({ loggedIn: false, ...data }, { status });
}
