import { business } from "./business";

const { DOMAIN, BUSINESS_NAME, PHONE_NUMBER, CITY_AR, REGION_AR, COUNTRY_CODE } =
  business;

/** Canonical LocalBusiness node — single source of truth for structured data. */
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${DOMAIN}/#business`,
  name: BUSINESS_NAME,
  image: business.OG_IMAGE,
  url: `${DOMAIN}/`,
  telephone: PHONE_NUMBER,
  priceRange: "SAR",
  address: {
    "@type": "PostalAddress",
    streetAddress: business.STREET_ADDRESS,
    addressLocality: CITY_AR,
    addressRegion: REGION_AR,
    postalCode: business.POSTAL_CODE,
    addressCountry: COUNTRY_CODE,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: business.LATITUDE,
    longitude: business.LONGITUDE,
  },
  hasMap: business.GOOGLE_MAPS_URL,
  openingHours: business.OPENING_HOURS,
  areaServed: [
    { "@type": "City", name: "خميس مشيط" },
    ...(business.SERVES_ABHA ? [{ "@type": "City", name: "أبها" }] : []),
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${DOMAIN}/#website`,
  url: `${DOMAIN}/`,
  name: BUSINESS_NAME,
  inLanguage: "ar-SA",
  publisher: { "@id": `${DOMAIN}/#business` },
};

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
    provider: { "@id": `${DOMAIN}/#business` },
    areaServed: [
      { "@type": "City", name: "خميس مشيط" },
      ...(business.SERVES_ABHA ? [{ "@type": "City", name: "أبها" }] : []),
    ],
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

export function faqSchema(qa: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qa.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
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
