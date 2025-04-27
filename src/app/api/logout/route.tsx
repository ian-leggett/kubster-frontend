import { NextResponse } from 'next/server';

import { deleteToken } from '@/lib/auth';

export async function POST(): Promise<NextResponse> {
  return deleteToken();
}
