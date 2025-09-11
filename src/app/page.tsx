// components
import { Navbar, Footer } from "@/components";

// sections
import Home from "./home";
import Services from "./services";
import Location from "./location";
import Contact from "./contactform";

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
      </main>

      <Footer />

      {/* ✅ Hidden SEO for services */}
      <section className="sr-only">
        <h2>أعمال وخدماتنا</h2>
        <p>
          نقدم أفضل خدمات تركيب وصيانة الدش بخميس مشيط. فريقنا متخصص في تركيب
          دش لجميع المنازل والشقق، إصلاح أعطال وانقطاع الإشارة، بيع رسيفرات IPTV
          وHD وملحقاتها، بالإضافة إلى تمديد أسلاك دش عالية الجودة وضبط الإشارة
          بأحدث الأجهزة.
        </p>
      </section>
    </>
  );
}
