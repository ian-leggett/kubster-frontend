const Summary = () => {
  return (
    <div>
      <h1 className="text-3xl pb-2 font-normal">
        <span className="inline-block text-primary text-slate-600 font-bold motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in motion-delay-[500ms]">
          Hi, my name is Ian Leggett
        </span>
      </h1>
      <p className="pb-6 text-8xl lowercase font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in motion-delay-[600ms]">
        <span className="uppercase">I</span> make <span>web apps</span>.
      </p>

      <p className="text-3xl pb-20 font-light dark:text-slate-400 text-gray-500 motion-opacity-in-0 motion-blur-in motion-translate-y-in-100 motion-delay-[700ms]">
        I'm a Full Stack Developer living in London with nearly 20 years
        experience building web based applications.
      </p>
    </div>
  );
};

export default Summary;
