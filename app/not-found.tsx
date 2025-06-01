"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home } from "lucide-react";
export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-clinic-primary/10 to-clinic-primary/20 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-12 text-center">
            {/* Large 404 Number */}
            <div className="mb-8">
              <h1 className="text-8xl font-bold text-clinic-primary mb-4">
                404
              </h1>
              <div className="w-24 h-1 bg-clinic-primary mx-auto rounded-full"></div>
            </div>

            {/* Error Message */}
            <div className="mb-8">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Page Not Found
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Sorry, we couldn&apos;t find the page you&apos;re looking for.
              </p>
              <p className="text-gray-500">
                The page may have been moved, deleted, or you may have entered
                an incorrect URL.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href={"/"}>
                <Button
                  className="flex items-center gap-2 px-6 py-3 bg-clinic-secondary hover:bg-clinic-secondaryDark"
                  aria-label="home button"
                >
                  <Home className="w-4 h-4" />
                  Return Home
                </Button>
              </Link>
            </div>

            {/* Help Text */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Need medical assistance?
                <a
                  href="/contact"
                  className="text-clinic-primary hover:text-clinic-primary/80 ml-1 underline"
                >
                  Contact us for help.
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
