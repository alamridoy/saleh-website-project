"use client";

import React from "react";
import { MapsButton } from "@/components/cta";
import { business, addressLineAr } from "@/config/business";

export function MapSection() {
  return (
    <section className="px-6 py-16" dir="rtl">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl">
          موقعنا في خميس مشيط
        </h2>
        <p className="mb-8 leading-relaxed text-gray-600">
          يمكنك العثور على موقع{" "}
          <span className="font-semibold text-blue-700">
            {business.BUSINESS_NAME}
          </span>{" "}
          في {addressLineAr} من خلال الخريطة أدناه، أو فتحه مباشرة في خرائط
          Google.
        </p>
      </div>

      <div className="mx-auto max-w-4xl">
        <div className="h-[350px] w-full overflow-hidden rounded-lg shadow-lg">
          <iframe
            src={business.GOOGLE_MAPS_EMBED}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`${business.BUSINESS_NAME} - خميس مشيط`}
          />
        </div>
        <div className="mt-6 flex justify-center">
          <MapsButton />
        </div>
      </div>
    </section>
  );
}

export default MapSection;
