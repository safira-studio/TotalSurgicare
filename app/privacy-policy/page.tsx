import { siteConfig } from "@/config/site";
import { Shield, Lock, Eye, FileText, Users, Globe, Phone } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Total Surgicare · Privacy Policy · Learn how we collect, use, and protect your personal information.",
  openGraph: {
    title: "Privacy Policy - Total Surgicare",
    description:
      "Learn about Total Surgicare's Privacy Policy, detailing how we collect, use, and protect your personal information.",
    url: "https://totalsurgicare.com/privacy-policy",
    images: [
      {
        url: "https://totalsurgicare.com/logo.webp",
        width: 800,
        height: 600,
        alt: "Total Surgicare Privacy Policy",
      },
    ],
  },
};

// Define the privacy policy content as a structured array with JSX support
const privacyContent = [
  {
    title: "Introduction",
    icon: Shield,
    content: [
      {
        type: "paragraph",
        content: (
          <>
            <strong>TotalSurgicare</strong> ("we," "our," or "us") is committed
            to protecting your privacy and personal information. This Privacy
            Notice explains how and why we might access, collect, store, use,
            and/or share ("process") your personal information when you use our
            services, including when you visit our website at{" "}
            <Link
              href="https://totalsurgicare.com"
              className="text-clinic-primary hover:underline font-medium"
            >
              https://totalsurgicare.com
            </Link>{" "}
            or engage with us in other related ways, including any sales,
            marketing, or events.
          </>
        ),
      },
      {
        type: "paragraph",
        content: (
          <>
            If you have any questions or concerns, please contact us at{" "}
            <Link
              href={`mailto:${siteConfig.contact.email.support}`}
              className="text-clinic-primary hover:underline font-medium"
            >
              {siteConfig.contact.email.support}
            </Link>
            .
          </>
        ),
      },
    ],
  },
  {
    title: "What Information Do We Collect?",
    icon: FileText,
    content: [
      {
        type: "subheading",
        content: "Personal Information You Disclose to Us",
      },
      {
        type: "paragraph",
        content: (
          <>
            We collect personal information that you{" "}
            <strong>voluntarily provide</strong> to us when you express an
            interest in obtaining information about us or our services,
            participate in activities on our services, or otherwise contact us.
            The personal information we collect depends on the context of your
            interactions with us and the services, the choices you make, and the
            products and features you use.
          </>
        ),
      },
      {
        type: "list",
        items: [
          <strong key="names">Names</strong>,
          <strong key="phones">Phone numbers</strong>,
          <strong key="emails">Email addresses</strong>,
          <strong key="health">Health concerns</strong>,
        ],
      },
      {
        type: "subheading",
        content: "Sensitive Information",
      },
      {
        type: "paragraph",
        content: (
          <>
            When necessary, with your consent or as otherwise permitted by
            applicable law, we process <strong>sensitive information</strong>{" "}
            such as health data.
          </>
        ),
      },
      {
        type: "paragraph",
        content: (
          <>
            All personal information that you provide to us must be{" "}
            <strong>true, complete, and accurate</strong>, and you must notify
            us of any changes to such personal information.
          </>
        ),
      },
      {
        type: "subheading",
        content: "Google API",
      },
      {
        type: "paragraph",
        content: (
          <>
            Our use of information received from Google APIs will adhere to the{" "}
            <Link
              href="https://developers.google.com/terms/api-services-user-data-policy"
              className="text-clinic-primary hover:underline font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google API Services User Data Policy
            </Link>
            , including the Limited Use requirements.
          </>
        ),
      },
    ],
  },
  {
    title: "How Do We Process Your Information?",
    icon: Users,
    content: [
      {
        type: "paragraph",
        content: (
          <>
            We process your personal information to{" "}
            <strong>provide, improve, and administer</strong> our services,
            communicate with you, for security and fraud prevention, and to
            comply with law. We may also process your information for other
            purposes with your consent.
          </>
        ),
      },
      {
        type: "list",
        items: [
          <>
            <strong>
              To deliver and facilitate delivery of services to the user:
            </strong>{" "}
            We may process your information to provide you with the requested
            service.
          </>,
        ],
      },
    ],
  },
  {
    title: "When and With Whom Do We Share Your Personal Information?",
    icon: Globe,
    content: [
      {
        type: "paragraph",
        content: (
          <>
            We may need to share your personal information in the following
            situations:
          </>
        ),
      },
      {
        type: "list",
        items: [
          <>
            <strong>Business Transfers:</strong> We may share or transfer your
            information in connection with, or during negotiations of, any
            merger, sale of company assets, financing, or acquisition of all or
            a portion of our business to another company.
          </>,
        ],
      },
    ],
  },
  {
    title: "How Long Do We Keep Your Information?",
    icon: FileText,
    content: [
      {
        type: "paragraph",
        content: (
          <>
            We will only keep your personal information for as long as it is{" "}
            <strong>necessary for the purposes</strong> set out in this Privacy
            Notice, unless a longer retention period is required or permitted by
            law (such as tax, accounting, or other legal requirements). No
            purpose in this notice will require us to keep your personal
            information for longer than until the service is provided to the
            user.
          </>
        ),
      },
      {
        type: "paragraph",
        content: (
          <>
            When we have no ongoing legitimate business need to process your
            personal information, we will either{" "}
            <strong>delete or anonymize</strong> such information, or, if this
            is not possible (for example, because your personal information has
            been stored in backup archives), then we will securely store your
            personal information and isolate it from any further processing
            until deletion is possible.
          </>
        ),
      },
    ],
  },
  {
    title: "How Do We Keep Your Information Safe?",
    icon: Lock,
    content: [
      {
        type: "paragraph",
        content: (
          <>
            We have implemented{" "}
            <strong>
              appropriate and reasonable technical and organizational security
              measures
            </strong>{" "}
            designed to protect the security of any personal information we
            process. However, despite our safeguards and efforts to secure your
            information, no electronic transmission over the Internet or
            information storage technology can be guaranteed to be 100% secure,
            so we cannot promise or guarantee that hackers, cybercriminals, or
            other unauthorized third parties will not be able to defeat our
            security and improperly collect, access, steal, or modify your
            information. Transmission of personal information to and from our
            services is at your own risk.
          </>
        ),
      },
    ],
  },
  {
    title: "What Are Your Privacy Rights?",
    icon: Eye,
    content: [
      {
        type: "paragraph",
        content: (
          <>
            You may <strong>review, change, or terminate</strong> your account
            at any time, depending on your country, province, or state of
            residence. If we are relying on your consent to process your
            personal information, you have the right to withdraw your consent at
            any time by contacting us at{" "}
            <Link
              href={`mailto:${siteConfig.contact.email.support}`}
              className="text-clinic-primary hover:underline font-medium"
            >
              {siteConfig.contact.email.support}
            </Link>
            .
          </>
        ),
      },
      {
        type: "paragraph",
        content: (
          <>
            Please note that withdrawing consent will not affect the lawfulness
            of processing before its withdrawal, nor will it affect the
            processing of your personal information conducted in reliance on{" "}
            <strong>lawful processing grounds</strong> other than consent.
          </>
        ),
      },
    ],
  },
  {
    title: "Controls for Do-Not-Track Features",
    icon: Shield,
    content: [
      {
        type: "paragraph",
        content: (
          <>
            Most web browsers and some mobile operating systems and mobile
            applications include a <strong>Do-Not-Track (DNT)</strong> feature
            or setting you can activate to signal your privacy preference not to
            have data about your online browsing activities monitored and
            collected. At this stage, no uniform technology standard for
            recognizing and implementing DNT signals has been finalized. As
            such, we do not currently respond to DNT browser signals or any
            other mechanism that automatically communicates your choice not to
            be tracked online.
          </>
        ),
      },
    ],
  },
  {
    title: "Your Rights",
    icon: Eye,
    content: [
      {
        type: "paragraph",
        content: (
          <>
            Under the{" "}
            <strong>
              Health Insurance Portability and Accountability Act (HIPAA)
            </strong>{" "}
            and other applicable laws, you have certain rights regarding your
            protected health information (PHI):
          </>
        ),
      },
      {
        type: "list",
        items: [
          <>
            <strong>Right to Access:</strong> You may request access to and
            obtain copies of your medical records, subject to applicable fees
            and legal limitations.
          </>,
          <>
            <strong>Right to Amend:</strong> You may request amendments to your
            PHI if you believe it is inaccurate or incomplete.
          </>,
          <>
            <strong>Right to Restrict:</strong> You may request restrictions on
            how we use or disclose your PHI for treatment, payment, or
            healthcare operations.
          </>,
          <>
            <strong>Right to Confidential Communications:</strong> You may
            request to receive communications about your PHI in a specific way
            or at a specific location (e.g., via email or at an alternate
            address).
          </>,
          <>
            <strong>Right to File a Complaint:</strong> If you believe your
            privacy rights have been violated, you may file a complaint with us
            by contacting our Privacy Officer at{" "}
            <Link
              href={`mailto:${siteConfig.contact.email.support}`}
              className="text-clinic-primary hover:underline font-medium"
            >
              {siteConfig.contact.email.support}
            </Link>{" "}
            or{" "}
            <Link
              href={`tel:${siteConfig.contact.phone.primary}`}
              className="text-clinic-primary hover:underline font-medium"
            >
              {siteConfig.contact.phone.primary}
            </Link>
            . You may also file a complaint with the U.S. Department of Health
            and Human Services Office for Civil Rights. We will not retaliate
            against you for filing a complaint.
          </>,
        ],
      },
    ],
  },
  {
    title: "HIPAA Compliance",
    icon: Shield,
    content: [
      {
        type: "paragraph",
        content: (
          <>
            <strong>TotalSurgicare</strong> is committed to complying with the{" "}
            <strong>
              Health Insurance Portability and Accountability Act (HIPAA)
            </strong>{" "}
            to protect the privacy and security of your protected health
            information.
          </>
        ),
      },
    ],
  },
  {
    title: "Do We Make Updates to This Notice?",
    icon: FileText,
    content: [
      {
        type: "paragraph",
        content: (
          <>
            We may update this Privacy Notice from time to time. The updated
            version will be indicated by an updated{" "}
            <strong>'Revised' date</strong> at the top of this Privacy Notice.
            If we make material changes, we may notify you either by prominently
            posting a notice of such changes or by directly sending you a
            notification. We encourage you to review this Privacy Notice
            frequently to be informed of how we are protecting your information.
          </>
        ),
      },
    ],
  },
  {
    title: "How Can You Contact Us About This Notice?",
    icon: Phone,
    content: [
      {
        type: "paragraph",
        content: (
          <>
            If you have questions or comments about this notice, you may email
            us at{" "}
            <Link
              href={`mailto:${siteConfig.contact.email.support}`}
              className="text-clinic-primary hover:underline font-medium"
            >
              {siteConfig.contact.email.support}
            </Link>{" "}
            or contact us by post at:
          </>
        ),
      },
      {
        type: "address",
        content: (
          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-clinic-primary">
            <div className="font-semibold text-clinic-primary mb-2">
              TotalSurgicare
            </div>
            <div className="space-y-1 text-gray-700">
              <div>{siteConfig.contact.address.street}</div>
              <div>
                {siteConfig.contact.address.city},{" "}
                {siteConfig.contact.address.state} -{" "}
                {siteConfig.contact.address.pincode}
              </div>
              <div>India</div>
              <div className="pt-2">
                <strong>Phone:</strong>{" "}
                <Link
                  href={`tel:${siteConfig.contact.phone.primary}`}
                  className="text-clinic-primary hover:underline font-medium"
                >
                  {siteConfig.contact.phone.primary}
                </Link>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    title:
      "How Can You Review, Update, or Delete the Data We Collect From You?",
    icon: FileText,
    content: [
      {
        type: "paragraph",
        content: (
          <>
            Based on the applicable laws of your country, you may have the right
            to <strong>request access</strong> to the personal information we
            collect from you, details about how we have processed it, correct
            inaccuracies, or delete your personal information. You may also have
            the right to withdraw your consent to our processing of your
            personal information. These rights may be limited in some
            circumstances by applicable law. To request to review, update, or
            delete your personal information, please fill out and submit a data
            subject access request at{" "}
            <Link
              href={`mailto:${siteConfig.contact.email.primary}`}
              className="text-clinic-primary hover:underline font-medium break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              {siteConfig.contact.email.primary}
            </Link>
            .
          </>
        ),
      },
    ],
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-clinic-vlight_primary/40">
      {/* Hero Section */}
      <section className="py-10 px-4">
        <div className="container mx-auto text-center">
          <Shield className="h-16 w-16 text-clinic-primary mx-auto mb-6" />
          <h1 className="text-xl md:text-4xl font-bold text-clinic-primary mb-6">
            Privacy Policy
          </h1>
          <p className="md:text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we
            collect, use, and protect your personal information.{" "}
            <span className="font-semibold">Last updated June 02, 2025.</span>
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            {privacyContent.map((section, index) => (
              <div key={index}>
                <div className="flex items-center mb-4">
                  <section.icon className="h-6 w-6 text-clinic-primary mr-3" />
                  <h2 className="text-xl md:text-2xl font-bold text-clinic-primary">
                    {index === 0 ? section.title : `${index}. ${section.title}`}
                  </h2>
                </div>
                {section.content.map((item, idx) => (
                  <div key={idx} className="space-y-4">
                    {item.type === "subheading" && (
                      <h3 className="md:text-lg font-semibold text-clinic-primary mb-2">
                        {typeof item.content === "string"
                          ? item.content
                          : item.content}
                      </h3>
                    )}
                    {item.type === "paragraph" && (
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                        {item.content}
                      </p>
                    )}
                    {item.type === "address" && (
                      <div className="text-sm md:text-base">{item.content}</div>
                    )}
                    {item.type === "list" && (
                      <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm md:text-base">
                        {item.items?.map((listItem, listIdx) => (
                          <li key={listIdx} className="leading-relaxed">
                            {listItem}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
