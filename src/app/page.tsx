import About from "@/components/About";
import Contact from "@/components/Contact";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Ministries from "@/components/Ministries";
import Navbar from "@/components/Navbar";
import ScriptureBanner from "@/components/ScriptureBanner";
import Services from "@/components/Services";
import StillThatChurch from "@/components/StillThatChurch";
import Welcome from "@/components/Welcome";
import { canonical, serviceTimes, site } from "@/lib/site";

const churchSchema = {
  "@context": "https://schema.org",
  "@type": "Church",
  "@id": canonical("/#church"),
  name: site.name,
  alternateName: [site.shortName, "Bellingham Baptist Church"],
  url: canonical("/"),
  description: site.description,
  telephone: "+1-508-966-0873",
  email: site.email,
  image: canonical("/bbbc/red-logo.png"),
  logo: canonical("/bbbc/red-logo.png"),
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.geo.latitude,
    longitude: site.geo.longitude,
  },
  areaServed: [
    { "@type": "City", name: "Bellingham" },
    { "@type": "AdministrativeArea", name: site.geo.county },
    { "@type": "State", name: "Massachusetts" },
  ],
  hasMap: site.directionsUrl,
  sameAs: [site.social.facebook, site.social.youtube, site.social.website],
  openingHoursSpecification: serviceTimes.map((service) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: service.title.includes("Prayer") || service.title.includes("Kid")
      ? "Wednesday"
      : "Sunday",
    opens: service.time.includes("10:00")
      ? "10:00"
      : service.time.includes("11:00")
        ? "11:00"
        : "18:30",
    closes: service.time.includes("10:00")
      ? "10:50"
      : service.time.includes("11:00")
        ? "12:15"
        : "19:45",
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": canonical("/#faq"),
  mainEntity: [
    {
      "@type": "Question",
      name: "Where is Bellingham Bible Baptist Church located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `${site.name} is located at ${site.address.street} ${site.address.city}, ${site.address.region} ${site.address.postalCode}.`,
      },
    },
    {
      "@type": "Question",
      name: "What time are services at Bellingham Bible Baptist Church?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sunday School meets at 10:00 AM, Sunday worship meets at 11:00 AM, and Wednesday prayer service and Kid's Club meet at 6:30 PM.",
      },
    },
    {
      "@type": "Question",
      name: "Is Bellingham Bible Baptist Church family friendly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Bellingham Bible Baptist Church offers nursery care, children's ministries, Sunday School, and a welcoming church environment for families.",
      },
    },
    {
      "@type": "Question",
      name: "Can I watch services online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sunday worship and midweek services are available online for those who cannot attend in person.",
      },
    },
  ],
};

const aiSearchSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": canonical("/#website"),
  name: site.name,
  alternateName: [site.shortName, "Bellingham Baptist Church"],
  url: canonical("/"),
  description: site.description,
  inLanguage: "en-US",
  publisher: {
    "@id": canonical("/#church"),
  },
  about: {
    "@id": canonical("/#church"),
  },
};

const structuredData = [churchSchema, faqSchema, aiSearchSchema];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <Hero />
      <Welcome />
      <Services />
      <About />
      <StillThatChurch />
      <Ministries />
      <ScriptureBanner />
      <Events />
      <Contact />
      <Footer />
    </>
  );
}
