import React from 'react';

import { twMerge } from 'tailwind-merge';

export const H1 = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h1
    className={twMerge(
      'text-6xl text-gray-500 dark:text-white mb-9',
      className
    )}
  >
    {children}
  </h1>
);

export const H2 = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}) => (
  <h2
    className={twMerge(
      'text-3xl text-light-blue dark:text-white font-light mb-5',
      className
    )}
  >
    {children}
  </h2>
);

export const H3 = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h3
    className={twMerge(
      'text-2xl text-gray-500 dark:text-white font-light',
      className
    )}
  >
    {children}
  </h3>
);
