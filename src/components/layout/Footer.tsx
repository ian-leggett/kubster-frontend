import React from 'react';

const Footer: React.FC = () => (
  <footer className="flex mt-7 motion-opacity-in-0 motion-translate-y-in-100 motion-duration-2000 motion-delay-[1000ms]">
    <div className="text-slate-200 p-1 ml-auto bg-gray-600 rounded-sm">
      <div className="bg-gray-800 px-2 rounded-sm flex items-center">
        Bespoke design built with Nextjs, Django and lots of
        <span className="inline-block ml-2 text-3xl motion-delay-[1300ms] motion-scale-in-0 motion-ease-spring-bouncier">
          ☕
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
