// Envía un evento personalizado a GA4 cuando alguien hace clic en un botón
// de contacto. GA4 no rastrea automáticamente los enlaces "tel:" (solo
// enlaces http/https salientes), así que sin esto las llamadas telefónicas
// quedarían completamente invisibles en las métricas.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type ContactMethod = "call" | "whatsapp";

export function trackContact(method: ContactMethod, location: string) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "contact_click", {
      method,
      location,
    });
  }
}
