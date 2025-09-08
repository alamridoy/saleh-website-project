"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPlugin() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const contacts = [
    {
      label: "Call",
      href: "tel:+1234567890",
      color: "bg-blue-600",
      icon: "https://img.icons8.com/ios-filled/24/ffffff/phone.png",
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/1234567890",
      color: "bg-green-600",
      icon: "https://img.icons8.com/ios-filled/24/ffffff/whatsapp.png",
    },
    {
      label: "Email",
      href: "mailto:example@email.com",
      color: "bg-red-600",
      icon: "https://img.icons8.com/ios-filled/24/ffffff/new-post.png",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-50"
    >
      {/* Animated expanded buttons */}
      <AnimatePresence>
        {open &&
          contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="w-full flex justify-end"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${c.color} text-white px-5 py-3 rounded-full flex items-center gap-3 shadow-lg`}
              >
                <img src={c.icon} width={24} height={24} alt={c.label} />
                {c.label}
              </motion.button>
            </motion.a>
          ))}
      </AnimatePresence>

      {/* Main Contact Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-blue-gray-700 text-white px-5 py-3 rounded-full flex items-center gap-3 shadow-xl"
      >
        <img
          src="https://img.icons8.com/ios-filled/24/ffffff/contacts.png"
          width={24}
          height={24}
          alt="Contact"
        />
        Contact
      </motion.button>
    </div>
  );
}
