import React from "react";
import heiLogo from "../../assets/logo.png";
import "../../styles.css";

export const NavBar = () => {
  const navLinks = [
    { name: "Accueil", href: "#accueil" },
    { name: "Actualité", href: "#actualite" },
    { name: "Bourse d'étude", href: "#bourse-etude" },
    { name: "Inscription", href: "#inscription" },
  ]
  return (
    <header className="bg-[#001948] shadow-md">
      <nav className="container mx-auto px-6 sm:px-10 lg:px-16 py-3 flex items-center justify-between">
        <a href="/" className="flex-shrink-0">
          <img src={heiLogo} className="h-12 object-contain" alt="Hei logo" />{" "}
        </a>
        <div className="flex items-center space-x-6">
          <ul className="flex space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-white hover:text-[#f8bd1a] font-sans uppercase text-sm transition duration-300 ease-in-out font-semibold"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden md:block">
            <button className="bg-[#DFA408] hover:bg-[#f8bd1a] text-white font-sans uppercase text-sm px-6 py-2 rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105 font-semibold">
              Intranet
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};


