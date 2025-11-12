import { Users, Bath, Utensils, Bed, Pill, Heart } from "lucide-react";

const DailyHomeCare = () => {
  const careServices = [
    {
      icon: Users,
      title: "Personal Care Assistance",
      description:
        "Help with daily activities including bathing, grooming, dressing, and maintaining personal hygiene.",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Pill,
      title: "Medication Reminders",
      description:
        "Timely medication administration, monitoring for side effects, and maintaining medication schedules.",
      bgColor: "bg-green-50",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: Utensils,
      title: "Nutritional Support",
      description:
        "Meal planning, preparation of nutritious food, and assistance with feeding if required.",
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      icon: Bath,
      title: "Mobility Assistance",
      description:
        "Help with walking, transferring from bed to chair, and physical therapy exercises.",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: Bed,
      title: "Comfort & Positioning",
      description:
        "Regular repositioning to prevent bedsores, ensuring comfort, and maintaining proper posture.",
      bgColor: "bg-pink-50",
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600",
    },
    {
      icon: Heart,
      title: "Companionship",
      description:
        "Emotional support, conversation, engaging activities, and monitoring overall well-being.",
      bgColor: "bg-red-50",
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
    },
  ];

  const careOptions = [
    {
      title: "8-Hour Care",
      duration: "Day Shift",
      description: "Morning to evening care during active hours",
      features: ["8 AM - 4 PM", "Daily activities support", "Medication management", "Meal assistance"],
    },
    {
      title: "12-Hour Care",
      duration: "Extended Shift",
      description: "Comprehensive day or night care coverage",
      features: ["Flexible timing", "Complete care support", "Emergency handling", "Activity assistance"],
    },
    {
      title: "24-Hour Care",
      duration: "Round-the-Clock",
      description: "Continuous care and monitoring",
      features: ["24/7 presence", "Day & night care", "Emergency response", "Complete assistance"],
    },
  ];

  return (
    <section className="py-16 px-4 bg-white overflow-x-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-onest text-clinic-primary mb-4">
            Daily Home Care Services
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Compassionate and professional home care services tailored to meet
            the unique needs of elderly individuals. Our trained caregivers
            provide assistance with daily activities while promoting dignity and
            independence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {careServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`${service.bgColor} rounded-xl p-6 hover:shadow-lg transition-all duration-300`}
              >
                <div
                  className={`${service.iconBg} w-14 h-14 rounded-full flex items-center justify-center mb-4`}
                >
                  <Icon className={`w-7 h-7 ${service.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-clinic-primary/10 to-blue-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-semibold text-clinic-primary mb-8 text-center">
            Flexible Care Options
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {careOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="text-center mb-4">
                  <h4 className="text-2xl font-bold text-clinic-primary mb-1">
                    {option.title}
                  </h4>
                  <p className="text-clinic-secondary font-semibold">
                    {option.duration}
                  </p>
                  <p className="text-gray-600 text-sm mt-2">
                    {option.description}
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <ul className="space-y-2">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <div className="rounded-full bg-clinic-primary p-1 mr-2 mt-0.5">
                          <svg
                            className="w-2.5 h-2.5 text-white"
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
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-xl p-6">
            <h4 className="text-xl font-semibold text-clinic-primary mb-4">
              Our Caregivers
            </h4>
            <ul className="space-y-3">
              {[
                "Professionally trained and certified",
                "Background verified and trustworthy",
                "Experienced in elderly care",
                "Compassionate and patient",
                "Regular training and supervision",
              ].map((point, index) => (
                <li key={index} className="flex items-start">
                  <div className="rounded-full bg-clinic-primary p-1 mr-3 mt-1">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-green-50 rounded-xl p-6">
            <h4 className="text-xl font-semibold text-clinic-primary mb-4">
              What We Provide
            </h4>
            <ul className="space-y-3">
              {[
                "Customized care plans",
                "Regular health monitoring",
                "Family communication updates",
                "Emergency protocols in place",
                "Coordination with healthcare providers",
              ].map((point, index) => (
                <li key={index} className="flex items-start">
                  <div className="rounded-full bg-clinic-primary p-1 mr-3 mt-1">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyHomeCare;

