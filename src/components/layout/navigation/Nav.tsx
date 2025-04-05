import { useState } from 'react';

import {
  Bars3Icon as MenuIcon,
  XMarkIcon as XIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import menuItems from './menu-items';

const Nav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none relative z-[13] ml-auto"
        >
          {isOpen ? (
            <XIcon className="h-9 w-9" />
          ) : (
            <MenuIcon className="h-9 w-9" />
          )}
        </button>
      </div>
      <ul
        className={`${isOpen ? 'block' : 'hidden'} absolute left-0 top-0 pt-10 h-screen w-full md:relative md:h-auto md:pt-0 bg-gray-900 z-[12] md:flex md:items-center p-1`}
      >
        {menuItems.primaryNavigation.map((item) => (
          <li key={item.title}>
            <Link
              href={item.route}
              className="w-full md:w-auto focus:bg-gray-800 md:focus:bg-gray-900 text-white text-2xl inline-block p-4 hover:text-gray-300 no-underline relative group md:text-[16px] md:p-0 md:px-2 md:mx-2"
              prefetch={item.prefetch}
              onClick={toggleMenu}
            >
              {item.title}
              <span
                className={`hidden md:inline-block absolute bottom-0 left-1/2 w-0 h-0.5 bg-white group-hover:w-[80%] hover:px-1 ${pathname === item.route ? 'w-[80%] px-1' : ''} transition-all duration-300 ease-in-out -translate-x-1/2`}
              ></span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
