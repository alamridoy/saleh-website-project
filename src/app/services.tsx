"use client";

import React, { useEffect, useState, useRef } from "react";
import { Typography } from "@material-tailwind/react";

const SERVICES = [
  {
    title: "تركيب صحون مركزية",
    description:
      "تركيب احترافي لأطباق الأقمار الصناعية المركزية للمنازل والشقق والمباني التجارية في خميس مشيط. نضمن محاذاة مثالية واستقبال إشارة عالية الجودة للحصول على أفضل أداء.",
    image: "/image/services/one.jpg",
    details: "تشمل خدمة تركيب الطبق المركزي لدينا مسحًا كاملاً للموقع، وتركيبًا احترافيًا، ومحاذاة دقيقة للقمر الصناعي، واختبار الإشارة، وتكوين النظام. نستخدم مواد عالية الجودة ونتبع أفضل الممارسات في الصناعة لضمان أداء طويل الأمد.",
    features: ["مسح مجاني للموقع", "تركيب احترافي", "تحسين الإشارة", "ضمان لمدة سنة", "دعم 24/7"],
    duration: "2-4 ساعات",
    price: "يبدأ من 500 ريال سعودي"
  },
  {
    title: "أفضل محل دش قريب منك بخميس مشيط",
    description:
      "صيانة دورية للحفاظ على نظام القمر الصناعي يعمل بسلاسة. تشمل الفحص والتنظيف والضبط الدقيق لجميع المكونات لمنع انقطاع الإشارة وإطالة عمر المعدات.",
    image: "/image/services/two.jpg",
    details: "خدمة صيانة شاملة تتضمن تنظيفًا شاملاً للطبق والمكونات، واختبار قوة الإشارة، وفحص الكابلات، والتحقق من مقاومة العوامل الجوية، وتحسين الأداء لضمان جودة إشارة ثابتة.",
    features: ["تنظيف كامل للنظام", "اختبار الإشارة", "فحص الكابلات", "فحص مقاومة العوامل الجوية", "تقرير الأداء"],
    duration: "1-2 ساعات",
    price: "يبدأ من 150 ريال سعودي"
  },
  {
    title: "إصلاح الأطباق",
    description:
      "خدمات إصلاح سريعة وموثوقة للأطباق التالفة أو التي بها أعطال. نعيد نظامك إلى وظيفته الكاملة بقطع غيار أصلية وحرفية خبراء.",
    image: "/image/services/three.jpg",
    details: "خدمات إصلاح خبراء لجميع أنواع مشاكل أطباق الأقمار الصناعية بما في ذلك مشاكل الإشارة، والمكونات التالفة، وتلف الطقس، ومشاكل المحاذاة. نستخدم قطع غيار أصلية ونقدم ضمانًا على جميع الإصلاحات.",
    features: ["قطع غيار أصلية فقط", "تشخيص سريع", "خدمة في نفس اليوم", "ضمان الإصلاح", "إصلاحات طارئة متاحة"],
    duration: "1-3 ساعات",
    price: "يبدأ من 200 ريال سعودي"
  },
  {
    title: "فني تركيب أطباق الأقمار الصناعية بالقرب مني في خميس مشيط",
    description:
      "يقدم فني تركيب دش أبها وخميس خدمات بيع أجهزة الاستقبال بأفضل الأسعار وتركيبها باحترافية. يتم اختيار الأجهزة بناءً على أحدث التقنيات لضمان أفضل تجربة مشاهدة.",
    image: "/image/services/four.jpg",
    details: "يقدم فني تركيب دش ابها خميس خدمات بيع أجهزة الاستقبال بأفضل الأسعار وتركيبها باحترافية. يتم اختيار الأجهزة بناءً على أحدث التقنيات لضمان أفضل تجربة مشاهدة. كما نقدم خدمات تأسيس متكاملة لضمان أداء متميز.",
    features: ["أحدث الأجهزة", "تركيب احترافي", "أسعار تنافسية", "ضمان على الأجهزة", "ضبط شامل للإشارة والترددات"],
    duration: "1-2 ساعات",
    price: "حسب نوع الجهاز"
  },
  {
    title: "محل تركيب طبق الأقمار الصناعية المركزي في خميس مشيط",
    description:
      "يتمتع فني شركة تركيب دش خميس مشيط وأبها بخبرة واسعة في محل تركيب طبق الأقمار الصناعية المركزي في خميس مشيط للحصول على أفضل جودة إشارة باستخدام أحدث التقنيات.",
    image: "/image/services/five.jpg",
    details: "نستخدم أحدث أجهزة الكشف عن الإشارة لضبط دقيق لإشارات الأقمار الصناعية والترددات، مما يضمن لك جودة صورة وصوت فائقة، والتخلص من أي تقطعات أو ضعف في الإشارة.",
    features: ["استخدام أحدث الأجهزة", "ضبط دقيق للإشارة", "تحسين جودة الصوت والصورة", "حل مشاكل التقطيع", "خدمة سريعة وفعالة"],
    duration: "1-2 ساعات",
    price: "يبدأ من 120 ريال سعودي"
  },
  {
    title: "محل تركيب دش خميس مشيط",
    description:
      "إذا كنت تحتاج إلى تأسيس نظام دش مركزي أو عادي في منزلك أو مكتبك، يوفر فني تركيب دش أبها وخميس خدمات تأسيس متكاملة لضمان أداء متميز.",
    image: "/image/services/six.jpg",
    details: "خدماتنا لتأسيس الدش تشمل التمديدات الداخلية والخارجية، وتوزيع الإشارة على كافة الوحدات، وتركيب كافة الملحقات باحترافية عالية، مما يضمن نظامًا متينًا وفعالًا.",
    features: ["تمديدات احترافية", "توزيع الإشارة", "تركيب ملحقات النظام", "نظام متين وفعال", "حلول مخصصة للمباني"],
    duration: "4-8 ساعات",
    price: "يبدأ من 1500 ريال سعودي"
  },
  {
    title: "اشتراك قنوات بين سبورت وIPTV خميس مشيط",
    description:
      "يقدم فني تركيب دش أبها وخميس خدمات تفعيل اشتراك قنوات بين سبورت وباقات IPTV وOSN المشفرة لضمان استقبال جميع قنواتك المفضلة.",
    image: "/image/services/seven.jpg",
    details: "يقوم الفني بتركيب وتفعيل جميع باقات القنوات الرياضية والترفيهية، بما في ذلك اشتراك قنوات بين سبورت وباقات IPTV، لضمان استقبال جميع القنوات بجودة عالية دون أي مشاكل. كما نقدم خدمات المساعدة في اختيار الباقة المناسبة لك وتجهيز كافة المتطلبات مع شركة IPTV حسن.",
    features: ["تفعيل جميع الباقات", "تركيب سريع وفعال", "دعم فني", "حلول مشاكل التشفير", "أسعار مناسبة"],
    duration: "1-2 ساعات",
    price: "حسب الباقة"
  },
  {
    title: "فني دش وتركيب شاشات خميس مشيط",
    description:
      "يقدم محل حسن للإلكترونيات خدمة تركيب الشاشات على الحائط بالمقاس المناسب في خميس مشيط، مع توصيلها بأنظمة الدش والرسيفر وضبط الصورة والصوت.",
    image: "/image/services/six.jpg",
    details: "تشمل خدمة تركيب الشاشات تثبيتًا احترافيًا على الحائط بحامل مناسب، وتوصيلًا كاملًا مع الدش والرسيفر ومكبرات الصوت إن وجدت، مع إخفاء الأسلاك بشكل مرتب وضبط إعدادات الصورة للحصول على أفضل جودة عرض.",
    features: ["تركيب على الحائط بأمان", "توصيل كامل مع الدش والرسيفر", "إخفاء الأسلاك بشكل مرتب", "ضبط جودة الصورة والصوت", "خدمة لجميع مقاسات الشاشات"],
    duration: "1-2 ساعات",
    price: "يبدأ من 100 ريال سعودي"
  },
  {
    title: "تركيب كاميرات خميس مشيط",
    description:
      "يقدم محل حسن للإلكترونيات خدمة تركيب كاميرات المراقبة للمنازل والمحلات والشركات في خميس مشيط، مع اختيار أفضل الأنظمة وربطها بالجوال لمتابعة البث المباشر أينما كنت.",
    image: "/image/services/eight.jpg",
    details: "تشمل خدمة تركيب كاميرات المراقبة تركيبًا احترافيًا للكاميرات الداخلية والخارجية، وتوصيل الأسلاك وأجهزة التسجيل (DVR/NVR)، وربط النظام بتطبيق الجوال للمشاهدة عن بعد، مع ضبط زوايا التصوير لتغطية شاملة وآمنة.",
    features: ["كاميرات داخلية وخارجية", "ربط بالجوال للمتابعة المباشرة", "أجهزة تسجيل عالية الدقة", "تمديد أسلاك احترافي", "ضمان على التركيب"],
    duration: "2-5 ساعات",
    price: "حسب عدد الكاميرات"
  },
  {
    title: "دعم ومساعدة العملاء",
    description:
      "دعم مستمر لجميع المشاكل المتعلقة بالأقمار الصناعية، مما يضمن تجربة سلسة من التركيب إلى الصيانة مع المساعدة الفنية على مدار الساعة والإصلاحات الطارئة.",
    image: "/image/services/eight.jpg",
    details: "خدمة دعم عملاء شاملة بما في ذلك المساعدة الفنية على مدار الساعة، والإصلاحات الطارئة، وإرشادات استكشاف الأخطاء وإصلاحها، ودعم الصيانة المستمر لضمان تشغيل نظام القمر الصناعي الخاص بك بسلاسة.",
    features: ["دعم 24/7", "إصلاحات طارئة", "مساعدة عبر الهاتف", "مساعدة في استكشاف الأخطاء", "تذكيرات الصيانة"],
    duration: "مستمر",
    price: "تتوفر باقات دعم"
  },
];

export function SatelliteDishService() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(Array(SERVICES.length).fill(false));
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = cardRefs.current.map((cardRef, index) => {
      if (!cardRef) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
              }, 200);
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(cardRef);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  // Close modal when clicking outside or pressing Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedService(null);
      }
    };

    if (selectedService !== null) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedService]);

  const openModal = (index: number) => {
    setSelectedService(index);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <>
      <section className="py-24 px-4 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto relative z-10">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                خدمات احترافية
              </span>
            </div>
            <Typography variant="h2" color="blue-gray" className="mb-6 text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent" {...({} as any)}>
              خدمات أطباق الأقمار الصناعية في خميس مشيط
            </Typography>
            <Typography variant="lead" className="mb-8 max-w-4xl mx-auto text-gray-600 text-xl leading-relaxed" {...({} as any)}>
              نقدم خدمات شاملة لأطباق الأقمار الصناعية بما في ذلك التركيب، الصيانة، الإصلاح، وإعداد جهاز الاستقبال. فريقنا الخبير يضمن إشارة موثوقة وعالية الجودة للمنازل، الشقق، والمباني التجارية.
            </Typography>
          </div>

          {/* Services Cards */}
          <div className="max-w-6xl mx-auto space-y-12">
            {SERVICES.map((service, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.title}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  className={`transform transition-all duration-1000 ease-out ${visibleCards[index]
                    ? "opacity-100 translate-x-0"
                    : `opacity-0 ${isEven ? "translate-x-20" : "-translate-x-20"}`
                    }`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                    <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} min-h-[300px]`}>

                      {/* Image Section */}
                      <div className="relative lg:w-2/5 h-64 lg:h-auto overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      </div>

                      {/* Content Section */}
                      <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                        <div className="mb-4">
                          <Typography variant="h3" color="blue-gray" className="mb-4 text-2xl lg:text-3xl font-bold group-hover:text-blue-700 transition-colors duration-300" {...({} as any)}>
                            {service.title}
                          </Typography>
                          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 transform transition-all duration-500 group-hover:w-32"></div>
                        </div>

                        <Typography className="text-gray-600 text-lg leading-relaxed mb-8" {...({} as any)}>
                          {service.description}
                        </Typography>

                        {/* Action buttons */}
                        <div className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-500 ${hoveredCard === index ? "translate-y-0 opacity-100" : "translate-y-2 opacity-80"
                          }`}>
                          <button
                            onClick={() => window.open('tel:+966558202859', '_self')}
                            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            احصل على الخدمة
                          </button>
                          <button
                            onClick={() => openModal(index)}
                            className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            اعرف المزيد
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Decorative elements */}
                    <div className={`absolute -top-4 ${isEven ? "-right-4" : "-left-4"} w-24 h-24 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-full transition-all duration-500 ${hoveredCard === index ? "scale-125 opacity-100" : "opacity-60"
                      }`}></div>
                    <div className={`absolute -bottom-4 ${isEven ? "-left-4" : "-right-4"} w-16 h-16 bg-gradient-to-tr from-purple-400/30 to-pink-500/30 rounded-full transition-all duration-500 ${hoveredCard === index ? "scale-125 opacity-100" : "opacity-60"
                      }`}></div>
                  </div>

                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 rounded-3xl transition-all duration-500 -z-10 ${hoveredCard === index
                    ? "bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-xl scale-105"
                    : ""
                    }`}></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal Popup */}
      {selectedService !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeModal}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 z-10 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Header with Image */}
            <div className="relative h-64 md:h-80 overflow-hidden rounded-t-3xl">
              <img
                src={SERVICES[selectedService].image}
                alt={SERVICES[selectedService].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-2" {...({} as any)}>
                  {SERVICES[selectedService].title}
                </Typography>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-8">
              {/* Description */}
              <div className="mb-8">
                <Typography variant="h4" className="text-xl font-semibold mb-4 text-gray-800" {...({} as any)}>
                  نظرة عامة على الخدمة
                </Typography>
                <Typography className="text-gray-600 text-lg leading-relaxed mb-4" {...({} as any)}>
                  {SERVICES[selectedService].description}
                </Typography>
                <Typography className="text-gray-700 leading-relaxed" {...({} as any)}>
                  {SERVICES[selectedService].details}
                </Typography>
              </div>

              {/* Features */}
              <div className="mb-8">
                <Typography variant="h4" className="text-xl font-semibold mb-4 text-gray-800" {...({} as any)}>
                  ما يشمله السعر
                </Typography>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {SERVICES[selectedService].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <Typography variant="h6" className="font-semibold text-gray-800" {...({} as any)}>
                      المدة
                    </Typography>
                  </div>
                  <Typography className="text-gray-600" {...({} as any)}>
                    {SERVICES[selectedService].duration}
                  </Typography>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => window.open('tel:+966558202859', '_self')}
                  className="flex-1 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  اتصل الآن: 966558202859+
                </button>
                <button
                  onClick={() => window.open('https://wa.me/966558202859?text=Hi, I would like to know more about ' + encodeURIComponent(SERVICES[selectedService].title), '_blank')}
                  className="flex-1 px-8 py-4 border-2 border-green-500 text-green-600 rounded-2xl font-semibold hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.687" />
                  </svg>
                  واتساب
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SatelliteDishService;