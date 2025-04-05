import React from 'react';

import Image from 'next/image';

import { H1, H2 } from '@/components/typography/Heading';
import Paragraph from '@/components/typography/Paragraph';

import mugshot from '/public/images/me.jpg';

function About() {
  return (
    <div>
      <H1>CV</H1>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_400px] gap-10">
        <div className="order-2 md:order-1">
          <H2>Summary</H2>
          <Paragraph>
            I am a passionate Senior Full Stack Developer who thrives on
            building intuitive, accessible web based applications. I have over
            17 years’ commercial experience developing web applications for top
            companies in domains such as insurance, gaming, finance, digital
            filming, academic publishing, public sector, government, telecoms
            and recruitment.
          </Paragraph>
          <Paragraph>
            I enjoy not only solving complex technical challenges but also
            mentoring and empowering teammates to grow. I take pride in
            fostering a culture of knowledge sharing, engineering excellence,
            and adaptability, ensuring that we build scalable, maintainable
            solutions together.
          </Paragraph>
        </div>

        <div className="order-1 md:order-2 flex flex-col items-center">
          <div className="relative rounded-full border-white w-[150px] h-[150px]">
            <Image
              src={mugshot}
              alt="Ian Leggett"
              width={150}
              height={150}
              className="border-4 border-white rounded-full"
            />
          </div>

          <div className="bg-gray-600 dark:bg-gray-800 rounded-lg p-5 w-full -mt-[75px] pt-[100px]">
            <H2 className="text-white text-3xl">Full Stack developer</H2>
            <dl className="grid grid-cols-2 gap-2 mt-5 mb-9">
              <dt className="text-white/60 text-lg">Name</dt>
              <dd className="text-white text-lg">Ian Leggett</dd>
              <dt className="text-white/60 text-lg">Location</dt>
              <dd className="text-white text-lg">London</dd>
            </dl>
            <H2 className="text-white text-2xl">Tech skills</H2>
            <p className="text-lg text-white/60 mb-3">
              Tools I like to work with:
            </p>
            <ul className="grid grid-cols-3 gap-2 mt-5 mb-9">
              {[
                'HTML5',
                'CSS3',
                'JavaScript',
                'Node.js',
                'Typescript',
                'React',
                'Next.js',
                'Tailwind',
                'Django',
                'Python',
                'PostgreSQL',
                'Docker',
                'REST',
                'AWS'
              ].map((skill) => (
                <li
                  key={skill}
                  className="inline-block bg-transparent text-white border-[3px] border-blue-400 px-3 py-1 rounded-full m-1 text-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
            <H2 className="text-white text-2xl">Soft skills</H2>
            <p className="text-lg text-white/60 mb-3">I am great at:</p>
            <ul className="list-disc list-inside">
              {[
                'Leadership',
                'Communication',
                'Driving out MVPs',
                'Mentoring',
                'Problem solving',
                'Delivering on time'
              ].map((skill) => (
                <li
                  key={skill}
                  className="bg-transparent text-white rounded-full text-md mb-1"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
