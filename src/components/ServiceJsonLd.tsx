import React from "react";
import { serviceSchema, breadcrumbSchema, jsonLd } from "@/config/seo";

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
