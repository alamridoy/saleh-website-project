import React from "react";
import { BUSINESS_NAME } from "./cta";

const DOMAIN = "https://bestdishelectronics.store";

const AREA_SERVED = [
  { "@type": "City", name: "خميس مشيط" },
  { "@type": "City", name: "أبها" },
];

export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    serviceType: opts.name,
    url: `${DOMAIN}${opts.path}`,
    provider: { "@type": "LocalBusiness", name: BUSINESS_NAME },
    areaServed: AREA_SERVED,
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${DOMAIN}${it.path}`,
    })),
  };
}

/** Small helper to render a JSON-LD <script> tag. */
export function jsonLd(data: unknown) {
  return {
    type: "application/ld+json" as const,
    dangerouslySetInnerHTML: { __html: JSON.stringify(data) },
  };
}

/**
 * Renders Service + BreadcrumbList JSON-LD for a service landing page.
 * Keep `name` / `description` aligned with the page's visible <h1> and intro.
 */
export function ServiceJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return (
    <>
      <script {...jsonLd(serviceSchema({ name, description, path }))} />
      <script
        {...jsonLd(
          breadcrumbSchema([
            { name: "الرئيسية", path: "/" },
            { name: "الخدمات", path: "/#services" },
            { name, path },
          ]),
        )}
      />
    </>
  );
}

export default ServiceJsonLd;
