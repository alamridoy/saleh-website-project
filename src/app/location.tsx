"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

const maps = [
  {
    id: 1,
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3788.0270727043794!2d42.72107617592393!3d18.300370075861885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15fb5900275aabe3%3A0x66156653ca70e04d!2z2YXYrdmEINi12KfZhNit2Kkg2YXYrdmF2K8g2KPYrdmF2K8g2KfZhNiq2KzYp9ix2YrYqSjYqtix2YPYqCDYr9mK2LQg2K7ZhdmK2LMg2YXYtNmK2Lcp!5e0!3m2!1sen!2sbd!4v1757575459767!5m2!1sen!2sbd",
    title: "محل صالحة محمد أحمد التجارية - تركيب دش بخميس مشيط",
  },
];

export function MapSection() {
  return (
    <section className="px-8 pt-40 pb-20" dir="rtl">
      {/* Title */}
      <div className="flex mb-16 flex-col items-center">
        <Typography
          variant="h2"
          className="text-center mb-2"
          color="blue-gray"
          {...({} as any)}
        >
          مواقعنا
        </Typography>
        <Typography
          variant="lead"
          className="mb-3 w-full text-center font-normal !text-gray-500 lg:w-10/12"
          {...({} as any)}
        >
          يمكنك العثور على موقع{" "}
          <span className="font-semibold text-blue-600">
            محل صالحة محمد أحمد التجارية
          </span>{" "}
          بخميس مشيط من خلال الخريطة أدناه.
        </Typography>
      </div>

      {/* Map */}
      <div className="container mx-auto grid gap-10 lg:grid-cols-1">
        {maps.map((map) => (
          <div
            key={map.id}
            className="w-full h-[350px] rounded-lg overflow-hidden shadow-lg"
          >
            <iframe
              src={map.src}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={map.title}
            />
          </div>
        ))}
      </div>

      {/* ✅ Hidden SEO text */}
      <div className="sr-only">
        موقع محل صالحة محمد أحمد التجارية في خميس مشيط - شارع الثلاثين بحي
        الخالدية، مقابل مدرسة الخالدية الابتدائية. خدمات تركيب وصيانة الدش،
        بيع رسيفرات IPTV وHD، وتمديد أسلاك عالية الجودة.
      </div>
    </section>
  );
}

export default MapSection;
