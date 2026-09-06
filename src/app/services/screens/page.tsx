import React from "react";
import { RelatedServices, Breadcrumbs } from "@/components/cta";
import { ServiceJsonLd } from "@/components/ServiceJsonLd";
import type { Metadata } from "next";
import { Footer } from "@/components";

export const metadata: Metadata = {
  title: "فني دش وتركيب شاشات خميس مشيط | محل حسن للإلكترونيات",
  description:
    "فني دش وتركيب شاشات خميس مشيط: تركيب الشاشات على الحائط وتوصيلها بالدش والرسيفر بجودة عالية. محل حسن للإلكترونيات. اتصل 0558202859.",
  alternates: { canonical: "/services/screens" },
};

export default function ScreensPage() {
  const service = {
    title: "فني دش وتركيب شاشات خميس مشيط",
    subtitle: "تركيب الشاشات على الحائط وتوصيلها بأنظمة الدش والرسيفر باحترافية في خميس مشيط",
    image: "/image/services/six.jpg",
    details: `تركيب شاشات احترافي في خميس مشيط
يقدم محل حسن للإلكترونيات خدمة فني دش وتركيب شاشات في خميس مشيط، تشمل تثبيت الشاشة على الحائط بحامل مناسب وبالمقاس الصحيح، مع توصيلها الكامل بأنظمة الدش والرسيفر.
نحرص على إخفاء الأسلاك بشكل مرتب وضبط إعدادات الصورة والصوت للحصول على أفضل تجربة مشاهدة، سواء للمنازل أو المحلات والمكاتب.`,
    steps: [
      {
        title: "1. تحديد الموقع والمقاس",
        description: [
          "معاينة الحائط واختيار الارتفاع والزاوية المناسبة لمشاهدة مريحة",
          "اختيار نوع الحامل المناسب لمقاس ووزن الشاشة",
        ],
      },
      {
        title: "2. التركيب والتوصيل",
        description: [
          "تثبيت حامل الشاشة على الحائط بإحكام وأمان",
          "توصيل الشاشة بالدش والرسيفر ومكبرات الصوت مع إخفاء الأسلاك",
        ],
      },
      {
        title: "3. الضبط والتجربة",
        description: [
          "ضبط إعدادات الصورة والصوت للحصول على أفضل جودة عرض",
          "اختبار جميع القنوات والمداخل قبل تسليم العمل",
        ],
      },
    ],
    keywords: [
      "فني دش وتركيب شاشات خميس مشيط",
      "تركيب شاشات على الحائط خميس مشيط",
      "محل حسن للإلكترونيات",
      "تركيب دش خميس مشيط",
      "محل رسيفرات خميس مشيط",
      "رقم فني رسيفر ودش تركيب",
      "عامل تصليح دش تركيب",
      "اشتراك قنوات بين سبورت",
      "تركيب كاميرات خميس مشيط",
      "أفضل محل دش قريب منك بخميس مشيط",
    ],
    tips: [
      "اختر ارتفاع الشاشة بما يناسب مستوى النظر أثناء الجلوس.",
      "استخدم حاملًا مناسبًا لوزن ومقاس الشاشة لتفادي السقوط.",
      "أخفِ الأسلاك داخل مجرى أو غطاء لمظهر مرتب.",
      "تجنب تركيب الشاشة أمام مصدر ضوء مباشر يقلل وضوح الصورة.",
      "تأكد من تهوية جيدة خلف الشاشة لتفادي ارتفاع الحرارة.",
    ],
  };

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <ServiceJsonLd
        name={"تركيب شاشات خميس مشيط"}
        description={"تركيب الشاشات والتلفزيونات على الجدار في خميس مشيط وتوصيلها بالدش والرسيفر وضبط الصورة والصوت."}
        path="/services/screens"
      />
      <Breadcrumbs
        items={[
          { name: "الرئيسية", href: "/" },
          { name: "الخدمات", href: "/#services" },
          { name: "تركيب شاشات خميس مشيط" },
        ]}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
        <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto text-blue-100">{service.subtitle}</p>
      </section>

      {/* Details Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-gray-800 leading-relaxed space-y-6">
          <p className="whitespace-pre-line">{service.details}</p>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto flex justify-center">
          <img
            src={service.image}
            alt={service.title}
            className="w-full md:w-2/3 rounded-lg shadow-lg object-cover"
          />
        </div>
      </section>

      {/* Steps Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-8 text-gray-800">
          <h2 className="text-2xl font-bold mb-6 text-center">خطوات تركيب الشاشة</h2>
          {service.steps.map((step, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="whitespace-pre-line">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-gray-800 leading-relaxed space-y-6">
          <p>
            <strong>لماذا تختار محل حسن للإلكترونيات لتركيب الشاشات في خميس مشيط؟</strong>
            <br />
            فنيون محترفون بخبرة في تركيب جميع مقاسات الشاشات.
            <br />
            توصيل كامل مع أنظمة الدش والرسيفر في نفس الزيارة.
            <br />
            إخفاء أسلاك مرتب لمظهر نظيف واحترافي.
            <br />
            أسعار مناسبة وواضحة بدون رسوم خفية.
          </p>

          <p>
            <strong>رقم فني تركيب الشاشات والدش في خميس مشيط</strong>
            <br />
            للتواصل مع <strong>عامل تصليح دش تركيب</strong> أو حجز موعد تركيب
            شاشة، اتصل على <span dir="ltr">0558202859</span> وسيصل الفني إلى
            موقعك في نفس اليوم.
          </p>

          <p>
            <strong>نطاق الخدمة في خميس مشيط</strong>
            <br />
            تتوفر خدمة تركيب الشاشات والدش لدينا في جميع أنحاء خميس مشيط، للمنازل
            والمحلات والمكاتب على حد سواء.
          </p>
        </div>
      </section>

      {/* Tips Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold mb-6 text-center">نصائح لتركيب الشاشة بأمان</h2>
        <ul className="space-y-3 list-disc list-inside text-lg text-gray-700">
          {service.tips.map((tip, idx) => (
            <li key={idx}>{tip}</li>
          ))}
        </ul>
      </section>

      <RelatedServices exclude="/services/screens" />

      <Footer />
    </div>
  );
}
