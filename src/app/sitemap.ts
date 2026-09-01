import type { MetadataRoute } from "next";
import { business } from "@/config/business";
import { GUIDES } from "./guides/guides-data";

export const dynamic = "force-static";

const baseUrl = business.DOMAIN;

const SERVICE_SLUGS = [
  "installation",
  "dishmaintenance",
  "dishrepair",
  "centraldish",
  "receivers",
  "screens",
  "cameras",
  "customersupport",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: `${baseUrl}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    {
      url: `${baseUrl}/location/khamis-mushait`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...SERVICE_SLUGS.map((s) => ({
      url: `${baseUrl}/services/${s}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${baseUrl}/guides`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...GUIDES.map((g) => ({
      url: `${baseUrl}/guides/${g.slug}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
