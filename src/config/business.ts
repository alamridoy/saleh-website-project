/**
 * Centralized business / location / SEO configuration.
 *
 * ⚠️ VERIFICATION REQUIRED — see SEO-CHECKLIST.md
 * The following values were carried over from the existing website and the
 * embedded Google Map. They must be confirmed with the business owner before
 * they can be treated as fully verified:
 *   - BUSINESS_NAME  (site uses "محل حسن للإلكترونيات"; project folder / map
 *     embed reference the name "صالح")
 *   - STREET_ADDRESS, POSTAL_CODE
 *   - LATITUDE / LONGITUDE
 *   - SERVES_ABHA (site currently markets Khamis Mushait + Abha)
 *   - SECONDARY_PHONE
 * Do NOT invent replacements — update here once confirmed.
 */

export const business = {
  // --- Identity -------------------------------------------------------------
  BUSINESS_NAME: "محل حسن للإلكترونيات",
  BUSINESS_NAME_EN: "Hassan Electronics",
  BUSINESS_NAME_REQUIRES_VERIFICATION: true,
  TAGLINE: "فني دش خميس مشيط — تركيب وصيانة الدش والرسيفرات",

  // --- Contact -------------------------------------------------------------
  PHONE_NUMBER: "+966558202859", // primary, verified in existing site
  PHONE_DISPLAY: "0558202859",
  SECONDARY_PHONE: "+966508805342", // ⚠️ verify
  WHATSAPP_NUMBER: "966558202859", // used in https://wa.me/<number>
  EMAIL: "mdparvez.ahmed.509@gmail.com", // ⚠️ verify / replace with business email

  // --- Location ----------------------------------------------------------
  CITY_AR: "خميس مشيط",
  CITY_EN: "Khamis Mushait",
  REGION_AR: "عسير",
  REGION_EN: "Asir",
  COUNTRY_AR: "المملكة العربية السعودية",
  COUNTRY_CODE: "SA",
  STREET_ADDRESS:
    "شارع الثلاثين - حي الخالدية - مقابل مدرسة الخالدية الابتدائية", // ⚠️ verify
  POSTAL_CODE: "61961", // ⚠️ verify
  LATITUDE: 18.30037, // ⚠️ verify (from existing map embed)
  LONGITUDE: 42.72107, // ⚠️ verify (from existing map embed)

  // Verified short link supplied by the business owner.
  GOOGLE_MAPS_URL: "https://maps.app.goo.gl/vL2v7rJFLw8nhcPx8",
  // Existing embeddable map (kept from the previous build — real place result).
  GOOGLE_MAPS_EMBED:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3788.0270727043794!2d42.72107617592393!3d18.300370075861885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15fb5900275aabe3%3A0x66156653ca70e04d!2z2YXYrdmEINi12KfZhNit2Kkg2YXYrdmF2K8g2KPYrdmF2K8g2KfZhNiq2KzYp9ix2YrYqSjYqtix2YPYqCDYr9mK2LQg2K7ZhdmK2LMg2YXYtNmK2Lcp!5e0!3m2!1sen!2sbd!4v1757575459767!5m2!1sen!2sbd",

  // --- Service area -----------------------------------------------------
  SERVES_ABHA: true as boolean, // ⚠️ verify — site currently markets Abha coverage
  OPENING_HOURS: "Mo-Su 08:00-23:00",
  OPENING_HOURS_AR: "يومياً من 8 صباحاً حتى 11 مساءً",

  // --- Web -------------------------------------------------------------
  DOMAIN: "https://bestdishelectronics.store",
  OG_IMAGE: "https://bestdishelectronics.store/image/course.png",
  GA_ID: "G-84836TE82T",
} as const;

export const telHref = `tel:${business.PHONE_NUMBER}`;
export const whatsappHref = `https://wa.me/${business.WHATSAPP_NUMBER}`;
export const mapsHref = business.GOOGLE_MAPS_URL;

/** Arabic address line for NAP consistency across the site. */
export const addressLineAr = `${business.CITY_AR}، ${business.REGION_AR}، ${business.COUNTRY_AR}`;

export default business;
