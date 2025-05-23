import React from 'react';

import Image from 'next/image';

import { H1, H2 } from '@/components/typography/Heading';
import Paragraph from '@/components/typography/Paragraph';

function About() {
  return (
    <div>
      <H1>About</H1>
      <div className="md:grid grid-cols-[auto_200px] lg:grid-cols-[auto_275px] gap-10 mb-10">
        <div>
          <Paragraph>
            If I look back 17 years, I never would have imagined myself working
            as a web developer. I wasn't particularly interested in computers or
            anything related to computer science at the time, I didn't even have
            my own PC until after higher education!
          </Paragraph>
          <Paragraph>
            I always find it interesting to hear how people end up in their
            careers and the paths they took to get where they are today. So,
            here's my story of how I got into becoming a web developer.
          </Paragraph>

          <H2>In the beginning</H2>
          <Paragraph>
            I grew up in a small village in North Devon, UK, where I spent most
            of my childhood. After secondary school, I went on to study Art and
            Design at college, which eventually led me to pursue an HND in
            Product Design and Manufacture at Somerset College of Arts and
            Technology. Although I loved product design, I never ended up
            starting a career in it. Instead, I found myself working a string of
            dead-end jobs. Some were better than others, but the truth was—I
            wasn't going anywhere.
          </Paragraph>
          <H2>I found a good job</H2>
          <Paragraph>
            After scouring the local ads for a job, I finally came across a
            sales opportunity. The pay was great for the first three months, and
            after that, it shifted to a commission-based structure—you had to
            hit your targets to keep earning. I hadn't sold anything before, but
            I was excited by the challenge, plus I really needed a pay day!
          </Paragraph>
          <Paragraph></Paragraph>
        </div>
        <Image
          src="/images/me.jpg"
          alt="A profile picture of the author"
          width={300}
          height={200}
          className="rounded-xl"
        />
      </div>
    </div>
  );
}

export default About;
