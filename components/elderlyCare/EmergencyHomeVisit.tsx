import { Ambulance, Phone, Clock, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Link from "next/link";

const EmergencyHomeVisit = () => {
  const emergencyServices = [
    {
      icon: Ambulance,
      title: "Rapid Response",
      description:
        "Quick emergency response within 30-60 minutes of your call, ensuring immediate medical attention when needed.",
    },
    {
      icon: UserCheck,
      title: "Qualified Medical Staff",
      description:
        "Experienced doctors, nurses, and paramedics equipped to handle various medical emergencies at home.",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description:
        "Round-the-clock emergency service, 365 days a year, including weekends and holidays.",
    },
    {
      icon: Phone,
      title: "Easy Access",
      description:
        "Single phone call connects you to our emergency response team with dedicated helpline support.",
    },
  ];

  const medicalTeam = [
    {
      role: "Emergency Physicians",
      description:
        "Experienced doctors trained in emergency medicine, available for urgent consultations and critical care at home.",
      expertise: [
        "Acute illness management",
        "Emergency stabilization",
        "Immediate medical assessment",
      ],
    },
    {
      role: "Registered Nurses",
      description:
        "Skilled nursing staff providing immediate care, monitoring vital signs, and administering emergency treatments.",
      expertise: [
        "IV medication administration",
        "Wound care",
        "Vital signs monitoring",
      ],
    },
    {
      role: "Paramedics",
      description:
        "Trained paramedical staff equipped with emergency equipment for on-site medical support and patient stabilization.",
      expertise: [
        "Emergency first aid",
        "Patient transport support",
        "Life support procedures",
      ],
    },
    {
      role: "Critical Care Nurses",
      description:
        "Specialized nurses for patients requiring intensive monitoring and advanced medical care at home.",
      expertise: [
        "Post-operative care",
        "Ventilator management",
        "Critical condition monitoring",
      ],
    },
  ];

  const emergencyConditions = [
    "Sudden chest pain or heart attack symptoms",
    "Severe breathing difficulties",
    "Uncontrolled bleeding or injuries",
    "High fever with altered consciousness",
    "Severe dehydration",
    "Acute abdominal pain",
    "Stroke symptoms (sudden weakness, confusion)",
    "Diabetic emergencies (high/low blood sugar)",
    "Falls with suspected fractures",
    "Allergic reactions or anaphylaxis",
    "Urinary retention or severe UTI",
    "Sudden severe headache",
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-onest text-clinic-primary mb-4">
            Emergency Home Visit Services
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-6">
            When medical emergencies occur, our rapid response team brings
            professional healthcare to your doorstep. With qualified medical
            personnel and emergency equipment, we provide immediate care when
            you need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href={`tel:${siteConfig.contact.phone.primary}`}>
              <Button
                aria-label="Emergency Call"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg"
                size="lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Emergency: {siteConfig.contact.phone.primary}
              </Button>
            </Link>
            <Link href={`tel:${siteConfig.contact.phone.secondary}`}>
              <Button
                aria-label="Alternative Emergency Call"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg"
                size="lg"
                variant="outline"
              >
                Alt: {siteConfig.contact.phone.secondary}
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {emergencyServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-clinic-primary"
              >
                <div className="bg-red-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 mb-12 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-semibold text-clinic-primary mb-8 text-center">
            Our Emergency Medical Team
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {medicalTeam.map((member, index) => (
              <div
                key={index}
                className="border-2 border-gray-200 rounded-xl p-6 hover:border-clinic-primary transition-colors"
              >
                <h4 className="text-xl font-bold text-clinic-primary mb-3">
                  {member.role}
                </h4>
                <p className="text-gray-600 mb-4 text-sm">
                  {member.description}
                </p>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">
                    Expertise:
                  </p>
                  <ul className="space-y-1">
                    {member.expertise.map((skill, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <div className="rounded-full bg-clinic-primary p-1 mr-2 mt-0.5">
                          <svg
                            className="w-2 h-2 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M5 13l4 4L19 7"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-semibold text-clinic-primary mb-6 text-center">
            When to Call for Emergency Home Visit
          </h3>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Our emergency home visit service is designed for situations where
            immediate medical attention is needed but hospital admission may not
            be required.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {emergencyConditions.map((condition, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start">
                  <div className="rounded-full bg-red-100 p-2 mr-3 flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">{condition}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-clinic-primary text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            Need Emergency Medical Assistance?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Don&apos;t hesitate in emergencies. Our team is ready to assist you
            24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`tel:${siteConfig.contact.phone.primary}`}>
              <Button
                aria-label="Call Emergency"
                className="bg-white text-clinic-primary hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
                size="lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </Link>
            <Link href={"/contact"}>
              <Button
                aria-label="Book Visit"
                className="bg-clinic-secondary hover:bg-clinic-secondaryDark text-white px-8 py-6 text-lg"
                size="lg"
              >
                Schedule Visit
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyHomeVisit;

