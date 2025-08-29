"use client";
import { useState } from "react";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";

interface BlogPostProps {
  title: string;
  excerpt: string;
  videoUrl: string;
  thumbnailUrl: string;
  date: string;
  author: string;
  category: string;
  onThumbnailClick?: (url: string) => void;
}

const BlogCard = ({
  title,
  excerpt,
  videoUrl,
  thumbnailUrl,
  date,
  author,
  category,
  onThumbnailClick,
}: BlogPostProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-white h-full flex flex-col">
      <button
        onClick={() => onThumbnailClick?.(videoUrl)}
        className="w-full h-48 md:h-56 bg-black relative cursor-pointer p-0 border-0"
        type="button"
      >
        <Image
          src={thumbnailUrl}
          alt="video thumbnail"
          width={50}
          height={50}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold bg-black bg-opacity-40">
          ▶
        </div>
      </button>

      {/* </div> */}

      <CardContent className="flex-grow p-6">
        <Badge
          className="mb-2 bg-blue-50 text-clinic-primary"
          variant="outline"
        >
          {category}
        </Badge>
        <h3 className="text-xl font-semibold mb-2 line-clamp-2">{title}</h3>
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
        <a
          href={videoUrl}
          className="text-clinic-primary font-medium flex items-center hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch on Facebook <ArrowRight className="ml-2" size={16} />
        </a>
      </CardFooter>
    </Card>
  );
};

const BlogSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const blogPosts: BlogPostProps[] = [
    {
      title: "Regain Confidence with Expert Circumcision Surgery",
      excerpt:
        "Regain Confidence and Comfort with Expert Circumcision Surgery. Feel free to share your needs, Our experts are here to assist you.",
      videoUrl:
        "https://www.facebook.com/TotalSurgicare/videos/678314978209117",
      thumbnailUrl: "/thumnail.png",
      date: "June 10, 2025",
      author: "Total Surgicare",
      category: "Surgery",
    },
    {
      title: "Upgrade to Stitchless Circumcision",
      excerpt:
        "Upgrade to stitchless circumcision – a safer, faster, and more comfortable choice! ✔️ No stitches, no pain ✔️ Quicker recovery ✔️ Less swelling",
      videoUrl:
        "https://www.facebook.com/TotalSurgicare/videos/1689671691647697",
      thumbnailUrl: "/thumnail1.png",
      date: "June 5, 2025",
      author: "Total Surgicare",
      category: "Surgery",
    },
    {
      title: "Advanced Surgical Care at Total Surgicare",
      excerpt:
        "Total Surgicare – Expertise, Quality & Advanced Surgical Care. At Total Surgicare, we provide expert surgical solutions with advanced techniques.",
      videoUrl: "https://www.facebook.com/watch/?v=1446353826336310",
      thumbnailUrl: "/thumnail3.png",
      date: "May 28, 2025",
      author: "Total Surgicare",
      category: "Surgery",
    },
    {
      title: "Piles, Fissures & Fistulas: Common and Treatable",
      excerpt:
        "Piles, Fissures, and Fistulas are more common than you think—and completely treatable. Early diagnosis leads to faster, less painful recovery.",
      videoUrl:
        "https://www.facebook.com/TotalSurgicare/videos/piles-fissures-and-fistulas-are-more-common-than-you-thinkand-completely-treatab/1044080111251237",
      thumbnailUrl: "/thumnail4.png",
      date: "June 20, 2025",
      author: "Total Surgicare",
      category: "Proctology",
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
                  <BlogCard {...post} onThumbnailClick={setSelectedVideo} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="mr-2 static translate-y-0" />
              <CarouselNext className="ml-2 static translate-y-0" />
            </div>
          </Carousel>
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-600">
            Subscribe to our newsletter to receive health tips and updates
            directly to your inbox.
          </p>

          <div className="bg-white flex justify-center w-fit md:w-3/5 lg:w-2/5 h-fit p-0 overflow-hidden mx-auto rounded-md border border-gray-300 focus-within:ring-2 focus-within:ring-blue-200 transition-all min-w-0">
            <input
              className="w-full min-w-0 px-1 md:px-3 gap-2 text-gray-700 focus:outline-none"
              placeholder="Enter your email"
              type="email"
            />
            <button
              aria-label="subscribe"
              className="bg-clinic-primary hover:bg-clinic-dark text-white font-medium px-2 md:px-4 py-2 ml-2 transition-colors"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Modal for playing video */}
      <Dialog
        open={!!selectedVideo}
        onOpenChange={() => setSelectedVideo(null)}
      >
        <DialogContent className="w-[400px] h-[700px] p-0 overflow-hidden sm:w-[300px] sm:h-[500px] ">
          <DialogTitle className="sr-only">Video Modal</DialogTitle>
          {selectedVideo && (
            <iframe
              src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
                selectedVideo
              )}&show_text=false&width=400`}
              width="100%"
              height="70%"
              title="Facebook Video"
              allowFullScreen
              className="w-full h-full border-0"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BlogSection;
