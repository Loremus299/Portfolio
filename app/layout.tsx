import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nidhish | Fullstack Developer",
  description: "A 21 year old Fullstack NextJS Developer.",
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
