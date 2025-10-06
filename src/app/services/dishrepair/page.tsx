import React from "react";
import { Footer } from "@/components";

export default function Service3Page() {
  const service = {
    title: "إصلاح الدش في خميس مشيط",
    subtitle: "أفضل الخدمات في جميع الأحياء مع حلول متكاملة بأسعار تنافسية",
    image: "/image/services/three.jpg",
    details: `أهمية صيانة أطباق الأقمار الصناعية
تُعدّ صيانة أطباق الأقمار الصناعية خدمة أساسية يقدمها فنيو الأطباق المركزية. فخدمة إصلاح أطباق الأقمار الصناعية في خميس مشيط تساعد في ضمان جودة الإشارة وتقليل احتمالية الانقطاعات أو التشويش. تُعتبر أطباق الأقمار الصناعية جزءًا أساسيًا من نظام الطبق المركزي، وأي عطل فيها قد يؤثر على جودة الاستقبال. نحن نقدم أعلى مستوى من الخدمة لصيانة نظام الأقمار الصناعية لديك واستعادته بكفاءة عالية.`,

    steps: [
  {
    title: "1. فحص الأطباق",
    description: "- تحديد أي أجزاء تالفة أو مكسورة في طبق الدش بدقة\n- اكتشاف المشكلة الفعلية وتحليل الطريقة الأكثر فعالية من حيث التكلفة لإصلاحها"
  },
  {
    title: "2. إزالة الأجزاء التالفة",
    description: "- فك الأجزاء التالفة بعناية لتجنب التأثير على باقي الأجزاء\n- تنظيف الأجزاء المتبقية لضمان جاهزيتها لاستعادة الإشارة"
  },
  {
    title: "3. استبدال الأجزاء",
    description: "- تركيب أجزاء جديدة عالية الجودة وضمان متانة النظام\n- التأكد من توافق الأجزاء الجديدة مع النظام الحالي لتجنب أي مشاكل مستقبلية"
  },
  {
    title: "4. اختبار النظام",
    description: "- التأكد من أن الأطباق تعمل بشكل صحيح بعد الإصلاح\n- اختبار جودة الإشارة وضبط الترددات حسب الحاجة لضمان أفضل استقبال"
  }
],



    tips: [
      "تحقق دائمًا من محاذاة طبق الدش للحفاظ على قوة الإشارة.",
      "حافظ على نظافة الطبق والكابلات من الغبار والأوساخ.",
      "افحص التوصيلات والكابلات للتأكد من عدم وجود تلف.",
      "تجنب تركيب الأطباق بالقرب من الأشجار أو الأعمدة المعدنية.",
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

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
        <h2 className="text-xl md:text-2xl mb-6">{service.subtitle}</h2>
      </section>

      {/* Details Section */}
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

      {/* Steps Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-8 text-gray-800 leading-relaxed">
          <h2 className="text-2xl font-bold text-center mb-8">خطوات إصلاح أطباق الدش الفضائي</h2>
          {service.steps.map((step, idx) => (
            <div key={idx} className="space-y-2">
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
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

      {/* Keywords Section */}
      <section className="bg-white shadow-inner py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">إصلاح الدش في خميس مشيط هي الأكثر بحثًا.</h2>
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
