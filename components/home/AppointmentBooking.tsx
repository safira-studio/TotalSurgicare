"use client";
import React, { useState } from "react";
import { Calendar as CalendarIcon, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const specialties = [
  "Proctology",
  "Laparoscopy",
  "Urology",
  "Gynaecology",
  "Aesthetics",
  "Vascular",
  "Opthalmology",
  "Cardiology",
  "Diagnostic",
  "Post Surgery Care",
];

const AppointmentBooking = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [specialty, setSpecialty] = useState<string>("");
  const [timeSlot, setTimeSlot] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Appointment booking logic would go here
  };

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
                      <span className="font-semibold">(123) 456-7890</span>
                    </p>
                  </div>
                </div>

                <div className="md:col-span-3 p-8">
                  <h3 className="text-xl font-onest mb-6">
                    Book an Appointment
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">
                        Select Department
                      </Label>
                      <Select
                        value={specialty}
                        onValueChange={(value) => setSpecialty(value)}
                      >
                        <SelectTrigger className="w-full focus:ring-2 focus:ring-clinic-primary">
                          <SelectValue placeholder="Select a specialty" />
                        </SelectTrigger>
                        <SelectContent>
                          {specialties.map((s, index) => (
                            <SelectItem key={index} value={s}>
                              {s}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </Label>
                      <Input id="name" placeholder="Your full name" required />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">
                          Choose Date
                        </Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !date && "text-clinic-accent"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {date ? (
                                format(date, "PPP")
                              ) : (
                                <span>Select date</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              initialFocus
                              disabled={(date) =>
                                date < new Date() ||
                                date >
                                  new Date(
                                    new Date().setMonth(
                                      new Date().getMonth() + 2
                                    )
                                  ) ||
                                date.getDay() === 0 ||
                                date.getDay() === 6
                              }
                            />
                          </PopoverContent>
                        </Popover>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          placeholder="Your phone number"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email address"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="reason" className="text-sm font-medium">
                        Reason for Visit
                      </label>
                      <Textarea
                        id="reason"
                        placeholder="Please briefly describe your symptoms or reason for the appointment"
                        rows={3}
                        required
                      />
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        className="w-full bg-clinic-secondary hover:bg-clinic-secondaryDark"
                      >
                        Book Appointment
                      </Button>
                    </div>
                  </form>
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
