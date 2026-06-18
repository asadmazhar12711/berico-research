import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingContactActions from "@/components/floating-contact-actions";
import { CONTACT_EMAILS } from "@/lib/contact";

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
  metadataBase: new URL("https://BeriCoresearch.co.in"),
  title: {
    default: "BeriCo Research LLP | Family Office, Finance & Consulting",
    template: "%s | BeriCo Research LLP",
  },
  description:
    "BeriCo Research LLP is a private family office focused on long-term value creation, strategic advisory, and responsible capital stewardship. Family Office, Finance & Consulting firm based in Gurgaon.",
  keywords: [
    "BeriCo Research LLP",
    "family office",
    "family office",
    "finance consulting",
    "strategic advisory",
    "wealth management",
    "Gurgaon",
    "Haryana",
  ],
  authors: [{ name: "BeriCo Research LLP" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://BeriCoresearch.co.in",
    siteName: "BeriCo Research LLP",
    title: "BeriCo Research LLP | Family Office, Finance & Consulting",
    description:
      "A private family office focused on long-term value creation, strategic advisory, and responsible capital stewardship.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BeriCo Research LLP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BeriCo Research LLP | Family Office, Finance & Consulting",
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
    <html lang="en" suppressHydrationWarning className={`dark ${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="canonical" href="https://BeriCoresearch.co.in" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "BeriCo Research LLP",
              description:
                "A Family Office, Finance & Consulting firm based in Gurgaon, Haryana.",
              url: "https://BeriCoresearch.co.in",
              email: CONTACT_EMAILS[0],
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
                email: CONTACT_EMAILS[0],
              },
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="BeriCo-theme-v3"
        >
          <Navbar />
          <main id="main-content" className="mobile-site pb-28 sm:pb-32 lg:pb-24">{children}</main>
          <Footer />
          <FloatingContactActions />
        </ThemeProvider>
      </body>
    </html>
  );
}
