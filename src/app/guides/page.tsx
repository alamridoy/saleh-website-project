import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Navbar, Footer } from "@/components";
import { Breadcrumbs, CtaRow } from "@/components/cta";
import { GUIDES } from "./guides-data";
import { breadcrumbSchema, jsonLd } from "@/config/seo";

export const metadata: Metadata = {
  title: "دليل حلول مشاكل الدش والرسيفر",
  description:
    "مقالات إرشادية عن أعطال الدش والرسيفر: رسالة لا توجد إشارة، اختفاء القنوات، ضعف الإشارة، ضبط نايل سات، إعادة برمجة الرسيفر، وموعد صيانة الدش في خميس مشيط.",
  alternates: { canonical: "/guides" },
};

export default function GuidesIndex() {
  return (
    <>
      <Navbar />
      <script
        {...jsonLd(
          breadcrumbSchema([
            { name: "الرئيسية", path: "/" },
            { name: "الدليل", path: "/guides" },
          ]),
        )}
      />
      <main dir="rtl">
        <Breadcrumbs items={[{ name: "الرئيسية", href: "/" }, { name: "الدليل" }]} />

        <section className="mx-auto max-w-4xl px-6 py-10">
          <h1 className="mb-3 text-3xl font-extrabold text-gray-900">
            دليل حلول مشاكل الدش والرسيفر
          </h1>
          <p className="mb-10 leading-relaxed text-gray-700">
            شرح عملي لأكثر أعطال أنظمة الاستقبال شيوعاً وكيفية فحصها بنفسك قبل طلب
            الفني. وإذا احتجت مساعدة ميدانية في خميس مشيط، تواصل معنا مباشرة.
          </p>

          <ul className="space-y-4">
            {GUIDES.map((g) => (
              <li key={g.slug}>
                <Link
                  href={`/guides/${g.slug}`}
                  className="block rounded-xl border border-gray-200 p-5 transition hover:border-blue-400"
                >
                  <h2 className="mb-1 text-lg font-bold text-gray-900">
                    {g.title}
                  </h2>
                  <p className="text-sm text-gray-600">{g.description}</p>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <CtaRow />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
