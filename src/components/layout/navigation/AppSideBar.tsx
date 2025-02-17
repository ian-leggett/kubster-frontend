import * as React from 'react';

import Link from 'next/link';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail
} from '@/components/layout/navigation/Sidebar';
import { Skeleton } from '@/components/ui/Skeleton';
import { useGetProfileQuery } from '@/lib/features/profile/apiProfile';

import menuItems from './menu-items';

const SkeletonLoading = () => {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-6 w-full" />
    </div>
  );
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data, error, isLoading } = useGetProfileQuery();
  return (
    <Sidebar {...props}>
      {isLoading ? (
        <SkeletonLoading />
      ) : (
        <SidebarHeader>Welcome back {data?.first_name}</SidebarHeader>
      )}
      <SidebarContent>
        {menuItems.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>
              <Link href={item.url}>{item.title}</Link>
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <Link href={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
