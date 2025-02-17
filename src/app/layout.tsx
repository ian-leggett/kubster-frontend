'use client';
import React from 'react';
import { Provider } from 'react-redux';

import { Inter } from 'next/font/google';

import { AuthProvider } from '@/components/authProvider';
import { ThemeProvider } from '@/components/themeProvider';

import { store } from '../lib/store';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} sm:pr-5 sm:pl-5 pt-10 p-10 relative`}
      >
        <Provider store={store}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <AuthProvider>{children}</AuthProvider>
          </ThemeProvider>
        </Provider>
        <div
          className="absolute -z-10 inset-0 h-screen w-full 
bg-[radial-gradient(circle,#cecece_1px,transparent_1px)] 
bg-[size:30px_30px] [mask-image:linear-gradient(#000_0%,transparent_100%)]"
        ></div>
      </body>
    </html>
  );
}
