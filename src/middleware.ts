import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { DJANGO_API_ENDPOINT } from '@/config/default';

import ApiProxy from './app/api/proxy';

const DJANGO_API_TOKEN_VERIFY = `${DJANGO_API_ENDPOINT}/token/verify`;

export default async function authenticationMiddleware(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value;
  const { status } = await ApiProxy.post(
    DJANGO_API_TOKEN_VERIFY,
    { token },
    true
  );
  if (status != 200) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  return NextResponse.next();
}
export const config = {
  matcher: ['/dashboard']
};
