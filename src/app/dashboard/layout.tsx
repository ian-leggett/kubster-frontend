'use client';

import React from 'react';

import { AppSidebar } from '@/components/layout/navigation/AppSideBar';
import {
  SidebarInset,
  SidebarProvider
} from '@/components/layout/navigation/Sidebar';

import Header from '../../components/layout/header';

export const description =
  'A settings page. The settings page has a sidebar navigation and a main content area. The main content area has a form to update the store name and a form to update the plugins directory. The sidebar navigation has links to general, security, integrations, support, organizations, and advanced settings.';

interface DashboardProps {
  children: React.ReactNode;
}

export default function Dashboard({ children }: DashboardProps) {
  return (
    <>
      <div className="min-h-[calc(100vh_-_theme(spacing.16))] bg-muted/40 p-4 md:p-15">
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <Header />
            <div className="flex flex-1 flex-col gap-4 p-4">
              <main className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min p-4">
                {children}
              </main>
            </div>
          </SidebarInset>
        </SidebarProvider>
      </div>
    </>
  );
}
