"use client";

import React from "react";
import Link from "next/link";

export const BUSINESS_NAME = "محل حسن للإلكترونيات";
export const PHONE_NUMBER = "+966558202859";
export const WHATSAPP_NUMBER = "966558202859";

export const telHref = `tel:${PHONE_NUMBER}`;
export const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}`;
export const mapsHref = "https://maps.app.goo.gl/vL2v7rJFLw8nhcPx8";

/* -------------------------------------------------------------------------- */
/*  Inline CTA row — phone / WhatsApp / Google Maps                            */
/* -------------------------------------------------------------------------- */

export function CtaRow({
  showMaps = true,
  className = "",
  service,
}: {
  showMaps?: boolean;
  className?: string;
  service?: string;
}) {
  const waText = service
    ? `${whatsappHref}?text=${encodeURIComponent(
        `مرحباً، أرغب بالاستفسار عن: ${service} في خميس مشيط`,
      )}`
    : whatsappHref;

  return (
    <div
      className={`flex flex-wrap justify-center gap-3 ${className}`}
      dir="rtl"
    >
      <a
        href={telHref}
        data-cta="phone_click"
        aria-label="اتصل بفني الدش الآن"
        className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700"
      >
        📞 اتصل الآن
      </a>
      <a
        href={waText}
        target="_blank"
        rel="noopener noreferrer"
        data-cta="whatsapp_click"
        aria-label="تواصل عبر واتساب"
        className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-green-700"
      >
        💬 تواصل عبر واتساب
      </a>
      {showMaps && <MapsButton />}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Google Maps button                                                        */
/* -------------------------------------------------------------------------- */

export function MapsButton({
  label = "عرض الموقع على خرائط Google",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={mapsHref}
      target="_blank"
      rel="noopener noreferrer"
      data-cta="maps_click"
      aria-label="عرض موقعنا في خميس مشيط على خرائط Google"
      className={`inline-flex items-center gap-2 rounded-full border-2 border-blue-600 px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50 ${className}`}
    >
      📍 {label}
    </a>
  );
}

/* -------------------------------------------------------------------------- */
/*  Sticky mobile contact bar                                                 */
/* -------------------------------------------------------------------------- */

export function MobileContactBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-gray-200 bg-white/95 backdrop-blur md:hidden"
      dir="rtl"
      role="navigation"
      aria-label="أزرار التواصل السريع"
    >
      <a
        href={telHref}
        data-cta="phone_click"
        className="flex flex-col items-center gap-1 py-2.5 text-xs font-semibold text-blue-700"
      >
        <span className="text-lg">📞</span> اتصل
      </a>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        data-cta="whatsapp_click"
        className="flex flex-col items-center gap-1 border-x border-gray-200 py-2.5 text-xs font-semibold text-green-700"
      >
        <span className="text-lg">💬</span> واتساب
      </a>
      <a
        href={mapsHref}
        target="_blank"
        rel="noopener noreferrer"
        data-cta="maps_click"
        className="flex flex-col items-center gap-1 py-2.5 text-xs font-semibold text-gray-700"
      >
        <span className="text-lg">📍</span> الموقع
      </a>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Breadcrumbs (visual only — JSON-LD lives in the page)                     */
/* -------------------------------------------------------------------------- */

export function Breadcrumbs({
  items,
}: {
  items: { name: string; href?: string }[];
}) {
  return (
    <nav
      aria-label="مسار التنقل"
      dir="rtl"
      className="mx-auto max-w-5xl px-6 py-4 text-sm text-gray-500"
    >
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((it, i) => (
          <li key={it.name} className="flex items-center gap-2">
            {it.href ? (
              <Link href={it.href} className="hover:text-blue-600">
                {it.name}
              </Link>
            ) : (
              <span className="text-gray-700">{it.name}</span>
            )}
            {i < items.length - 1 && <span aria-hidden>‹</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* -------------------------------------------------------------------------- */
/*  Related services / internal links block                                   */
/* -------------------------------------------------------------------------- */

export const ALL_SERVICE_LINKS = [
  { href: "/services/installation", label: "تركيب دش وأطباق الأقمار الصناعية" },
  { href: "/services/dishmaintenance", label: "صيانة الدش وضبط الإشارة" },
  { href: "/services/dishrepair", label: "إصلاح أعطال الدش" },
  { href: "/services/centraldish", label: "تركيب الدش المركزي" },
  { href: "/services/receivers", label: "بيع وتركيب الرسيفرات وأطباق الدش" },
  { href: "/services/screens", label: "تركيب الشاشات والتلفزيونات" },
  { href: "/services/cameras", label: "تركيب كاميرات المراقبة" },
  { href: "/services/customersupport", label: "الدعم الفني وخدمة العملاء" },
];

export function RelatedServices({
  exclude,
  title = "خدمات ذات صلة في خميس مشيط",
}: {
  exclude?: string;
  title?: string;
}) {
  const links = ALL_SERVICE_LINKS.filter((l) => l.href !== exclude);
  return (
    <section dir="rtl" className="bg-gray-50 px-6 py-14">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">
          {title}
        </h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="block rounded-lg border border-gray-200 bg-white px-4 py-3 font-medium text-gray-700 transition hover:border-blue-400 hover:text-blue-700"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex justify-center">
          <CtaRow service={title} />
        </div>
      </div>
    </section>
  );
}
