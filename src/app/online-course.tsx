"use client";

import React, { useEffect, useState } from "react";
import { Typography } from "@material-tailwind/react";

const SERVICES = [
  {
    title: "Central Dish Installation",
    description:
      "Professional installation of central satellite dishes for homes, apartments, and commercial buildings in Khamis Mushait. We ensure perfect alignment and high-quality signal.",
  },
  {
    title: "Dish Maintenance",
    description:
      "Regular maintenance to keep your satellite system running smoothly. Includes inspection, cleaning, and fine-tuning of all components.",
  },
  {
    title: "Dish Repair",
    description:
      "Quick and reliable repair services for malfunctioning or damaged satellite dishes. We restore your system to full functionality.",
  },
  {
    title: "Receiver Setup & Configuration",
    description:
      "Complete installation and configuration of satellite receivers. We ensure all channels are accessible and the system works immediately.",
  },
  {
    title: "Signal Optimization",
    description:
      "Optimize your satellite signal for the clearest picture and best sound. We fine-tune your system to prevent interruptions.",
  },
  {
    title: "Multi-Dish Setup",
    description:
      "Installation and configuration of multiple dishes for buildings with several units, ensuring consistent service for every household.",
  },
  {
    title: "Professional Consultation",
    description:
      "Our experts provide personalized consultation for your property and needs, helping you choose the perfect setup.",
  },
  {
    title: "Customer Support & Assistance",
    description:
      "Ongoing support for all satellite-related issues, ensuring a smooth experience from installation to maintenance.",
  },
];

const TESTIMONIALS = [
  {
    name: "Ahmed Al-Harbi",
    feedback:
      "Excellent service! My central dish was installed perfectly, and the signal is crystal clear. Highly recommend.",
  },
  {
    name: "Sara Al-Qahtani",
    feedback:
      "Professional and quick. The team fixed our old dish and optimized the signal. Very satisfied.",
  },
  {
    name: "Mohammed Al-Fahad",
    feedback:
      "Great customer service and affordable pricing. They guided me through installation and maintenance effortlessly.",
  },
];

const FAQS = [
  {
    question: "How long does installation take?",
    answer:
      "Typical installation takes 1-3 hours depending on the property size and complexity.",
  },
  {
    question: "Do you provide warranty?",
    answer:
      "Yes, we offer a warranty on both installation and maintenance services for peace of mind.",
  },
  {
    question: "Can you repair any dish brand?",
    answer:
      "Absolutely! Our technicians are experienced with all major satellite dish brands and models.",
  },
];

export function SatelliteDishService() {
  const [visible, setVisible] = useState<boolean[]>(Array(SERVICES.length).fill(false));

  useEffect(() => {
    // Animate cards sequentially
    SERVICES.forEach((_, index) => {
      setTimeout(() => {
        setVisible((prev) => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }, index * 200);
    });
  }, []);

  return (
    <section className="py-20 px-8 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto text-center">
        <Typography variant="h2" color="blue-gray" className="mb-6" {...({} as any)}>
          Satellite Dish Services in Khamis Mushait
        </Typography>

        <Typography variant="lead" className="mb-12 max-w-3xl mx-auto text-gray-700" {...({} as any)}>
          We provide full satellite dish services including installation, maintenance, repair, and receiver setup in Khamis Mushait. Our team ensures reliable, high-quality signal for homes, apartments, and commercial buildings.
        </Typography>

        {/* Services Section */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <div
              key={service.title}
              className={`p-6 rounded-xl shadow-lg bg-white transform transition-all duration-700 ease-out ${
                visible[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } hover:scale-105 hover:shadow-2xl`}
            >
              <Typography variant="h5" color="blue-gray" className="mb-4 font-semibold" {...({} as any)}>
                {service.title}
              </Typography>
              <Typography className="text-gray-600" {...({} as any)}>
                {service.description}
              </Typography>
            </div>
          ))}
        </div>



      </div>
    </section>
  );
}

export default SatelliteDishService;
