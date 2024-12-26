// components/Navbar.tsx
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <nav className="fixed w-full bg-gray-800 text-white z-20">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">
          <Link href="/">
            <a>Kiel Byrne</a>
          </Link>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <a>Services</a>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <a>Portfolio</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
        {/* Mobile Menu Icon */}
        <div className="md:hidden z-10" onClick={handleClick}>
          {!nav ? <FaBars size={24} /> : <FaTimes size={24} />}
        </div>
        {/* Mobile Menu */}
        {nav && (
          <ul className="absolute top-0 left-0 w-full h-screen bg-gray-800 flex flex-col justify-center items-center space-y-8">
            <li>
              <Link href="/about">
                <a onClick={handleClick}>About</a>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <a onClick={handleClick}>Services</a>
              </Link>
            </li>
            <li>
              <Link href="/portfolio">
                <a onClick={handleClick}>Portfolio</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a onClick={handleClick}>Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a onClick={handleClick}>Contact</a>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
