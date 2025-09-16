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
  title:
    "فني دش خميس مشيط | تركيب وصيانة دش مركزي وعادي | رسيفرات IPTV وHD | محل دش خميس مشيط",
  description:
    "فني دش خميس مشيط يقدم أفضل خدمات تركيب وصيانة الدش المركزي والعادي. محل صالحة محمد أحمد التجارية يوفر تركيب دش، صيانة أعطال، بيع رسيفرات IPTV وHD، وتمديد أسلاك بجودة عالية في خميس مشيط. اتصل الآن 0558202859.",
  keywords: [
    "فني دش خميس مشيط",
    "تركيب دش خميس مشيط",
    "صيانة دش خميس مشيط",
    "محل دش خميس مشيط",
    "محلات دش خميس مشيط",
    "محل تركيب دش خميس مشيط",
    "محل صيانة دش خميس مشيط",
    "رسيفرات IPTV خميس مشيط",
    "رسيفرات HD خميس مشيط",
    "فني دش قريب مني خميس مشيط",
    "satellite installation Khamis Mushait",
    "dish repair Khamis Mushait",
  ],
  openGraph: {
    title:
      "فني دش خميس مشيط | تركيب دش مركزي وصيانة رسيفرات IPTV وHD | محل دش خميس مشيط",
    description:
      "أفضل فني دش في خميس مشيط مع خدمات تركيب وصيانة الدش المركزي والعادي. محل صالحة محمد أحمد التجارية يوفر بيع رسيفرات IPTV وHD، وتمديد أسلاك دش عالية الجودة.",
    url: "https://dishinstallationsaleha.com/",
    siteName: "محل صالحة محمد أحمد التجارية",
    images: [
      {
        url: "https://dishinstallationsaleha.com/image/dish.jpg",
        width: 1200,
        height: 630,
        alt: "فني دش خميس مشيط | Dish Installation Khamis Mushait",
      },
    ],
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "فني دش خميس مشيط | تركيب دش مركزي وصيانة رسيفرات IPTV وHD",
    description:
      "تركيب وصيانة دش بخميس مشيط مع فنيين متخصصين. بيع رسيفرات IPTV وHD مع محل صالحة محمد أحمد التجارية.",
    images: ["https://dishinstallationsaleha.com/image/dish.jpg"],
  },
  alternates: {
    canonical: "https://dishinstallationsaleha.com/",
  },
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
              name: "محل صالحة محمد أحمد التجارية",
              image:
                "https://dishinstallationsaleha.com/logos/storelogo.png",
              description:
                "فني دش خميس مشيط يقدم خدمات تركيب دش، صيانة أعطال، بيع رسيفرات IPTV وHD، وتمديد أسلاك عالية الجودة. تغطي خدماتنا جميع أحياء خميس مشيط.",
              telephone: "+966558202859",
              address: {
                "@type": "PostalAddress",
                addressLocality: "خميس مشيط",
                addressCountry: "SA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 18.3,
                longitude: 42.7,
              },
              openingHours: "Mo-Su 08:00-23:00",
              areaServed: "خميس مشيط",
              serviceType: [
                "تركيب دش مركزي",
                "صيانة دش",
                "بيع رسيفرات IPTV",
                "بيع رسيفرات HD",
                "تمديد أسلاك دش",
                "ضبط إشارة",
              ],
              priceRange: "SAR 100-500",
              url: "https://dishinstallationsaleha.com",
              sameAs: [
                "https://www.facebook.com/yourpage",
                "https://www.instagram.com/yourpage",
                "https://www.twitter.com/yourpage",
              ],
            }),
          }}
        />
      </head>
      <body className={roboto.className}>
        <Layout>
          {/* ✅ Hidden SEO-friendly section */}
          <section className="sr-only">
            <h2>خدمات تركيب وصيانة الدش في خميس مشيط</h2>
            <p>
              نقدم أفضل خدمات تركيب وصيانة الدش بخميس مشيط. يشمل ذلك تركيب دش
              مركزي وعادي، صيانة أعطال انقطاع الإشارة، بيع رسيفرات IPTV وHD،
              تركيب أسلاك دش عالية الجودة، وضبط الإشارة بدقة. إذا كنت تبحث عن{" "}
              <strong>فني دش قريب منك</strong> أو{" "}
              <strong>محل دش خميس مشيط</strong> فنحن الخيار الأمثل.
            </p>
            <ul>
              <li>تركيب دش لجميع أنواع المنازل والشقق بخميس مشيط</li>
              <li>صيانة أعطال ورسيفرات بجميع أنواعها</li>
              <li>بيع رسيفرات IPTV وHD وملحقاتها</li>
              <li>تمديد وتركيب أسلاك دش عالية الجودة</li>
              <li>فحص وضبط الإشارة باستخدام أجهزة حديثة</li>
              <li>محلات دش وخدمات سريعة في جميع أحياء خميس مشيط</li>
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
