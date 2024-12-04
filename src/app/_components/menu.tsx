"use client";

import Link from 'next/link';
import { useState } from 'react';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link href="/">AI Safety Arc</Link>
        </div>
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>
      <ul
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:flex md:space-x-8 md:block mt-4 md:mt-0`}
      >
        <li>
          <Link href="/">
            <a className="block text-white hover:text-gray-400 p-2">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="block text-white hover:text-gray-400 p-2">About</a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a className="block text-white hover:text-gray-400 p-2">Projects</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className="block text-white hover:text-gray-400 p-2">Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
