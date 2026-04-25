import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import { buildMetadata, pastorBio, site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: `Our Pastor | ${site.pastor}`,
  description:
    "Learn more about Dr. Michael Carrier, pastor of Bellingham Bible Baptist Church.",
  path: "/our-pastor",
});

export default function PastorPage() {
  return (
    <>
      <Navbar />
      <PageHero
        eyebrow="Our Pastor"
        title={`Meet ${site.pastor}`}
        description="Pastoral leadership rooted in biblical conviction, family discipleship, and gospel outreach in Bellingham."
      />
      <main className="section-pad bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div className="relative overflow-hidden rounded-lg border border-slate-soft bg-parchment">
            <Image
              src="/bbbc/Pastor-2.jpg"
              alt="Pastor and family"
              width={838}
              height={560}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">Pastor Bio</p>
            <h2 className="mt-4 display-serif text-5xl leading-tight text-ink">
              Proclaiming Scripture and helping families follow Christ.
            </h2>
            <p className="mt-6 text-lg leading-8 text-text-light">
              {pastorBio.intro}
            </p>
            {pastorBio.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-5 text-lg leading-8 text-text-light">
                {paragraph}
              </p>
            ))}
            <blockquote className="mt-8 border-l-4 border-gold bg-parchment px-6 py-5 display-serif text-3xl leading-tight text-ink">
              &ldquo;{pastorBio.quote}&rdquo;
            </blockquote>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
