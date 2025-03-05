export const NEXT_BASE_URL = process.env.NEXT_BASE_URL
  ? process.env.NEXT_BASE_URL
  : 'http://localhost:3000';

export const DJANGO_PORT = process.env.DJANGO_PORT
  ? process.env.DJANGO_PORT
  : '8000';

export const DJANGO_BASE_URL = process.env.DJANGO_BASE_URL
  ? process.env.DJANGO_BASE_URL
  : `http://localhost`;

export const NEXT_API_ENDPOINT = `${NEXT_BASE_URL}/api`;
export const DJANGO_API_ENDPOINT = `${DJANGO_BASE_URL}/api/v1`;

export const NEXT_ENDPOINTS = {
  login: `${NEXT_API_ENDPOINT}/login/`
};

export const DJANGO_ENDPOINTS = {
  token: {
    tokenPair: `${DJANGO_API_ENDPOINT}/token/pair`,
    setCsrfToken: `${DJANGO_API_ENDPOINT}/set-csrf-token`
  },
  accounts: {
    me: `${DJANGO_API_ENDPOINT}/accounts/me`,
    user: `${DJANGO_API_ENDPOINT}/accounts/user`,
    register: `${DJANGO_API_ENDPOINT}/accounts/register`
  }
} as const;
