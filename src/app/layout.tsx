import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout } from "@/components";
import ClientComponents from "@/components/ClientComponents";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "محل صالحة محمد أحمد التجارية | تركيب وصيانة دش خميس مشيط",
  description:
    "محل صالحة محمد أحمد التجارية متخصص في تركيب وصيانة الدش بخميس مشيط. خدماتنا تشمل تركيب دش لجميع المنازل والشقق، صيانة أعطال وانقطاع الإشارة، بيع رسيفرات IPTV وHD، تمديد أسلاك دش عالية الجودة وضبط الإشارة بأحدث الأجهزة.",
  keywords: [
    "فني دش خميس مشيط",
    "تركيب دش خميس مشيط",
    "صيانة دش خميس مشيط",
    "رسيفرات IPTV خميس مشيط",
    "محل دش خميس مشيط",
    "خدمات تركيب وصيانة دش",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* Nepcha Analytics */}
        <script
          defer
          data-site="dishinstallationsaleha.com"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script>

        {/* Favicon */}
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />

        {/* JSON-LD LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "محل صالحة محمد أحمد التجارية",
              "image": "https://dishinstallationsaleha.com/logos/storelogo.png",
              "description":
                "تركيب وصيانة دش في خميس مشيط. تركيب دش لجميع أنواع المنازل والشقق، صيانة أعطال، بيع رسيفرات IPTV وHD، تمديد أسلاك دش عالية الجودة، وضبط الإشارة.",
              "telephone": "+966558202859",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "خميس مشيط",
                "addressCountry": "SA",
              },
              "openingHours": "Mo-Su 08:00-23:00",
              "areaServed": "خميس مشيط",
              "serviceType": [
                "تركيب دش",
                "صيانة دش",
                "بيع رسيفرات IPTV",
                "بيع رسيفرات HD",
                "تمديد أسلاك دش",
                "ضبط إشارة الدش",
              ],
              "url": "https://dishinstallationsaleha.com",
            }),
          }}
        />
      </head>
      <body className={roboto.className}>
        <Layout>
          {/* ✅ Hidden SEO-friendly section */}
          <section className="sr-only">
            <h2>خدمات محل صالحة محمد أحمد التجارية</h2>
            <ul>
              <li>تركيب دش لجميع أنواع المنازل والشقق بخميس مشيط</li>
              <li>صيانة الأعطال وحل مشاكل انقطاع الإشارة</li>
              <li>بيع رسيفرات IPTV وHD وملحقاتها</li>
              <li>تمديد وتركيب أسلاك دش عالية الجودة</li>
              <li>فحص وضبط الإشارة باستخدام أجهزة حديثة</li>
            </ul>
          </section>

          {children}
          <ClientComponents />
        </Layout>

        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </body>
    </html>
  );
}
