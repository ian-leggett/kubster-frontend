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
      <div className="flex md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none relative top-[2px] ml-auto"
        >
          {isOpen ? (
            <XIcon className="h-7 w-7" />
          ) : (
            <MenuIcon className="h-7 w-7" />
          )}
        </button>
      </div>
      <ul
        className={`${isOpen ? 'block' : 'hidden'} md:flex md:items-center p-1`}
      >
        {menuItems.primaryNavigation.map((item) => (
          <li key={item.title}>
            <Link
              href={item.route}
              className="text-white p-2 px-3 mx-2 hover:text-gray-300 no-underline relative group"
              prefetch={item.prefetch}
            >
              {item.title}
              <span
                className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-white group-hover:w-[80%] hover:px-1 ${pathname === item.route ? 'w-[80%] px-1' : ''} transition-all duration-300 ease-in-out -translate-x-1/2`}
              ></span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
