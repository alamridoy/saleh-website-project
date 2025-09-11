"use client";

import { useState } from "react";
import { Typography, Button } from "@material-tailwind/react";
import emailjs from "@emailjs/browser";

export function ContactForm() {
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!title.trim()) newErrors.title = "الموضوع مطلوب";
    if (!email.trim()) {
      newErrors.email = "البريد الإلكتروني مطلوب";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "بريد إلكتروني غير صالح";
    }
    if (!message.trim()) newErrors.message = "الرسالة مطلوبة";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    console.log("بيانات النموذج المرسلة:", { title, email, message });

    setIsSubmitting(true);
    setSuccessMessage("");

    emailjs
      .send(
        "service_68zvkgc", // Service ID
        "template_wy0olsw", // Template ID
        { title, email, message },
        "26Vh57Zd3fr-hLQ5_" // Public Key
      )
      .then(
        (response) => {
          console.log("✅ تم الإرسال!", response.status, response.text);
          setSuccessMessage("✅ تم إرسال رسالتك بنجاح!");
          setTitle("");
          setEmail("");
          setMessage("");
          setErrors({});
        },
        (error) => {
          console.error("❌ فشل الإرسال...", error);
          setErrors({ api: "❌ حدث خطأ. حاول مرة أخرى لاحقاً." });
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section className="pb-20 px-8" dir="rtl">
      <div className="container mx-auto mb-12 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4" {...({} as any)}>
          اتصل بنا
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
          {...({} as any)}
        >
          لديك سؤال أو ترغب بالتواصل معنا؟ املأ النموذج وسنعاود الاتصال بك في أقرب وقت.
        </Typography>
      </div>

      <div className="container mx-auto max-w-2xl">
        <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
          {/* Subject */}
          <div className="group">
            <label htmlFor="title" className="block text-sm font-medium text-slate-700 mb-3">
              الموضوع
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={`w-full px-5 py-4 bg-white border-2 ${
                errors.title
                  ? "border-red-300 focus:border-red-500"
                  : "border-slate-200 focus:border-slate-400"
              } rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none`}
              placeholder="عن ماذا تريد الاستفسار؟"
              aria-label="الموضوع"
            />
            {errors.title && <p className="text-red-500 text-sm mt-2">{errors.title}</p>}
          </div>

          {/* Email */}
          <div className="group">
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-3">
              البريد الإلكتروني
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-5 py-4 bg-white border-2 ${
                errors.email
                  ? "border-red-300 focus:border-red-500"
                  : "border-slate-200 focus:border-slate-400"
              } rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none`}
              placeholder="example@email.com"
              aria-label="البريد الإلكتروني"
            />
            {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
          </div>

          {/* Message */}
          <div className="group">
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-3">
              الرسالة
            </label>
            <textarea
              id="message"
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`w-full px-5 py-4 bg-white border-2 ${
                errors.message
                  ? "border-red-300 focus:border-red-500"
                  : "border-slate-200 focus:border-slate-400"
              } rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none resize-none`}
              placeholder="اكتب رسالتك هنا..."
              aria-label="الرسالة"
            />
            {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message}</p>}
          </div>

          {/* API Errors */}
          {errors.api && <p className="text-red-500 text-center">{errors.api}</p>}

          {/* Success */}
          {successMessage && <p className="text-green-600 text-center">{successMessage}</p>}

          {/* Submit */}
          <div className="flex justify-center">
            <Button type="submit" color="blue" size="lg" className="mt-4" disabled={isSubmitting} {...({} as any)}>
              {isSubmitting ? "جاري الإرسال..." : "إرسال"}
            </Button>
          </div>
        </form>

        {/* ✅ Hidden SEO keywords */}
        <div className="sr-only">
          تواصل مع محل صالحة محمد أحمد التجارية في خميس مشيط لتركيب وصيانة الدش،
          بيع رسيفرات IPTV وHD، وصيانة الأعطال وضبط الإشارة. عبر البريد الإلكتروني
          أو الهاتف أو واتساب.
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
