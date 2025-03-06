import React from 'react';

import ThemeSwitch from '@/components/layout/navigation/ThemeSwitch';

import Nav from './Nav';

const NavBar = () => {
  return (
    <div className="flex">
      <div className="p-1 bg-gray-600 ml-auto items-center rounded-sm">
        <div className="p-1 bg-gray-800 md:grid md:grid-cols-[1fr,50px]">
          <Nav />
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
