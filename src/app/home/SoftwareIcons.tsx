import React from 'react';

import Image from 'next/image';

import awsOriginalIcon from '/public/icons/amazonwebservices-original.svg';
import cssOriginalIcon from '/public/icons/css3-original.svg';
import djangoOriginalIcon from '/public/icons/django-plain.svg';
import htmlOriginalIcon from '/public/icons/html5-original.svg';
import javascriptOriginalIcon from '/public/icons/javascript-original.svg';
import nextjsOriginalIcon from '/public/icons/nextjs-original.svg';
import nodejsOriginalIcon from '/public/icons/nodejs-original.svg';
import pythonOriginalIcon from '/public/icons/python-original.svg';
import reactOriginalIcon from '/public/icons/react-original.svg';
import sassOriginalIcon from '/public/icons/sass-original.svg';
import sqlOriginalIcon from '/public/icons/sqldeveloper-original.svg';
import tailwindOriginalIcon from '/public/icons/tailwindcss-original.svg';
import typescriptOriginalIcon from '/public/icons/typescript-original.svg';

const Icon = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex items-center justify-center">{children}</div>;
};

const SoftwareIcons = () => {
  return (
    <div className="flex space-x-4">
      {[
        {
          src: javascriptOriginalIcon,
          alt: 'Javascript',
          delay: 'motion-delay-75'
        },
        { src: reactOriginalIcon, alt: 'React', delay: 'motion-delay-[100ms]' },
        {
          src: nodejsOriginalIcon,
          alt: 'Nodejs',
          delay: 'motion-delay-[200ms]'
        },
        {
          src: typescriptOriginalIcon,
          alt: 'Typescript',
          delay: 'motion-delay-[300ms]'
        },
        {
          src: pythonOriginalIcon,
          alt: 'Python',
          delay: 'motion-delay-[400ms]'
        },
        {
          src: nextjsOriginalIcon,
          alt: 'Nextjs',
          delay: 'motion-delay-[500ms]'
        },
        {
          src: djangoOriginalIcon,
          alt: 'Django',
          delay: 'motion-delay-[600ms]'
        },
        { src: htmlOriginalIcon, alt: 'HTML', delay: 'motion-delay-[700ms]' },
        { src: cssOriginalIcon, alt: 'CSS', delay: 'motion-delay-[800ms]' },
        {
          src: tailwindOriginalIcon,
          alt: 'Tailwind CSS',
          delay: 'motion-delay-[900ms]'
        },
        {
          src: sassOriginalIcon,
          alt: 'SASS',
          delay: 'motion-delay-[1000ms]'
        },
        {
          src: sqlOriginalIcon,
          alt: 'SQL',
          delay: 'motion-delay-[1100ms]'
        },
        {
          src: awsOriginalIcon,
          alt: 'AWS',
          delay: 'motion-delay-[1100ms]'
        }
      ].map((icon, index) => (
        <Icon key={icon.alt}>
          <Image
            src={icon.src}
            alt={`${icon.alt} icon`}
            className={`w-12 h-auto ${icon.delay} motion-opacity-in-0 motion-translate-y-in-100 motion-ease-bounce`}
            width={0}
            height={0}
            key={index}
          />
        </Icon>
      ))}
    </div>
  );
};

export default SoftwareIcons;
