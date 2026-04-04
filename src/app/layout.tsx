import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTABar from "@/components/MobileCTABar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Analytics from "@/components/GoogleAnalytics";
import { WebVitals } from "@/components/WebVitals";
import { dentalClinicSchema } from "@/lib/schema/dentalClinic";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const viewport: Viewport = {
  themeColor: '#00E5FF',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://atmosdental.com'),
  title: {
    default: "Atmos Dental & Aesthetic Clinic | Dentist in Panaiyur, Chennai",
    template: "%s | Atmos Dental & Aesthetic Clinic",
  },
  description: "Atmos Dental & Aesthetic Clinic in Panaiyur, Chennai. Healthy smiles right in your neighborhood. Book appointments via Call or WhatsApp.",
  keywords: "dentist, dental clinic, Panaiyur, Rajiv Gandhi Nagar, East Coast Road, Chennai, Tamil Nadu, teeth whitening, braces, root canal",
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
  openGraph: {
    type: "website",
    siteName: "Atmos Dental & Aesthetic Clinic",
    title: "Atmos Dental & Aesthetic Clinic",
    description: "Healthy Smiles, Right in Your Neighborhood",
    images: [
      {
        url: "/images/logo_black_bg.png",
        width: 400,
        height: 400,
        alt: "Atmos Dental & Aesthetic Clinic Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Atmos Dental & Aesthetic Clinic",
    description: "Healthy Smiles, Right in Your Neighborhood",
    images: ["/images/logo_black_bg.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = JSON.stringify(dentalClinicSchema);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <MobileCTABar />
          <WhatsAppFloat />
        </ThemeProvider>
        <Analytics />
        <WebVitals />
      </body>
    </html>
  );
}
