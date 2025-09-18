// components
import { Navbar, Footer } from "@/components";

// sections
import Home from "./home";
import Services from "./services";
import Location from "./location";
import Contact from "./contactform";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "فني دش خميس مشيط | تركيب وصيانة دش مركزي وعادي | محلات دش ورسيفرات خميس مشيط",
  description:
    "تركيب دش ابها خميس  0558202859-فني تركيب دش وشاشات خميس وابها - ترند السعودية-تركيب دش مركزي خميس مشيط",
  keywords: [
    "فني دش خميس مشيط",
    "تركيب دش خميس مشيط",
    "صيانة دش خميس مشيط",
    "محل دش خميس مشيط",
    "محلات الدش خميس مشيط",
    "محل تركيب دش خميس مشيط",
    "محل صيانة دش خميس مشيط",
    "رسيفرات IPTV HD خميس مشيط",
    "فني دش قريب مني خميس مشيط",
    "فني دشوش خميس مشيط",
    "تمديد أسلاك دش خميس مشيط",
    "أفضل فني دش بخميس مشيط",
  ],
};

export default function Campaign() {
  return (
    <>
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>

        <div id="services">
          <Services />
        </div>

        <div id="location">
          <Location />
        </div>

        <div id="contact">
          <Contact />
        </div>

        {/* SEO visible content */}
        <section className="px-6 py-12 max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">
            فني دش خميس مشيط – تركيب وصيانة احترافية
          </h2>
          <p className="mb-6 leading-relaxed">
            نوفر خدمات <strong>فني دش خميس مشيط</strong> متكاملة تشمل{" "}
            <strong>تركيب وصيانة الدش المركزي والعادي</strong> في جميع أحياء
            ومناطق خميس مشيط. فريقنا من الفنيين متخصصون ومجهزون بأحدث أجهزة
            فحص الإشارة لتقديم خدمة عالية الجودة بأسعار مناسبة.
          </p>

          <h3 className="text-xl font-semibold mb-3">تركيب دش بخميس مشيط</h3>
          <p className="mb-6 leading-relaxed">
            إذا كنت تبحث عن <strong>محل تركيب دش بخميس مشيط</strong> أو{" "}
            <strong>فني دش قريب منك</strong>، فنحن الخيار الأفضل. نقدم خدمة
            تأسيس الدش المركزي والعادي مع <strong>تمديد أسلاك رسيفرات</strong>{" "}
            عادية وHD وضبط الإشارة بدقة عالية لتجربة مشاهدة مميزة.
          </p>

          <h3 className="text-xl font-semibold mb-3">صيانة دش بخميس مشيط</h3>
          <p className="mb-6 leading-relaxed">
            خدماتنا تشمل <strong>صيانة دش خميس مشيط</strong> مع إصلاح جميع
            الأعطال مثل انقطاع الإشارة أو ضعف الاستقبال. نحن نوفر{" "}
            <strong>أفضل خدمة فني دش بخميس مشيط</strong> باستخدام أحدث
            المعدات والتقنيات لضمان استقرار الخدمة.
          </p>

          <h3 className="text-xl font-semibold mb-3">
            محلات دش ورسيفرات في خميس مشيط
          </h3>
          <p className="mb-6 leading-relaxed">
            لدينا <strong>محلات دش بخميس مشيط</strong> متخصصة في بيع{" "}
            <strong>رسيفرات IPTV وHD</strong>، أطباق دش عالية الجودة، وأسلاك
            قوية تناسب جميع الاستخدامات. إذا كنت تبحث عن{" "}
            <strong>محل دش قريب منك</strong>، فنحن نوفر لك كل ما تحتاجه.
          </p>

          <h3 className="text-xl font-semibold mb-3">
            أفضل خدمة فني دش بخميس مشيط
          </h3>
          <p className="mb-6 leading-relaxed">
            بفضل خبرتنا الطويلة، نحن نقدم{" "}
            <strong>أفضل خدمة فني دش بخميس مشيط</strong> سواء كنت بحاجة إلى
            تركيب جديد أو صيانة أعطال. خدماتنا تغطي كافة مناطق وأحياء خميس
            مشيط بسرعة وكفاءة عالية.
          </p>

          <h3 className="text-xl font-semibold mb-3">خدماتنا تشمل:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>تركيب دش مركزي وعادي بخميس مشيط</li>
            <li>صيانة دش ورسيفرات IPTV وHD</li>
            <li>بيع رسيفرات وأطباق دش عالية الجودة</li>
            <li>تمديد أسلاك دش ورسيفرات</li>
            <li>إصلاح أعطال انقطاع الإشارة</li>
            <li>أفضل محل دش قريب منك بخميس مشيط</li>
            <li>خدمات تغطي جميع مناطق وأحياء خميس مشيط</li>
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
}
