"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
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
interface AppointmentProps {
  parentClass?: string;
  buttonClass?: string;
}
export default function AppointmentForm({
  parentClass = "",
  buttonClass = "",
}: AppointmentProps) {
  const [specialty, setSpecialty] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", e);
  };
  return (
    <div className="md:col-span-3 p-8 bg-white/95 backdrop-blur-sm shadow-xl rounded-xl">
      <h3 className="text-xl font-onest mb-6">Book an Appointment</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label className="text-sm font-medium">Select Department</Label>
          <Select
            value={specialty}
            onValueChange={(value) => setSpecialty(value)}
          >
            <SelectTrigger className="w-full focus:ring-2 focus:ring-clinic-secondary">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Phone Number */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium">
              Phone Number
            </Label>
            <Input id="phone" placeholder="Your phone number" required />
          </div>

          {/* Gender */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Gender</Label>
            <Select value={gender} onValueChange={(value) => setGender(value)}>
              <SelectTrigger className="w-full focus:ring-2 focus:ring-clinic-secondary">
                <SelectValue placeholder="Select a specialty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={"Male"}>Male</SelectItem>
                <SelectItem value={"Female"}>Female</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Your email address"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="reason" className="text-sm font-medium">
            Reason for Visit
          </Label>
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
  );
}
