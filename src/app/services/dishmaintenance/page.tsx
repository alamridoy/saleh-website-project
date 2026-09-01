import React from "react";
import { RelatedServices, Breadcrumbs } from "@/components/cta";
import { ServiceJsonLd } from "@/components/ServiceJsonLd";
import { Footer } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "صيانة دش خميس مشيط | ضبط إشارة نايل سات وعرب سات",
  description:
    "صيانة الدش في خميس مشيط: فحص الطبق والكابلات ووحدة الـ LNB، ضبط إشارة نايل سات وعرب سات، وحل مشاكل ضعف الاستقبال والتقطيع. اتصل أو واتساب 0558202859.",
  alternates: { canonical: "/services/dishmaintenance" },
};

export default function Service2Page() {
  const service = {
    title: "صيانة دش خميس مشيط",
    subtitle: "فحص الطبق والكابلات ووحدة الـ LNB، وضبط إشارة نايل سات وعرب سات",
    image: "/image/services/two.jpg",
    details: "خدماتنا مصممة لتقديم تجربة متكاملة لتركيب وصيانة الدش الفضائي في خميس مشيط، مع ضمان تجربة ترفيهية متميزة للمقيمين والسكان. نحن نعتمد على فنيينا المحترفين وذوي الخبرة لضمان تركيب جميع الأنظمة بكفاءة عالية. تغطي خدماتنا مختلف الأحياء، مع تقديم نصائح وإرشادات قيمة لتحسين جودة الخدمة ورضا العملاء.",
    tips: [
      "تحقق دائمًا من محاذاة طبق الدش للحفاظ على قوة الإشارة.",
      "حافظ على نظافة الطبق والكابلات من الغبار والأوساخ.",
      "افحص التوصيلات والكابلات للتأكد من عدم وجود تلف.",
      "تجنب تركيب الدش بالقرب من الأشجار أو الأعمدة المعدنية.",
      "ثبت القاعدة بإحكام لتفادي تحرك الطبق أثناء الرياح.",
      "اختبر جودة الإشارة بعد الأمطار أو العواصف.",
      "قم بتحديث جهاز الاستقبال عند الحاجة."
    ],
    keywords: [
      "محل تركيب دش خميس مشيط",
      "شركة تركيب دش ابها خميس",
      "تركيب دش خميس مشيط وابها",
      "تركيب دش مركزي خميس مشيط",
      "تركيب كاميرات خميس مشيط",
      "تركيب طبق الأقمار الصناعية المركزي في خميس مشيط",
      "فني تركيب أطباق الأقمار الصناعية بالقرب مني في خميس مشيط",
      "خدمة تصليح طبق الأقمار الصناعية في خميس مشيط",
      "تركيب هوائي الدش في خميس مشيط",
      "صيانة وإصلاح هوائي الدش في خميس مشيط",
      "إعداد دش HD في خميس مشيط",
      "حل مشكلة إشارة طبق الأقمار الصناعية في خميس مشيط",
      "تركيب أطباق أقمار صناعية متعددة في خميس مشيط",
      "فني دش محترف في خميس مشيط",
      "تركيب دش بأسعار مناسبة في خميس مشيط",
      "خدمات الدش في خميس مشيط",
      "صيانة الدش في خميس مشيط"
    ]
  };

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <ServiceJsonLd
        name={"صيانة دش خميس مشيط"}
        description={"صيانة الدش وضبط الإشارة وحل مشاكل ضعف الاستقبال والتقطيع في خميس مشيط، فحص الطبق والكابلات ووحدة الـ LNB."}
        path="/services/dishmaintenance"
      />
      <Breadcrumbs
        items={[
          { name: "الرئيسية", href: "/" },
          { name: "الخدمات", href: "/#services" },
          { name: "صيانة دش خميس مشيط" },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
        <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto text-blue-100">{service.subtitle}</p>
      </section>

      {/* Description Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-gray-800 leading-relaxed space-y-6">
          <p>{service.details}</p>
        </div>
      </section>

      {/* Image Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto flex justify-center">
          <img
            src={service.image}
            alt={service.title}
            className="w-full md:w-2/3 rounded-lg shadow-lg object-cover"
          />
        </div>
      </section>

      {/* Service Highlights Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-8 text-gray-800 leading-relaxed">
          <h2 className="text-2xl font-bold text-center mb-8">
            خدمات تركيب وصيانة الدش في خميس مشيط
          </h2>

          <div>
            <h3 className="text-xl font-semibold mb-2">🔹 تركيب وصيانة الدش في خميس مشيط</h3>
            <p>
              نحن نقدم خدمات تركيب وصيانة الدش، بالإضافة إلى ضبط الإشارة، وتحسين الجودة،
              وتركيب أنظمة الصوت، وتنفيذ التمديدات السليمة للكابلات. في خميس مشيط، نقدم
              أفضل خدمات تركيب وصيانة الدش.
            </p>
            <p className="mt-2 font-bold text-blue-600">
              📞 <span dir="ltr">+966 558202859</span> — خميس مشيط
            </p>

          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">🔹 تركيب وضبط أطباق الدش في خميس مشيط</h3>
            <p>
              يتميز فنيو شركتنا بالخبرة في تركيب أطباق الدش وضبطها ومعايرة الإشارة لضمان
              استقبال قنوات فضائية بجودة عالية.
            </p>
            <p className="mt-2 font-bold text-blue-600">
              📞 <span dir="ltr">+966 558202859</span> — خميس مشيط
            </p>

          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">🔹 خدمة تركيب الدش والضمان في خميس مشيط</h3>
            <p>
              نقدم خدمات تركيب الدش بأسعار تنافسية تناسب ميزانيتك، مع ضمان الخدمة لضمان رضا
              العملاء. يمكنك أيضًا الحصول على عروض أسعار من فنيينا للمقارنة واختيار الأنسب لك.
            </p>
            <p className="mt-2 font-bold text-blue-600">
              📞 <span dir="ltr">+966 558202859</span> — خميس مشيط
            </p>

          </div>
        </div>
      </section>


      {/* Tips Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold mb-6 text-center">نصائح لصيانة الدش</h2>
        <ul className="space-y-3 list-disc list-inside text-lg text-gray-700">
          {service.tips.map((tip, idx) => (
            <li key={idx}>{tip}</li>
          ))}
        </ul>
      </section>

      {/* How to Find Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-gray-800 leading-relaxed space-y-10">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              كيفية العثور على أفضل فني لتركيب وصيانة الدش المركزي في خميس مشيط
            </h2>
            <ol className="list-decimal list-inside space-y-4">
              <li>
                <strong>البحث عبر الإنترنت  : </strong> استخدم محركات البحث للعثور على فنيين متخصصين
                في تركيب وصيانة الدش المركزي في خميس مشيط. قم بزيارة مواقع الشركات للاطلاع على أنواع الخدمات التي يقدمونها.
              </li>
              <li>
                <strong>التوصيات  : </strong> اسأل الأصدقاء والعائلة الذين سبق لهم استخدام فنيين محترفين.
                استفد من تجاربهم لاختيار أفضل فني ماهر وموثوق.
              </li>
              <li>
                <strong>التواصل المباشر: </strong> تواصل مع الفنيين المحتملين للاستفسار عن الخدمات والأسعار.
                حدد وقتًا مناسبًا للتركيب أو الصيانة وفقًا لاحتياجاتك.
              </li>
            </ol>
          </div>
        </div>
      </section>

      <RelatedServices exclude="/services/dishmaintenance" />

      <Footer />
    </div>
  );
}
