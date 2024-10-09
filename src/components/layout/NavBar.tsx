import { CircleUser, Menu, Package2, Search } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/DropDownMenu';
import { Input } from '@/components/ui/Input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/Sheet';

import { useAuth } from '../authProvider';
import navLinks, { nonUserLinks } from './navLinks';

function BrandLink({ overrideClass }) {
  overrideClass = overrideClass
    ? overrideClass
    : 'flex items-center gap-2 text-lg font-semibold md:text-base';
  return (
    <Link href="#" className={overrideClass}>
      <Package2 className="h-6 w-6" />
      <span>Kubster</span>
    </Link>
  );
}

export default function NavBar() {
  const auth = useAuth();
  const router = useRouter();
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <BrandLink />
        {navLinks.map((NavLinkItem, idx) => {
          const shouldHide = !auth.isAuthenticated && NavLinkItem.authRequired;
          return shouldHide ? null : (
            <Link
              href={NavLinkItem.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
              key={`nav-links-a-${idx}`}
            >
              {NavLinkItem.label}
            </Link>
          );
        })}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <BrandLink overrideClass="flex items-center gap-2 text-lg font-semibold" />

            {navLinks.map((NavLinkItem, idx) => {
              const shouldHide =
                !auth.isAuthenticated && NavLinkItem.authRequired;
              return shouldHide ? null : (
                <Link
                  href={NavLinkItem.href}
                  className="text-muted-foreground hover:text-foreground"
                  key={`nav-links-b-${idx}`}
                >
                  {NavLinkItem.label}
                </Link>
              );
            })}
            {auth.isAuthenticated ? (
              <Link href="/logout" className="hover:text-foreground">
                Logout
              </Link>
            ) : (
              nonUserLinks.map((navLinkItem, idx) => {
                return (
                  <Link
                    href={navLinkItem.href}
                    className="text-muted-foreground hover:text-foreground"
                    key={`nav-links-c-${idx}`}
                  >
                    {navLinkItem.label}
                  </Link>
                );
              })
            )}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="md:hidden">
        <BrandLink />
      </div>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </div>
        </form>
        {auth.isAuthenticated ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>
                {auth.username ? auth.username : 'Account'}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => router.push('/logout')}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          nonUserLinks.map((navLinkItem, idx) => {
            return (
              <Link
                href={navLinkItem.href}
                className="text-muted-foreground hover:text-foreground"
                key={`nav-links-d-${idx}`}
              >
                {navLinkItem.label}
              </Link>
            );
          })
        )}
      </div>
    </header>
  );
}
