"use client";

import React from "react";
import { CtaRow } from "@/components/cta";

const Hero: React.FC = () => {
  return (
    <section
      className="relative flex min-h-[85vh] w-full items-center bg-[url('/image/course.png')] bg-cover bg-center bg-no-repeat"
      aria-label="فني دش خميس مشيط - تركيب وصيانة الدش والرسيفرات"
    >
      <div className="absolute inset-0 h-full w-full bg-gray-900/65" />

      <div className="container relative z-10 mx-auto grid place-items-center px-6 py-24 text-center">
        <h1 className="text-3xl font-extrabold leading-snug text-white md:text-5xl lg:text-6xl">
          فني دش خميس مشيط
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-100 md:text-xl">
          محل حسن للإلكترونيات يقدّم خدمات تركيب وصيانة الدش والرسيفرات في خميس
          مشيط: تركيب الدش العادي والمركزي، ضبط إشارة نايل سات وعرب سات، برمجة
          الرسيفرات، تركيب الشاشات وكاميرات المراقبة، وإعداد أجهزة IPTV. خدمة سريعة
          في نفس اليوم بأسعار واضحة.
        </p>

        <CtaRow className="mt-10" />

        <p className="mt-6 text-sm text-gray-300">
          نخدم مدينة خميس مشيط ومحيطها — اتصل أو راسلنا واتساب على{" "}
          <span dir="ltr">0558202859</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
