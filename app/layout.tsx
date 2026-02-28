import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import CustomCursor from "@/components/CustomCursor";

const switzer = localFont({
  src: "../public/fonts/Switzer-Variable.woff2",
  variable: "--font-switzer",
  weight: "100 900",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const tiempos = localFont({
  src: [
    {
      path: "../public/fonts/TiemposHeadline-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/TiemposHeadline-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/TiemposHeadline-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/TiemposHeadline-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Lauf Studio",
    template: "%s — Lauf Studio",
  },
  description:
    "Lauf is a design studio crafting thoughtful brands, websites, and systems for companies that value clarity and craft.",
  openGraph: {
    title: "Lauf Studio",
    description:
      "Design studio crafting thoughtful brands, websites, and systems.",
    siteName: "Lauf Studio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${switzer.variable} ${tiempos.variable} ${geistMono.variable} font-sans antialiased`}>
        <CustomCursor />
        <Nav />
        <PageTransition>
          <main className="min-h-screen">{children}</main>
          <Footer />
        </PageTransition>
      </body>
    </html>
  );
}
