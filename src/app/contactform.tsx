"use client";

import { useState } from "react";
import { Typography, Input, Textarea, Button } from "@material-tailwind/react";

export function ContactForm() {
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email address";
    }

    if (!message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    // ✅ If validation passes, handle form submission (API call, etc.)
    console.log({ title, email, message });

    // Reset form after submission
    setTitle("");
    setEmail("");
    setMessage("");
    setErrors({});
  };

  return (
    <section className="pb-20 px-8">
      <div className="container mx-auto mb-12 text-center">
        <Typography
          variant="h2"
          color="blue-gray"
          className="mb-4"
          {...({} as any)}
        >
          Contact Us
        </Typography>

        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
          {...({} as any)}
        >
          Have a question or want to get in touch? Fill out the form below and
          we’ll get back to you shortly.
        </Typography>
      </div>

      <div className="container mx-auto max-w-2xl">
        <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
          {/* Title */}
          <div>
            <Input
              label="Title"
              type="text"
              value={title}
              onChange={(e: any) => setTitle(e.target.value)}
              {...({} as any)}
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <Input
              label="Email"
              type="email"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
              {...({} as any)}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <Textarea
              label="Message"
              value={message}
              onChange={(e: any) => setMessage(e.target.value)}
              {...({} as any)}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button
              type="submit"
              color="blue"
              size="lg"
              className="mt-4"
              {...({} as any)}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
