import Image from 'next/image';
import Link from 'next/link';

import mugshot from './me.jpg';

interface ProfileCardProps {
  className?: string;
}

const ProfileCard = ({ className }: ProfileCardProps) => {
  return (
    <div
      className={`absolute left-10 top-[70px] z-[11] w-[400px] group ${className}`}
    >
      <div className="rounded-lg -mt-16 p-1 bg-gray-600 relative origin-center -rotate-6 duration-500 group-hover:rotate-0 shadow-xl shadow-gray-500/50 motion-translate-y-in-100 motion-rotate-in-180 motion-blur-in">
        <div className="rounded-lg p-4 grid grid-cols-[auto_1fr_auto] bg-gray-800 border-solid border border-slate-500">
          <div className="relative rounded-full w-[70px] h-[70px] border-solid border border-slate-300 border-2 hover:border-light-blue mr-5">
            <Link href="/" className="group-hover:motion-scale-in-0">
              <Image
                src={mugshot}
                alt="A profile picture of the author"
                width={60}
                height={60}
                className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full"
              />
            </Link>
          </div>
          <div>
            <h2 className="text-light-blue font-bold text-xl pb-1">
              Full Stack Developer
            </h2>
            <ul className="pb-3 font-light text-white">
              <li>Name: Ian Leggett</li>
              <li>
                Email:{' '}
                <a
                  href="mailto:contactleggett@gmail.com"
                  className="underline transition duration-300 ease-in-out text-white/70 hover:text-white/100"
                  title="Get in contact"
                >
                  contactleggett@gmail.com
                </a>
              </li>
            </ul>
            <div className="flex gap-[7px]">
              <a
                className="[&>svg]:h-8 [&>svg]:w-8 cursor-pointer"
                title="Visit Github profile"
                href="https://github.com/ian-leggett"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition duration-300 ease-in-out fill-white/70 hover:fill-white/100"
                  viewBox="0 0 496 512"
                >
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
              </a>
              <a
                className="[&>svg]:h-8 [&>svg]:w-8 cursor-pointer"
                title="Visit LinkedIn profile"
                href="https://www.linkedin.com/in/ianleggett/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="transition duration-300 ease-in-out fill-white/70 hover:fill-white/100"
                >
                  <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                </svg>
              </a>
            </div>
          </div>
          <span className="flex w-2 h-2 bg-green-500 rounded-full"></span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
