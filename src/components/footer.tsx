"use client";

import React from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

const CURRENT_YEAR = new Date().getFullYear();

const CONTACT_INFO = {
  shopName: "محل حسن للإلكترونيات",
  subtitle: "تركيب وصيانة الدش بخميس مشيط",
  address:
    "خميس مشيط - شارع الثلاثين - حي الخالدية - مقابل مدرسة الخالدية الابتدائية",
  phone: ["966558202859+", "966508805342+"],
  email: "mdparvez.ahmed.509@gmail.com",
  hours: "نعمل طوال الأسبوع: 24 ساعة",
};

const SERVICES = [
  "محل تركيب دش خميس مشيط",
  "شركة تركيب دش ابها خميس",
  "تركيب دش مركزي وعادي بخميس مشيط",
  "تركيب هوائي الدش في خميس مشيط",
  "أفضل محل دش قريب منك بخميس مشيط",
  "صيانة دش ورسيفرات IPTV وHD",
  "بيع رسيفرات وأطباق دش عالية الجودة",
  "فني تركيب أطباق الأقمار الصناعية بالقرب مني",
  "تركيب كاميرات خميس مشيط",
  "شركة كاميرات تركيب أبها خميس مشيط",
  "فني دش وتركيب شاشات خميس مشيط",
  "محل رسيفرات خميس مشيط",
  "اشتراك قنوات بين سبورت وIPTV",
  "رقم فني رسيفر ودش تركيب",
  "تمديد وتركيب أسلاك دش عالية الجودة",
];

const QUICK_LINKS = [
  { name: "الرئيسية", href: "#home" },
  { name: "خدماتنا", href: "#services" },
  { name: "موقعنا", href: "#location" },
  { name: "اتصل بنا", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-white border-t-2 border-gray-100" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Information */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                <BuildingOfficeIcon className="w-6 h-6 text-blue-600" />
                {CONTACT_INFO.shopName}
              </h3>
              <p className="text-gray-600 font-medium">{CONTACT_INFO.subtitle}</p>
            </div>

            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPinIcon className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 text-sm leading-relaxed">
                  {CONTACT_INFO.address}
                </p>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700 font-medium">
                  {CONTACT_INFO.phone.map((num, idx) => (
                    <React.Fragment key={idx}>
                      <a
                        href={`tel:${num}`}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {num}
                      </a>
                      {idx < CONTACT_INFO.phone.length - 1 && "، "}
                    </React.Fragment>
                  ))}
                </span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-5 h-5 text-gray-500" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-3">
                <ClockIcon className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700 text-sm">
                  {CONTACT_INFO.hours}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">خدماتنا</h4>
            <ul className="space-y-2">
              {SERVICES.map((service, index) => (
                <li key={index} className="text-gray-600 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Call-to-Action */}
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-1">
                هل تحتاج إلى تركيب أو صيانة دش بخميس مشيط؟
              </h4>
              <p className="text-gray-600 text-sm">
                تواصل معنا الآن للحصول على أفضل خدمة تركيب وصيانة دش مع فنيين
                متخصصين
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${CONTACT_INFO.phone[0]}`}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium text-center transition-colors"
              >
                اتصل الآن
              </a>
              <a
                href={`https://wa.me/966558202859`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium text-center transition-colors"
              >
                واتساب
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {CURRENT_YEAR} {CONTACT_INFO.shopName} - جميع الحقوق محفوظة.
            </p>

            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <GlobeAltIcon className="w-4 h-4" />
                المملكة العربية السعودية - خميس مشيط
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Hidden SEO Keywords */}
      <div className="sr-only">
        محل حسن للإلكترونيات يقدم خدمات تركيب دش مركزي وعادي بخميس مشيط،
        تركيب هوائي الدش، صيانة دش ورسيفرات IPTV وHD، بيع رسيفرات وأطباق دش
        عالية الجودة، تركيب كاميرات خميس مشيط وشركة كاميرات تركيب أبها خميس
        مشيط، فني دش وتركيب شاشات خميس مشيط، محل رسيفرات خميس مشيط، رقم فني
        رسيفر ودش تركيب وعامل تصليح دش تركيب، اشتراك قنوات بين سبورت وIPTV،
        تمديد أسلاك دش عالية الجودة، وضبط إشارة الدش باستخدام أحدث الأجهزة.
      </div>
    </footer>
  );
}

export default Footer;
