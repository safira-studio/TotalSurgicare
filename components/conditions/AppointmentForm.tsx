"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CalendarCheck, ArrowUp, CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

const AppointmentForm = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-onest text-clinic-primary">
          Book an Appointment
        </h3>
        <CalendarCheck className="text-clinic-primary h-5 w-5" />
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Your Name</Label>
          <Input id="name" placeholder="Full name" className="mt-1" />
        </div>

        <div>
          <Label htmlFor="phone">Your Phone</Label>
          <Input id="phone" placeholder="Phone number" className="mt-1" />
        </div>

        <div>
          <Label htmlFor="email">Your Email Address</Label>
          <Input id="email" placeholder="Email" className="mt-1" />
        </div>

        <div>
          <Label>Gender</Label>
          <RadioGroup defaultValue="male" className="flex space-x-4 mt-1">
            <div className="flex items-center space-x-1">
              <RadioGroupItem value="male" id="male" />
              <Label htmlFor="male">Male</Label>
            </div>
            <div className="flex items-center space-x-1">
              <RadioGroupItem value="female" id="female" />
              <Label htmlFor="female">Female</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label htmlFor="procedure">Select Procedure</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Proctology">Proctology</SelectItem>
              <SelectItem value="Laparoscopy">Laparoscopy</SelectItem>
              <SelectItem value="Urology">Urology</SelectItem>
              <SelectItem value="Gynaecology">Gynaecology</SelectItem>
              <SelectItem value="Aesthetics">Aesthetics</SelectItem>
              <SelectItem value="Vascular">Vascular</SelectItem>
              <SelectItem value="Opthalmology">Opthalmology</SelectItem>
              <SelectItem value="Cardiology">Cardiology</SelectItem>
              <SelectItem value="Diagnostic">Diagnostic</SelectItem>
              <SelectItem value="Post Surgery Care">
                Post Surgery Care
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="pt-2">
          <Button className="w-full bg-clinic-primary hover:bg-clinic-dark group">
            Book Appointment
            <ArrowUp className="ml-2 h-4 w-4 rotate-45 transition group-hover:translate-x-1" />
          </Button>
        </div>

        <p className="text-xs text-gray-500 text-center mt-2">
          Free consultation with our specialists available
        </p>
      </div>
    </div>
  );
};

export default AppointmentForm;
