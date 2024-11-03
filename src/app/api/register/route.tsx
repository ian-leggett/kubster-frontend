// @ts-nocheck
'use server';

import { NextResponse } from 'next/server';

import { DJANGO_API_ENDPOINT } from '@/config/default';

import ApiProxy from '../proxy';

const DJANGO_REGISTER_URL = `${DJANGO_API_ENDPOINT}/register`;

export async function POST(req) {
  const requestPayload = await req.json();

  const { data, status } = await ApiProxy.post(
    DJANGO_REGISTER_URL,
    requestPayload,
    true
  );

  if (status === 200) {
    return NextResponse.json({ status: 200, ...data });
  }
  return NextResponse.json({ registered: false, ...data }, { status: 401 });
}
