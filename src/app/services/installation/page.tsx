import React from "react";
import { Footer } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "فني تركيب أطباق الأقمار الصناعية بالقرب مني في خميس مشيط | محل حسن للإلكترونيات",
  description:
    "فني تركيب أطباق الأقمار الصناعية بالقرب مني في خميس مشيط. تركيب هوائي الدش وضبط الإشارة باحترافية مع محل حسن للإلكترونيات. اتصل 0558202859.",
  alternates: { canonical: "/services/installation" },
};

export default function Service4Page() {
  const service = {
    title: "فني تركيب أطباق الأقمار الصناعية بالقرب مني في خميس مشيط",
    subtitle: "أفضل خدمات تركيب وضبط أجهزة الاستقبال الفضائي في خميس مشيط",
    image: "/image/services/four.jpg",
    details: `أهمية التركيب الاحترافي لأجهزة الاستقبال الفضائي
يُعدّ التركيب الصحيح لأجهزة الاستقبال الفضائي أمرًا ضروريًا لضمان استقبال إشارة واضحة ومشاهدة دون انقطاع. 
فالتثبيت السليم يضمن الأداء الأمثل لنظام القنوات الفضائية، مما يتيح لك الاستمتاع بقنوات عالية الجودة دون تشويش أو فقدان للإشارة. 
يتميز فنّيو شركتنا في خميس مشيط بخبرة عالية في تركيب وضبط واختبار جميع أنواع أجهزة الاستقبال الفضائي، لتقديم أفضل تجربة ترفيهية لمنزلك أو لعملك.`,
    steps: [
      {
        title: "1. تقييم المتطلبات",
        description: [
          "تحديد نوع جهاز الاستقبال المناسب بناءً على نظام القنوات الفضائية وتفضيلات المشاهدة الخاصة بك",
          "تحليل موقع التركيب لضمان أفضل استقبال للإشارة وتقليل العوائق المحتملة"
        ]
      },
      {
        title: "2. تركيب جهاز الاستقبال",
        description: [
          "توصيل جهاز الاستقبال بدقة مع طبق الدش ونظام التلفزيون",
          "التأكد من تركيب جميع الكابلات والوصلات ومصادر الطاقة بشكل آمن وفعّال لضمان التشغيل السليم"
        ]
      },
      {
        title: "3. الإعداد والضبط",
        description: [
          "تهيئة برنامج جهاز الاستقبال والبحث عن القنوات المتاحة",
          "ضبط اتجاه الطبق الفضائي وإعدادات الإشارة للحصول على أقوى استقبال ممكن"
        ]
      }
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
    ],
    tips: [
      "تحقق دائمًا من محاذاة طبق الدش للحفاظ على قوة الإشارة.",
      "حافظ على نظافة الطبق والكابلات من الغبار والأوساخ.",
      "افحص التوصيلات والكابلات للتأكد من عدم وجود تلف.",
      "تجنب تركيب الدش بالقرب من الأشجار أو الأعمدة المعدنية.",
      "ثبت القاعدة بإحكام لتفادي تحرك الطبق أثناء الرياح.",
      "اختبر جودة الإشارة بعد الأمطار أو العواصف.",
      "قم بتحديث جهاز الاستقبال عند الحاجة."
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
          <h2 className="text-2xl font-bold mb-6 text-center">خطوات تركيب أجهزة الاستقبال الفضائي</h2>
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
            <strong> الاختبار وفحص الجودة</strong><br />
            اختبار جهاز الاستقبال للتأكد من أن جميع القنوات تعمل بشكل صحيح ويمكن الوصول إليها بسهولة.<br />
            التحقق من قوة الإشارة وجودة الصورة وثباتها لضمان أفضل تجربة مشاهدة ممكنة.
          </p>

          <p>
            <strong>لماذا تختار خدمات تركيب أجهزة الاستقبال الفضائي في خميس مشيط؟</strong><br />
            فنيون محترفون يمتلكون خبرة عملية في جميع أنواع أجهزة الاستقبال.<br />
            تركيب موثوق للمنازل والمكاتب والأماكن التجارية.<br />
            إعداد سريع دون التأثير على روتينك اليومي.<br />
            المساعدة في اختيار جهاز الاستقبال الأنسب لنظامك واحتياجاتك.<br />
            تحسين الإشارة لضمان استقبال عالي الجودة دون انقطاع.<br />
            أسعار مناسبة وواضحة بدون أي رسوم خفية.
          </p>

          <p>
            <strong>مبيعات أجهزة الاستقبال الفضائي</strong><br />
            نحن نوفر مجموعة واسعة من أجهزة الاستقبال الفضائي المتوافقة مع جميع أنظمة الأقمار الصناعية الرئيسية.<br />
            يقوم فريقنا بمساعدة العملاء على اختيار الطراز الأنسب حسب احتياجاتهم، مع الأخذ في الاعتبار باقات القنوات، قوة الإشارة، والمتطلبات التقنية.<br />
            كما نقدم إرشادات حول تحديث أجهزة الاستقبال وصيانتها لضمان استمرار عمل النظام بكفاءة عالية لسنوات طويلة.
          </p>

          <p>
            <strong>نطاق الخدمة في خميس مشيط</strong><br />
            تتوفر خدمات فني تركيب أطباق الأقمار الصناعية بالقرب مني في خميس مشيط لدينا في جميع أنحاء خميس مشيط.<br />
            سواء للاستخدام السكني أو التجاري، نضمن لك خدمة موثوقة، احترافية، وفي الوقت المناسب لتلبية جميع احتياجاتك الترفيهية.
          </p>

          <p>
            <strong>فني تركيب وصيانة الدش في خميس مشيط</strong><br />
            يمكن لسكان خميس مشيط الاعتماد على فنيين ماهرين في تركيب وصيانة الدش لتقديم مجموعة كاملة من الخدمات. نحن نقوم بتركيب الأطباق، وضبط الترددات، وصيانة أنظمة الأقمار الصناعية مع ضمان استقبال إشارة عالي الجودة.<br />
            يتمتع فنيونا بخبرة في التعامل مع مختلف أنواع الأطباق وأجهزة الاستقبال، مما يضمن خدمة موثوقة في جميع الأحياء.
          </p>

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
          <h2 className="text-2xl font-bold mb-6 text-center">كلمات مفتاحية متعلقة بأجهزة الاستقبال الفضائي</h2>
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
