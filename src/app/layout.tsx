'use client';
import React from 'react';
import { Provider } from 'react-redux';

import { Inter } from 'next/font/google';

import { AuthProvider } from '@/components/authProvider';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
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
        className={`${inter.className} min-h-screen sm:px-5 md:px-10 lg:px-10 py-10 relative bg-gradient-to-br from-cyan-500 to-blue-500 dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-800`}
      >
        <Provider store={store}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <AuthProvider>
              <div className="mx-auto sm:w-full md:w-full xl:w-2/3">
                <Header />
                <div className="relative">
                  <div className="absolute inset-0 -top-3 origin-bottom-left -rotate-1 rounded-xl border-gray-300 bg-[#fee09a] motion-rotate-in-1"></div>
                  <div className="relative z-10 size-full border border-b rounded-xl border-gray-300 bg-gray-50 p-10 mt-5">
                    <main className="pt-20">{children}</main>
                  </div>
                </div>
                <Footer />
              </div>
              <div
                className="absolute -z-10 inset-0 w-full 
bg-[radial-gradient(circle,#ededed_1px,transparent_1px)] dark:bg-[radial-gradient(circle,#454545_1px,transparent_1px)]
bg-[size:10px_10px] [mask-image:linear-gradient(#000_0%,transparent_100%)]"
              ></div>
            </AuthProvider>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
