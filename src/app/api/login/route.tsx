'use server';

import { NextResponse } from 'next/server';

import { DJANGO_ENDPOINTS } from '@/config/default';
import { setRefreshToken, setToken } from '@/lib/auth';

import ApiProxy from '../proxy';

type Data = {
  data: { email: string; access: string; refresh: string };
  status: number;
};

export async function POST(request: Request) {
  const requestPayload = await request.json();

  const { data, status } = (await ApiProxy.post(
    DJANGO_ENDPOINTS.token.tokenPair,
    requestPayload,
    true
  )) as Data;
  if (status === 200) {
    const { email, access, refresh } = data;
    setToken(access);
    setRefreshToken(refresh);
    return NextResponse.json({ loggedIn: true, email }, { status: 200 });
  }
  return NextResponse.json({ loggedIn: false, ...data }, { status: 401 });
}
