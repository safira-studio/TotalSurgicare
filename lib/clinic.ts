/** Static clinic information appended to every patient-facing WhatsApp message. */
export const CLINIC_ADDRESS =
  "Cabin No 2, Kimaya Clinic, One Place, Total Surgicare 501 B, 5th Floor, " +
  "Salunkhe Vihar Society, Wanowrie, Pune, Maharashtra 411040";

export const CLINIC_MAPS_URL = "https://maps.app.goo.gl/NLMNnHWGMjJANTkz8";

/**
 * Returns the footer lines appended to every patient WhatsApp message:
 *   📍  Address
 *   🗺️  Google Maps link
 */
export function clinicFooter(): string {
  return (
    "\n\n*Visit us at:*\n" +
    CLINIC_ADDRESS +
    "\n\n*Directions:* " +
    CLINIC_MAPS_URL
  );
}
