"use client";

import React, { useState, useEffect } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  isScrolled: boolean;
}

function NavItem({ children, href, onClick, isScrolled }: NavItemProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    if (onClick) onClick();
  };

  return (
    <li className="relative group">
      <a
        href={href || "#"}
        onClick={handleClick}
        className={`relative text-sm font-semibold tracking-wider uppercase transition-all duration-300 ease-out group-hover:scale-110 ${isScrolled
            ? "text-gray-900 hover:text-blue-600"
            : "text-white hover:text-cyan-300"
          }`}
      >
        {children}
        <span
          className={`absolute -bottom-1 left-0 w-0 h-1 rounded-full transition-all duration-400 group-hover:w-full ${isScrolled
              ? "bg-gradient-to-r from-blue-500 to-purple-500"
              : "bg-gradient-to-r from-cyan-400 to-purple-400"
            }`}
        ></span>
        <span
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 rounded-full blur-sm transition-opacity duration-400 ${isScrolled
              ? "bg-gradient-to-r from-blue-400/20 to-purple-500/20"
              : "bg-gradient-to-r from-cyan-400/20 to-purple-400/20"
            }`}
        ></span>
      </a>
    </li>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Location", href: "#location" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-700 ease-in-out ${isScrolled
          ? "bg-white/95 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
          : "bg-gradient-to-r from-gray-950/80 via-blue-950/80 to-purple-950/80 backdrop-blur-2xl"
        } border-b border-gray-800/20`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center group relative">
            <div className="relative p-2.5 rounded-2xl bg-white transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]">
              <img
                src="/logos/storelogo.png"
                alt="Store Logo"
                className="h-9 w-9 object-contain filter drop-shadow-md"
              />
              <span className="absolute inset-0 rounded-2xl bg-gray-200/20 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></span>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-12">
            {menuItems.map((item) => (
              <NavItem key={item.name} href={item.href} isScrolled={isScrolled}>
                {item.name}
              </NavItem>
            ))}
            <li>
              <a
                href="tel:+966558202859"
                className={`relative px-6 py-2.5 rounded-full font-semibold tracking-wide uppercase transition-all duration-400 hover:scale-105 hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] ${isScrolled
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                    : "bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
                  }`}
              >
                Call Now
                <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 hover:opacity-40 transition-opacity duration-400"></span>
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`md:hidden p-2.5 rounded-xl transition-all duration-400 hover:scale-110 hover:shadow-[0_0_10px_rgba(139,92,246,0.3)] ${isScrolled
                ? "bg-gray-100/50 hover:bg-gray-200/70"
                : "bg-gray-900/50 hover:bg-gray-800/70"
              }`}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <XMarkIcon
                className={`h-7 w-7 ${isScrolled ? "text-gray-900" : "text-white"
                  }`}
              />
            ) : (
              <Bars3Icon
                className={`h-7 w-7 ${isScrolled ? "text-gray-900" : "text-white"
                  }`}
              />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-700 ease-in-out ${isOpen
              ? "max-h-screen opacity-100 translate-y-0"
              : "max-h-0 opacity-0 translate-y-[-20px]"
            }`}
        >
          <div
            className={`px-6 py-8 space-y-6 border-t shadow-xl ${isScrolled
                ? "bg-white/95"
                : "bg-gray-950/95 backdrop-blur-lg border-gray-800/70"
              }`}
          >
            {menuItems.map((item) => (
              <NavItem
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                isScrolled={isScrolled}
              >
                {item.name}
              </NavItem>
            ))}
            <div className="pt-4">
              <a
                href="tel:+966558202859"
                className={`block w-full text-center px-6 py-3 rounded-full font-semibold tracking-wide uppercase transition-all duration-400 hover:scale-105 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] ${isScrolled
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                    : "bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
