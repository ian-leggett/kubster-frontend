import React from 'react';

import ThemeSwitch from '@/components/layout/navigation/ThemeSwitch';

import Nav from './Nav';

const NavBar = () => {
  return (
    <div>
      <div className="p-1 bg-gray-600 rounded-sm">
        <div className="p-1 bg-gray-900 md:grid md:grid-cols-[1fr,50px]">
          <Nav />
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
