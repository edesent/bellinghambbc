import type { Metadata } from "next";
import Footer from "@/components/Footer";
import LiveSection from "@/components/LiveSection";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Attend Online",
  description: "Watch the Bellingham Bible Baptist Church livestream online.",
  path: "/live",
});

export const revalidate = 30;

export default function LivePage() {
  return (
    <>
      <Navbar />
      <LiveSection
        channelId="UCgZhLi5jHOWD3j9dhY24S-g"
        iframeTitle="Bellingham Bible Baptist Church livestream"
        offline={
          <>
            <PageHero
              eyebrow="Attend Online"
              title="Bellingham BBC livestream"
              description="Grab a Bible and join us online when the livestream begins."
            />
            <main className="section-pad bg-white">
              <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
                <div className="rounded-lg border border-slate-soft bg-white-soft p-10 text-center">
                  <h2 className="display-serif text-4xl text-ink">Sunday at 11:00 AM</h2>
                  <p className="mt-4 text-lg leading-8 text-text-light">
                    The livestream is not currently active. Join us live on
                    Sunday at 11:00 AM, or visit the sermons page for the
                    most recent streamed messages.
                  </p>
                  <a
                    href="/sermons"
                    className="mt-6 inline-flex rounded-lg border border-ink bg-white px-6 py-3 text-sm font-extrabold uppercase tracking-[0.12em] text-ink transition hover:bg-ink hover:text-white"
                  >
                    Watch Recent Sermons
                  </a>
                </div>
              </div>
            </main>
          </>
        }
      />
      <Footer />
    </>
  );
}
