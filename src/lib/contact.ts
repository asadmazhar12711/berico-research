export const CONTACT_PHONE_DISPLAY = "+91 96505 10232";
export const CONTACT_PHONE_E164 = "+919650510232";
export const CONTACT_PHONE_TEL = `tel:${CONTACT_PHONE_E164}`;

export const CONTACT_EMAIL = "bericoresearch@gmail.com";

const MAIL_SUBJECT = "Enquiry — BeriCo Research LLP";
const MAIL_BODY =
  "Dear BeriCo Research LLP,\n\nI would like to enquire about your family office and consulting services.\n\n";

export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(MAIL_SUBJECT)}&body=${encodeURIComponent(MAIL_BODY)}`;

const WHATSAPP_MESSAGE =
  "Hello BeriCo Research LLP, I would like to enquire about your family office and consulting services.";

export const CONTACT_WHATSAPP = `https://wa.me/919650510232?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const CONTACT_MAPS_URL =
  "https://maps.google.com/?q=VentureX+Sector+67+Gurgaon";
