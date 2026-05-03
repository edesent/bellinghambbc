import type { Metadata } from "next";
import type { ReactNode } from "react";
import ChatWidget from "@/components/ChatWidget";
import { HashScroller } from "@/components/HashScroller";
import { localKeywords, site, siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Bellingham Bible Baptist Church | Independent Baptist Church in Bellingham, MA",
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: localKeywords,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${site.name} | Bellingham, Massachusetts`,
    description: site.description,
    url: siteUrl,
    type: "website",
    locale: "en_US",
    siteName: site.name,
    images: [`${siteUrl}/opengraph-image`],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Bellingham, Massachusetts`,
    description: site.description,
    images: [`${siteUrl}/twitter-image`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "religion",
  icons: {
    icon: [{ url: "/bbbc/red-logo.png", type: "image/png" }],
    shortcut: ["/bbbc/red-logo.png"],
    apple: ["/bbbc/red-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <HashScroller />
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
