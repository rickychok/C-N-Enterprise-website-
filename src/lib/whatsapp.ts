export function buildWhatsAppUrl(opts: {
  phoneE164?: string; // e.g. "+60168029559"
  fallbackLocal: string; // "0168029559"
  message?: string;
}) {
  const phone = (opts.phoneE164 ?? "").trim() || opts.fallbackLocal.trim();
  const q = opts.message ? `?text=${encodeURIComponent(opts.message)}` : "";
  return `https://wa.me/${phone.replace(/[^+\d]/g, "")}${q}`;
}

export function getWhatsAppUrl(message?: string) {
  const phoneE164 = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const fallbackLocal = "011-18696757";
  
  return buildWhatsAppUrl({
    phoneE164,
    fallbackLocal,
    message,
  });
}

export function getPhoneUrl() {
  const phone = process.env.NEXT_PUBLIC_PHONE_NUMBER || "011-18696757";
  return `tel:${phone}`;
}