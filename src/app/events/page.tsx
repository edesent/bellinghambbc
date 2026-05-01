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
              <Image
                src="/bbbc/mothers-day-2026.png"
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
