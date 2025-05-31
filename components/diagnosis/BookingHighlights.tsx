import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Home, Clock, DollarSign } from "lucide-react";

const BookingHighlights = () => {
  const highlights = [
    {
      icon: DollarSign,
      title: "Affordable Packages",
      description:
        "Comprehensive health check-up packages at competitive prices with no hidden costs",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: Calendar,
      title: "Easy Online Booking",
      description:
        "Book your tests online 24/7 with instant confirmation and flexible scheduling",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: Home,
      title: "Home Sample Collection",
      description:
        "Convenient home collection service for blood and urine samples at no extra cost",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      icon: Clock,
      title: "Quick Report Delivery",
      description:
        "Get your reports within 24-48 hours via email, SMS, or online portal access",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Badge className="bg-blue-100 text-clinic-primary mb-4">
            Service Excellence
          </Badge>
          <h2 className="text-2xl md:text-4xl font-onest text-clinic-primary mb-6">
            Booking and Service Highlights
          </h2>
          <p className="md:text-lg text-gray-600 max-w-3xl mx-auto">
            Experience hassle-free diagnostic services with our patient-centric
            approach. We prioritize your convenience, affordability, and quick
            access to results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((highlight, index) => (
            <Card
              key={index}
              className="border-blue-200 hover:shadow-lg transition-shadow text-center"
            >
              <CardHeader>
                <div
                  className={`mx-auto ${highlight.bgColor} w-16 h-16 rounded-full flex items-center justify-center mb-4`}
                >
                  <highlight.icon className={`h-8 w-8 ${highlight.color}`} />
                </div>
                <CardTitle className="text-lg text-clinic-primary">
                  {highlight.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-clinic-primary/80 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Special Diagnostic Packages
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Save up to 40% with our comprehensive health check-up packages.
            Perfect for individuals, families, and corporate groups.
          </p>
          <div className="flex flex-wrap justify-center gap-4 ">
            <Button
              variant="outline"
              size="lg"
              className="border-white text-clinic-primary hover:bg-white hover:text-clinic-dark"
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingHighlights;
