import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import PlanningCenterCalendar from "@/components/PlanningCenterCalendar";
import { Icon } from "@/components/Icons";
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
            <div className="mb-10 overflow-hidden rounded-lg border border-gold/40 bg-gold/12">
              <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="bg-ink p-8 text-white sm:p-10">
                  <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-gold-light">
                    Featured Event
                  </p>
                  <h2 className="mt-4 display-serif text-4xl leading-tight text-white sm:text-5xl">
                    Come be part of what God is doing.
                  </h2>
                  <p className="mt-5 text-base leading-7 text-white/75">
                    Join us for upcoming church events, special services, and opportunities to grow together in God&apos;s Word.
                  </p>
                </div>
                <div className="flex flex-col justify-center p-8 sm:p-10">
                  <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-burgundy">
                    See what&apos;s coming up
                  </p>
                  <p className="mt-4 text-lg leading-8 text-text-light">
                    Our live church calendar is updated through Planning Center, so you can always find the latest dates, times, and event details below.
                  </p>
                  <div className="mt-6">
                    <Link
                      href="#church-calendar"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-burgundy px-6 py-3 text-sm font-extrabold uppercase tracking-[0.12em] !text-white transition hover:bg-burgundy-light"
                    >
                      View Calendar
                      <Icon name="arrow" className="size-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div id="church-calendar">
              <PlanningCenterCalendar />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
