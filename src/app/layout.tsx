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
    "فني دش خميس مشيط يقدم خدمات تركيب وصيانة الدش المركزي والعادي. محل صالحة محمد أحمد التجارية يوفر تركيب دش، صيانة أعطال، بيع رسيفرات IPTV وHD، وتمديد أسلاك بجودة عالية في خميس مشيط. اتصل الآن 0558202859.",
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
    "اطباق دش خميس مشيط",
    "اسلاك دش خميس مشيط",
  ],
  openGraph: {
    title:
      "فني دش خميس مشيط | تركيب دش مركزي وصيانة رسيفرات IPTV وHD | محل دش خميس مشيط",
    description:"تركيب دش ابها خميس  0558202859-فني تركيب دش وشاشات خميس وابها - ترند السعودية-تركيب دش مركزي خميس مشيط",
    url: "https://dishinstallationsaleha.com/",
    siteName: "محل صالحة محمد أحمد التجارية",
    images: [
      {
        url: " https://dishinstallationsaleha.com/تركيب-وصيانة-دش-خميس-مشيط",
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
    images: ["https://dishinstallationsaleha.com/تركيب-وصيانة-دش-خميس-مشيط"],
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
        {/* Google Analytics */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://dishinstallationsaleha.com/تركيب-وصيانة-دش-خميس-مشيط",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "كيف أجد أفضل فني دش في خميس مشيط؟",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "أفضل طريقة لإيجاد فني دش في خميس مشيط هي الاعتماد على محل صالحة محمد أحمد التجارية حيث يقدم خدمات تركيب وصيانة الدش المركزي والعادي، مع فريق فنيين متخصصين ومجهزين بأحدث أجهزة فحص الإشارة."
                  }
                },
                {
                  "@type": "Question",
                  "name": "ما هي أسعار تركيب وصيانة الدش في خميس مشيط؟",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "تبدأ أسعار تركيب وصيانة الدش بخميس مشيط من 100 ريال سعودي وتصل حتى 500 ريال حسب نوع الخدمة المطلوبة، سواء تركيب دش مركزي، صيانة أعطال، أو تمديد أسلاك عالية الجودة."
                  }
                },
                {
                  "@type": "Question",
                  "name": "هل تقدمون خدمة صيانة أعطال الدش في خميس مشيط؟",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "نعم، نقدم خدمات صيانة أعطال الدش في جميع أحياء خميس مشيط بما في ذلك إصلاح انقطاع الإشارة، فحص الرسيفرات، وضبط الأطباق بدقة عالية."
                  }
                },
                {
                  "@type": "Question",
                  "name": "هل يوجد محل رسيفرات IPTV وHD في خميس مشيط؟",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "نعم، محل صالحة محمد أحمد التجارية يوفر بيع رسيفرات IPTV وHD بجودة عالية مع ضمان التركيب والتشغيل، بالإضافة إلى دعم فني مستمر."
                  }
                },
                {
                  "@type": "Question",
                  "name": "هل خدماتكم تغطي جميع أحياء خميس مشيط؟",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "بالتأكيد، خدمات تركيب وصيانة الدش تشمل جميع أحياء ومناطق خميس مشيط مع توفير فني دش قريب منك للاستجابة السريعة."
                  }
                }
              ]
            }),
          }}
        />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-84836TE82T"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-84836TE82T');
      `,
          }}
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-84836TE82T"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-84836TE82T');
            `,
          }}
        />

        {/* Nepcha Analytics */}
        <script
          defer
          data-site="dishinstallationsaleha.com"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script>

        {/* Favicon */}
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />

        {/* JSON-LD LocalBusiness + Services */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://dishinstallationsaleha.com/تركيب-وصيانة-دش-خميس-مشيط",
                "@type": "LocalBusiness",
                name: "محل صالحة محمد أحمد التجارية",
                image:
                  "https://dishinstallationsaleha.com/تركيب-وصيانة-دش-خميس-مشيط",
                description:
                  "فني دش خميس مشيط يقدم خدمات تركيب دش، صيانة أعطال، بيع رسيفرات IPTV وHD، وتمديد أسلاك عالية الجودة. تغطي خدماتنا جميع أحياء خميس مشيط.",
                telephone: "+966558202859",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "خميس مشيط",
                  addressCountry: "SA",
                },
                geo: { "@type": "GeoCoordinates", latitude: 18.3, longitude: 42.7 },
                openingHours: "Mo-Su 08:00-23:00",
                areaServed: "خميس مشيط",
                priceRange: "SAR 100-500",
                url: "https://dishinstallationsaleha.com/تركيب-وصيانة-دش-خميس-مشيط",
                sameAs: [
                  "https://www.facebook.com/yourpage",
                  "https://www.instagram.com/yourpage",
                  "https://www.twitter.com/yourpage",
                ],
              },
              {
                "@context": "https://dishainstallationsaleha.com/تركيب-وصيانة-دش-خميس-مشيط",
                "@type": "Service",
                serviceType: "تركيب دش مركزي خميس مشيط",
                provider: { "@type": "LocalBusiness", name: "محل صالحة محمد أحمد التجارية" },
                areaServed: "خميس مشيط",
              },
              {
                "@context": "https://dishinstallationsaleha.com/تركيب-وصيانة-دش-خميس-مشيط",
                "@type": "Service",
                serviceType: "صيانة دش خميس مشيط",
                provider: { "@type": "LocalBusiness", name: "محل صالحة محمد أحمد التجارية" },
                areaServed: "خميس مشيط",
              },
              {
                "@context": "https://dishinstallationsaleha.com/تركيب-وصيانة-دش-خميس-مشيط",
                "@type": "Service",
                serviceType: "رسيفرات IPTV وHD خميس مشيط",
                provider: { "@type": "LocalBusiness", name: "محل صالحة محمد أحمد التجارية" },
                areaServed: "خميس مشيط",
              }
            ]),
          }}
        />
      </head>
      <body className={roboto.className}>
        <Layout>
          <section className="sr-only">
            <h2>خدمات تركيب وصيانة الدش في خميس مشيط</h2>
            <p>
              نقدم أفضل خدمات <strong>فني دش خميس مشيط</strong> من تركيب دش
              مركزي وعادي وصيانة أعطال، مع بيع رسيفرات IPTV وHD وتمديد أسلاك
              عالية الجودة. إذا كنت تبحث عن{" "}
              <strong>محل دش خميس مشيط</strong> أو{" "}
              <strong>فني دش قريب منك</strong> فنحن الخيار الأمثل.
            </p>
            <ul>
              <li>تركيب دش لجميع أنواع المنازل والشقق بخميس مشيط</li>
              <li>صيانة أعطال ورسيفرات بجميع أنواعها</li>
              <li>بيع رسيفرات IPTV وHD وملحقاتها</li>
              <li>تمديد وتركيب أسلاك دش عالية الجودة</li>
              <li>فحص وضبط الإشارة باستخدام أجهزة حديثة</li>
              <li>أفضل فني دش مركزي وخدمات سريعة في خميس مشيط</li>
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
