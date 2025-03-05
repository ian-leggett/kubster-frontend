'use client';

import { forwardRef } from 'react';

import NextLink from 'next/link';
import { cn } from '@/lib/utils';

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  className?: string;
  children: React.ReactNode;
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, className, children, ...props }, ref) => {
    return (
      <NextLink
        href={href}
        className={cn(
          'text-primary underline-offset-4 hover:underline hover:text-primary/80 transition-colors',
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </NextLink>
    );
  }
);
Link.displayName = 'Link';

export { Link };
