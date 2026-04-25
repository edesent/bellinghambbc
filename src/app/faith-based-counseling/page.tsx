import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import { buildMetadata, counselingPoints, site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Faith Based Counseling",
  description:
    "Faith-based counseling and pastoral care at Bellingham Bible Baptist Church.",
  path: "/faith-based-counseling",
});

export default function CounselingPage() {
  return (
    <>
      <Navbar />
      <PageHero
        eyebrow="Counseling"
        title="Healing. Help. Hope."
        description="Compassionate support rooted in faith, Scripture, prayer, and wise pastoral care."
      />
      <main className="section-pad bg-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-lg leading-8 text-text-light">
              Life&apos;s challenges can feel overwhelming. BBBC offers a safe
              place to talk through anxiety, grief, relationship strain,
              discouragement, and spiritual questions with care shaped by faith
              in Jesus and the truth of His Word.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {counselingPoints.map((point) => (
              <article key={point} className="rounded-lg border border-slate-soft bg-white-soft p-7">
                <h2 className="display-serif text-3xl leading-tight text-ink">{point}</h2>
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-lg border border-gold/35 bg-gold/12 p-8">
            <h2 className="display-serif text-4xl text-ink">Schedule a conversation</h2>
            <p className="mt-4 text-lg leading-8 text-text-light">
              Call the church or use the visit form to begin. You do not have
              to face the burden alone.
            </p>
            <a
              href={site.phoneHref}
              className="mt-6 inline-flex rounded-lg bg-ink px-6 py-3 text-sm font-extrabold uppercase tracking-[0.12em] text-white"
            >
              Call {site.phoneDisplay}
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
