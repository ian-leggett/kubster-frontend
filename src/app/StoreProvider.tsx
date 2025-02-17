'use client';
import React, { useRef } from 'react';
import { Provider } from 'react-redux';

import { getProfileState } from '@/lib/features/profile/profileSlice';

import { AppStore, makeStore } from '../lib/store';

export default function StoreProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
