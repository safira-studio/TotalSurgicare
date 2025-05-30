import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/layout/navbar";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/chatWidget";
import ChatBot from "@/components/ChatBot";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {/* <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}> */}
        <div className="relative h-screen">
          <Navbar />
          <main className="mx-auto max-w-8xl">{children}</main>
          <Footer />
        </div>
        <ChatWidget />
        <ChatBot />
        {/* </Providers> */}
      </body>
    </html>
  );
}
