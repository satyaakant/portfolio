import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import HUD from "@/components/HUD";
import Preloader from "@/components/Preloader";
import MiniMap from "@/components/MiniMap";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Satya Kant Mishra | Tech Portfolio",
  description: "Web Developer Portfolio of Satya Kant Mishra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased`}
      >
        <Preloader />
        <HUD />
        <MiniMap />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
