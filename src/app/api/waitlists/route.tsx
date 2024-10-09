import { NextResponse } from 'next/server';

import { DJANGO_API_ENDPOINT } from '@/config/default';

import ApiProxy from '../proxy';

const DJANGO_API_WAITLISTS_URL = `${DJANGO_API_ENDPOINT}/waitlists/`;

export async function GET(request) {
  const { data, status } = await ApiProxy.get(DJANGO_API_WAITLISTS_URL, true);
  return NextResponse.json(data, { status: status });
}
