import { redirect } from "next/navigation";

/** Legacy path — bookmarks and old links redirect here. */
export default function LegacyMedicineRxRedirect() {
  redirect("/prescription/opd-prescribing");
}
