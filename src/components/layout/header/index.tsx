import { usePathname } from 'next/navigation';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from '@/components/layout/header/Breadcrumb';
import { Separator } from '@/components/layout/navigation/Separator';
import { SidebarTrigger } from '@/components/layout/navigation/Sidebar';

const Header = () => {
  const paths = usePathname();
  const pathNames = paths.split('/').filter((path) => path);
  const pathNamesLength = pathNames.length;
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-4" />
      <Breadcrumb>
        <BreadcrumbList>
          {pathNames.map((path, index) => (
            <>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href={`/${path}`}>{path}</BreadcrumbLink>
              </BreadcrumbItem>
              {pathNamesLength != index + 1 && (
                <BreadcrumbSeparator className="hidden md:block" />
              )}
            </>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  );
};

export default Header;
