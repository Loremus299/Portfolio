import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const embed = "/embed.jpg";

export const metadata: Metadata = {
  title: "Nidhi...",
  description: "A 21 year old Fullstack NextJS Developer.",
  openGraph: {
    images: [
      {
        url: embed,
        secureUrl: embed,
      },
    ],
  },
  twitter: {
    images: [
      {
        url: embed,
        secureUrl: embed,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} antialiased`}>
      <body className="grid place-items-center bg-neutral-950 text-neutral-400 text-lg">
        {children}
      </body>
    </html>
  );
}
