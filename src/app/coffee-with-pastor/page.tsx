import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import { buildMetadata, site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Coffee With Pastor",
  description:
    "Schedule a conversation with the pastor at Bellingham Bible Baptist Church.",
  path: "/coffee-with-pastor",
});

export default function CoffeeWithPastorPage() {
  return (
    <>
      <Navbar />
      <PageHero
        eyebrow="Coffee With Pastor"
        title="Have questions? Let's talk."
        description="Meet with our pastor to see how we can help you in your spiritual walk."
      />
      <main className="section-pad bg-white">
        <div className="mx-auto max-w-4xl rounded-lg border border-slate-soft bg-white-soft p-8 px-5 sm:px-10 lg:px-12">
          <h2 className="display-serif text-4xl text-ink">Start with a simple conversation.</h2>
          <p className="mt-5 text-lg leading-8 text-text-light">
            Whether you are new to church, exploring faith, or looking for a
            church home, Pastor Carrier would be glad to meet you.
          </p>
          <a
            href={`mailto:${site.email}?subject=${encodeURIComponent("Coffee with Pastor")}`}
            className="mt-7 inline-flex rounded-lg bg-burgundy px-6 py-3 text-sm font-extrabold uppercase tracking-[0.12em] text-white"
          >
            Email {site.pastor}
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
