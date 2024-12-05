"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Menu = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 p-4 transition-all duration-300 ${
        scrollPosition > 50 ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Title Section */}
        <div className="flex items-center">
          {/* AISA Logo */}
          <div className="mr-4">
            <Link href="/">
              <a className="text-white font-bold text-2xl">AISA</a>
            </Link>
          </div>
          {/* Title Section */}
          <div className="text-sm text-white opacity-80">
            AI Safety Initiative
          </div>
        </div>

        {/* Hamburger Menu (Mobile Only) */}
        <div className="cursor-pointer md:hidden" onClick={toggleMenu}>
          <div
            className={`h-1 w-6 bg-white my-1 transition-all duration-300 ${
              isOpen ? "transform rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`h-1 w-6 bg-white my-1 transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`h-1 w-6 bg-white my-1 transition-all duration-300 ${
              isOpen ? "transform -rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </div>

        {/* Desktop Menu Items */}
        <div className="hidden md:flex space-x-8 text-white">
          <Link href="/">
            <a className="hover:text-gray-300">Home</a>
          </Link>
          <Link href="/mission">
            <a className="hover:text-gray-300">Mission</a>
          </Link>
          <Link href="/education">
            <a className="hover:text-gray-300">Education</a>
          </Link>
          <Link href="/research">
            <a className="hover:text-gray-300">Research</a>
          </Link>
          <Link href="/discord">
            <a className="hover:text-gray-300">Discord</a>
          </Link>
          <Link href="/careers">
            <a className="hover:text-gray-300">Careers</a>
          </Link>
        </div>

        {/* Mobile Menu Sliding from Left */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-black text-white transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-white"
          >
            Close
          </button>
          <div className="mt-16 flex flex-col space-y-4 p-4">
            <Link href="/">
              <a className="hover:bg-gray-700 p-2" onClick={toggleMenu}>
                Home
              </a>
            </Link>
            <Link href="/mission">
              <a className="hover:bg-gray-700 p-2" onClick={toggleMenu}>
                Mission
              </a>
            </Link>
            <Link href="/education">
              <a className="hover:bg-gray-700 p-2" onClick={toggleMenu}>
                Education
              </a>
            </Link>
            <Link href="/research">
              <a className="hover:bg-gray-700 p-2" onClick={toggleMenu}>
                Research
              </a>
            </Link>
            <Link href="/discord">
              <a className="hover:bg-gray-700 p-2" onClick={toggleMenu}>
                Discord
              </a>
            </Link>
            <Link href="/careers">
              <a className="hover:bg-gray-700 p-2" onClick={toggleMenu}>
                Careers
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
