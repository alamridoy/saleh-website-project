import React from "react";
import type { Metadata } from "next";
import { Footer } from "@/components";

export const metadata: Metadata = {
  title: "تركيب كاميرات خميس مشيط | محل حسن للإلكترونيات",
  description:
    "تركيب كاميرات مراقبة للمنازل والمحلات والشركات في خميس مشيط، مع ربط الكاميرات بالجوال للمتابعة المباشرة. محل حسن للإلكترونيات. اتصل 0558202859.",
  alternates: { canonical: "/services/cameras" },
};

export default function CamerasPage() {
  const service = {
    title: "تركيب كاميرات خميس مشيط",
    subtitle: "تركيب كاميرات مراقبة احترافية للمنازل والمحلات والشركات في خميس مشيط",
    image: "/image/services/eight.jpg",
    details: `أهمية تركيب كاميرات المراقبة
تركيب كاميرات المراقبة بشكل صحيح يضمن تغطية شاملة وآمنة لمنزلك أو محلك التجاري، مع تسجيل واضح ليلًا ونهارًا.
يقدم محل حسن للإلكترونيات في خميس مشيط تركيب كاميرات المراقبة الداخلية والخارجية مع ربطها بأجهزة التسجيل وتطبيق الجوال، لمتابعة البث المباشر أينما كنت.
يتميز فنيّو المحل بخبرة في اختيار أفضل مواقع الكاميرات وزوايا التصوير لتغطية كل نقاط الدخول والمناطق الحساسة.`,
    steps: [
      {
        title: "1. تقييم الموقع",
        description: [
          "تحديد عدد الكاميرات ومواقعها المناسبة بناءً على مساحة المنزل أو المحل ونقاط الدخول",
          "اختيار نوع الكاميرات المناسب: داخلية، خارجية، أو رؤية ليلية",
        ],
      },
      {
        title: "2. تركيب الكاميرات والأجهزة",
        description: [
          "تركيب الكاميرات وتمديد الأسلاك بشكل احترافي ومرتب",
          "تركيب جهاز التسجيل (DVR/NVR) وتوصيله بجميع الكاميرات ومصدر الطاقة",
        ],
      },
      {
        title: "3. الربط والتفعيل",
        description: [
          "ربط النظام بتطبيق الجوال لمتابعة البث المباشر عن بعد",
          "ضبط زوايا التصوير وجودة التسجيل واختبار عمل جميع الكاميرات",
        ],
      },
    ],
    keywords: [
      "تركيب كاميرات خميس مشيط",
      "محل حسن للإلكترونيات",
      "كاميرات مراقبة خميس مشيط",
      "تركيب كاميرات مراقبة للمنازل خميس مشيط",
      "تركيب كاميرات مراقبة للمحلات خميس مشيط",
      "فني تركيب كاميرات قريب مني خميس مشيط",
      "ربط كاميرات المراقبة بالجوال",
      "أجهزة تسجيل DVR NVR خميس مشيط",
      "بيع رسيفرات وأطباق دش عالية الجودة",
      "أفضل محل دش قريب منك بخميس مشيط",
    ],
    tips: [
      "اختر مواقع الكاميرات بحيث تغطي جميع المداخل والنوافذ.",
      "استخدم كاميرات برؤية ليلية للمناطق ضعيفة الإضاءة.",
      "افحص جودة التسجيل والتخزين بشكل دوري.",
      "تأكد من تثبيت الكاميرات بإحكام لتفادي اهتزاز الصورة.",
      "حدّث تطبيق المتابعة على الجوال باستمرار.",
      "نظّف عدسات الكاميرات الخارجية بشكل دوري من الغبار.",
    ],
  };

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
        <h2 className="text-xl md:text-2xl mb-6">{service.subtitle}</h2>
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
          <h2 className="text-2xl font-bold mb-6 text-center">خطوات تركيب كاميرات المراقبة</h2>
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
            <strong>لماذا تختار محل حسن للإلكترونيات لتركيب الكاميرات في خميس مشيط؟</strong>
            <br />
            فنيون محترفون يمتلكون خبرة عملية في جميع أنواع أنظمة المراقبة.
            <br />
            تركيب موثوق للمنازل والمكاتب والمحلات التجارية.
            <br />
            ربط سريع مع تطبيق الجوال للمتابعة أينما كنت.
            <br />
            المساعدة في اختيار عدد ونوع الكاميرات المناسب لاحتياجاتك.
            <br />
            أسعار مناسبة وواضحة بدون أي رسوم خفية.
          </p>

          <p>
            <strong>نطاق الخدمة في خميس مشيط</strong>
            <br />
            تتوفر خدمات تركيب كاميرات المراقبة لدينا في جميع أنحاء خميس مشيط.
            <br />
            سواء للاستخدام السكني أو التجاري، نضمن لك خدمة موثوقة، احترافية، وفي الوقت المناسب.
          </p>
        </div>
      </section>

      {/* Service Highlights Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-8 text-gray-800 leading-relaxed">
          <h2 className="text-2xl font-bold text-center mb-8">
            خدمات تركيب كاميرات المراقبة في خميس مشيط
          </h2>

          <div>
            <h3 className="text-xl font-semibold mb-2">🔹 تركيب كاميرات المنازل خميس مشيط</h3>
            <p>
              تركيب كاميرات داخلية وخارجية للمنازل مع تغطية شاملة لجميع المداخل والنوافذ
              وربطها بتطبيق الجوال.
            </p>
            <p className="mt-2 font-bold text-blue-600">
              📞 <span dir="ltr">+966 558202859</span> — خميس مشيط
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">🔹 تركيب كاميرات المحلات والشركات خميس مشيط</h3>
            <p>
              أنظمة مراقبة احترافية للمحلات التجارية والشركات، مع أجهزة تسجيل عالية الدقة
              وتخزين موثوق.
            </p>
            <p className="mt-2 font-bold text-blue-600">
              📞 <span dir="ltr">+966 558202859</span> — خميس مشيط
            </p>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold mb-6 text-center">نصائح لكاميرات المراقبة</h2>
        <ul className="space-y-3 list-disc list-inside text-lg text-gray-700">
          {service.tips.map((tip, idx) => (
            <li key={idx}>{tip}</li>
          ))}
        </ul>
      </section>

      {/* Keywords Section */}
      <section className="bg-white shadow-inner py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">كلمات مفتاحية متعلقة بتركيب الكاميرات</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-lg text-gray-700">
            {service.keywords.map((keyword, idx) => (
              <li key={idx}>🔹 {keyword}</li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}
