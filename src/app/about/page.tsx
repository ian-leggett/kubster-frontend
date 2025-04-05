import React from 'react';

import Image from 'next/image';

import { H1, H2 } from '@/components/typography/Heading';

import mugshot from '/public/images/me.jpg';

function About() {
  return (
    <div className="grid grid-cols-[1fr_250px] gap-5">
      <div>
        <H1>About</H1>
        <H2>The beginning</H2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="relative"></div>
    </div>
  );
}

export default About;
