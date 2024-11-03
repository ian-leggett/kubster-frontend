'use client';

import React from 'react';

import NavBar from './NavBar';

export const description =
  'A settings page. The settings page has a sidebar navigation and a main content area. The main content area has a form to update the store name and a form to update the plugins directory. The sidebar navigation has links to general, security, integrations, support, organizations, and advanced settings.';

interface BaseLayoutProps {
  children: React.ReactNode;
  isAuthenticated?: boolean;
}

export default function BaseLayout({
  children,
  isAuthenticated
}: BaseLayoutProps) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <NavBar isAuthenticated={isAuthenticated} />
      <main className="min-h-[calc(100vh_-_theme(spacing.16))] bg-muted/40 p-4 md:p-15">
        {children}
      </main>
    </div>
  );
}
