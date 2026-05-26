import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import { getLiveStatus } from "@/lib/live";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Attend Online",
  description: "Watch the Bellingham Bible Baptist Church livestream online.",
  path: "/live",
});

export const revalidate = 10;

export default async function LivePage() {
  const { isLive, videoId } = await getLiveStatus();
  const showLiveHero = isLive && videoId;

  return (
    <>
      <Navbar />
      {showLiveHero ? (
        <section className="relative overflow-hidden bg-ink text-white">
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(143,29,44,0.44),rgba(20,32,51,0)_52%),linear-gradient(180deg,rgba(20,32,51,0.9),rgba(20,32,51,1))]" />
          <div className="relative mx-auto max-w-7xl px-5 pt-32 pb-14 sm:px-6 lg:px-8 lg:pt-40 lg:pb-20">
            <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-gold-light">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
              </span>
              Live Now
            </p>
            <h1 className="mt-5 max-w-4xl display-serif text-5xl leading-[0.98] sm:text-6xl lg:text-7xl">
              We are streaming right now
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76">
              Grab a Bible and join the service in progress.
            </p>
            <div className="mt-10 aspect-video overflow-hidden rounded-lg bg-black shadow-2xl">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="Bellingham Bible Baptist Church livestream"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
        </section>
      ) : (
        <>
          <PageHero
            eyebrow="Attend Online"
            title="Bellingham BBC livestream"
            description="Grab a Bible and join us online when the livestream begins."
          />
          <main className="section-pad bg-white">
            <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
              <div className="aspect-video overflow-hidden rounded-lg bg-ink">
                <iframe
                  src="https://www.youtube.com/embed/live_stream?channel=UCgZhLi5jHOWD3j9dhY24S-g"
                  title="Bellingham Bible Baptist Church livestream"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
              <div className="mt-8 rounded-lg border border-slate-soft bg-white-soft p-7">
                <h2 className="display-serif text-4xl text-ink">Sunday at 11:00 AM</h2>
                <p className="mt-4 text-lg leading-8 text-text-light">
                  We are glad you are here. If the church is not live at this
                  moment, visit the sermons page for the most recent streamed
                  messages.
                </p>
              </div>
            </div>
          </main>
        </>
      )}
      <Footer />
    </>
  );
}
