import { siteConfig } from "@/config/site";
import {
  Shield,
  FileText,
  Lock,
  Users,
  Globe,
  Eye,
  AlertCircle,
  Scale,
  Gavel,
  Edit,
  Info,
  Phone,
} from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Total Surgicare · Terms and Conditions · Legal terms governing the use of our services and website.",
  openGraph: {
    title: "Terms and Conditions - Total Surgicare",
    description:
      "Read Total Surgicare's Terms and Conditions, outlining the legal terms governing the use of our services and website.",
    url: "https://totalsurgicare.com/terms-and-conditions",
    images: [
      {
        url: "https://totalsurgicare.com/logo.webp",
        width: 800,
        height: 600,
        alt: "Total Surgicare Terms and Conditions",
      },
    ],
  },
};

const termsContent = [
  {
    title: "Agreement to Our Legal Terms",
    icon: Shield,
    content: [
      {
        type: "paragraph",
        content: (
          <>
            We are <strong>Total Surgicare</strong> ('Company', 'we', 'us', or
            'our'), a company registered in India at{" "}
            <span className="font-medium">
              {siteConfig.contact.address.street},{" "}
              {siteConfig.contact.address.city},{" "}
              {siteConfig.contact.address.state} -{" "}
              {siteConfig.contact.address.pincode}
            </span>
            .
          </>
        ),
      },
      {
        type: "paragraph",
        content: (
          <>
            We operate the website{" "}
            <Link
              href="https://totalsurgicare.com"
              className="text-clinic-primary hover:underline font-medium"
            >
              https://totalsurgicare.com
            </Link>{" "}
            (the 'Site'), as well as any other related products and services
            that refer or link to these legal terms (collectively, the
            'Services').
          </>
        ),
      },
      {
        type: "paragraph",
        content: (
          <>
            You can contact us by phone at{" "}
            <Link
              href={`tel:${siteConfig.contact.phone.primary}`}
              className="text-clinic-primary hover:underline font-medium"
            >
              {siteConfig.contact.phone.primary}
            </Link>
            , email at{" "}
            <Link
              href={`mailto:${siteConfig.contact.email.primary}`}
              className="text-clinic-primary hover:underline font-medium"
            >
              {siteConfig.contact.email.primary}
            </Link>
            , or by mail to our address listed below.
          </>
        ),
      },
      {
        type: "paragraph",
        content: (
          <>
            These Legal Terms constitute a{" "}
            <strong>legally binding agreement</strong> made between you, whether
            personally or on behalf of an entity ('you'), and Total Surgicare,
            concerning your access to and use of the Services. You agree that by
            accessing the Services, you have read, understood, and agreed to be
            bound by all of these Legal Terms.{" "}
            <strong>
              IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE
              PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE
              IMMEDIATELY.
            </strong>
          </>
        ),
      },
      {
        type: "paragraph",
        content: (
          <>
            Supplemental terms and conditions or documents that may be posted on
            the Services from time to time are hereby expressly incorporated
            herein by reference. We reserve the right, in our sole discretion,
            to make changes or modifications to these Legal Terms at any time
            and for any reason. We will alert you about any changes by updating
            the <strong>'Last updated'</strong> date of these Legal Terms, and
            you waive any right to receive specific notice of each such change.
          </>
        ),
      },
      {
        type: "paragraph",
        content: (
          <>
            The Services are intended for users who are at least{" "}
            <strong>18 years old</strong>. Persons under the age of 18 are not
            permitted to use or register for the Services.
          </>
        ),
      },
    ],
  },
  {
    title: "Our Services",
    icon: FileText,
    content: [
      {
        type: "paragraph",
        content: (
          <>
            The information provided when using the Services is not intended for
            distribution to or use by any person or entity in any jurisdiction
            or country where such distribution or use would be{" "}
            <strong>contrary to law or regulation</strong> or which would
            subject us to any registration requirement within such jurisdiction
            or country. Accordingly, those persons who choose to access the
            Services from other locations do so on their own initiative and are
            solely responsible for compliance with local laws, if and to the
            extent local laws are applicable.
          </>
        ),
      },
    ],
  },
  {
    title: "Intellectual Property Rights",
    icon: Lock,
    content: [
      {
        type: "subheading",
        content: "Our Intellectual Property",
      },
      {
        type: "paragraph",
        content: (
          <>
            We are the owner or the licensee of all{" "}
            <strong>intellectual property rights</strong> in our Services,
            including all source code, databases, functionality, software,
            website designs, audio, video, text, photographs, and graphics in
            the Services (collectively, the 'Content'), as well as the
            trademarks, service marks, and logos contained therein (the
            'Marks').
          </>
        ),
      },
      {
        type: "paragraph",
        content: (
          <>
            Our Content and Marks are protected by{" "}
            <strong>copyright and trademark laws</strong> (and various other
            intellectual property rights and unfair competition laws) and
            treaties around the world.
          </>
        ),
      },
      {
        type: "paragraph",
        content: (
          <>
            The Content and Marks are provided in or through the Services{" "}
            <strong>'AS IS'</strong> for your personal, non-commercial use or
            internal business purpose only.
          </>
        ),
      },
      {
        type: "subheading",
        content: "Your Use of Our Services",
      },
      {
        type: "paragraph",
        content: (
          <>
            Subject to your compliance with these Legal Terms, including the{" "}
            <strong>'Prohibited Activities'</strong> section below, we grant you
            a non-exclusive, non-transferable, revocable license to:
          </>
        ),
      },
      {
        type: "list",
        items: [
          <>access the Services;</>,
          <>
            download or print a copy of any portion of the Content to which you
            have properly gained access to,
          </>,
        ],
      },
      {
        type: "paragraph",
        content: (
          <>
            solely for your <strong>personal, non-commercial use</strong> or
            internal business purpose.
          </>
        ),
      },
      {
        type: "paragraph",
        content: (
          <>
            Except as set out in this section or elsewhere in our Legal Terms,
            no part of the Services and no Content or Marks may be copied,
            reproduced, republished, uploaded, posted, publicly displayed,
            encoded, translated, distributed, sold, licensed, or otherwise
            exploited for any <strong>commercial purpose</strong> whatsoever,
            without our express prior permission.
          </>
        ),
      },
      {
        type: "paragraph",
        content: (
          <>
            If you wish to make any use of the Services, Content, or Marks other
            than as set out in this section or elsewhere in our Legal Terms,
            please address your request to:{" "}
            <Link
              href={`mailto:${siteConfig.contact.email.primary}`}
              className="text-clinic-primary hover:underline font-medium"
            >
              {siteConfig.contact.email.primary}
            </Link>
            .
          </>
        ),
      },
      {
        type: "subheading",
        content: "Your Submissions",
      },
      {
        type: "paragraph",
        content: (
          <>
            By directly sending us any question, comment, suggestion, idea,
            feedback, or other information about the Services ('Submissions'),
            you agree to{" "}
            <strong>assign to us all intellectual property rights</strong> in
            such Submission. You agree that we shall own this Submission and be
            entitled to its unrestricted use and dissemination for any lawful
            purpose, commercial or otherwise, without acknowledgment or
            compensation to you.
          </>
        ),
      },
      {
        type: "paragraph",
        content: (
          <>
            <strong>You are responsible for what you post or upload:</strong> By
            sending us Submissions through any part of the Services you confirm
            that you have read and agree with our 'Prohibited Activities' and
            will not post, send, publish, upload, or transmit through the
            Services any Submission that is illegal, harassing, hateful,
            harmful, defamatory, obscene, bullying, abusive, discriminatory,
            threatening to any person or group, sexually explicit, false,
            inaccurate, deceitful, or misleading.
          </>
        ),
      },
    ],
  },
  {
    title: "User Representations",
    icon: Users,
    content: [
      {
        type: "paragraph",
        content: (
          <>
            By using the Services, you <strong>represent and warrant</strong>{" "}
            that: (1) you have the legal capacity and you agree to comply with
            these Legal Terms; (2) you are not a minor in the jurisdiction in
            which you reside; (3) you will not access the Services through
            automated or non-human means, whether through a bot, script or
            otherwise; (4) you will not use the Services for any illegal or
            unauthorized purpose; and (5) your use of the Services will not
            violate any applicable law or regulation.
          </>
        ),
      },
    ],
  },
  {
    title: "Prohibited Activities",
    icon: AlertCircle,
    content: [
      {
        type: "paragraph",
        content: (
          <>
            You may not access or use the Services for any purpose other than
            that for which we make the Services available. The Services may not
            be used in connection with any <strong>commercial endeavors</strong>{" "}
            except those that are specifically endorsed or approved by us.
          </>
        ),
      },
      {
        type: "paragraph",
        content: (
          <>
            <strong>As a user of the Services, you agree not to:</strong>
          </>
        ),
      },
      {
        type: "list",
        items: [
          <>
            Systematically retrieve data or other content from the Services to
            create or compile, directly or indirectly, a collection,
            compilation, database, or directory without written permission from
            us.
          </>,
          <>
            Trick, defraud, or mislead us and other users, especially in any
            attempt to learn sensitive account information such as user
            passwords.
          </>,
          <>
            Circumvent, disable, or otherwise interfere with security-related
            features of the Services.
          </>,
          <>
            Disparage, tarnish, or otherwise harm, in our opinion, us and/or the
            Services.
          </>,
          <>
            Use any information obtained from the Services in order to harass,
            abuse, or harm another person.
          </>,
          <>
            Make improper use of our support services or submit false reports of
            abuse or misconduct.
          </>,
          <>
            Use the Services in a manner inconsistent with any applicable laws
            or regulations.
          </>,
          <>Engage in unauthorized framing of or linking to the Services.</>,
          <>
            Upload or transmit viruses, Trojan horses, or other material that
            interferes with any party's uninterrupted use and enjoyment of the
            Services.
          </>,
          <>
            Engage in any automated use of the system, such as using scripts to
            send comments or messages, or using any data mining, robots, or
            similar data gathering and extraction tools.
          </>,
          <>
            Attempt to impersonate another user or person or use the username of
            another user.
          </>,
          <>
            Interfere with, disrupt, or create an undue burden on the Services
            or the networks or services connected to the Services.
          </>,
          <>
            Attempt to bypass any measures of the Services designed to prevent
            or restrict access to the Services, or any portion of the Services.
          </>,
          <>
            Copy or adapt the Services' software, including but not limited to
            Flash, PHP, HTML, JavaScript, or other code.
          </>,
          <>
            Except as permitted by applicable law, decipher, decompile,
            disassemble, or reverse engineer any of the software comprising or
            in any way making up a part of the Services.
          </>,
          <>
            Delete the copyright or other proprietary rights notice from any
            Content.
          </>,
          <>
            Use the Services as part of any effort to compete with us or
            otherwise use the Services and/or the Content for any
            revenue-generating endeavor or commercial enterprise.
          </>,
        ],
      },
    ],
  },
  {
    title: "User Generated Contributions",
    icon: Edit,
    content: [
      {
        type: "paragraph",
        content: (
          <>
            The Services may invite you to chat, contribute to, or participate
            in blogs, message boards, online forums, and other functionality,
            and may provide you with the opportunity to create, submit, post,
            display, transmit, perform, publish, distribute, or broadcast
            content and materials to us or on the Services, including but not
            limited to text, writings, video, audio, photographs, graphics,
            comments, suggestions, or personal information or other material
            (collectively, <strong>'Contributions'</strong>). Contributions may
            be viewable by other users of the Services and through third-party
            websites.
          </>
        ),
      },
      {
        type: "paragraph",
        content: (
          <>
            Any use of the Services in violation of the foregoing violates these
            Legal Terms and may result in, among other things,{" "}
            <strong>termination or suspension</strong> of your rights to use the
            Services.
          </>
        ),
      },
    ],
  },
  {
    title: "Contribution License",
    icon: FileText,
    content: [
      {
        type: "paragraph",
        content: (
          <>
            You agree that we may access, store, process, and use any
            information and personal data that you provide following the terms
            of the <strong>Privacy Policy</strong> and your choices (including
            settings).
          </>
        ),
      },
      {
        type: "paragraph",
        content: (
          <>
            By submitting suggestions or other feedback regarding the Services,
            you agree that we can <strong>use and share such feedback</strong>{" "}
            for any purpose without compensation to you.
          </>
        ),
      },
      {
        type: "paragraph",
        content: (
          <>
            We do not assert any ownership over your Contributions. You{" "}
            <strong>retain full ownership</strong> of all of your Contributions
            and any intellectual property rights or other proprietary rights
            associated with your Contributions. We are not liable for any
            statements or representations in your Contributions provided by you
            in any area on the Services.
          </>
        ),
      },
    ],
  },
  {
    title: "Services Management",
    icon: Globe,
    content: [
      {
        type: "paragraph",
        content: (
          <>
            We reserve the right, but not the obligation, to: (1){" "}
            <strong>monitor the Services</strong> for violations of these Legal
            Terms; (2) take appropriate legal action against anyone who, in our
            sole discretion, violates the law or these Legal Terms; (3) refuse,
            restrict access to, limit the availability of, or disable any of
            your Contributions; (4) remove from the Services or otherwise
            disable all files and content that are excessive in size or are in
            any way burdensome to our systems; and (5) otherwise manage the
            Services in a manner designed to protect our rights and property and
            to facilitate the proper functioning of the Services.
          </>
        ),
      },
    ],
  },
  {
    title: "Privacy Policy",
    icon: Eye,
    content: [
      {
        type: "paragraph",
        content: (
          <>
            We care about data privacy and security. Please review our Privacy
            Policy:{" "}
            <Link
              href="/privacy-policy"
              className="text-clinic-primary hover:underline font-medium"
            >
              https://totalsurgicare.com/privacy-policy
            </Link>
            . By using the Services, you agree to be bound by our Privacy
            Policy, which is incorporated into these Legal Terms. The Services
            are hosted in <strong>India</strong>. If you access the Services
            from any other region of the world with laws or other requirements
            governing personal data collection, use, or disclosure that differ
            from applicable laws in India, then through your continued use of
            the Services, you are transferring your data to India, and you
            expressly consent to have your data transferred to and processed in
            India.
          </>
        ),
      },
    ],
  },
  {
    title: "Term and Termination",
    icon: AlertCircle,
    content: [
      {
        type: "paragraph",
        content: (
          <>
            These Legal Terms shall remain in{" "}
            <strong>full force and effect</strong> while you use the Services.
            We reserve the right to, in our sole discretion and without notice
            or liability, deny access to and use of the Services (including
            blocking certain IP addresses), to any person for any reason or for
            no reason, including without limitation for breach of any
            representation, warranty, or covenant contained in these Legal Terms
            or of any applicable law or regulation.
          </>
        ),
      },
      {
        type: "paragraph",
        content: (
          <>
            If we terminate or suspend your account for any reason, you are{" "}
            <strong>prohibited from registering</strong> and creating a new
            account under your name, a fake or borrowed name, or the name of any
            third party, even if you may be acting on behalf of the third party.
          </>
        ),
      },
    ],
  },
  {
    title: "Modifications and Interruptions",
    icon: Edit,
    content: [
      {
        type: "paragraph",
        content: (
          <>
            We reserve the right to change, modify, or remove the contents of
            the Services at any time or for any reason at our{" "}
            <strong>sole discretion</strong> without notice. We cannot guarantee
            the Services will be available at all times. We may experience
            hardware, software, or other problems or need to perform maintenance
            related to the Services, resulting in interruptions, delays, or
            errors.
          </>
        ),
      },
    ],
  },
  {
    title: "Governing Law",
    icon: Scale,
    content: [
      {
        type: "paragraph",
        content: (
          <>
            These Legal Terms shall be governed by and defined following the{" "}
            <strong>laws of India</strong>. Total Surgicare and yourself
            irrevocably consent that the courts of India shall have exclusive
            jurisdiction to resolve any dispute which may arise in connection
            with these Legal Terms.
          </>
        ),
      },
    ],
  },
  {
    title: "Dispute Resolution",
    icon: Gavel,
    content: [
      {
        type: "subheading",
        content: "Informal Negotiations",
      },
      {
        type: "paragraph",
        content: (
          <>
            To expedite resolution and control the cost of any dispute,
            controversy, or claim related to these Legal Terms (each a 'Dispute'
            and collectively, the 'Disputes'), the Parties agree to first
            attempt to <strong>negotiate any Dispute informally</strong> for at
            least thirty (30) days before initiating arbitration.
          </>
        ),
      },
      {
        type: "subheading",
        content: "Binding Arbitration",
      },
      {
        type: "paragraph",
        content: (
          <>
            Any dispute arising out of or in connection with these Legal Terms
            shall be referred to and finally resolved by the{" "}
            <strong>International Commercial Arbitration Court</strong> under
            the European Arbitration Chamber (Belgium, Brussels, Avenue Louise,
            146). The number of arbitrators shall be one (1). The seat of
            arbitration shall be Pune, India. The language of the proceedings
            shall be English. The governing law shall be the substantive law of
            India.
          </>
        ),
      },
      {
        type: "subheading",
        content: "Restrictions",
      },
      {
        type: "paragraph",
        content: (
          <>
            The Parties agree that any arbitration shall be{" "}
            <strong>
              limited to the Dispute between the Parties individually
            </strong>
            . To the full extent permitted by law, no arbitration shall be
            joined with any other proceeding, and there is no right or authority
            for any Dispute to be arbitrated on a class-action basis.
          </>
        ),
      },
      {
        type: "subheading",
        content: "Exceptions to Informal Negotiations and Arbitration",
      },
      {
        type: "paragraph",
        content: (
          <>
            The following Disputes are <strong>not subject</strong> to the above
            provisions concerning informal negotiations and binding arbitration:
            (a) any Disputes seeking to enforce or protect intellectual property
            rights; (b) any Dispute related to allegations of theft, piracy,
            invasion of privacy, or unauthorized use; and (c) any claim for
            injunctive relief.
          </>
        ),
      },
    ],
  },
  {
    title: "Corrections",
    icon: Edit,
    content: [
      {
        type: "paragraph",
        content: (
          <>
            There may be information on the Services that contains{" "}
            <strong>typographical errors, inaccuracies, or omissions</strong>.
            We reserve the right to correct any errors, inaccuracies, or
            omissions and to change or update the information on the Services at
            any time, without prior notice.
          </>
        ),
      },
    ],
  },
  {
    title: "Disclaimer",
    icon: AlertCircle,
    content: [
      {
        type: "paragraph",
        content: (
          <>
            <strong>
              THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU
              AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO
              THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES,
              EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE
              THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
              NON-INFRINGEMENT.
            </strong>
          </>
        ),
      },
    ],
  },
  {
    title: "Limitations of Liability",
    icon: Shield,
    content: [
      {
        type: "paragraph",
        content: (
          <>
            <strong>
              IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE
              LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT,
              CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE
              DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR
              OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE
              HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </strong>
          </>
        ),
      },
      {
        type: "paragraph",
        content: (
          <>
            <strong>
              OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF
              THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT
              PAID, IF ANY, BY YOU TO US DURING THE SIX (6) MONTH PERIOD PRIOR
              TO ANY CAUSE OF ACTION ARISING.
            </strong>
          </>
        ),
      },
    ],
  },
  {
    title: "Indemnification",
    icon: Users,
    content: [
      {
        type: "paragraph",
        content: (
          <>
            You agree to{" "}
            <strong>defend, indemnify, and hold us harmless</strong>, including
            our subsidiaries, affiliates, and all of our respective officers,
            agents, partners, and employees, from and against any loss, damage,
            liability, claim, or demand, including reasonable attorneys' fees
            and expenses, made by any third party due to or arising out of: (1)
            use of the Services; (2) breach of these Legal Terms; (3) any breach
            of your representations and warranties set forth in these Legal
            Terms; (4) your violation of the rights of a third party, including
            but not limited to intellectual property rights; or (5) any overt
            harmful act toward any other user of the Services with whom you
            connected via the Services.
          </>
        ),
      },
    ],
  },
  {
    title: "User Data",
    icon: FileText,
    content: [
      {
        type: "paragraph",
        content: (
          <>
            We will maintain certain data that you transmit to the Services for
            the purpose of <strong>managing the performance</strong> of the
            Services, as well as data relating to your use of the Services.
            Although we perform regular routine backups of data, you are{" "}
            <strong>solely responsible</strong> for all data that you transmit
            or that relates to any activity you have undertaken using the
            Services.
          </>
        ),
      },
    ],
  },
  {
    title: "Electronic Communications, Transactions, and Signatures",
    icon: Globe,
    content: [
      {
        type: "paragraph",
        content: (
          <>
            Visiting the Services, sending us emails, and completing online
            forms constitute <strong>electronic communications</strong>. You
            consent to receive electronic communications, and you agree that all
            agreements, notices, disclosures, and other communications we
            provide to you electronically, via email and on the Services,
            satisfy any legal requirement that such communication be in writing.
          </>
        ),
      },
    ],
  },
  {
    title: "Miscellaneous",
    icon: Info,
    content: [
      {
        type: "paragraph",
        content: (
          <>
            These Legal Terms and any policies or operating rules posted by us
            on the Services or in respect to the Services constitute the{" "}
            <strong>entire agreement and understanding</strong> between you and
            us. Our failure to exercise or enforce any right or provision of
            these Legal Terms shall not operate as a waiver of such right or
            provision.
          </>
        ),
      },
    ],
  },
  {
    title: "Contact Us",
    icon: Phone,
    content: [
      {
        type: "paragraph",
        content: (
          <>
            In order to resolve a complaint regarding the Services or to receive
            further information regarding use of the Services, please contact us
            at:
          </>
        ),
      },
      {
        type: "address",
        content: (
          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-clinic-primary">
            <div className="font-semibold text-clinic-primary mb-2">
              Total Surgicare
            </div>
            <div className="space-y-1 text-gray-700">
              <div>{siteConfig.contact.address.street}</div>
              <div>
                {siteConfig.contact.address.city},{" "}
                {siteConfig.contact.address.state} -{" "}
                {siteConfig.contact.address.pincode}
              </div>
              <div>India</div>
              <div className="pt-2 space-y-1">
                <div>
                  <strong>Phone:</strong>{" "}
                  <Link
                    href={`tel:${siteConfig.contact.phone.primary}`}
                    className="text-clinic-primary hover:underline font-medium"
                  >
                    {siteConfig.contact.phone.primary}
                  </Link>
                </div>
                <div>
                  <strong>Email:</strong>{" "}
                  <Link
                    href={`mailto:${siteConfig.contact.email.primary}`}
                    className="text-clinic-primary hover:underline font-medium"
                  >
                    {siteConfig.contact.email.primary}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
];

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-clinic-vlight_primary/40">
      {/* Hero Section */}
      <section className="py-10 px-4">
        <div className="container mx-auto text-center">
          <Scale className="h-16 w-16 text-clinic-primary mx-auto mb-6" />
          <h1 className="text-xl md:text-4xl font-bold text-clinic-primary mb-6">
            Terms and Conditions
          </h1>
          <p className="md:text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            These terms and conditions outline the rules and regulations for the
            use of Total Surgicare's services.{" "}
            <span className="font-semibold">Last updated June 02, 2025.</span>
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            {termsContent.map((section, index) => (
              <div key={index}>
                <div className="flex items-center mb-4">
                  <section.icon className="h-6 w-6 text-clinic-primary mr-3" />
                  <h2 className="text-xl md:text-2xl font-bold text-clinic-primary">
                    {index + 1}. {section.title}
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

export default TermsAndConditions;
