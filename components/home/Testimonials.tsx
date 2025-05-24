import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Marquee } from "@/components/ui/marquee";

const testimonials = [
  {
    content:
      "The medical team provided exceptional care during my treatment. I felt like I was in safe hands throughout the whole process.",
    author: "Sarah Johnson",
    role: "Patient",
    rating: 5,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    content:
      "The doctors were professional and attentive to my needs. The clinic facilities are modern and clean.",
    author: "Michael Brown",
    role: "Patient",
    rating: 5,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    content:
      "I've been a patient for 3 years and the quality of care has always been excellent. Highly recommended!",
    author: "Emily Davis",
    role: "Patient",
    rating: 4,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    content:
      "The staff is friendly and the wait times are minimal. I appreciate how efficiently the clinic is run.",
    author: "David Wilson",
    role: "Patient",
    rating: 5,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    content:
      "My experience with the specialists was outstanding. They took the time to explain everything clearly.",
    author: "Jennifer Lee",
    role: "Patient",
    rating: 5,
    image: "/placeholder.svg?height=40&width=40",
  },
];

interface TestimonialProps {
  content: string;
  author: string;
  role?: string;
  rating?: number;
  image?: string;
}
const TestimonialCard = ({
  content,
  author,
  role,
  rating = 5,
  image,
}: TestimonialProps) => {
  return (
    <Card className="h-full bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow w-80">
      <CardContent className="p-0 space-y-4">
        <div className="flex items-center gap-3 pt-3">
          <Avatar className="h-10 w-10 border-2 border-clinic-primary">
            <AvatarImage src={image || "/placeholder.svg"} />
            <AvatarFallback className="bg-clinic-primary/80 text-white">
              {author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-semibold">{author}</h4>
            {role && <p className="text-xs text-clinic-primary">{role}</p>}
          </div>
        </div>

        <p className="text-gray-600 italic text-sm">{content}</p>
      </CardContent>
    </Card>
  );
};

export function TestimonialMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <div className="text-center mb-10">
        <p className="text-sm font-medium text-clinic-primary mb-2">
          TESTIMONIALS
        </p>
        <h2 className="text-3xl font-bold">What Our Patients Say</h2>
        <p className="text-gray-500 mt-2 max-w-lg mx-auto">
          Real stories from our patients about their experience with our
          services and care.
        </p>
      </div>
      <Marquee pauseOnHover className="[--duration:30s]">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard {...testimonial} key={index} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:30s]">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard {...testimonial} key={index} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
