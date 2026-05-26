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
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:px-8">
          <div className="relative overflow-hidden rounded-xl border border-slate-soft bg-parchment shadow-lg">
            <Image
              src="/bbbc/IMG_6839.jpeg"
              alt="Pastor Michael Carrier"
              width={900}
              height={1200}
              className="h-full w-full object-cover"
              priority
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