import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bericoresearch.co.in"),
  title: {
    default: "BERICO Research LLP | Family Investment, Finance & Consulting",
    template: "%s | BERICO Research LLP",
  },
  description:
    "BERICO Research LLP is a private family office focused on long-term value creation, strategic advisory, and responsible capital stewardship. Family Investment, Finance & Consulting firm based in Gurgaon.",
  keywords: [
    "BERICO Research LLP",
    "family investment",
    "family office",
    "finance consulting",
    "strategic advisory",
    "wealth management",
    "Gurgaon",
    "Haryana",
  ],
  authors: [{ name: "BERICO Research LLP" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://bericoresearch.co.in",
    siteName: "BERICO Research LLP",
    title: "BERICO Research LLP | Family Investment, Finance & Consulting",
    description:
      "A private family office focused on long-term value creation, strategic advisory, and responsible capital stewardship.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BERICO Research LLP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BERICO Research LLP | Family Investment, Finance & Consulting",
    description:
      "A private family office focused on long-term value creation, strategic advisory, and responsible capital stewardship.",
    images: ["/og-image.png"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="canonical" href="https://bericoresearch.co.in" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "BERICO Research LLP",
              description:
                "A Family Investment, Finance & Consulting firm based in Gurgaon, Haryana.",
              url: "https://bericoresearch.co.in",
              email: "bericoresearch@gmail.com",
              telephone: "+91-9650510232",
              address: {
                "@type": "PostalAddress",
                streetAddress: "A-436, 4th Floor, VentureX, Sector-67, Landmark Cyber Park",
                addressLocality: "Gurgaon",
                addressRegion: "Haryana",
                postalCode: "122102",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9650510232",
                contactType: "general",
                email: "bericoresearch@gmail.com",
              },
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          storageKey="berico-theme-v2"
        >
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
