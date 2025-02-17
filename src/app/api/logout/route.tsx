import { NextResponse } from 'next/server';

import { deleteToken } from '@/lib/auth';

export async function POST() {
  deleteToken();
  return NextResponse.json({}, { status: 200 });
}
