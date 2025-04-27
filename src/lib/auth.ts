import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

const TOKEN_AGE = 3600;
const TOKEN_NAME = 'auth-token';
const TOKEN_REFRESH_NAME = 'auth-refresh-token';

/**
 * Get the authentication token from cookies
 */
export async function getToken(): Promise<string | undefined> {
  // API requests
  const cookiesStore = await cookies();
  const myAuthToken = cookiesStore.get(TOKEN_NAME);
  return myAuthToken?.value;
}
/**
 * Get the refresh token from cookies
 */
export async function getRefreshToken(): Promise<string | undefined> {
  const cookiesStore = await cookies();
  const myRefreshAuthToken = cookiesStore.get(TOKEN_REFRESH_NAME);
  return myRefreshAuthToken?.value;
}
/**
 * Set the authentication token in cookies
 */
export async function setToken(authToken: string): Promise<void> {
  const cookiesStore = await cookies();
  cookiesStore.set({
    name: TOKEN_NAME,
    value: authToken,
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV !== 'development',
    maxAge: TOKEN_AGE
  });
}
/**
 * Set the refresh token in cookies
 */
export async function setRefreshToken(authRefreshToken: string): Promise<void> {
  const cookiesStore = await cookies();
  cookiesStore.set({
    name: TOKEN_REFRESH_NAME,
    value: authRefreshToken,
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV !== 'development',
    maxAge: TOKEN_AGE
  });
}
/**
 * Delete authentication tokens from cookies
 */
export async function deleteToken(): Promise<NextResponse> {
  const response = NextResponse.json({ success: true });
  response.cookies.set('auth-token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'strict',
    path: '/',
    maxAge: 0
  });

  response.cookies.set('auth-refresh-token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'strict',
    path: '/',
    maxAge: 0
  });

  return response;
}
