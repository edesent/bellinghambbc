import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import { buildMetadata, missionaryGroups } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Missionaries",
  description:
    "Missionary support and prayer updates at Bellingham Bible Baptist Church.",
  path: "/missionaries",
});

export default function MissionariesPage() {
  return (
    <>
      <Navbar />
      <PageHero
        eyebrow="Missionaries"
        title="Reaching the world with the gospel"
        description="A missions page ready for supported families, prayer letters, and field updates."
      />
      <main className="section-pad bg-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          {missionaryGroups.map((group) => (
            <section key={group.country}>
              <h2 className="display-serif text-4xl text-ink">{group.country}</h2>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {group.families.map((family) => (
                  <article key={family.name} className="rounded-lg border border-slate-soft bg-white-soft p-7">
                    <h3 className="display-serif text-3xl text-ink">{family.name}</h3>
                    <p className="mt-4 text-base leading-7 text-text-light">
                      {family.summary}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
