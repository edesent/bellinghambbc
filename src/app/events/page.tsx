import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import PlanningCenterCalendar from "@/components/PlanningCenterCalendar";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Events",
  description: "Upcoming events at Bellingham Bible Baptist Church.",
  path: "/events",
});

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <PageHero
        eyebrow="Events"
        title="Stay connected with what God is doing."
        description="View upcoming services, activities, and church events."
      />
      <main className="bg-white">
        <section className="section-pad">
          <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
            <div className="mb-10">
              <div className="mb-6 text-center">
                <p className="eyebrow">Featured Event</p>
                <h2 className="mt-4 display-serif text-4xl leading-tight text-ink sm:text-5xl">
                  Come and Join Us This Month
                </h2>
              </div>
              <div
                role="img"
                aria-label="Hope For All Nations MC featured event at Bellingham Bible Baptist Church"
                className="w-full rounded-lg bg-cover bg-center shadow-lg"
                style={{
                  aspectRatio: "1200 / 630",
                  backgroundImage: "url('/bbbc/Hope%20For%20All%20Nations%20MC.png')",
                }}
              />
              <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-lg border border-ink/10 bg-cream px-5 py-4 sm:flex-row sm:items-center sm:px-6">
                <div>
                  <p className="eyebrow">September 26, 2026 | 11:00 AM-3:00 PM</p>
                  <h3 className="mt-2 display-serif text-2xl text-ink sm:text-3xl">
                    Harvest Fest 2026
                  </h3>
                  <p className="mt-1 text-sm text-text-light">
                    View the event flyer for details and the rain date.
                  </p>
                </div>
                <a
                  href="/bbbc/Harvest_Fest_2026_with_Rain_Date.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex shrink-0 items-center rounded-full bg-burgundy px-5 py-3 text-sm font-bold text-white transition hover:bg-burgundy-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  View event flyer
                </a>
              </div>
            </div>

            <PlanningCenterCalendar />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}