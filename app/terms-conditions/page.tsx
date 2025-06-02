import { siteConfig } from "@/config/site";
import {
  FileText,
  Scale,
  Shield,
  Users,
  AlertCircle,
  Globe,
  Phone,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Total Surgicare offers consultations for 50+ conditions, including Piles, Hernia, Kidney Stones, Cataract, Gynecomastia, Abortion, and IVF. Services are subject to availability and do not replace professional medical advice or treatment.",
  openGraph: {
    title: "About Us - Total Surgicare",
    description:
      "Learn about Total Surgicare, a leading surgical care provider in Pune specializing in minimally invasive procedures for various conditions.",
    url: "https://totalsurgicare.com/aboutus",
    images: [
      {
        url: "https://totalsurgicare.com/logo.webp",
        width: 800,
        height: 600,
        alt: "Total Surgicare About Us",
      },
    ],
  },
};

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-clinic-vlight_primary/40">
      {/* Hero Section */}
      <section className="py-10 px-4">
        <div className="container mx-auto text-center">
          <Scale className="h-16 w-16 text-clinic-primary mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-clinic-primary mb-6">
            Terms and Conditions
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Please read these terms and conditions carefully before using our
            services. By accessing our website and services, you agree to be
            bound by these terms.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-6 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            {/* Acceptance of Terms */}
            <div>
              <h2 className="text-3xl font-bold text-clinic-primary mb-4">
                Acceptance of Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing and using the TotalSurgicare website and services,
                you accept and agree to be bound by the terms and provision of
                this agreement. If you do not agree to abide by the above,
                please do not use this service.
              </p>
            </div>

            {/* Services Description */}
            <div>
              <div className="flex items-center mb-4">
                <FileText className="h-6 w-6 text-clinic-primary mr-3" />
                <h2 className="text-3xl font-bold text-clinic-primary">
                  Services Description
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                TotalSurgicare provides comprehensive healthcare services
                including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Cardiac surgery and interventional procedures</li>
                <li>Diagnostic imaging and laboratory services</li>
                <li>Post-surgical care and monitoring</li>
                <li>Emergency medical services</li>
                <li>Preventive healthcare programs</li>
                <li>Telemedicine consultations</li>
              </ul>
            </div>

            {/* Patient Responsibilities */}
            <div>
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-clinic-primary mr-3" />
                <h2 className="text-3xl font-bold text-clinic-primary">
                  Patient Responsibilities
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                As a patient or user of our services, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Provide accurate and complete medical information</li>
                <li>Follow prescribed treatment plans and instructions</li>
                <li>
                  Attend scheduled appointments or provide adequate notice of
                  cancellation
                </li>
                <li>Pay for services rendered according to agreed terms</li>
                <li>Respect healthcare staff and other patients</li>
                <li>Comply with hospital policies and procedures</li>
                <li>
                  Inform us of any changes in your condition or circumstances
                </li>
              </ul>
            </div>

            {/* Payment Terms */}
            <div>
              <h2 className="text-3xl font-bold text-clinic-primary mb-4">
                Payment Terms and Financial Policies
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-clinic-secondary mb-2">
                    Payment Due
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Payment for services is due at the time of service unless
                    prior arrangements have been made. We accept cash, credit
                    cards, and approved insurance plans.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-clinic-secondary mb-2">
                    Insurance
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We participate with most major insurance plans. However, it
                    is your responsibility to verify coverage and obtain
                    necessary pre-authorizations. You are responsible for any
                    deductibles, co-payments, or non-covered services.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-clinic-secondary mb-2">
                    Billing Disputes
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Any billing disputes must be reported within 60 days of the
                    statement date. We will work with you to resolve any
                    legitimate billing concerns promptly.
                  </p>
                </div>
              </div>
            </div>

            {/* Medical Information and Privacy */}
            <div>
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-clinic-primary mr-3" />
                <h2 className="text-3xl font-bold text-clinic-primary">
                  Medical Information and Privacy
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Your medical information is protected under HIPAA regulations.
                We maintain strict confidentiality of all patient information
                and will only disclose information as permitted by law or with
                your written authorization.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By using our services, you consent to the collection, use, and
                disclosure of your personal health information as described in
                our Privacy Policy, which is incorporated by reference into
                these Terms and Conditions.
              </p>
            </div>

            {/* Appointment Policies */}
            <div>
              <h2 className="text-3xl font-bold text-clinic-primary mb-4">
                Appointment Policies
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-clinic-secondary mb-2">
                    Scheduling
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Appointments may be scheduled by phone, online, or in
                    person. We recommend scheduling routine appointments in
                    advance to ensure availability.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-clinic-secondary mb-2">
                    Cancellation Policy
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We require at least 24 hours notice for appointment
                    cancellations. Failure to provide adequate notice or
                    repeated no-shows may result in a cancellation fee.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-clinic-secondary mb-2">
                    Late Arrivals
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Please arrive 15 minutes before your scheduled appointment.
                    Late arrivals may result in rescheduling to accommodate
                    other patients.
                  </p>
                </div>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div>
              <div className="flex items-center mb-4">
                <AlertCircle className="h-6 w-6 text-clinic-primary mr-3" />
                <h2 className="text-3xl font-bold text-clinic-primary">
                  Limitation of Liability
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                TotalSurgicare provides medical services in accordance with
                accepted medical standards. However, we cannot guarantee
                specific outcomes or results from any treatment or procedure.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our liability is limited to the direct cost of services
                provided. We are not liable for indirect, consequential, or
                punitive damages arising from the use of our services, except as
                required by law.
              </p>
            </div>

            {/* Website Terms */}
            <div>
              <div className="flex items-center mb-4">
                <Globe className="h-6 w-6 text-clinic-primary mr-3" />
                <h2 className="text-3xl font-bold text-clinic-primary">
                  Website Use
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our website is provided for informational purposes only. The
                information contained on this website is not intended to replace
                professional medical advice, diagnosis, or treatment.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>You may not use our website for any unlawful purpose</li>
                <li>
                  You may not attempt to gain unauthorized access to our systems
                </li>
                <li>You may not transmit viruses or malicious code</li>
                <li>You may not violate any applicable laws or regulations</li>
                <li>
                  All content is protected by copyright and intellectual
                  property laws
                </li>
              </ul>
            </div>

            {/* Emergency Situations */}
            <div>
              <h2 className="text-3xl font-bold text-clinic-primary mb-4">
                Emergency Situations
              </h2>
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <p className="text-red-800 font-semibold mb-2">IMPORTANT:</p>
                <p className="text-red-700 leading-relaxed">
                  In case of a medical emergency, call 9665551711 immediately or
                  go to the nearest emergency room. Our website and online
                  services are not intended for emergency medical situations and
                  should not be used to seek emergency care.
                </p>
              </div>
            </div>

            {/* Modifications to Terms */}
            <div>
              <h2 className="text-3xl font-bold text-clinic-primary mb-4">
                Modifications to Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                TotalSurgicare reserves the right to modify these terms and
                conditions at any time. Changes will be posted on our website
                and will become effective immediately upon posting. Your
                continued use of our services after any changes constitutes
                acceptance of the new terms.
              </p>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-3xl font-bold text-clinic-primary mb-4">
                Governing Law
              </h2>
              <p className="text-gray-600 leading-relaxed">
                These terms and conditions are governed by the laws of the state
                in which our services are provided. Any disputes arising from
                these terms or the use of our services will be resolved in the
                appropriate courts of that jurisdiction.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Phone className="h-6 w-6 text-clinic-primary mr-3" />
                <h2 className="text-3xl font-bold text-clinic-primary">
                  Contact Us
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our
                privacy practices, please contact us:
              </p>
              <div className="text-gray-600 space-y-2">
                <p>
                  <strong>Phone:</strong>{" "}
                  {siteConfig.contact.phone.primary}{" "}
                </p>
                <p>
                  <strong>Email:</strong> {siteConfig.contact.email.primary}
                </p>
                <p>
                  <strong> Address: </strong>
                  {siteConfig.contact.address.street},{" "}
                  {siteConfig.contact.address.city},{" "}
                  {siteConfig.contact.address.state} -{" "}
                  {siteConfig.contact.address.pincode},{" "}
                </p>
              </div>
            </div>
            {/* Last Updated */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
