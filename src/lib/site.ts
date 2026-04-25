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
  social: {
    website: "https://bellinghambbc.com/",
    facebook:
      "https://www.facebook.com/Bellingham-Bible-Baptist-Church-138182847006532",
    youtube: "https://www.youtube.com/channel/UCgZhLi5jHOWD3j9dhY24S-g",
    youtubeChannelFeed:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCgZhLi5jHOWD3j9dhY24S-g",
    biu: "https://baptistiu.com/",
  },
  verse: {
    reference: "3 John 1:2",
    text:
      "Beloved, I wish above all things that thou mayest prosper and be in health, even as thy soul prospereth.",
  },
  mapQuery: "365 Hartford Ave, Bellingham, MA 02019",
  directionsUrl: "https://goo.gl/maps/1yz6iCiFn4A9HB6TA",
  serviceTimesNote:
    "Sunday worship and Wednesday prayer service are available in person and by livestream.",
} as const;

export const localKeywords = [
  "Bellingham Bible Baptist Church",
  "Baptist church Bellingham MA",
  "Independent Baptist church Bellingham",
  "church near Bellingham Massachusetts",
  "family friendly church Bellingham",
  "Pastor Michael Carrier",
  "Bellingham BBC",
];

export const serviceTimes = [
  {
    title: "Sunday School",
    time: "Sunday at 10:00 AM",
    description: "Classes for adults, teens, and kids.",
    icon: "book",
  },
  {
    title: "Worship Service",
    time: "Sunday at 11:00 AM",
    description: "In-person worship with livestream available.",
    icon: "church",
  },
  {
    title: "Prayer Service",
    time: "Wednesday at 6:30 PM",
    description: "Midweek prayer and Bible encouragement.",
    icon: "hands",
  },
  {
    title: "Kid's Club",
    time: "Wednesday at 6:30 PM",
    description: "A midweek Bible club for children.",
    icon: "children",
  },
] as const;

export const navGroups = [
  { label: "What to Expect", href: "/what-to-expect" },
  { label: "Pastor", href: "/our-pastor" },
  { label: "Beliefs", href: "/beliefs" },
  { label: "Kids", href: "/ministries#kids" },
  { label: "Sermons", href: "/sermons" },
  { label: "Give", href: "/give" },
] as const;

export const aboutCards = [
  {
    title: "Find a place in your community.",
    description:
      "A local church family in Bellingham where visitors can relax, ask honest questions, and be known.",
    href: "/what-to-expect",
  },
  {
    title: "Find a family that encourages yours.",
    description:
      "Nursery, kids classes, teen ministry, and adult Bible study are built around care, safety, and Scripture.",
    href: "/ministries#kids",
  },
  {
    title: "Find the Word of God to build your faith.",
    description:
      "Bible preaching, plain-English teaching, and pastoral care point every generation toward Jesus Christ.",
    href: "/beliefs",
  },
] as const;

export const ministryCards = [
  {
    title: "Nursery",
    description:
      "A downstairs nursery with responsible staffing, secure check-in, and background-checked workers.",
    icon: "heart",
  },
  {
    title: "BBC Kids",
    description:
      "Sunday School, Junior Church, crafts, snacks, prayer time, and Wednesday Kid's Club.",
    icon: "children",
  },
  {
    title: "Pastoral Counseling",
    description:
      "Faith-based help for anxiety, grief, marriage strain, spiritual questions, and personal growth.",
    icon: "hands",
  },
  {
    title: "Livestream",
    description:
      "Sunday worship and midweek services are available online for those who cannot attend in person.",
    icon: "play",
  },
  {
    title: "Baptist International University",
    description:
      "A connected training ministry for biblical education and the next generation of Christian leaders.",
    icon: "book",
  },
  {
    title: "Community Outreach",
    description:
      "Church events and personal invitations help families in Bellingham hear the gospel clearly.",
    icon: "globe",
  },
] as const;

export const kidsPhotos = [
  "/bbbc/kids-1.jpg",
  "/bbbc/kids-2.jpg",
  "/bbbc/kids-3.jpg",
  "/bbbc/kids-4.jpg",
  "/bbbc/kids-5.jpg",
  "/bbbc/kids-6.jpg",
  "/bbbc/kids-7.jpg",
  "/bbbc/kids-8.jpg",
] as const;

export const expectationPoints = [
  {
    title: "Expect to belong",
    body:
      "Visiting a church can feel intimidating. At BBBC, you can relax. We are not here to evaluate you; we are glad to welcome you.",
  },
  {
    title: "Expect a real relationship",
    body:
      "We preach Jesus because He changes people. Our desire is to help you know Him personally and grow in a clear, peaceful faith.",
  },
  {
    title: "Expect plain English",
    body:
      "We worship Jesus, study the Bible, and encourage each other in terms you can connect to daily life.",
  },
  {
    title: "Expect normal people",
    body:
      "You will find imperfect, rescued followers of Jesus who are learning to walk with God together.",
  },
] as const;

export const pastorBio = {
  intro:
    "Dr. Michael Carrier became pastor of Bellingham Bible Baptist Church in July 2022 and serves with a heart for biblical preaching, family discipleship, and gospel outreach in the community.",
  paragraphs: [
    "Pastor Carrier was saved on May 12, 2013, at Historic Baptist Church. That same month, desiring to grow in God's Word and prepare for ministry, he enrolled at Baptist International University.",
    "In November 2013 he married his wife, Elesha. The Lord has blessed them with four children: Charity, Levi, Bethany, and Phoebe.",
    "He has completed a B.A. in Theology, a Master of Divinity, and a Ph.D. from Baptist International University. He also serves as Vice President and Dean of the English Division at BIU.",
    "His burden is to proclaim the truth of Scripture and see lives transformed for the glory of God.",
  ],
  quote:
    "We want to help people discover Jesus, grow in the Word, and take the next faithful step.",
};

export const beliefSections = [
  {
    title: "The Scriptures",
    body:
      "We believe the Holy Bible is the inspired, preserved, complete, and final revelation of God to man and the supreme standard for faith and practice.",
  },
  {
    title: "The Godhead",
    body:
      "We believe there is one living and true God, eternally existing as Father, Son, and Holy Ghost, equal in divine perfection and harmonious in redemption.",
  },
  {
    title: "Jesus Christ",
    body:
      "We believe Jesus Christ is the eternal Son of God, virgin born, sinless, crucified for our sins, bodily risen, ascended, and interceding for believers.",
  },
  {
    title: "Salvation",
    body:
      "We believe salvation is the gift of God, received by personal faith in the Lord Jesus Christ, whose blood was shed for the forgiveness of sins.",
  },
  {
    title: "The Church",
    body:
      "We believe the local church is made up of born-again believers and is responsible for worship, baptism, the Lord's Supper, discipleship, and gospel witness.",
  },
  {
    title: "Missions",
    body:
      "We believe Christ gave the church a great commission to proclaim the gospel to all nations and to use available means to reach the world.",
  },
] as const;

export const jesusSections = [
  {
    title: "He is more than just a man.",
    body:
      "Jesus said He was God and proved it by His life, His words, His deeds, and His perfect love.",
  },
  {
    title: "He died for you.",
    body:
      "Our sin separates us from God, but Jesus died in our place so we could be forgiven, pardoned, and accepted by grace.",
  },
  {
    title: "He came to save you.",
    body:
      "An eternal home in Heaven and a personal relationship with God can only be received, never achieved.",
  },
  {
    title: "He can save you right now.",
    body:
      "The Bible says, 'For whosoever shall call upon the name of the Lord shall be saved.'",
  },
] as const;

export const counselingPoints = [
  "A compassionate, nonjudgmental place to be heard.",
  "Biblical guidance for anxiety, grief, relationships, discouragement, and spiritual questions.",
  "Prayer, Scripture, and practical counsel shaped around your situation.",
  "A simple first step: contact the church or schedule coffee with the pastor.",
] as const;

export const missionHighlights = [
  "Pursue Jesus in a deeply personal relationship.",
  "Unite the church with the mind of Christ.",
  "Reach the world with the gospel.",
  "Encourage families to grow and serve in the local church.",
] as const;

export const missionaryGroups = [
  {
    country: "Bellingham and Beyond",
    families: [
      {
        name: "Mission support details coming soon",
        summary:
          "This page is ready for BBBC's missionary families, prayer letters, and field updates.",
      },
    ],
  },
] as const;

export const givingDetails = {
  title: "Give to Bellingham Bible Baptist Church",
  description:
    "Support the ongoing ministry of BBBC through online giving or by giving in person during a service.",
  fallbackUrl: "https://bellinghambbc.com/give/",
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
      images: [canonical("/opengraph-image")],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [canonical("/twitter-image")],
    },
  };
}
