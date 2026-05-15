import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bmbcrockwell.com"),
  title: {
    default:
      "Bible Missionary Baptist Church | BMBC Rockwell, NC",
    template: "%s | Bible Missionary Baptist Church",
  },
  description:
    "Bible Missionary Baptist Church is a King James Bible-believing Baptist church in Rockwell, North Carolina.",
  keywords: [
    "Bible Missionary Baptist Church",
    "BMBC Rockwell",
    "Baptist church Rockwell NC",
    "King James Bible church Rockwell",
    "Pastor Cody Zorn",
    "church in Rowan County NC",
  ],
  authors: [{ name: "Bible Missionary Baptist Church" }],
  creator: "Bible Missionary Baptist Church",
  publisher: "Bible Missionary Baptist Church",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bible Missionary Baptist Church | Rockwell, NC",
    description:
      "A King James Bible-believing Baptist church in Rockwell, North Carolina.",
    url: "https://www.bmbcrockwell.com",
    type: "website",
    locale: "en_US",
    siteName: "BMBC",
    images: ["/bmbc/church-exterior.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bible Missionary Baptist Church | Rockwell, NC",
    description:
      "A King James Bible-believing Baptist church in Rockwell, North Carolina.",
    images: ["/bmbc/church-exterior.jpg"],
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
    icon: [{ url: "/bmbc/logo.jpg", type: "image/jpeg" }],
    shortcut: ["/bmbc/logo.jpg"],
    apple: ["/bmbc/logo.jpg"],
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
        {children}
      </body>
    </html>
  );
}
