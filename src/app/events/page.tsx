import type { Metadata } from "next";
import Image from "next/image";
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
            {/* Main Featured Event */}
            <div className="mb-10">
              <div className="mb-6 text-center">
                <p className="eyebrow">Featured Event</p>
                <h2 className="mt-4 display-serif text-4xl leading-tight text-ink sm:text-5xl">
                  Come and Join Us This Month
                </h2>
              </div>
              <Image
                src="/bbbc/Mother%20Day.Final.png"
                alt="Mother's Day at Bellingham Bible Baptist Church"
                width={1600}
                height={600}
                className="w-full rounded-lg shadow-lg"
                priority
              />
            </div>

            <PlanningCenterCalendar />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
