import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Proception - Advanced Humanoid Robotics",
  description: "Developing dexterous and reliable humanoid hands using cutting-edge computer vision and machine learning techniques.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={instrumentSans.className}>{children}</body>
    </html>
  );
}
