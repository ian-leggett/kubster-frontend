'use client';
import React from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Inter } from 'next/font/google';

import { AuthProvider } from '@/components/authProvider';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { ThemeProvider } from '@/components/themeProvider';
import LoggedInStatus from '@/components/ui/LoggedInStatus';

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
        className={`${inter.className} min-h-screen px-3 md:px-5 lg:px-10 py-2 lg:py-10 relative bg-gradient-to-br from-cyan-500 to-blue-500 dark:bg-gradient-to-br dark:from-[#0f1729] dark:to-[#121212] dark:before:absolute dark:before:inset-0 dark:before:bg-[radial-gradient(circle_at_top_left,rgba(112,71,235,0.15),transparent_70%),radial-gradient(circle_at_20%_150%,rgba(121,40,202,0.4),transparent),radial-gradient(circle_at_60%_0%,rgba(0,148,255,0.18),transparent),radial-gradient(circle_at_bottom_right,rgba(75,0,130,0.4),transparent_70%)] dark:before:z-[-1]`}
      >
        <QueryClientProvider client={new QueryClient()}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <AuthProvider>
              <div className="mx-auto sm:w-full md:max-w-[1280px]">
                <Header />
                <div className="relative -mt-[80px] lg:-mt-[120px]">
                  <div className="hidden md:block absolute inset-0 origin-bottom-left -rotate-1 rounded-xl border-gray-300 bg-note-yellow dark:bg-gray-600"></div>
                  <div className="relative top-0 z-1 size-full border border-b rounded-xl border-gray-300 bg-white dark:bg-[#0e1120] dark:border-[#2a2a40] p-3 md:p-10 mt-5">
                    <main className="pt-[10px] lg:pt-[80px]">
                      <LoggedInStatus />
                      {children}
                    </main>
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
        </QueryClientProvider>
      </body>
    </html>
  );
}
