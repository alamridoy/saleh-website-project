import React from "react";
import { RelatedServices, Breadcrumbs } from "@/components/cta";
import { ServiceJsonLd } from "@/components/ServiceJsonLd";
import type { Metadata } from "next";
import { Footer } from "@/components";

export const metadata: Metadata = {
  title: "برمجة وصيانة رسيفرات خميس مشيط | بيع رسيفرات وأطباق دش",
  description:
    "برمجة وصيانة الرسيفرات في خميس مشيط: تحديث السوفت وير، إعادة البحث عن القنوات، وحل الأعطال، مع بيع وتركيب الرسيفرات وأطباق الدش. اتصل أو واتساب 0558202859.",
  alternates: { canonical: "/services/receivers" },
};

export default function ReceiversPage() {
  const service = {
    title: "برمجة وصيانة رسيفرات خميس مشيط",
    subtitle: "برمجة الرسيفرات وتحديثها وبيع وتركيب الرسيفرات وأطباق الدش في خميس مشيط",
    image: "/image/services/seven.jpg",
    details: `محل رسيفرات وأطباق دش موثوق في خميس مشيط
يوفر محل حسن للإلكترونيات مجموعة واسعة من رسيفرات IPTV وHD وأطباق الدش عالية الجودة بأسعار تنافسية.
نساعدك في اختيار الجهاز والطبق المناسب حسب باقات القنوات المطلوبة وقوة الإشارة في منطقتك، مع خدمة تركيب وضبط احترافية فور الشراء.
جميع الأجهزة المعروضة أصلية ومضمونة، مع دعم فني مستمر بعد البيع.`,
    steps: [
      {
        title: "1. اختيار الجهاز المناسب",
        description: [
          "مساعدتك في اختيار رسيفر IPTV أو HD حسب باقات القنوات وتفضيلات المشاهدة",
          "اختيار طبق دش بالحجم والجودة المناسبة لموقع السكن أو المحل",
        ],
      },
      {
        title: "2. الشراء والتركيب",
        description: [
          "توفير الجهاز والطبق بأسعار واضحة بدون رسوم خفية",
          "تركيب فوري مع ضبط الإشارة والترددات للحصول على أفضل جودة صورة وصوت",
        ],
      },
      {
        title: "3. الضمان والدعم الفني",
        description: [
          "ضمان على جميع الأجهزة المباعة",
          "دعم فني مستمر لأي استفسار أو عطل بعد الشراء",
        ],
      },
    ],
    keywords: [
      "بيع رسيفرات وأطباق دش عالية الجودة",
      "أفضل محل دش قريب منك بخميس مشيط",
      "محل رسيفرات خميس مشيط",
      "محل تركيب دش خميس مشيط",
      "رسيفرات IPTV خميس مشيط",
      "رسيفرات HD خميس مشيط",
      "اطباق دش خميس مشيط",
      "صيانة دش ورسيفرات IPTV وHD",
      "شركة تركيب دش ابها خميس",
      "محل حسن للإلكترونيات",
    ],
    tips: [
      "اختر الرسيفر بناءً على باقات القنوات التي تحتاجها فعليًا.",
      "تأكد من توافق الطبق مع قوة الإشارة في منطقتك.",
      "احتفظ بفاتورة الشراء للاستفادة من الضمان.",
      "حدّث برنامج الرسيفر بشكل دوري لأفضل أداء.",
      "استشر الفني قبل الشراء لاختيار المقاس المناسب للطبق.",
    ],
  };

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <ServiceJsonLd
        name={"برمجة وصيانة رسيفرات خميس مشيط"}
        description={"بيع وتركيب وبرمجة الرسيفرات وأطباق الدش في خميس مشيط، تحديث السوفت وير وإعادة ترتيب القنوات."}
        path="/services/receivers"
      />
      <Breadcrumbs
        items={[
          { name: "الرئيسية", href: "/" },
          { name: "الخدمات", href: "/#services" },
          { name: "برمجة وصيانة رسيفرات خميس مشيط" },
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
          <h2 className="text-2xl font-bold mb-6 text-center">خطوات شراء وتركيب الرسيفر والطبق</h2>
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
            <strong>لماذا تختار محل حسن للإلكترونيات لشراء الرسيفرات والأطباق؟</strong>
            <br />
            أجهزة أصلية ومضمونة من موردين موثوقين.
            <br />
            مساعدة مجانية في اختيار الجهاز والطبق المناسبين لاحتياجاتك.
            <br />
            تركيب وضبط فوري بعد الشراء دون تأخير.
            <br />
            أسعار تنافسية وواضحة بدون رسوم خفية.
            <br />
            دعم فني مستمر بعد البيع.
          </p>

          <p>
            <strong>نطاق الخدمة في خميس مشيط</strong>
            <br />
            يتوفر محل الرسيفرات وأطباق الدش لدينا في جميع أنحاء خميس مشيط.
            <br />
            سواء للاستخدام السكني أو التجاري، نضمن لك جهازًا مناسبًا وخدمة موثوقة.
          </p>
        </div>
      </section>

      {/* Service Highlights Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-8 text-gray-800 leading-relaxed">
          <h2 className="text-2xl font-bold text-center mb-8">
            محل رسيفرات وأطباق دش في خميس مشيط
          </h2>

          <div>
            <h3 className="text-xl font-semibold mb-2">🔹 بيع رسيفرات IPTV وHD خميس مشيط</h3>
            <p>
              مجموعة متنوعة من رسيفرات IPTV وHD المتوافقة مع جميع باقات القنوات، مع تفعيل
              وضبط فوري.
            </p>
            <p className="mt-2 font-bold text-blue-600">
              📞 <span dir="ltr">+966 558202859</span> — خميس مشيط
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">🔹 بيع أطباق دش عالية الجودة خميس مشيط</h3>
            <p>
              أطباق دش بمقاسات مختلفة تناسب جميع المنازل والمباني التجارية، مع تركيب احترافي
              وضبط دقيق للإشارة.
            </p>
            <p className="mt-2 font-bold text-blue-600">
              📞 <span dir="ltr">+966 558202859</span> — خميس مشيط
            </p>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold mb-6 text-center">نصائح قبل شراء رسيفر أو طبق دش</h2>
        <ul className="space-y-3 list-disc list-inside text-lg text-gray-700">
          {service.tips.map((tip, idx) => (
            <li key={idx}>{tip}</li>
          ))}
        </ul>
      </section>

      <RelatedServices exclude="/services/receivers" />

      <Footer />
    </div>
  );
}
