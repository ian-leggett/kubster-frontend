import React, { ReactNode } from 'react';

import { twMerge } from 'tailwind-merge';

type ListType = 'ordered' | 'unordered';
type ListVariant = 'primary' | 'secondary';

interface ListProps {
  children: ReactNode;
  type?: ListType;
  variant?: ListVariant;
  className?: string;
}

const List: React.FC<ListProps> = ({
  children,
  type = 'unordered',
  className
}) => {
  const typeClasses = {
    ordered: 'list-decimal',
    unordered: 'list-disc'
  };

  const baseClasses = `${typeClasses[type]} text-gray-500 dark:text-white text-lg pl-5`;
  const combinedClassName = twMerge(baseClasses, className);

  return type === 'ordered' ? (
    <ol className={combinedClassName}>{children}</ol>
  ) : (
    <ul className={combinedClassName}>{children}</ul>
  );
};

export default List;
