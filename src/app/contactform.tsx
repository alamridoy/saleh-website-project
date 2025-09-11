"use client";

import { useState } from "react";
import { Typography, Input, Textarea, Button } from "@material-tailwind/react";
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

    if (!title.trim()) newErrors.title = "Title is required";
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email address";
    }
    if (!message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    console.log("Form data being sent:", { title, email, message });

    setIsSubmitting(true);
    setSuccessMessage("");

    emailjs
      .send(
        "service_68zvkgc",       // your Service ID
        "template_wy0olsw",      // your Template ID
        { title, email, message },
        "26Vh57Zd3fr-hLQ5_"      // your Public Key
      )
      .then(
        (response) => {
          console.log("✅ SUCCESS!", response.status, response.text);
          setSuccessMessage("✅ Your message has been sent!");
          setTitle("");
          setEmail("");
          setMessage("");
          setErrors({});
        },
        (error) => {
          console.error("❌ FAILED...", error);
          setErrors({ api: "❌ Failed to send message. Try again later." });
        }
      )
      .finally(() => setIsSubmitting(false));
  };


  return (
    <section className="pb-20 px-8">
      <div className="container mx-auto mb-12 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4" {...({} as any)}>
          Contact Us
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
          {...({} as any)}
        >
          Have a question or want to get in touch? Fill out the form below and we’ll get back to you shortly.
        </Typography>
      </div>

      <div className="container mx-auto max-w-2xl">
        <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
          <div className="group">
              <label htmlFor="title" className="block text-sm font-medium text-slate-700 mb-3 transition-colors group-focus-within:text-slate-900">
                Subject
              </label>
              <div className="relative">
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className={`w-full px-5 py-4 bg-white border-2 ${
                    errors.title ? 'border-red-300 focus:border-red-500' : 'border-slate-200 focus:border-slate-400'
                  } rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-0 transition-all duration-300 hover:border-slate-300`}
                  placeholder="What's this regarding?"
                />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-800 transition-all duration-300 group-focus-within:w-full"></div>
              </div>
              {errors.title && (
                <p className="text-red-500 text-sm mt-2 flex items-center animate-fade-in">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors.title}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="group">
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-3 transition-colors group-focus-within:text-slate-900">
                Email Address
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-5 py-4 bg-white border-2 ${
                    errors.email ? 'border-red-300 focus:border-red-500' : 'border-slate-200 focus:border-slate-400'
                  } rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-0 transition-all duration-300 hover:border-slate-300`}
                  placeholder="your@company.com"
                />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-800 transition-all duration-300 group-focus-within:w-full"></div>
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-2 flex items-center animate-fade-in">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors.email}
                </p>
              )}
            </div>

            {/* Message Field */}
            <div className="group">
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-3 transition-colors group-focus-within:text-slate-900">
                Message
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`w-full px-5 py-4 bg-white border-2 ${
                    errors.message ? 'border-red-300 focus:border-red-500' : 'border-slate-200 focus:border-slate-400'
                  } rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-0 transition-all duration-300 resize-none hover:border-slate-300`}
                  placeholder="Tell us more about your inquiry..."
                />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-800 transition-all duration-300 group-focus-within:w-full"></div>
              </div>
              {errors.message && (
                <p className="text-red-500 text-sm mt-2 flex items-center animate-fade-in">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors.message}
                </p>
              )}
            </div>


          {/* API Errors */}
          {errors.api && <p className="text-red-500 text-center">{errors.api}</p>}

          {/* Success */}
          {successMessage && <p className="text-green-600 text-center">{successMessage}</p>}

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button type="submit" color="blue" size="lg" className="mt-4" disabled={isSubmitting} {...({} as any)}>
              {isSubmitting ? "Sending..." : "Submit"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
