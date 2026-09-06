"use client";

import React, { useState, useEffect, useRef } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  isScrolled: boolean;
  isDropdown?: boolean; // For dropdown links only
}

function NavItem({ children, href, onClick, isScrolled, isDropdown }: NavItemProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (onClick) onClick();
  };

  return (
    <a
      href={href || "#"}
      onClick={handleClick}
      className={`relative text-sm font-semibold tracking-wider transition-all duration-300 ease-out hover:scale-105 ${isDropdown
        ? "text-gray-900 hover:text-blue-600" // always black for dropdown links
        : isScrolled
          ? "text-gray-900 hover:text-blue-600" // main menu black when scrolled
          : "text-white hover:text-cyan-300"    // main menu white at top
        }`}
    >
      {children}
    </a>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);
  const dropdownRefs = useRef<Array<HTMLUListElement | null>>([]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (index: number) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

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
    { name: "الرئيسية", href: "#home" },
    {
      name: "خدمات تركيب وصيانة الدش",
      dropdown: [
        { name: "تركيب صحون مركزية", href: "centraldish" },
        { name: "أفضل محل دش قريب منك بخميس مشيط", href: "dishmaintenance" },
        { name: "إصلاح الأطباق", href: "dishrepair" },
        { name: "فني تركيب أطباق الأقمار الصناعية بالقرب مني في خميس مشيط", href: "installation" },
        { name: "تركيب كاميرات خميس مشيط", href: "cameras" },
        { name: "بيع رسيفرات وأطباق دش عالية الجودة", href: "receivers" },
        { name: "فني دش وتركيب شاشات خميس مشيط", href: "screens" },
        { name: "دعم ومساعدة العملاء", href: "customersupport" },
      ],
    },
    { name: "مناطق التغطية بخميس مشيط", href: "#location" },
    { name: "اتصل بنا", href: "#contact" },
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
            <img
              src="/logos/storelogo.png"
              alt="شعار محل حسن للإلكترونيات"
              className="h-16 w-16 object-contain rounded-xl shadow-md transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]"
            />
          </div>


          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-12 space-x-reverse">
            {menuItems.map((item, idx) => (
              <li key={idx} className="relative group">
                {/* Parent NavItem: behaves normally */}
                <NavItem href={item.href} isScrolled={isScrolled}>
                  {item.name}
                </NavItem>

                {/* Desktop Dropdown */}

                {item.dropdown && (
                  <ul className="absolute top-full right-0 mt-2 w-56 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                    {item.dropdown.map((subItem, subIdx) => (
                      <li
                        key={subIdx}
                        className="px-4 py-2 rounded transition-colors duration-300 hover:bg-gray-100"
                      >
                        <Link
                          href={`/services/${subItem.href}`} // <-- correct path
                          className="text-gray-900 hover:text-blue-600 text-sm font-semibold tracking-wider transition-all duration-300 ease-out"
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            <li>
              <a
                href="tel:+966558202859"
                className={`relative px-6 py-2.5 rounded-full font-semibold tracking-wide transition-all duration-400 hover:scale-105 hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] ${isScrolled
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                  : "bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
                  }`}
              >
                اتصل الآن
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`md:hidden p-2.5 rounded-xl transition-all duration-400 ${isScrolled
              ? "bg-gray-100/50 hover:bg-gray-200/70"
              : "bg-gray-900/50 hover:bg-gray-800/70"
              }`}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <XMarkIcon className={`h-7 w-7 ${isScrolled ? "text-gray-900" : "text-white"}`} />
            ) : (
              <Bars3Icon className={`h-7 w-7 ${isScrolled ? "text-gray-900" : "text-white"}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-screen opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-5"
            }`}
        >
          <ul
            className={`px-6 py-8 space-y-6 border-t shadow-xl ${isScrolled ? "bg-white/95" : "bg-gray-950/95 backdrop-blur-lg border-gray-800/70"
              }`}
          >
            {menuItems.map((item, idx) => {
              const hasDropdown = !!item.dropdown;
              const isOpenDropdown = openDropdownIndex === idx;
              return (
                <li key={idx}>
                  <div className="flex justify-between items-center">
                    {/* Parent item behaves normal */}
                    <NavItem
                      href={item.href}
                      onClick={hasDropdown ? () => toggleDropdown(idx) : () => setIsOpen(false)}
                      isScrolled={isScrolled}
                    >
                      {item.name}
                    </NavItem>
                    {hasDropdown && (
                      <button
                        onClick={() => toggleDropdown(idx)}
                        className="text-sm mr-2 select-none"
                      >
                        {isOpenDropdown ? "▲" : "▼"}
                      </button>
                    )}
                  </div>

                  {hasDropdown && (
                    <ul
                      ref={(el) => { dropdownRefs.current[idx] = el; }}
                      style={{
                        maxHeight: isOpenDropdown
                          ? `${dropdownRefs.current[idx]?.scrollHeight}px`
                          : "0px",
                        transition: "max-height 0.4s ease",
                        overflow: "hidden",
                      }}
                      className="mt-2 space-y-2 px-4 text-gray-900"
                    >
                      {item.dropdown!.map((subItem, subIdx) => (
                        <li key={subIdx}>
                          <Link
                            href={`/services/${subItem.href}`} // <-- correct path
                            className="block text-gray-900 text-sm font-semibold tracking-wider py-2"
                            onClick={() => setIsOpen(false)} // close mobile menu on click
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}

                    </ul>
                  )}
                </li>
              );
            })}

            <li>
              <a
                href="tel:+966558202859"
                className="block w-full text-center px-6 py-3 rounded-full font-semibold tracking-wide transition-all duration-400 bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:scale-105 hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]"
                onClick={() => setIsOpen(false)}
              >
                اتصل الآن
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Hidden SEO text */}
      <div className="sr-only">
        خدمات محل حسن للإلكترونيات: تركيب دش مركزي وعادي بخميس مشيط لجميع أنواع
        المنازل والشقق، تركيب هوائي الدش، صيانة دش ورسيفرات IPTV وHD وحل مشاكل
        انقطاع الإشارة، بيع رسيفرات وأطباق دش عالية الجودة وملحقاتها، تركيب
        كاميرات خميس مشيط، فني دش وتركيب شاشات خميس مشيط، محل رسيفرات خميس
        مشيط، اشتراك قنوات بين سبورت، رقم فني رسيفر ودش تركيب، تمديد وتركيب
        أسلاك دش عالية الجودة، فحص وضبط الإشارة باستخدام أجهزة حديثة.
      </div>
    </nav>
  );
}

export default Navbar;
