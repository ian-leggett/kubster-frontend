import React from 'react';

import Image from 'next/image';

const Icon = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex items-center justify-center">{children}</div>;
};

const SoftwareIcons = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {[
        {
          src: '/icons/javascript-original.svg',
          alt: 'Javascript'
        },
        {
          src: '/icons/react-original.svg',
          alt: 'React'
        },
        {
          src: '/icons/nodejs-original.svg',
          alt: 'Nodejs'
        },
        {
          src: '/icons/typescript-original.svg',
          alt: 'Typescript'
        },
        {
          src: '/icons/python-original.svg',
          alt: 'Python'
        },
        {
          src: '/icons/nextjs-original.svg',
          alt: 'Nextjs'
        },
        {
          src: '/icons/django-plain.svg',
          alt: 'Django'
        },
        {
          src: '/icons/html5-original.svg',
          alt: 'HTML'
        },
        {
          src: '/icons/css3-original.svg',
          alt: 'CSS'
        },
        {
          src: '/icons/tailwindcss-original.svg',
          alt: 'Tailwind CSS'
        },
        {
          src: '/icons/sass-original.svg',
          alt: 'SASS'
        },
        {
          src: '/icons/sqldeveloper-original.svg',
          alt: 'SQL'
        },
        {
          src: '/icons/amazonwebservices-original.svg',
          alt: 'AWS'
        }
      ].map((icon, index) => (
        <Icon key={icon.alt}>
          <Image
            src={icon.src}
            alt={`${icon.alt} icon`}
            className="w-12 h-auto"
            width={48}
            height={48}
          />
        </Icon>
      ))}
    </div>
  );
};

export default SoftwareIcons;
