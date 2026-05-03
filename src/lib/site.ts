import type { Metadata } from "next";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://bellinghambbc.com";

export const givingEmbedUrl = process.env.NEXT_PUBLIC_GIVING_EMBED_URL || "";
export const eventsSheetId = process.env.NEXT_PUBLIC_EVENTS_SHEET_ID || "";

export const site = {
  name: "Bellingham Bible Baptist Church",
  shortName: "BBBC",
  pastor: "Dr. Michael Carrier",
  description:
    "A local Independent Baptist church in Bellingham, Massachusetts, helping families discover Jesus, grow in God's Word, and find a welcoming church community.",
  tagline: "You are welcome here.",
  hymnQuote: "Discover truth. Discover Bellingham Bible Baptist Church.",
  phoneDisplay: "(508) 966-0873",
  phoneHref: "tel:+15089660873",
  email: "Pastor@BellinghamBBC.com",
  address: {
    street: "365 Hartford Ave.",
    city: "Bellingham",
    region: "MA",
    postalCode: "02019",
    country: "US",
  },
} as const;

export const givingDetails = {
  title: "Give to Bellingham Bible Baptist Church",
  description:
    "Support the ongoing ministry of BBBC through online giving or by giving in person during a service.",
  fallbackUrl: "https://bellinghambbc.churchcenter.com/giving",
};

export function canonical(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function buildMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = canonical(path);

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
