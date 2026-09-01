"use client";

import React from "react";
import Link from "next/link";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { business, telHref, whatsappHref, mapsHref, addressLineAr } from "@/config/business";

const CURRENT_YEAR = new Date().getFullYear();

const SERVICE_LINKS = [
  { href: "/services/installation", name: "تركيب دش وأطباق الأقمار الصناعية" },
  { href: "/services/dishmaintenance", name: "صيانة الدش وضبط الإشارة" },
  { href: "/services/centraldish", name: "تركيب الدش المركزي" },
  { href: "/services/receivers", name: "الرسيفرات وأطباق الدش" },
  { href: "/services/screens", name: "تركيب الشاشات والتلفزيونات" },
  { href: "/services/cameras", name: "تركيب كاميرات المراقبة" },
];

const QUICK_LINKS = [
  { name: "الرئيسية", href: "/" },
  { name: "خدماتنا", href: "/#services" },
  { name: "فني دش خميس مشيط", href: "/location/khamis-mushait" },
  { name: "دليل الأعطال", href: "/guides" },
  { name: "اتصل بنا", href: "/#contact" },
];

export function Footer() {
  return (
    <footer className="border-t-2 border-gray-100 bg-white" dir="rtl">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company info */}
          <div className="lg:col-span-2">
            <h3 className="mb-2 flex items-center gap-2 text-xl font-bold text-gray-900">
              <BuildingOfficeIcon className="h-6 w-6 text-blue-600" />
              {business.BUSINESS_NAME}
            </h3>
            <p className="mb-6 font-medium text-gray-600">{business.TAGLINE}</p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPinIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-500" />
                <p className="text-sm leading-relaxed text-gray-700">
                  {business.CITY_AR} - {business.STREET_ADDRESS}
                  <br />
                  {addressLineAr}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <PhoneIcon className="h-5 w-5 text-gray-500" />
                <span className="font-medium text-gray-700" dir="ltr">
                  <a href={telHref} className="hover:text-blue-600">
                    {business.PHONE_DISPLAY}
                  </a>
                </span>
              </div>

              <div className="flex items-center gap-3">
                <EnvelopeIcon className="h-5 w-5 text-gray-500" />
                <a
                  href={`mailto:${business.EMAIL}`}
                  className="text-gray-700 hover:text-blue-600"
                >
                  {business.EMAIL}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <ClockIcon className="h-5 w-5 text-gray-500" />
                <span className="text-sm text-gray-700">
                  {business.OPENING_HOURS_AR}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <GlobeAltIcon className="h-5 w-5 text-gray-500" />
                <a
                  href={mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="maps_click"
                  className="text-sm font-medium text-blue-700 hover:underline"
                >
                  عرض الموقع على خرائط Google
                </a>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 font-semibold text-gray-900">روابط سريعة</h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-blue-600"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-semibold text-gray-900">خدماتنا</h4>
            <ul className="space-y-2">
              {SERVICE_LINKS.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-gray-600 hover:text-blue-600"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mb-8 rounded-lg bg-blue-50 p-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>
              <h4 className="mb-1 text-lg font-semibold text-gray-900">
                هل تحتاج إلى فني دش في خميس مشيط؟
              </h4>
              <p className="text-sm text-gray-600">
                تركيب، صيانة، برمجة رسيفر أو ضبط إشارة — تواصل معنا الآن.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={telHref}
                data-cta="phone_click"
                className="rounded-lg bg-blue-600 px-6 py-3 text-center font-medium text-white transition hover:bg-blue-700"
              >
                اتصل الآن
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="whatsapp_click"
                className="rounded-lg bg-green-600 px-6 py-3 text-center font-medium text-white transition hover:bg-green-700"
              >
                واتساب
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <p className="text-center text-sm text-gray-500">
            &copy; {CURRENT_YEAR} {business.BUSINESS_NAME} — جميع الحقوق محفوظة.
            خميس مشيط، منطقة عسير، المملكة العربية السعودية.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
