"use client";

import React from "react";
import { Button } from "@material-tailwind/react";
import Script from "next/script";

const Hero: React.FC = () => {
  return (
    <section
      className="relative min-h-screen w-full bg-[url('/image/course.png')] bg-cover bg-no-repeat"
      role="banner"
      aria-label="فني دش بخميس مشيط - تركيب وصيانة الدش"
    >
      {/* Overlay */}
      <div className="absolute inset-0 h-full w-full bg-gray-900/60" />

      {/* Content */}
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">

          {/* ✅ Main SEO H1 */}
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold text-center leading-snug">
            محل حسن للإلكترونيات
            شركة تركيب دش ابها خميس
            تركيب دش خميس مشيط وابها
          </h1>

          {/* ✅ Supporting keywords in visible text */}
          <p className="text-white mt-6 mb-10 w-full md:max-w-full lg:max-w-3xl text-center leading-relaxed">
            محل تركيب دش خميس مشيط
            فني دش خميس مشيط
            أفضل محل دش قريب منك بخميس مشيط
            تركيب دش مركزي وعادي بخميس مشيط
            تركيب هوائي الدش في خميس مشيط
            صيانة دش ورسيفرات IPTV وHD
            بيع رسيفرات وأطباق دش عالية الجودة
            تركيب كاميرات خميس مشيط
            شركة تركيب دش ابها خميس
          </p>

          {/* ✅ Call-to-Action */}
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              variant="gradient"
              color="white"
              onClick={() => (window.location.href = "tel:+966558202859")}
              {...({} as React.ComponentProps<typeof Button>)}
              aria-label="اتصل الآن فني دش خميس مشيط"
            >
              📞 اتصل الآن
            </Button>

            <Button
              variant="gradient"
              color="green"
              onClick={() =>
                (window.location.href = "https://wa.me/966558202859")
              }
              {...({} as React.ComponentProps<typeof Button>)}
              aria-label="تواصل عبر واتساب فني دش خميس مشيط"
            >
              💬 واتساب
            </Button>
          </div>

          {/* ✅ Hidden SEO text with all keywords */}
          <div className="sr-only">
            فني دش خميس مشيط، صيانة وتركيب دش خميس مشيط، صيانة خميس مشيط،
            محل دش خميس مشيط، محلات الدش خميس مشيط، محل تركيب دش خميس مشيط،
            افضل خدمة فني دش بخميس مشيط، لدينا فنيين متخصصين بصيانة وتركيب
            الدش بخميس مشيط، تركيب الدش بخميس مشيط، فني دش قريب مني خميس مشيط،
            أفضل محل دش قريب منك بخميس مشيط، تركيب دش مركزي وعادي بخميس مشيط،
            تركيب هوائي الدش في خميس مشيط، شركة تركيب دش ابها خميس، محل حسن
            للإلكترونيات، رسيفرات IPTV، صيانة دش ورسيفرات IPTV وHD، بيع
            رسيفرات وأطباق دش عالية الجودة، تركيب كاميرات خميس مشيط، فني
            تركيب أطباق الأقمار الصناعية بالقرب مني في خميس مشيط، خدمات
            تركيب وصيانة الدش بخميس مشيط، تغطي خدماتنا جميع أحياء ومناطق خميس مشيط.
          </div>
        </div>
      </div>

      {/* ✅ Structured Data for SEO */}
      <Script id="localbusiness-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "محل حسن للإلكترونيات – فني دش بخميس مشيط",
          image: "https://bestdishelectronics.store/image/course.png",
          "@id": "https://bestdishelectronics.store",
          url: "https://bestdishelectronics.store",
          telephone: "+966558202859",
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "خميس مشيط - شارع الثلاثين - مقابل مدرسة الخالدية الابتدائية",
            addressLocality: "خميس مشيط",
            addressRegion: "عسير",
            postalCode: "61961",
            addressCountry: "SA",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 18.30037,
            longitude: 42.72107,
          },
          openingHours: "Mo-Su 00:00-23:59",
          sameAs: [
            "https://wa.me/966558202859",
            "tel:+966558202859",
            "mailto:mdparvez.ahmed.509@gmail.com",
          ],
          priceRange: "$$",
          description:
            "فني دش بخميس مشيط متخصص في تركيب وصيانة الدش، بيع رسيفرات وأطباق دش عالية الجودة IPTV وHD، تركيب كاميرات مراقبة، تمديد أسلاك عالية الجودة، وضبط الإشارة باستخدام أحدث الأجهزة.",
        })}
      </Script>
    </section>
  );
};

export default Hero;
