import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import { buildMetadata, expectationPoints } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "What to Expect",
  description:
    "What to expect when visiting Bellingham Bible Baptist Church in Bellingham, Massachusetts.",
  path: "/what-to-expect",
});

export default function WhatToExpectPage() {
  return (
    <>
      <Navbar />
      <PageHero
        eyebrow="What to Expect"
        title="A connection with God and a community that has been down this road too."
        description="Visiting a church can be intimidating. At BBBC, you can relax."
      />
      <main className="section-pad bg-white-soft">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2">
            {expectationPoints.map((point) => (
              <article key={point.title} className="rounded-lg border border-slate-soft bg-white p-7">
                <h2 className="display-serif text-4xl text-ink">{point.title}</h2>
                <p className="mt-4 text-lg leading-8 text-text-light">{point.body}</p>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
