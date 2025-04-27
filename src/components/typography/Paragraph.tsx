import React from 'react';

import { twMerge } from 'tailwind-merge';

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ children, className }) => {
  return (
    <p
      className={twMerge(
        'text-gray-500 dark:text-white text-lg pb-6',
        className
      )}
    >
      {children}
    </p>
  );
};

export default Paragraph;
