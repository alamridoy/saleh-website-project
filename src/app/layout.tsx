import "./globals.css";
import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import { Layout } from "@/components";
import ClientComponents from "@/components/ClientComponents";
import { MobileContactBar } from "@/components/cta";
import { business } from "@/config/business";
import { localBusinessSchema, websiteSchema, jsonLd } from "@/config/seo";

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

const TITLE =
  "فني دش خميس مشيط | تركيب وصيانة الدش والرسيفرات — محل حسن للإلكترونيات";
const DESCRIPTION =
  "محل حسن للإلكترونيات في خميس مشيط: تركيب دش عادي ومركزي، صيانة الدش وضبط إشارة نايل سات وعرب سات، برمجة وصيانة الرسيفرات، تركيب الشاشات وكاميرات المراقبة، وإعداد أجهزة IPTV. اتصل أو راسلنا واتساب على 0558202859.";

export const metadata: Metadata = {
  metadataBase: new URL(business.DOMAIN),
  title: {
    default: TITLE,
    template: "%s | محل حسن للإلكترونيات",
  },
  description: DESCRIPTION,
  applicationName: business.BUSINESS_NAME,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${business.DOMAIN}/`,
    siteName: business.BUSINESS_NAME,
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: business.OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "فني دش خميس مشيط — محل حسن للإلكترونيات",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [business.OG_IMAGE],
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
        <link rel="shortcut icon" href="/logos/storelogo.png" type="image/png" />

        {/* Structured data */}
        <script {...jsonLd([localBusinessSchema, websiteSchema])} />

        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${business.GA_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${business.GA_ID}');`,
          }}
        />

        {/* Nepcha Analytics (existing) */}
        <script
          defer
          data-site="bestdishelectronics.store"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        />
      </head>
      <body className={`${tajawal.className} pb-14 md:pb-0`}>
        <Layout>
          {children}
          <ClientComponents />
          <MobileContactBar />
        </Layout>
      </body>
    </html>
  );
}
