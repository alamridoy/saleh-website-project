import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Navbar, Footer } from "@/components";
import { CtaRow, MapsButton, Breadcrumbs, RelatedServices } from "@/components/cta";
import { business, addressLineAr } from "@/config/business";
import {
  breadcrumbSchema,
  localBusinessSchema,
  faqSchema,
  jsonLd,
} from "@/config/seo";

export const metadata: Metadata = {
  title: "فني دش خميس مشيط | تركيب وصيانة الدش في خميس مشيط ومحيطها",
  description:
    "فني دش في خميس مشيط: تركيب الدش العادي والمركزي، صيانة وضبط الإشارة، برمجة الرسيفرات، تركيب الشاشات وكاميرات المراقبة. تعرّف على نطاق الخدمة وطريقة التواصل وموقعنا على خرائط Google.",
  alternates: { canonical: "/location/khamis-mushait" },
};

const SERVICES = [
  ["تركيب أطباق الأقمار الصناعية", "/services/installation"],
  ["صيانة الدش وضبط الإشارة", "/services/dishmaintenance"],
  ["إصلاح أعطال الدش", "/services/dishrepair"],
  ["تركيب الدش المركزي للعمائر", "/services/centraldish"],
  ["برمجة وصيانة الرسيفرات", "/services/receivers"],
  ["تركيب الشاشات والتلفزيونات", "/services/screens"],
  ["تركيب كاميرات المراقبة", "/services/cameras"],
  ["الدعم الفني وخدمة العملاء", "/services/customersupport"],
];

const FAQ = [
  {
    q: "هل تغطون جميع أحياء خميس مشيط؟",
    a: "نعم، نخدم مدينة خميس مشيط وأحياءها ومحيطها المباشر. عند التواصل يرجى ذكر الحي والعنوان التقريبي لتحديد موعد مناسب.",
  },
  {
    q: "كم يستغرق وصول الفني داخل خميس مشيط؟",
    a: "نحرص على تحديد موعد في نفس اليوم قدر الإمكان حسب ضغط المواعيد ونوع الخدمة المطلوبة.",
  },
  {
    q: "هل تقدمون خدمة الدش المركزي للعمائر والمجمعات؟",
    a: "نعم، ننفذ أنظمة الدش المركزي مع توزيع الإشارة على جميع الشقق ووحدات التقوية اللازمة.",
  },
];

export default function KhamisMushaitPage() {
  return (
    <>
      <Navbar />
      <script {...jsonLd(localBusinessSchema)} />
      <script {...jsonLd(faqSchema(FAQ.map((f) => ({ q: f.q, a: f.a }))))} />
      <script
        {...jsonLd(
          breadcrumbSchema([
            { name: "الرئيسية", path: "/" },
            { name: "فني دش خميس مشيط", path: "/location/khamis-mushait" },
          ]),
        )}
      />

      <main dir="rtl">
        <Breadcrumbs
          items={[
            { name: "الرئيسية", href: "/" },
            { name: "فني دش خميس مشيط" },
          ]}
        />

        <section className="bg-gradient-to-l from-gray-900 to-blue-900 px-6 py-16 text-center text-white">
          <h1 className="text-3xl font-extrabold md:text-4xl">
            فني دش خميس مشيط
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-blue-100">
            {business.BUSINESS_NAME} — تركيب وصيانة الدش والرسيفرات وكاميرات
            المراقبة في {business.CITY_AR}، منطقة {business.REGION_AR}.
          </p>
          <div className="mt-8">
            <CtaRow />
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-12 leading-relaxed text-gray-700">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            الخدمات المتاحة في خميس مشيط
          </h2>
          <p className="mb-6">
            نقدّم في خميس مشيط خدمة ميدانية متكاملة لأنظمة الاستقبال المنزلية
            والتجارية. يصل الفني بأجهزة قياس الإشارة والأدوات اللازمة لإنجاز
            التركيب أو الصيانة في الزيارة نفسها في معظم الحالات.
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {SERVICES.map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block rounded-lg border border-gray-200 px-4 py-3 font-medium hover:border-blue-400 hover:text-blue-700"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">
            مشاكل الدش الشائعة التي نعالجها
          </h2>
          <p className="mb-4">
            من أكثر ما يتواصل بشأنه سكان خميس مشيط: ظهور رسالة «لا توجد إشارة» على
            الرسيفر، ضعف الإشارة أو تقطيع القنوات وقت الغيوم والأمطار، اختفاء بعض
            القنوات بعد تحديثات الأقمار، تحرك الطبق مع الرياح، أو الحاجة إلى إعادة
            برمجة الرسيفر. نقوم بتشخيص السبب وإصلاحه وضبط الإشارة بدقة.
          </p>
          <p>
            اقرأ المزيد في{" "}
            <Link href="/guides" className="font-semibold text-blue-700 hover:underline">
              دليل حلول مشاكل الدش والرسيفر
            </Link>
            .
          </p>

          <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">
            موقعنا وطريقة التواصل
          </h2>
          <p className="mb-2">
            العنوان: {business.CITY_AR} - {business.STREET_ADDRESS}
          </p>
          <p className="mb-2">{addressLineAr}</p>
          <p className="mb-2">
            الهاتف / واتساب: <span dir="ltr">{business.PHONE_DISPLAY}</span>
          </p>
          <p className="mb-6">أوقات العمل: {business.OPENING_HOURS_AR}</p>
          <div className="h-[320px] w-full overflow-hidden rounded-lg shadow">
            <iframe
              src={business.GOOGLE_MAPS_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${business.BUSINESS_NAME} - خميس مشيط`}
            />
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <MapsButton />
          </div>

          <h2 className="mb-6 mt-12 text-2xl font-bold text-gray-900">
            أسئلة شائعة عن الخدمة في خميس مشيط
          </h2>
          <div className="space-y-4">
            {FAQ.map((f) => (
              <details key={f.q} className="rounded-lg border border-gray-200 p-4">
                <summary className="cursor-pointer font-semibold text-gray-900">
                  {f.q}
                </summary>
                <p className="mt-2 text-gray-600">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <RelatedServices title="تصفّح خدماتنا في خميس مشيط" />
      </main>

      <Footer />
    </>
  );
}
