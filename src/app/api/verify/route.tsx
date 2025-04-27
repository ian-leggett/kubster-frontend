'use server';

import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import { DJANGO_ENDPOINTS } from '@/config/default';

import ApiProxy from '../proxy';

export async function POST() {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth-token');
  const { status } = await ApiProxy.post(
    DJANGO_ENDPOINTS.accounts.verfiy,
    { token: token?.value ? token.value : '1234' },
    true
  );
  if (status === 200) {
    return NextResponse.json({ status: 200 });
  } else if (status === 401) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  } else {
    return NextResponse.json({ status });
  }
}
