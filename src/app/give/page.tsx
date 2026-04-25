import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import { buildMetadata, givingDetails, givingEmbedUrl, site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Give",
  description:
    "Support the ongoing ministry of Bellingham Bible Baptist Church.",
  path: "/give",
});

export default function GivePage() {
  const canEmbed = Boolean(givingEmbedUrl);

  return (
    <>
      <Navbar />
      <PageHero
        eyebrow="Give"
        title="Support the ministry"
        description="Thank you for giving toward the gospel work of Bellingham Bible Baptist Church."
      />
      <main className="section-pad bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="overflow-hidden rounded-lg border border-slate-soft bg-white-soft">
            {canEmbed ? (
              <iframe src={givingEmbedUrl} title="Online giving" className="h-[760px] w-full" />
            ) : (
              <div className="flex min-h-[420px] flex-col items-center justify-center px-8 text-center">
                <h2 className="display-serif text-4xl text-ink">Online giving ready to connect</h2>
                <p className="mt-4 max-w-xl text-lg leading-8 text-text-light">
                  Add `NEXT_PUBLIC_GIVING_EMBED_URL` to embed the church&apos;s
                  giving provider here.
                </p>
                <a
                  href={givingDetails.fallbackUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex rounded-lg bg-ink px-6 py-3 text-sm font-extrabold uppercase tracking-[0.12em] text-white"
                >
                  Open Current Giving Page
                </a>
              </div>
            )}
          </div>
          <div className="space-y-5">
            <div className="rounded-lg border border-slate-soft bg-white-soft p-8">
              <h2 className="display-serif text-4xl text-ink">{givingDetails.title}</h2>
              <p className="mt-4 text-lg leading-8 text-text-light">
                {givingDetails.description}
              </p>
            </div>
            <div className="rounded-lg border border-gold/35 bg-gold/12 p-8">
              <h2 className="display-serif text-4xl text-ink">Other ways to give</h2>
              <p className="mt-4 text-lg leading-8 text-text-light">
                Gifts can also be made in person during services or by
                contacting the church.
              </p>
              <a
                href={site.phoneHref}
                className="mt-5 inline-flex rounded-lg bg-white px-5 py-3 text-sm font-bold text-ink"
              >
                Call {site.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
