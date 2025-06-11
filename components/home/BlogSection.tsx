"use client";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

interface BlogPostProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
  slug: string;
}

const BlogCard = ({
  title,
  excerpt,
  image,
  date,
  author,
  category,
  slug,
}: BlogPostProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-white h-full flex flex-col">
      <div className="w-full h-48 overflow-hidden">
        <Image
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
          height={100}
          src={image || "/placeholder.svg"}
          width={100}
        />
      </div>
      <CardContent className="flex-grow p-6">
        <Badge
          className="mb-2 bg-blue-50 text-clinic-primary"
          variant="outline"
        >
          {category}
        </Badge>
        <h3 className="text-xl font-semibold mb-2 line-clamp-2 hover:text-clinic-primary transition-colors">
          <a href={`/blog/${slug}`}>{title}</a>
        </h3>
        <p className="text-gray-600 line-clamp-3 mb-4">{excerpt}</p>
        <div className="flex items-center text-sm text-gray-500 space-x-4">
          <div className="flex items-center">
            <Calendar className="mr-1" size={14} />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <User className="mr-1" size={14} />
            <span>{author}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-0 pb-6 px-6">
        <Link
          className="text-clinic-primary font-medium flex items-center hover:underline"
          href={`#`}
        >
          Read more <ArrowRight className="ml-2" size={16} />
        </Link>
      </CardFooter>
    </Card>
  );
};

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Maintaining Heart Health: Tips from Cardiologists",
      excerpt:
        "Learn about the latest recommendations for heart health from our top cardiologists, including diet, exercise, and preventative measures.",
      image: "/hearthealth.webp",
      date: "May 15, 2025",
      author: "Dr. Sarah Johnson",
      category: "Cardiology",
      slug: "",
    },
    {
      title: "Understanding Childhood Vaccinations",
      excerpt:
        "A comprehensive guide to childhood vaccinations, their importance, and addressing common concerns parents might have.",
      image: "/childvaccine.webp",
      date: "May 10, 2025",
      author: "Dr. Emily Davis",
      category: "Pediatrics",
      slug: "",
    },
    {
      title: "Mental Health Awareness: Breaking the Stigma",
      excerpt:
        "Exploring the importance of mental health awareness and how we can work together to break the stigma surrounding mental health issues.",
      image: "/mentalhealth.webp",
      date: "May 5, 2025",
      author: "Dr. Michael Brown",
      category: "Mental Health",
      slug: "",
    },
    {
      title: "Nutrition Tips for a Healthy Lifestyle",
      excerpt:
        "Our nutritionists share practical advice on maintaining a balanced diet and making healthier food choices in your daily life.",
      image: "/healthytips.webp",
      date: "April 28, 2025",
      author: "Dr. Jessica Lee",
      category: "Nutrition",
      slug: "",
    },
    {
      title: "The Importance of Regular Health Check-ups",
      excerpt:
        "Why preventative care matters and how regular health screenings can help detect potential issues before they become serious.",
      image: "/healthchecup.webp",
      date: "April 20, 2025",
      author: "Dr. Robert Wilson",
      category: "Preventative Care",
      slug: "",
    },
  ];

  return (
    <div className="w-full py-12 mb-6 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div>
            <p className="text-sm font-medium text-clinic-primary mb-2">
              HEALTH INSIGHTS
            </p>
            <h2 className="text-3xl font-bold">Latest Articles</h2>
            <p className="text-gray-500 mt-2 md:max-w-md">
              Stay informed with the latest health news, tips, and insights from
              our medical experts.
            </p>
          </div>
        </div>

        <div className="relative px-4 md:px-10">
          <Carousel
            className="w-full"
            opts={{
              align: "start",
              slidesToScroll: 1,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {blogPosts.map((post, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <BlogCard {...post} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className=" mr-2 static translate-y-0" />
              <CarouselNext className=" ml-2 static translate-y-0" />
            </div>
          </Carousel>
        </div>
        <div className="mt-4 md:mt-0 flex justify-center w-full">
          <Button
            aria-label="View all articles"
            className="mx-auto  text-clinic-primary hover:bg-clinic-primary hover:text-white"
            variant="outline"
          >
            View All Articles
          </Button>
        </div>
        <div className="text-center mt-10 ">
          <p className="text-gray-600">
            Subscribe to our newsletter to receive health tips and updates
            directly to your inbox.
          </p>

          {/* <div className=" mx-auto"> */}
          <div className="bg-white flex justify-center w-fit md:w-3/5 lg:w-2/5 h-fit p-0 overflow-hidden mx-auto rounded-md border border-gray-300  focus-within:ring-2 focus-within:ring-blue-200 transition-all min-w-0">
            <input
              className="w-full min-w-0 px-1 md:px-3 gap-2 text-gray-700 focus:outline-none"
              placeholder="Enter your email"
              type="email"
            />
            <button
              aria-label="subscribe"
              className="bg-clinic-primary hover:bg-clinic-dark text-white font-medium px-2 md:px-4 py-2 ml-2  transition-colors"
            >
              Subscribe
            </button>
          </div>

          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
