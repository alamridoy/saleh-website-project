import React from "react";
import { RelatedServices, Breadcrumbs } from "@/components/cta";
import { ServiceJsonLd } from "@/components/ServiceJsonLd";
import { Footer } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "الدعم الفني وخدمة العملاء لأنظمة الدش والرسيفرات في خميس مشيط",
  description:
    "دعم فني على مدار الساعة لعملاء محل حسن للإلكترونيات في خميس مشيط، لجميع خدمات تركيب وصيانة الدش والكاميرات. اتصل 0558202859.",
  alternates: { canonical: "/services/customersupport" },
};

export default function Service5Page() {
  const service = {
    title: "دعم العملاء والمساعدة في خميس مشيط",
    subtitle: "خدمة متميزة واحترافية على مدار الساعة لجميع احتياجات تركيب وصيانة الدش",
    image: "/image/services/five.jpg",
    details: "نفخر في شركتنا لخدمات الأقمار الصناعية في خميس مشيط بتقديم دعم عملاء احترافي وسريع على مدار الساعة. نحن نضمن حصولك على المساعدة المطلوبة لجميع استفساراتك المتعلقة بالتركيب، الإصلاح، والاستشارات الفنية.",
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
        name={"دعم فني للدش والرسيفرات خميس مشيط"}
        description={"الدعم الفني وخدمة العملاء لأنظمة الدش والرسيفرات وكاميرات المراقبة في خميس مشيط."}
        path="/services/customersupport"
      />
      <Breadcrumbs
        items={[
          { name: "الرئيسية", href: "/" },
          { name: "الخدمات", href: "/#services" },
          { name: "دعم فني للدش والرسيفرات خميس مشيط" },
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

      {/* Customer Support Section */}
      {/* Customer Support Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-8 text-gray-800 leading-relaxed">
          <h2 className="text-2xl font-bold text-center mb-8">دعم العملاء والمساعدة</h2>

          <div>
            <h3 className="text-xl font-semibold mb-2">📞 التواصل معنا في أي وقت</h3>
            <p>فريق الدعم لدينا متاح 24/7 لمساعدتك في أي أسئلة تتعلق بالتركيب أو الإصلاح أو الخدمات.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">⚡ دعم فني سريع واحترافي</h3>
            <p>نضمن استجابات سريعة وحل مشاكل فعال بواسطة فنيين متخصصين في الأقمار الصناعية.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">💡 استشارات مجانية</h3>
            <p>احصل على نصائح الخبراء قبل شراء أو تركيب النظام، مجانًا بالكامل.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">🏠 زيارات منزلية سريعة</h3>
            <p>فنيوّنا جاهزون دائمًا للقيام بزيارات ميدانية للتعامل مع المشكلات مباشرة في منزلك أو مكان عملك.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">🛠️ فنيون ماهرون في خميس مشيط</h3>
            <p>خبراء محليون لديهم سنوات من الخبرة العملية لضمان خدمة عالية الجودة وموثوقة في كل مرة.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">✅ ضمان رضا العملاء</h3>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>استبيانات دورية للتحقق من رضا العملاء وتحسين الخدمات.</li>
              <li>عروض خاصة للعملاء المتكررين وخصومات حصرية.</li>
              <li>متابعة بعد الخدمة لضمان أن كل شيء يعمل بشكل مثالي.</li>
              <li>الالتزام بالتميز لتقديم أفضل تجربة خدمة أقمار صناعية في خميس مشيط.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-gray-800 leading-relaxed space-y-8" dir="rtl">

          {/* Technician Section */}
          <div>
            <h3 className="text-xl font-bold mb-2">🔹 فني تركيب وصيانة الدش في خميس مشيط</h3>
            <p className="mb-2">
              يمكن لسكان خميس مشيط الاعتماد على فنيين ماهرين في تركيب وصيانة الدش لتقديم مجموعة كاملة من الخدمات. نحن نقوم بتركيب الأطباق، وضبط الترددات، وصيانة أنظمة الأقمار الصناعية مع ضمان استقبال إشارة عالي الجودة. يتمتع فنيونا بخبرة في التعامل مع مختلف أنواع الأطباق وأجهزة الاستقبال، مما يضمن خدمة موثوقة في جميع الأحياء.
            </p>
          </div>

          {/* Maintenance Tips */}
          <div>
            <h3 className="text-xl font-bold mb-2">🔹 نصائح لصيانة الدش</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>تحقق دائمًا من محاذاة طبق الدش بانتظام للحفاظ على قوة الإشارة.</li>
              <li>حافظ على نظافة الطبق والكابلات من الغبار والأوساخ والحطام.</li>
              <li>افحص التوصيلات والكابلات للتأكد من عدم وجود تآكل أو تلف كل بضعة أشهر.</li>
              <li>تجنب تركيب الأطباق بالقرب من العوائق مثل الأشجار الطويلة أو الأعمدة المعدنية.</li>
              <li>ثبت قاعدة الطبق بإحكام لمنع تحركه أثناء الرياح القوية.</li>
              <li>اختبر جودة الإشارة بعد العواصف أو الأمطار الغزيرة لضمان استقبال مستمر.</li>
              <li>حدّث برنامج جهاز الاستقبال عند الحاجة للحصول على أفضل أداء.</li>
            </ul>
          </div>

          {/* Why Choose Company */}
          <div>
            <h3 className="text-xl font-bold mb-2">🔹 لماذا تختار شركة لتركيب وصيانة الدش في خميس مشيط؟</h3>
            <p>فنيون محترفون لديهم سنوات من الخبرة العملية.</p>
            <p>خدمات موثوقة للمنازل والأماكن التجارية والمرافق الصناعية.</p>
            <p>استجابة سريعة وتواصل فعال لطلبات التركيب أو الصيانة.</p>
            <p>أسعار مناسبة وشفافة بدون رسوم خفية.</p>
            <p>ضمان جودة لتوفير إشارة فضائية مستقرة وواضحة.</p>
            <p>الوصول إلى أحدث الأدوات والمعدات للتركيب وضبط الإعدادات.</p>
            <p>خدمات مخصصة تتناسب مع مختلف الأحياء واحتياجات العملاء.</p>
          </div>

          {/* How to Find */}
          <div>
            <h3 className="text-xl font-bold mb-2">🔹 كيفية العثور على أفضل فني لتركيب وصيانة الدش المركزي في خميس مشيط</h3>
            <ol className="list-decimal list-inside space-y-3">
              <li>
                <strong>البحث عبر الإنترنت:</strong> استخدم محركات البحث للعثور على فنيين متخصصين في تركيب وصيانة الدش المركزي في خميس مشيط. قم بزيارة مواقع الشركات للاطلاع على أنواع الخدمات التي يقدمونها.
              </li>
              <li>
                <strong>التوصيات:</strong> اسأل الأصدقاء والعائلة الذين سبق لهم استخدام فنيين محترفين. استفد من تجاربهم لاختيار أفضل فني ماهر وموثوق.
              </li>
              <li>
                <strong>التواصل المباشر:</strong> تواصل مع الفنيين المحتملين للاستفسار عن الخدمات والأسعار. حدد وقتًا مناسبًا للتركيب أو الصيانة وفقًا لاحتياجاتك.
              </li>
            </ol>
          </div>

          {/* Types of Services */}
          <div>
            <h3 className="text-xl font-bold mb-2">🔹 تركيب وصيانة الدش في خميس مشيط</h3>
            <p>نقدّم مجموعة واسعة من الحلول المصممة وفقًا لاحتياجات كل عميل. خدمات تركيب الدش في خميس مشيط متوفرة للمنازل والأعمال التجارية على حد سواء.</p>
            <ol className="list-decimal list-inside space-y-2 mt-3">
              <li>
                <strong>تركيب وصيانة الدش المركزي للمنازل:</strong> نقدم تركيبًا دقيقًا لأطباق الدش المركزي للمنازل لضمان أفضل استقبال في جميع أنحاء المنزل. يقوم فنيوّنا أيضًا بصيانة الأنظمة القائمة، بما في ذلك فحص المحاذاة وقوة الإشارة وسلامة الكابلات.
              </li>
              <li>
                <strong>تركيب وصيانة الدش المركزي للأماكن التجارية:</strong> تركيب للأعمال التجارية مثل المكاتب والمتاجر والمباني التجارية، مع ضمان استقبال قوي وواضح لعدة أجهزة استقبال. صيانة دورية لمنع أي انقطاع في الإشارة وضمان تشغيل سلس لأغراض العمل.
              </li>
              <li>
                <strong>تركيب وصيانة الدش المركزي للمصانع والمنشآت الصناعية:</strong> تركيب أنظمة الأقمار الصناعية واسعة النطاق للمصانع أو المجمعات الصناعية، مصممة لتغطية قصوى. تشمل خدمات الصيانة تحسين الإشارة، وفحص الأنظمة، وإصلاح أي مشاكل في المعدات الصناعية.
              </li>
            </ol>
            <p className="mt-3">
              تتوفر جميع هذه الخدمات في جميع أنحاء خميس مشيط، حيث نقدم تركيب وصيانة الدش الفضائي بطريقة موثوقة وفي الوقت المناسب وبأسلوب احترافي للمنازل والأعمال التجارية والمنشآت الصناعية.
            </p>
          </div>

        </div>
      </section>


      {/* Tips Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold mb-6 text-center">نصائح لدعم العملاء وصيانة الدش</h2>
        <ul className="space-y-3 list-disc list-inside text-lg text-gray-700">
          {service.tips.map((tip, idx) => (
            <li key={idx}>{tip}</li>
          ))}
        </ul>
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

      <RelatedServices exclude="/services/customersupport" />

      <Footer />
    </div>
  );
}
