import React, { useState } from 'react';
import heiLogo from "../../assets/logo.png";
import "../../styles.css";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Accueil", href: "#accueil" },
    { name: "Actualité", href: "#actualite" },
    { name: "Bourse d'étude", href: "#bourse-etude" },
    { name: "Inscription", href: "#inscription" },
  ];

  return (
    <header className="bg-[var(--color-primary-blue)] shadow-md">
      <nav className="container mx-auto px-6 sm:px-10 lg:px-16 py-3 flex items-center justify-between relative">
        <a href="/" className="flex-shrink-0">
          <img src={heiLogo} className="h-12 object-contain" alt="Hei logo" />
        </a>

        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-white hover:text-[var(--color-primary-yellow)] font-sans uppercase text-sm transition duration-300 ease-in-out font-semibold"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <button className="bg-[var(--color-primary-yellow)] hover:bg-[#f8bd1a] text-white font-sans uppercase text-sm px-6 py-2 rounded-sm shadow-lg transition duration-300 ease-in-out transform hover:scale-105 font-semibold">
              Intranet
          </button>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white text-2xl focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        <div className={`
            md:hidden
            absolute top-full left-0 right-0 z-50 
            bg-[var(--color-primary-blue)]
            shadow-lg 
            py-4
            flex flex-col items-center
            space-y-4
            transition-all duration-300 ease-in-out
            ${isMenuOpen ? 'block' : 'hidden'} /* Simple show/hide for now */
            /* If you want animation with 'max-h', you'd need:
               ${isMenuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible overflow-hidden'}
               And ensure no other element blocks it. Let's try 'block'/'hidden' first.
            */
        `}>
          <ul className="flex flex-col space-y-4 w-full text-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-white hover:text-[var(--color-primary-yellow)] font-sans uppercase text-sm font-semibold py-2 px-4 transition duration-300 ease-in-out"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <button 
            className="bg-[var(--color-primary-yellow)] hover:bg-[#f8bd1a] text-white font-sans uppercase text-sm px-6 py-2 rounded-sm shadow-lg transition duration-300 ease-in-out transform hover:scale-105 font-semibold mt-4"
            onClick={() => setIsMenuOpen(false)} 
          >
            Intranet
          </button>
        </div>
      </nav>
    </header>
  );
};