import React from "react";
import { Navbar, Footer } from "@/components";

export default function Service1Page() {
  const service = {
    title: "تركيب صحون مركزية",
    description:
      "تركيب احترافي لأطباق الأقمار الصناعية المركزية للمنازل والشقق والمباني التجارية في خميس مشيط. نضمن محاذاة مثالية واستقبال إشارة عالية الجودة للحصول على أفضل أداء.",
    image: "/image/services/one.jpg",
    details:
      "تشمل خدمة تركيب الطبق المركزي لدينا مسحًا كاملاً للموقع، وتركيبًا احترافيًا، ومحاذاة دقيقة للقمر الصناعي، واختبار الإشارة، وتكوين النظام. نستخدم مواد عالية الجودة ونتبع أفضل الممارسات في الصناعة لضمان أداء طويل الأمد.",
    features: ["مسح مجاني للموقع", "تركيب احترافي", "تحسين الإشارة", "ضمان لمدة سنة", "دعم 24/7"],
    duration: "2-4 ساعات",
    price: "يبدأ من 500 ريال سعودي",
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* <Navbar /> */}

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-950/80 via-blue-950/80 to-purple-950/80 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">{service.description}</p>
      </section>

      {/* Content Section */}
      <section className="flex-1 max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold mb-6">ماذا نقدم في خدمة {service.title}؟</h2>
        <ul className="space-y-4 list-disc list-inside text-gray-800 text-lg">
          {service.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <a
            href="tel:+966558202859"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          >
            اتصل الآن لحجز الخدمة
          </a>
        </div>
      </section>

      {/* Optional Image / Visual Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <img
            src={service.image}
            alt={service.title}
            className="w-full md:w-1/2 rounded-lg shadow-lg object-cover"
          />
          <div className="md:w-1/2 text-gray-800">
            <h3 className="text-xl font-bold mb-4">تركيب احترافي وسريع</h3>
            <p>{service.details}</p>
            <p className="mt-4"><strong>المدة:</strong> {service.duration}</p>
            <p><strong>السعر:</strong> {service.price}</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
