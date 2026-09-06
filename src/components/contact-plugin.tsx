"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPlugin() {
  const [isBottom, setIsBottom] = useState(false);

  const contacts = [
    {
      label: "اتصال",
      href: "tel:+966558202859",
      color: "bg-blue-600",
      icon: "https://img.icons8.com/ios-filled/24/ffffff/phone.png",
      alt: "اتصال مباشر بمحل حسن للإلكترونيات",
    },
    {
      label: "واتساب",
      href: "https://wa.me/966558202859",
      color: "bg-green-600",
      icon: "https://img.icons8.com/ios-filled/24/ffffff/whatsapp.png",
      alt: "تواصل عبر واتساب مع محل حسن للإلكترونيات",
    },
    {
      label: "بريد إلكتروني",
      href: "mailto:mdparvez.ahmed.509@gmail.com",
      color: "bg-red-600",
      icon: "https://img.icons8.com/ios-filled/24/ffffff/new-post.png",
      alt: "إرسال بريد إلكتروني لمحل حسن للإلكترونيات",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      // Hide when user is within 100px of bottom
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
          dir="rtl"
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
              aria-label={c.alt}
            >
              <button
                className={`${c.color} text-white px-5 py-3 rounded-full flex items-center gap-3 shadow-lg`}
              >
                <img src={c.icon} width={24} height={24} alt={c.alt} />
                {c.label}
              </button>
            </motion.a>
          ))}

          {/* ✅ Hidden SEO Text */}
          <div className="sr-only">
            تواصل مع محل حسن للإلكترونيات في خميس مشيط عبر الهاتف، واتساب
            أو البريد الإلكتروني للحصول على أفضل خدمات تركيب دش مركزي وعادي
            وصيانة دش ورسيفرات IPTV وHD وتركيب كاميرات وشاشات. رقم فني رسيفر
            ودش تركيب وعامل تصليح دش تركيب متاح على مدار الساعة.
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
