import React from "react";
import { Calendar as CalendarIcon, Clock, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AppointmentForm from "@/components/AppointmentForm";
import { siteConfig } from "@/config/site";

const AppointmentBooking = () => {
  return (
    <div className="w-full py-12 mb-6 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-clinic-primary mb-2">
            APPOINTMENT
          </p>
          <h2 className="text-3xl font-onest">Book Your Visit</h2>
          <p className="text-gray-500 mt-2 max-w-lg mx-auto">
            Schedule an appointment with one of our specialists at your
            convenience.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2 bg-clinic-primary p-8 text-white">
                  <h3 className="text-xl font-semibold mb-6">Why Choose Us</h3>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="p-3 rounded-full bg-white/20 flex items-center justify-center text-white mr-4">
                        <CalendarIcon size={20} />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">
                          Flexible Scheduling
                        </h4>
                        <p className="text-sm text-white/80">
                          Choose appointment times that work best for your
                          schedule.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="p-3 rounded-full bg-white/20 flex items-center justify-center text-white mr-4">
                        <Users size={20} />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">
                          Experienced Doctors
                        </h4>
                        <p className="text-sm text-white/80">
                          Our team consists of highly qualified specialists.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="p-3 rounded-full bg-white/20 flex items-center justify-center text-white mr-4">
                        <Clock size={20} />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Minimal Wait Time</h4>
                        <p className="text-sm text-white/80">
                          We respect your time and work to minimize wait times.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 pt-6 border-t border-white/20">
                    <p className="font-medium mb-2">Need urgent help?</p>
                    <p className="text-sm">
                      Call our emergency line:{" "}
                      <span className="font-semibold">
                        {" "}
                        {siteConfig.contact.phone.primary}
                      </span>
                    </p>
                    <ul className="space-y-2 text-2xl font-extrabold pt-4 text-white/90">
                      <li className="font-semibold">💰 Budget Friendly</li>
                      <li className="font-semibold">
                        🪙 EMI Option Available at 0% Interest
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="md:col-span-3 ">
                  <AppointmentForm formClass={"space-y-4"} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBooking;
