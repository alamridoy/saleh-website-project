import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar, Footer } from "@/components";
import { Breadcrumbs, CtaRow, RelatedServices } from "@/components/cta";
import { GUIDES, guideBySlug } from "../guides-data";
import { breadcrumbSchema, faqSchema, jsonLd } from "@/config/seo";
import { business } from "@/config/business";

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const g = guideBySlug(slug);
  if (!g) return {};
  return {
    title: g.title,
    description: g.description,
    alternates: { canonical: `/guides/${g.slug}` },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const g = guideBySlug(slug);
  if (!g) notFound();

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: g.title,
    description: g.description,
    inLanguage: "ar-SA",
    mainEntityOfPage: `${business.DOMAIN}/guides/${g.slug}`,
    author: { "@type": "Organization", name: business.BUSINESS_NAME },
    publisher: { "@id": `${business.DOMAIN}/#business` },
  };

  const faqPairs = g.sections
    .filter((s) => s.h)
    .map((s) => ({ q: s.h as string, a: s.p.join(" ") }));

  return (
    <>
      <Navbar />
      <script {...jsonLd(article)} />
      <script {...jsonLd(faqSchema(faqPairs))} />
      <script
        {...jsonLd(
          breadcrumbSchema([
            { name: "الرئيسية", path: "/" },
            { name: "الدليل", path: "/guides" },
            { name: g.title, path: `/guides/${g.slug}` },
          ]),
        )}
      />

      <main dir="rtl">
        <Breadcrumbs
          items={[
            { name: "الرئيسية", href: "/" },
            { name: "الدليل", href: "/guides" },
            { name: g.title },
          ]}
        />

        <article className="mx-auto max-w-3xl px-6 py-10">
          <h1 className="mb-4 text-3xl font-extrabold leading-snug text-gray-900">
            {g.title}
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-gray-700">{g.intro}</p>

          {g.sections.map((s, i) => (
            <section key={i} className="mb-8">
              {s.h && (
                <h2 className="mb-3 text-xl font-bold text-gray-900">{s.h}</h2>
              )}
              {s.p.map((para, j) => (
                <p key={j} className="mb-3 leading-relaxed text-gray-700">
                  {para}
                </p>
              ))}
            </section>
          ))}

          <div className="my-10 rounded-xl bg-blue-50 p-6 text-center">
            <p className="mb-4 font-semibold text-gray-900">
              تحتاج فني دش في خميس مشيط؟
            </p>
            <CtaRow />
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h2 className="mb-3 text-lg font-bold text-gray-900">
              خدمات ذات صلة
            </h2>
            <ul className="flex flex-wrap gap-3">
              {g.related.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="inline-block rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:border-blue-400 hover:text-blue-700"
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <Link href="/guides" className="text-sm font-semibold text-blue-700 hover:underline">
              ← جميع مقالات الدليل
            </Link>
          </div>
        </article>

        <RelatedServices />
      </main>
      <Footer />
    </>
  );
}
