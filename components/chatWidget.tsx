"use client";
import { useState } from "react";
import { MessageCircle, Phone, Mail, X } from "lucide-react";
import { siteConfig } from "@/config/site";

const ChatWidget = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
      {open && (
        <>
          <a
            className="bg-green-500 text-white p-3 rounded-full shadow-md hover:bg-green-600 transition"
            href={`https://wa.me/${siteConfig.contact.phone.primary}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.15-1.758-.867-2.03-.967-.272-.1-.47-.15-.669.15-.197.3-.759.967-.928 1.167-.17.2-.34.225-.637.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.65-2.058-.17-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.15-.174.2-.297.3-.495.1-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51a12.279 12.279 0 00-.57-.01c-.197 0-.52.075-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.2 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.005-1.413.247-.694.247-1.289.172-1.413-.075-.124-.272-.2-.57-.35zm-5.421 7.234h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.861 9.861 0 01-1.511-5.26c.002-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.002 5.45-4.436 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.055 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>

          <a
            className="bg-blue-500 text-white p-3 rounded-full shadow-md hover:bg-blue-600 transition"
            href={`tel:${siteConfig.contact.phone.primary}`}
          >
            <Phone className="w-5 h-5" />
          </a>

          <a
            className="bg-red-500 text-white p-3 rounded-full shadow-md hover:bg-red-600 transition"
            href={`mailto:${siteConfig.contact.email.primary}`}
          >
            <Mail className="w-5 h-5" />
          </a>
        </>
      )}

      <button
        aria-label="contact options"
        className="bg-clinic-secondaryDark text-white p-4 rounded-full shadow-lg hover:bg-gray-800 hover:scale-105 transition-all duration-200 transform active:scale-95"
        onClick={() => setOpen(!open)}
      >
        <div
          className={`transition-transform duration-300 ease-in-out ${
            open ? "rotate-180" : "rotate-0"
          }`}
        >
          {open ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </div>
      </button>
    </div>
  );
};

export default ChatWidget;
