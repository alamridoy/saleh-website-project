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
  metadataBase: new URL("https://bestdishelectronics.store"),
  title:
    "محل حسن للإلكترونيات 0558202859 - تركيب دش خميس مشيط وأبها | صيانة رسيفرات IPTV وHD | تركيب كاميرات",
  description:
    "محل حسن للإلكترونيات يقدم أفضل خدمات تركيب دش خميس مشيط: تركيب دش مركزي وعادي، صيانة دش ورسيفرات IPTV وHD، بيع رسيفرات وأطباق دش عالية الجودة، وتركيب كاميرات مراقبة بخميس مشيط. فني تركيب أطباق أقمار صناعية بالقرب منك. اتصل الآن 0558202859.",
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
    "شركة تركيب دش ابها خميس",
    "صيانة دش ورسيفرات IPTV وHD",
    "بيع رسيفرات وأطباق دش عالية الجودة",
    "فني تركيب أطباق الأقمار الصناعية بالقرب مني في خميس مشيط",
    "تركيب كاميرات خميس مشيط",
    "أفضل محل دش قريب منك بخميس مشيط",
    "تركيب دش مركزي وعادي بخميس مشيط",
    "تركيب هوائي الدش في خميس مشيط",
  ],
  openGraph: {
    title:
      "محل حسن للإلكترونيات | تركيب دش مركزي وصيانة رسيفرات IPTV وHD وكاميرات مراقبة | خميس مشيط",
    description:
      "محل حسن للإلكترونيات - تركيب دش خميس مشيط وأبها، صيانة دش ورسيفرات IPTV وHD، تركيب كاميرات مراقبة. اتصل 0558202859.",
    url: "https://bestdishelectronics.store/",
    siteName: "محل حسن للإلكترونيات",
    images: [
      {
        url: "https://bestdishelectronics.store/image/course.png",
        width: 1200,
        height: 630,
        alt: "محل حسن للإلكترونيات | Dish Installation Khamis Mushait",
      },
    ],
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "محل حسن للإلكترونيات | تركيب دش مركزي وصيانة رسيفرات IPTV وHD",
    description:
      "تركيب وصيانة دش بخميس مشيط مع فنيين متخصصين. بيع رسيفرات وأطباق دش عالية الجودة وتركيب كاميرات مراقبة مع محل حسن للإلكترونيات.",
    images: ["https://bestdishelectronics.store/image/course.png"],
  },
  alternates: {
    canonical: "https://bestdishelectronics.store/",
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
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "كيف أجد أفضل فني دش في خميس مشيط؟",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "أفضل طريقة لإيجاد فني دش في خميس مشيط هي الاعتماد على محل حسن للإلكترونيات حيث يقدم خدمات تركيب وصيانة الدش المركزي والعادي، مع فريق فنيين متخصصين ومجهزين بأحدث أجهزة فحص الإشارة."
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
                    "text": "نعم، محل حسن للإلكترونيات يوفر بيع رسيفرات وأطباق دش عالية الجودة IPTV وHD مع ضمان التركيب والتشغيل، بالإضافة إلى دعم فني مستمر."
                  }
                },
                {
                  "@type": "Question",
                  "name": "هل تقومون بتركيب كاميرات المراقبة في خميس مشيط؟",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "نعم، محل حسن للإلكترونيات يقدم خدمة تركيب كاميرات المراقبة في خميس مشيط بجانب تركيب وصيانة الدش، مع فنيين متخصصين وأسعار تنافسية."
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
          data-site="bestdishelectronics.store"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script>

        {/* Favicon */}
       <link rel="shortcut icon" href="/logos/storelogo.png" type="image/png" />

        {/* JSON-LD LocalBusiness + Services */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                name: "محل حسن للإلكترونيات",
                image: "https://bestdishelectronics.store/image/course.png",
                description:
                  "فني دش خميس مشيط يقدم خدمات تركيب دش، صيانة أعطال، بيع رسيفرات وأطباق دش عالية الجودة IPTV وHD، تركيب كاميرات مراقبة، وتمديد أسلاك عالية الجودة. تغطي خدماتنا جميع أحياء خميس مشيط.",
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
                url: "https://bestdishelectronics.store/",
                sameAs: [
                  "https://www.facebook.com/yourpage",
                  "https://www.instagram.com/yourpage",
                  "https://www.twitter.com/yourpage",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                serviceType: "تركيب دش مركزي وعادي بخميس مشيط",
                provider: { "@type": "LocalBusiness", name: "محل حسن للإلكترونيات" },
                areaServed: "خميس مشيط",
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                serviceType: "صيانة دش ورسيفرات IPTV وHD",
                provider: { "@type": "LocalBusiness", name: "محل حسن للإلكترونيات" },
                areaServed: "خميس مشيط",
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                serviceType: "بيع رسيفرات وأطباق دش عالية الجودة",
                provider: { "@type": "LocalBusiness", name: "محل حسن للإلكترونيات" },
                areaServed: "خميس مشيط",
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                serviceType: "تركيب كاميرات خميس مشيط",
                provider: { "@type": "LocalBusiness", name: "محل حسن للإلكترونيات" },
                areaServed: "خميس مشيط",
              }
            ]),
          }}
        />
      </head>
      <body className={roboto.className}>
        <Layout>
          <section className="sr-only">
            <h2>خدمات تركيب وصيانة الدش في خميس مشيط - محل حسن للإلكترونيات</h2>
            <p>
              يقدم <strong>محل حسن للإلكترونيات</strong> أفضل خدمات{" "}
              <strong>فني دش خميس مشيط</strong> من تركيب دش
              مركزي وعادي وصيانة أعطال، مع بيع رسيفرات وأطباق دش عالية الجودة
              IPTV وHD وتمديد أسلاك عالية الجودة. إذا كنت تبحث عن{" "}
              <strong>أفضل محل دش قريب منك بخميس مشيط</strong> أو{" "}
              <strong>فني دش قريب منك</strong> فنحن الخيار الأمثل.
            </p>
            <ul>
              <li>محل تركيب دش خميس مشيط وشركة تركيب دش ابها خميس</li>
              <li>تركيب دش مركزي وعادي بخميس مشيط لجميع أنواع المنازل والشقق</li>
              <li>تركيب هوائي الدش في خميس مشيط وصيانة أعطال ورسيفرات بجميع أنواعها</li>
              <li>صيانة دش ورسيفرات IPTV وHD وبيع رسيفرات وأطباق دش عالية الجودة</li>
              <li>فني تركيب أطباق الأقمار الصناعية بالقرب مني في خميس مشيط</li>
              <li>تركيب كاميرات خميس مشيط</li>
              <li>تمديد وتركيب أسلاك دش عالية الجودة وفحص وضبط الإشارة باستخدام أجهزة حديثة</li>
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
