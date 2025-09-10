"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPlugin() {
  const [isBottom, setIsBottom] = useState(false);

  const contacts = [
    {
      label: "Call",
      href: "tel:+966558202859",
      color: "bg-blue-600",
      icon: "https://img.icons8.com/ios-filled/24/ffffff/phone.png",
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/966558202859",
      color: "bg-green-600",
      icon: "https://img.icons8.com/ios-filled/24/ffffff/whatsapp.png",
    },
    {
      label: "Email",
      href: "mailto:mdparvez.ahmed.509@gmail.com",
      color: "bg-red-600",
      icon: "https://img.icons8.com/ios-filled/24/ffffff/new-post.png",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      // if user is within 100px of the bottom → hide
      setIsBottom(scrollY + viewportHeight >= fullHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {!isBottom && (
        <motion.div
          className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-50"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.3 }}
        >
          {contacts.map((c) => (
            <motion.a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full flex justify-end"
            >
              <button
                className={`${c.color} text-white px-5 py-3 rounded-full flex items-center gap-3 shadow-lg`}
              >
                <img src={c.icon} width={24} height={24} alt={c.label} />
                {c.label}
              </button>
            </motion.a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
