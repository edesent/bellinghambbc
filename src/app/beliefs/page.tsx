import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import { beliefSections, buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Beliefs",
  description:
    "A concise overview of the doctrinal convictions of Bellingham Bible Baptist Church.",
  path: "/beliefs",
});

export default function BeliefsPage() {
  return (
    <>
      <Navbar />
      <PageHero
        eyebrow="Our Beliefs"
        title="Statement of faith"
        description="The convictions that shape our preaching, worship, discipleship, and church life."
      />
      <main className="section-pad bg-white-soft">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-5">
            {beliefSections.map((section) => (
              <article key={section.title} className="rounded-lg border border-slate-soft bg-white p-7">
                <p className="eyebrow">Doctrine</p>
                <h2 className="mt-3 display-serif text-4xl text-ink">
                  {section.title}
                </h2>
                <p className="mt-4 text-lg leading-8 text-text-light">
                  {section.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
