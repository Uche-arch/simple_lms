import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "DevAcademy",
    template: "%s | DevAcademy",
  },

  description:
    "Learn frontend development through structured roadmaps, curated resources, practical projects, and progress tracking.",

  keywords: [
    "Frontend Development",
    "HTML",
    "CSS",
    "Roadmaps",
    "Web Development",
    "Developer Learning",
    "Programming",
    "DevAcademy",
  ],

  authors: [
    {
      name: "DevAcademy",
    },
  ],

  creator: "DevAcademy",

  metadataBase: new URL("https://your-domain.com"),

  openGraph: {
    title: "DevAcademy",
    description:
      "Learn frontend development through structured roadmaps and practical projects.",
    siteName: "DevAcademy",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "DevAcademy",
    description:
      "Learn frontend development through structured roadmaps and practical projects.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        <Toaster />
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
