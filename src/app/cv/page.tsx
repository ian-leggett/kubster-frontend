import React from 'react';

import Image from 'next/image';

import { H1, H2 } from '@/components/typography/Heading';
import List from '@/components/typography/List';
import Paragraph from '@/components/typography/Paragraph';

function About() {
  return (
    <div>
      <H1>CV</H1>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_400px] gap-10">
        <div className="order-2 md:order-1">
          <section className="mb-10">
            <H2>Summary</H2>
            <Paragraph>
              I am a passionate Senior Full Stack Developer who thrives on
              building intuitive, accessible web based applications. I have
              nearly 20 years commercial experience developing web applications
              for top companies in domains such as insurance, gaming, finance,
              digital filming, academic publishing, public sector, government,
              telecoms and recruitment.
            </Paragraph>
            <Paragraph className="pb-0">
              I enjoy not only solving complex technical challenges but also
              mentoring and empowering teammates to grow. I take pride in
              fostering a culture of knowledge sharing, engineering excellence,
              and adaptability, ensuring that we build scalable, maintainable
              solutions together.
            </Paragraph>
          </section>
          <section className="mb-10">
            <H2>Core skills and experience</H2>
            <List type="unordered">
              <li className="mb-2">
                Developing modern, high-performance, user-friendly, accessible,
                web-based applications.
              </li>
              <li className="mb-2">Designing and implementing RESTful APIs.</li>
              <li className="mb-2">Rapid prototyping.</li>
              <li className="mb-2">
                Building and maintaining CI/CD pipelines.
              </li>
              <li className="mb-2">
                Leading development from prototype to production.
              </li>
              <li className="mb-2">
                Refining backlogs, failing fast and delivering MVP's.
              </li>
              <li className="mb-2">
                Applying Agile methodologies to manage and deliver projects
                efficiently.
              </li>
              <li className="mb-2">
                Strong communicator, listener and excellent at engaging with
                both technical and non-technical stakeholders.
              </li>
              <li className="mb-2">
                Mentoring junior developers and apprentices.
              </li>
            </List>
          </section>
          <section className="mb-5">
            <H2>Commercial Experience</H2>
          </section>
        </div>

        <div className="order-1 md:order-2 flex flex-col items-center mt-[-70px]">
          <div className="relative rounded-full border-white w-[150px] h-[150px]">
            <Image
              src="/images/me-cartoon.png"
              alt="Ian Leggett"
              width={150}
              height={150}
              className="border-4 border-white rounded-full"
            />
          </div>

          <div className="bg-gray-600 dark:bg-gray-800 rounded-lg p-5 w-full -mt-[75px] pt-[100px]">
            <H2 className="text-white text-3xl mb-2">Full Stack Developer</H2>
            <dl className="grid grid-cols-2 gap-2 mt-5 mb-9">
              <dt className="text-white/60 text-md">Name:</dt>
              <dd className="text-white text-md">Ian Leggett</dd>
              <dt className="text-white/60 text-md">DOB:</dt>
              <dd className="text-white text-md">17/04/1980</dd>
              <dt className="text-white/60 text-md">Location:</dt>
              <dd className="text-white text-md">London</dd>
            </dl>
            <H2 className="text-white text-2xl mb-4">Tech skills</H2>
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
            <H2 className="text-white text-2xl mb-4">Soft skills</H2>
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
