import Link from "next/link";
import type { Metadata } from "next";
import { Navbar, Footer } from "@/components";
import { CtaRow, MapsButton } from "@/components/cta";
import Home from "./home";
import Services from "./services";
import Location from "./location";
import Contact from "./contactform";
import { faqSchema, jsonLd } from "@/config/seo";

export const metadata: Metadata = {
  title:
    "فني دش خميس مشيط | تركيب وصيانة الدش والرسيفرات — محل حسن للإلكترونيات",
  description:
    "فني دش في خميس مشيط لتركيب وصيانة الدش العادي والمركزي، ضبط إشارة نايل سات وعرب سات، برمجة الرسيفرات، تركيب الشاشات وكاميرات المراقبة وإعداد أجهزة IPTV. اتصل أو واتساب 0558202859.",
  alternates: { canonical: "https://bestdishelectronics.store/" },
};

const SERVICE_SUMMARY = [
  {
    h: "تركيب أطباق الأقمار الصناعية",
    href: "/services/installation",
    p: "تركيب الدش على السطح أو الجدار، تثبيت القاعدة بإحكام، توصيل الكابلات ووحدة الـ LNB، ومعايرة الإشارة للحصول على استقبال واضح لقنوات نايل سات وعرب سات.",
  },
  {
    h: "صيانة وضبط إشارة الدش",
    href: "/services/dishmaintenance",
    p: "فحص شامل عند ظهور رسالة \"لا توجد إشارة\" أو ضعف الاستقبال والتقطيع: فحص الطبق والكابلات ووحدة الـ LNB، وإعادة ضبط زاوية الدش والترددات.",
  },
  {
    h: "تركيب الدش المركزي",
    href: "/services/centraldish",
    p: "أنظمة دش مركزي للعمائر والمجمعات والمنشآت مع توزيع الإشارة على جميع الوحدات ووحدات التقوية اللازمة لثبات الجودة.",
  },
  {
    h: "برمجة وصيانة الرسيفرات",
    href: "/services/receivers",
    p: "برمجة الرسيفرات العادية وHD، تحديث السوفت وير، إعادة البحث عن القنوات، حل مشاكل التشفير، وإصلاح الأعطال، مع توفير رسيفرات وأطباق دش وملحقاتها.",
  },
  {
    h: "تركيب الشاشات والتلفزيون",
    href: "/services/screens",
    p: "تركيب الشاشة على الجدار بحامل مناسب لجميع المقاسات، توصيلها بالدش والرسيفر ومكبرات الصوت، وإخفاء الأسلاك بشكل مرتب.",
  },
  {
    h: "تركيب كاميرات المراقبة",
    href: "/services/cameras",
    p: "أنظمة كاميرات مراقبة للمنازل والمحلات والشركات، تمديد الأسلاك وتركيب جهاز التسجيل DVR/NVR، وإعداد المشاهدة المباشرة عبر الجوال.",
  },
  {
    h: "خدمات IPTV وإعداد الأجهزة",
    href: "/services/customersupport",
    p: "إعداد أجهزة IPTV، ضبط إعدادات الشبكة، تركيب التطبيقات، والمساعدة في تفعيل الاشتراكات النظامية وحل مشاكل التقطيع.",
  },
];

const FAQ = [
  {
    q: "كم تكلفة تركيب الدش في خميس مشيط؟",
    a: "تختلف التكلفة حسب نوع الخدمة (دش عادي، دش مركزي، صيانة وضبط إشارة). اتصل على 0558202859 للحصول على السعر قبل بدء العمل.",
  },
  {
    q: "هل يوجد فني دش قريب في خميس مشيط للخدمة في نفس اليوم؟",
    a: "نعم، نغطي مدينة خميس مشيط وأحياءها ونحرص على الوصول في نفس اليوم قدر الإمكان حسب جدول المواعيد.",
  },
  {
    q: "هل يمكن ضبط إشارة نايل سات وعرب سات؟",
    a: "نعم، نعاير الترددات ونعيد ضبط زاوية الدش ونحدّث قائمة القنوات على الرسيفر.",
  },
  {
    q: "هل توفرون تركيب دش مركزي للعمائر؟",
    a: "نعم، ننفذ أنظمة الدش المركزي مع توزيع الإشارة على كل الشقق ووحدات التقوية اللازمة.",
  },
  {
    q: "كيف أتواصل معكم عبر واتساب؟",
    a: "راسلنا مباشرة على واتساب رقم 0558202859 مع وصف المشكلة وموقعك داخل خميس مشيط.",
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <script
        {...jsonLd(faqSchema(FAQ.map((f) => ({ q: f.q, a: f.a }))))}
      />

      <main>
        <div id="home">
          <Home />
        </div>

        {/* خدمات تركيب وصيانة الدش في خميس مشيط */}
        <section id="services" dir="rtl" className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
            خدمات تركيب وصيانة الدش في خميس مشيط
          </h2>
          <p className="mb-10 leading-relaxed text-gray-700">
            يقدّم محل حسن للإلكترونيات حلولاً متكاملة لأنظمة الاستقبال في المنازل
            والمحلات والمنشآت داخل خميس مشيط، من تركيب الدش وضبط الإشارة إلى برمجة
            الرسيفرات وتركيب الشاشات وكاميرات المراقبة. يعمل الفنيون بأجهزة قياس
            إشارة حديثة لضمان استقبال ثابت وصورة نقية.
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            {SERVICE_SUMMARY.map((s) => (
              <article
                key={s.href}
                className="rounded-xl border border-gray-200 p-6"
              >
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  <Link href={s.href} className="hover:text-blue-700">
                    {s.h}
                  </Link>
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">{s.p}</p>
                <Link
                  href={s.href}
                  className="mt-3 inline-block text-sm font-semibold text-blue-700 hover:underline"
                >
                  التفاصيل ←
                </Link>
              </article>
            ))}
          </div>
        </section>

        <Services />

        {/* لماذا يختارنا العملاء */}
        <section dir="rtl" className="bg-gray-50 px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 md:text-3xl">
              لماذا يختارنا العملاء في خميس مشيط؟
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["استجابة سريعة", "نحرص على تحديد موعد قريب والوصول في نفس اليوم عند الإمكان."],
                ["فنيون متخصصون", "خبرة عملية في أنظمة الدش العادي والمركزي والرسيفرات وكاميرات المراقبة."],
                ["أسعار واضحة", "نوضح تكلفة الخدمة قبل البدء دون رسوم مفاجئة."],
                ["تغطية خميس مشيط", "نخدم مدينة خميس مشيط وأحياءها ومحيطها المباشر."],
              ].map(([t, d]) => (
                <div key={t} className="rounded-xl bg-white p-6 shadow-sm">
                  <h3 className="mb-2 font-bold text-gray-900">{t}</h3>
                  <p className="text-sm text-gray-600">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div id="location">
          <Location />
        </div>

        {/* موقعنا في خميس مشيط */}
        <section dir="rtl" className="mx-auto max-w-4xl px-6 py-14 text-center">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
            موقعنا في خميس مشيط
          </h2>
          <p className="mb-6 leading-relaxed text-gray-700">
            نقدّم خدمات تركيب وصيانة الدش والرسيفرات في خميس مشيط، منطقة عسير.
            يمكنكم التواصل معنا مباشرة أو فتح موقعنا عبر خرائط Google.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <MapsButton />
            <Link
              href="/location/khamis-mushait"
              className="inline-flex items-center rounded-full bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-gray-800"
            >
              معلومات الخدمة في خميس مشيط
            </Link>
          </div>
        </section>

        <div id="contact">
          <Contact />
        </div>

        {/* الأسئلة الشائعة */}
        <section dir="rtl" className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 md:text-3xl">
            الأسئلة الشائعة
          </h2>
          <div className="space-y-4">
            {FAQ.map((f) => (
              <details
                key={f.q}
                className="rounded-lg border border-gray-200 p-4"
              >
                <summary className="cursor-pointer font-semibold text-gray-900">
                  {f.q}
                </summary>
                <p className="mt-2 leading-relaxed text-gray-600">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* اتصل بفني دش في خميس مشيط */}
        <section
          dir="rtl"
          className="bg-blue-600 px-6 py-14 text-center text-white"
        >
          <h2 className="mb-3 text-2xl font-bold md:text-3xl">
            اتصل بفني دش في خميس مشيط الآن
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-blue-100">
            تركيب، صيانة، برمجة رسيفر، أو ضبط إشارة — تواصل معنا وسنكون عندك في
            أقرب وقت.
          </p>
          <CtaRow />
        </section>
      </main>

      <Footer />
    </>
  );
}
