import { cookies } from 'next/headers';

const TOKEN_AGE = 3600;
const TOKEN_NAME = 'auth-token';
const TOKEN_REFRESH_NAME = 'auth-refresh-token';

export function getToken() {
  // API requests
  const myAuthToken = cookies().get('auth-token');
  return myAuthToken?.value;
}

export function getRefreshToken() {
  const myRefreshAuthToken = cookies().get(TOKEN_REFRESH_NAME);
  return myRefreshAuthToken?.value;
}

export function setToken(authToken) {
  cookies().set({
    name: TOKEN_NAME,
    value: authToken,
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV !== 'development',
    maxAge: TOKEN_AGE
  });
}

export function setRefreshToken(authRefreshToken) {
  cookies().set({
    name: TOKEN_REFRESH_NAME,
    value: authRefreshToken,
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV !== 'development',
    maxAge: TOKEN_AGE
  });
}

export function deleteToken() {
  cookies().delete(TOKEN_REFRESH_NAME);
  return cookies().delete(TOKEN_NAME);
}
