'use server';

import { NextResponse } from 'next/server';

import { DJANGO_API_ENDPOINT } from '@/config/default';
import { setRefreshToken, setToken } from '@/lib/auth';

import ApiProxy from '../proxy';

const DJANGO_API_ME_URL = `${DJANGO_API_ENDPOINT}/me`;

export async function GET(request: Request) {
  const { data, status } = await ApiProxy.get(DJANGO_API_ME_URL, true);

  if (status === 200) {
    const { username, email } = data;
    setToken(access);
    setRefreshToken(refresh);
    return NextResponse.json(
      { loggedIn: true, username: username },
      { status: 200 }
    );
  }
  return NextResponse.json({ loggedIn: false, ...data }, { status: 401 });
}
