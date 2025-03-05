import React from 'react';

const Footer: React.FC = () => (
  <footer className="mt-5 flex justify-end motion-opacity-in-0 motion-translate-y-in-100 motion-duration-2000 motion-delay-[1000ms]">
    <span className="relative whitespace-nowrap mx-3 py-1">
      <span className="absolute bg-slate-600 -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1"></span>
      <span className="relative text-slate-200 p-2">
        Built with Nextjs, Django and lots of{' '}
        <span className="inline-block text-xl motion-delay-[1300ms] motion-scale-in-0 motion-ease-spring-bouncier">
          ☕
        </span>
      </span>
    </span>
  </footer>
);

export default Footer;
