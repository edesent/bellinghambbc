import type { Metadata } from "next";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import { buildMetadata, missionHighlights } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Events",
  description: "Events and church life at Bellingham Bible Baptist Church.",
  path: "/events",
});

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <PageHero
        eyebrow="Events"
        title="Connect and be encouraged by God's people."
        description="We exist to pursue Jesus, unite the church, and reach the world with the gospel."
      />
      <main className="bg-white">
        <section className="section-pad">
          <div className="mx-auto grid max-w-6xl gap-5 px-5 sm:px-6 md:grid-cols-3 lg:px-8">
            {missionHighlights.slice(0, 3).map((item) => (
              <article key={item} className="rounded-lg border border-slate-soft bg-white-soft p-7">
                <h2 className="display-serif text-3xl text-ink">{item}</h2>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Events />
      <Footer />
    </>
  );
}
