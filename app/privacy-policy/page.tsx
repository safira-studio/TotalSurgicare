import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

import {
  Heart,
  Shield,
  Lock,
  Eye,
  FileText,
  Users,
  Globe,
  Phone,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Total Surgicare · 0 ... Privacy Policy · Cancellation policy. © 2025 Total Surgicare. Designed by First DigiAdd. WhatsApp us.",
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

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-clinic-vlight_primary/40">
      {/* Hero Section */}
      <section className="py-10 px-4">
        <div className="container mx-auto text-center">
          <Shield className="h-16 w-16 text-clinic-primary mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-clinic-primary  mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we
            collect, use, and protect your personal information.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            {/* Introduction */}
            <div>
              <h2 className="text-3xl font-bold text-clinic-primary mb-4">
                Introduction
              </h2>
              <p className="text-gray-600 leading-relaxed">
                TotalSurgicare (&quot;we,&quot; &quot;our,&quot; or
                &quot;us&quot;) is committed to protecting your privacy and
                personal information. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                visit our website or use our medical services. Please read this
                privacy policy carefully.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <div className="flex items-center mb-4">
                <FileText className="h-6 w-6 text-clinic-primary mr-3" />
                <h2 className="text-3xl font-bold text-clinic-primary">
                  Information We Collect
                </h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-clinic-primary mb-2">
                    Personal Information
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We may collect personal information that you provide
                    directly to us, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                    <li>Name, address, phone number, and email address</li>
                    <li>Date of birth and social security number</li>
                    <li>Insurance information and payment details</li>
                    <li>Medical history and health information</li>
                    <li>Emergency contact information</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-clinic-primary mb-2">
                    Medical Information
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    As a healthcare provider, we collect and maintain medical
                    records that may include diagnoses, treatment plans, test
                    results, and other health-related information necessary for
                    your care.
                  </p>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div>
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-clinic-primary mr-3" />
                <h2 className="text-3xl font-bold text-clinic-primary">
                  How We Use Your Information
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use the information we collect for various purposes,
                including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Providing medical care and treatment services</li>
                <li>Scheduling appointments and managing your care</li>
                <li>Processing insurance claims and billing</li>
                <li>Communicating with you about your health and treatment</li>
                <li>Complying with legal and regulatory requirements</li>
                <li>Improving our services and patient experience</li>
                <li>Coordinating care with other healthcare providers</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div>
              <div className="flex items-center mb-4">
                <Globe className="h-6 w-6 text-clinic-primary mr-3" />
                <h2 className="text-3xl font-bold text-clinic-primary">
                  Information Sharing and Disclosure
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>
                  <strong>Healthcare Operations:</strong> With other healthcare
                  providers involved in your care
                </li>
                <li>
                  <strong>Payment Processing:</strong> With insurance companies
                  and billing services
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or
                  court order
                </li>
                <li>
                  <strong>Emergency Situations:</strong> To protect your health
                  and safety
                </li>
                <li>
                  <strong>Business Associates:</strong> With vendors who help us
                  provide services
                </li>
              </ul>
            </div>

            {/* Data Security */}
            <div>
              <div className="flex items-center mb-4">
                <Lock className="h-6 w-6 text-clinic-primary mr-3" />
                <h2 className="text-3xl font-bold text-clinic-primary">
                  Data Security
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We implement appropriate security measures to protect your
                personal information against unauthorized access, alteration,
                disclosure, or destruction. These measures include
                administrative, physical, and technical safeguards. However, no
                method of transmission over the internet or electronic storage
                is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <div className="flex items-center mb-4">
                <Eye className="h-6 w-6 text-clinic-primary mr-3" />
                <h2 className="text-3xl font-bold text-clinic-primary">
                  Your Rights
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Under HIPAA and other applicable laws, you have certain rights
                regarding your health information:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>
                  Right to access and obtain copies of your medical records
                </li>
                <li>Right to request amendments to your health information</li>
                <li>
                  Right to request restrictions on how we use or disclose your
                  information
                </li>
                <li>Right to request confidential communications</li>
                <li>
                  Right to file a complaint if you believe your privacy rights
                  have been violated
                </li>
              </ul>
            </div>

            {/* HIPAA Compliance */}
            <div>
              <h2 className="text-3xl font-bold text-clinic-primary mb-4">
                HIPAA Compliance
              </h2>
              <p className="text-gray-600 leading-relaxed">
                TotalSurgicare is committed to complying with the Health
                Insurance Portability and Accountability Act (HIPAA) and
                protecting the privacy and security of your protected health
                information (PHI). We have implemented policies and procedures
                to ensure HIPAA compliance in all aspects of our operations.
              </p>
            </div>

            {/* Updates to Policy */}
            <div>
              <h2 className="text-3xl font-bold text-clinic-primary mb-4">
                Changes to This Privacy Policy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the &quot;Last Updated&quot; date. You
                are advised to review this Privacy Policy periodically for any
                changes.
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
