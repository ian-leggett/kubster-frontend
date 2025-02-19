'use client';
import React from 'react';
import { Provider } from 'react-redux';

import { Inter } from 'next/font/google';

import { AuthProvider } from '@/components/authProvider';
import Header from '@/components/layout/header';
import { ThemeProvider } from '@/components/themeProvider';

import { store } from '../lib/store';
import ProfileCard from './home/ProfileCard';

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
        className={`${inter.className} h-screen sm:pr-5 sm:pl-5 pt-10 p-10 relative bg-gradient-to-br from-cyan-500 to-blue-500 dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-800`}
      >
        <Provider store={store}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <AuthProvider>
              <div className="mx-auto sm:w-full md:w-full lg:w-full w-2/3">
                <Header />
                <div className="relative">
                  <div className="absolute inset-0 -top-3 origin-bottom-left -rotate-1 rounded-xl border-gray-300 bg-[#fee09a] motion-rotate-in-1"></div>
                  <div className="relative z-10 size-full border border-b rounded-xl border-gray-300 bg-gray-50 p-10 mt-5">
                    <main>{children}</main>
                  </div>
                </div>
                <footer className="mt-5 flex justify-end motion-opacity-in-0 motion-translate-y-in-100 motion-duration-2000 motion-delay-[1000ms]">
                  <span className="relative whitespace-nowrap mx-3 py-1">
                    <span className="absolute bg-slate-600 -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1"></span>
                    <span className="relative text-slate-200 p-2">
                      Built with Nextjs, Django and lots of{' '}
                      <span className="inline-block text-xl motion-delay-[1300ms] motion-scale-in-0 motion-ease-spring-bouncier">
                        ☕
                      </span>
                    </span>
                  </span>
                </footer>
              </div>
              <div
                className="absolute -z-10 inset-0 h-screen w-full 
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
