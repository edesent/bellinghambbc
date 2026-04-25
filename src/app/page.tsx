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
  name: site.name,
  url: canonical("/"),
  description: site.description,
  telephone: "+1-508-966-0873",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
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

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(churchSchema).replace(/</g, "\\u003c"),
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
