import Link from 'next/link';

const Summary = () => {
  return (
    <>
      <h1 className="sm:text-2xl md:text-3xl pb-2 font-normal">
        <span className="inline-block text-slate-600 dark:text-white font-bold motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in motion-delay-[500ms]">
          Hi, my name is Ian Leggett
        </span>
      </h1>
      <p className="pb-6 sm:text-7xl md:text-8xl lowercase font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in motion-delay-[600ms]">
        <span className="uppercase">I</span> build <span>web apps</span>.
      </p>

      <p className="sm:text-2xl md:text-3xl sm:pb-5 md:pb-10 font-light dark:text-slate-400 text-gray-500 dark:text-white motion-opacity-in-0 motion-blur-in motion-translate-y-in-100 motion-delay-[700ms]">
        I'm a Full Stack Developer living in London with nearly 20 years
        experience building web based applications.
      </p>
      <p className="text-xl pb-20 font-light dark:text-slate-400 text-gray-500">
        <Link href="/about" prefetch={true}>
          Want to know more?
        </Link>
      </p>
    </>
  );
};

export default Summary;
