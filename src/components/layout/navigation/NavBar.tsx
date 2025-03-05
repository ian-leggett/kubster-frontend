import React, { useState } from 'react';

import {
  Bars3Icon as MenuIcon,
  XMarkIcon as XIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';

import ThemeSwitch from '@/components/ui/ThemeSwitch';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <div className="grid grid-cols-[1fr,50px] bg-slate-600 ml-auto items-center rounded-sm">
        <nav className="p-1">
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
          <ul
            className={`${isOpen ? 'block' : 'hidden'} md:flex md:items-center p-1`}
          >
            <li>
              <Link
                href="/"
                className="text-white p-2 px-3 mx-2 hover:text-white hover:bg-slate-700 no-underline relative group"
              >
                Home
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 ease-in-out -translate-x-1/2"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-white p-2 px-3 mx-2 hover:text-white hover:bg-slate-700 no-underline relative group"
              >
                About
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 ease-in-out -translate-x-1/2"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-white p-2 px-3 mx-2 hover:text-white hover:bg-slate-700 no-underline relative group"
              >
                Contact
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 ease-in-out -translate-x-1/2"></span>
              </Link>
            </li>
          </ul>
        </nav>
        <ThemeSwitch className="-top-3" />
      </div>
    </div>
  );
};

export default NavBar;
