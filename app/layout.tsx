import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import PageTransitionProvider from "@/components/PageTransitionProvider";

const switzer = localFont({
  src: "../public/fonts/Switzer-Variable.woff2",
  variable: "--font-switzer",
  weight: "100 900",
  display: "swap",
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
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
  metadataBase: new URL("https://lauf.co"),
  title: {
    default: "Lauf | Web Design & Development",
    template: "%s | Lauf",
  },
  description:
    "Professional web design and development services by Lauf. Expert website solutions for modern businesses.",
  keywords: [
    "Lauf",
    "Lauf websites",
    "Lauf web design",
    "website",
    "SEO",
    "SEO Madison",
    "web design",
    "web development",
    "digital agency",
    "website design",
    "Madison websites",
    "Madison website design",
    "Madison web development",
    "Madison website development",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lauf.co",
    siteName: "Lauf",
    title: "Lauf | Professional Web Design & Development",
    description: "Professional web design and development services by Lauf",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Lauf Web Design & Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lauf | Professional Web Design & Development",
    description: "Professional web design and development services by Lauf",
    images: ["/opengraph-image.png"],
  },
  verification: {
    google: "google5090f974ab070b62",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://lauf.co",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${switzer.variable} ${geistSans.variable} ${tiempos.variable} ${geistMono.variable} flex min-h-screen flex-col font-sans antialiased`}
      >
        <PageTransitionProvider>
          <TopBar />
          <main className="flex-1">{children}</main>
          <Footer />
          <Nav />
        </PageTransitionProvider>
      </body>
    </html>
  );
}
