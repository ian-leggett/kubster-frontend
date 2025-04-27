import React from 'react';

import ThemeSwitch from '@/components/layout/navigation/ThemeSwitch';

import Nav from './Nav';

const NavBar = () => {
  return (
    <div>
      <div className="p-1 bg-gray-600 rounded-sm">
        <div className="p-1 bg-gray-900 md:flex md:justify-between items-center">
          <Nav />
          <ThemeSwitch className="hidden md:display" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
