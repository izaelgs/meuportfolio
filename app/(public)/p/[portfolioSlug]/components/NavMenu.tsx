"use client";

import { useState } from "react";

export default function NavMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed p-8 w-full bg-black/50 backdrop-blur z-10">
      <div className="relative">
        <button
          id="nav-toggle"
          className="lg:hidden absolute right-4 top-1/2 -translate-y-1/2 transition-transform duration-300 hover:scale-110"
          aria-label="Menu de navegação"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <div className="relative w-6 h-6">
            {/* Menu Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16m-16 6h16" />
            </svg>
            {/* Close Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </button>
        <ul
          id="nav-menu"
          className={`absolute top-full left-0 w-full bg-black/90 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none mt-4 p-4 lg:p-0 lg:mt-0 lg:w-auto lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 shadow-lg lg:shadow-none rounded-lg
            transform transition-all duration-300 ease-in-out
            ${isMenuOpen 
              ? 'opacity-100 translate-y-0 visible' 
              : 'opacity-0 -translate-y-4 invisible lg:opacity-100 lg:translate-y-0 lg:visible'
            }
            lg:flex flex-col lg:flex-row shadow-lg lg:shadow-none rounded-lg`}
          role="navigation"
        >
          <li className="px-4 py-2 lg:py-0 transform transition-all duration-300 hover:translate-x-1">
            <a
              className="font-semibold hover:text-orange-400 hover:text-primary relative transition-colors duration-300 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-current after:left-0 after:bottom-0 after:transform after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              aria-current="page"
              href="#"
              aria-label="Go to the initial section"
            >
              Home
            </a>
          </li>
          <li className="px-4 py-2 lg:py-0 transform transition-all duration-300 hover:translate-x-1">
            <a
              className="font-semibold hover:text-orange-400 relative transition-colors duration-300 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-current after:left-0 after:bottom-0 after:transform after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              aria-current="page"
              href="#skills"
              aria-label="Go to the skills section"
            >
              Skills
            </a>
          </li>
          <li className="px-4 py-2 lg:py-0 transform transition-all duration-300 hover:translate-x-1">
            <a
              className="font-semibold hover:text-orange-400 hover:text-primary relative transition-colors duration-300 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-current after:left-0 after:bottom-0 after:transform after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              aria-current="page"
              href="#projects"
              aria-label="Go to the projects section"
            >
              Projects
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
} 