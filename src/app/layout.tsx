import type { Metadata } from "next";
import { Geist, Geist_Mono, Sofia_Sans_Extra_Condensed } from "next/font/google";
import SeasonSky from "@/components/SeasonSky";
import SiteHeader from "@/components/SiteHeader";
import ThemeScript from "@/components/ThemeScript";
import { profile } from "@/data/portfolio";
import "./globals.css";

const sofia = Sofia_Sans_Extra_Condensed({
  variable: "--font-sofia",
  subsets: ["latin"],
  weight: ["800", "900"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.fullName} — ${profile.role}`,
  description: profile.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // data-theme is set by ThemeScript before hydration, hence suppressHydrationWarning.
    <html lang="en" className={`${sofia.variable} ${geist.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body>
        <SeasonSky />
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
