"use client";

import React from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  BuildingOfficeIcon,
  GlobeAltIcon
} from "@heroicons/react/24/outline";

const CURRENT_YEAR = new Date().getFullYear();

const CONTACT_INFO = {
  shopName: "Saleha Mohammed Ahmed Trading Store",
  subtitle: "Dish Installation in Khamis Mushait",
  address: "Khamis Mushayt - Al Khalidiyah Thalathin Street - Opposite Al Khalidiyah Elementary School",
  phone: ["+966558202859", "+966508805342"], // ✅ array of phone numbers
  email: "mdparvez.ahmed.509@gmail.com",
  hours: "Saturday - Sunday: 12:00 AM - 11:59 PM"
};


const SERVICES = [
  "Satellite Dish Installation",
  "Digital Receiver Setup",
  "Cable Management",
  "Signal Optimization",
  "Technical Support",
  "Maintenance Services"
];

const QUICK_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" }
];

export function Footer() {
  return (
    <footer className="bg-white border-t-2 border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

          {/* Company Information */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                <BuildingOfficeIcon className="w-6 h-6 text-blue-600" />
                {CONTACT_INFO.shopName}
              </h3>
              <p className="text-gray-600 font-medium">
                {CONTACT_INFO.subtitle}
              </p>
            </div>

            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPinIcon className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 text-sm leading-relaxed">
                  {CONTACT_INFO.address}
                </p>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700 font-medium">
                  {CONTACT_INFO.phone.map((num, idx) => (
                    <React.Fragment key={idx}>
                      <a
                        href={`tel:${num}`}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {num}
                      </a>
                      {idx < CONTACT_INFO.phone.length - 1 && ", "}
                    </React.Fragment>
                  ))}
                </span>
              </div>



              {/* Email */}
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-5 h-5 text-gray-500" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-3">
                <ClockIcon className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700 text-sm">
                  {CONTACT_INFO.hours}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Our Services</h4>
            <ul className="space-y-2">
              {SERVICES.map((service, index) => (
                <li key={index} className="text-gray-600 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Call-to-Action */}
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-1">
                Ready to install your satellite dish?
              </h4>
              <p className="text-gray-600 text-sm">
                Contact us today for professional installation services in Khamis Mushait
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium text-center transition-colors"
              >
                Call Now
              </a>
              <a
                href={`https://wa.me/966558202859`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium text-center transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {CURRENT_YEAR} {CONTACT_INFO.shopName}. All rights reserved.
            </p>

            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <GlobeAltIcon className="w-4 h-4" />
                Saudi Arabia
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;