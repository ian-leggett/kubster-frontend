import React from 'react';

import Image from 'next/image';

import cssOriginalIcon from './icons/css3-original.svg';
import djangoOriginalIcon from './icons/django-plain.svg';
import htmlOriginalIcon from './icons/html5-original.svg';
import javascriptOriginalIcon from './icons/javascript-original.svg';
import nextjsOriginalIcon from './icons/nextjs-original.svg';
import nodejsOriginalIcon from './icons/nodejs-original.svg';
import pythonOriginalIcon from './icons/python-original.svg';
import reactOriginalIcon from './icons/react-original.svg';
import typescriptOriginalIcon from './icons/typescript-original.svg';

const Icon = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center bg-white p-2 shadow-md shadow-gray-500/50 rounded-md">
      {children}
    </div>
  );
};

const SoftwareIcons = () => {
  return (
    <div className="flex space-x-4">
      <Icon>
        <Image
          src={javascriptOriginalIcon}
          alt="Javascript icon"
          className="w-12 h-auto motion-opacity-in-0 motion-translate-y-in-100 motion-delay-[100ms]"
          width={0}
          height={0}
        />
      </Icon>
      <Icon>
        <Image
          src={reactOriginalIcon}
          alt="React icon"
          className="w-12 h-auto motion-opacity-in-0 motion-translate-y-in-100 motion-delay-[200ms]"
          width={0}
          height={0}
        />
      </Icon>
      <Icon>
        <Image
          src={nodejsOriginalIcon}
          alt="Nodejs icon"
          className="w-12 h-auto motion-opacity-in-0 motion-translate-y-in-100 motion-delay-[300ms]"
          width={0}
          height={0}
        />
      </Icon>
      <Icon>
        <Image
          src={typescriptOriginalIcon}
          alt="Typescript icon"
          className="w-12 h-auto motion-opacity-in-0 motion-translate-y-in-100 motion-delay-[300ms]"
          width={0}
          height={0}
        />
      </Icon>
      <Icon>
        <Image
          src={pythonOriginalIcon}
          alt="Python icon"
          className="w-12 h-auto motion-opacity-in-0 motion-translate-y-in-100 motion-delay-[400ms]"
          width={0}
          height={0}
        />
      </Icon>
      <Icon>
        <Image
          src={nextjsOriginalIcon}
          alt="Nextjs icon"
          className="w-12 h-auto motion-opacity-in-0 motion-translate-y-in-100 motion-delay-[500ms]"
          width={0}
          height={0}
        />
      </Icon>
      <Icon>
        <Image
          src={djangoOriginalIcon}
          alt="Django icon"
          className="w-12 h-auto motion-opacity-in-0 motion-translate-y-in-100 motion-delay-[600ms]"
          width={0}
          height={0}
        />
      </Icon>
      <Icon>
        <Image
          src={htmlOriginalIcon}
          alt="HTML icon"
          className="w-12 h-auto motion-opacity-in-0 motion-translate-y-in-100 motion-delay-[700ms]"
          width={0}
          height={0}
        />
      </Icon>
      <Icon>
        <Image
          src={cssOriginalIcon}
          alt="CSS icon"
          className="w-12 h-auto motion-opacity-in-0 motion-translate-y-in-100 motion-delay-[800ms]"
          width={0}
          height={0}
        />
      </Icon>
    </div>
  );
};

export default SoftwareIcons;
