import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery
} from '@reduxjs/toolkit/query/react';

import type { User } from '@/app/api/types';

const baseUrl = '/api/';

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('is-logged-in');
    if (token) {
      headers.set('Accept', 'application/json');
    } else {
      window.location.replace('/login');
    }
    return headers;
  }
});

const baseQueryWithAuth: BaseQueryFn = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result.error?.status === 403 || result.error?.status === 401) {
    // non authorized, then redirect to login page.
    // if we have jwt, here u should update the access token
    localStorage.removeItem('is-logged-in');
    window.location.replace('/login');
  }
  return result;
};

export const apiProfile = createApi({
  reducerPath: 'apiProfile',
  baseQuery: baseQueryWithAuth,
  endpoints: (builder) => ({
    getProfile: builder.query<User, void>({
      query: () => 'user'
    })
  })
});

export const { useGetProfileQuery } = apiProfile;
