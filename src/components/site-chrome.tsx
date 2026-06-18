"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingContactActions from "@/components/floating-contact-actions";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <main id="main-content" className="mobile-site pb-28 sm:pb-32 lg:pb-24">
        {children}
      </main>
      <Footer />
      <FloatingContactActions />
    </>
  );
}
