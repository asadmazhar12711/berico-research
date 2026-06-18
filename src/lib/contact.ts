export const CONTACT_PHONE_DISPLAY = "+91 96505 10232";
export const CONTACT_PHONE_E164 = "+919650510232";
export const CONTACT_PHONE_TEL = `tel:${CONTACT_PHONE_E164}`;

export const CONTACT_EMAILS = [
  "berico@berico.co.in",
  "berico@bericoresearch.co.in",
] as const;

/** Comma-separated display string for both addresses */
export const CONTACT_EMAIL = CONTACT_EMAILS.join(", ");

const MAIL_SUBJECT = "Enquiry — BeriCo Research LLP";
const MAIL_BODY =
  "Dear BeriCo Research LLP,\n\nI would like to enquire about your family office and consulting services.\n\n";

export function contactMailto(email: string) {
  return `mailto:${email}?subject=${encodeURIComponent(MAIL_SUBJECT)}&body=${encodeURIComponent(MAIL_BODY)}`;
}

/** Opens default mail client with both addresses in the To field */
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAILS.join(",")}?subject=${encodeURIComponent(MAIL_SUBJECT)}&body=${encodeURIComponent(MAIL_BODY)}`;

const WHATSAPP_MESSAGE =
  "Hello BeriCo Research LLP, I would like to enquire about your family office and consulting services.";

export const CONTACT_WHATSAPP = `https://wa.me/919650510232?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const CONTACT_MAPS_URL =
  "https://maps.google.com/?q=VentureX+Sector+67+Gurgaon";
