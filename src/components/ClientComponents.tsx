"use client";

import dynamic from "next/dynamic";

// Dynamic import of ContactPlugin for safety
const ContactPlugin = dynamic(() => import("../components/contact-plugin"), { ssr: false });

export default function ClientComponents() {
  return <ContactPlugin />;
}
