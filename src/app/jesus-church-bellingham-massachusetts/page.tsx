import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import { buildMetadata, jesusSections } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Jesus",
  description:
    "Discovering Jesus means finding answers about forgiveness, salvation, and eternal life.",
  path: "/jesus-church-bellingham-massachusetts",
});

export default function JesusPage() {
  return (
    <>
      <Navbar />
      <PageHero
        eyebrow="Jesus"
        title="Discovering Jesus means finding answers."
        description="He is more than a man. He died for you, rose again, and can save you now."
      />
      <main className="section-pad bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid max-w-5xl gap-5">
            {jesusSections.map((section) => (
              <article key={section.title} className="rounded-lg border border-slate-soft bg-white-soft p-8">
                <h2 className="display-serif text-4xl text-ink">{section.title}</h2>
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
