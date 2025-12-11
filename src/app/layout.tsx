import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { getNavbar, getFooter, getSiteSettings } from "../sanity/lib/queries";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();

  return {
    title: settings?.siteName || "IRONONE",
    description: settings?.siteDescription || "",
    keywords: settings?.seo?.keywords || [],
    openGraph: {
      title: settings?.seo?.metaTitle || settings?.siteName || "IRONONE",
      description: settings?.seo?.metaDescription || settings?.siteDescription || "",
    }
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [navbarData, footerData] = await Promise.all([
    getNavbar(),
    getFooter()
  ]);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar data={navbarData} />
        {children}
        <Footer data={footerData} />
      </body>
    </html>
  );
}
