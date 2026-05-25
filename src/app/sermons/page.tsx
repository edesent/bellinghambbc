import type { Metadata } from "next";
import Footer from "@/components/Footer";
import MessagesLibrary from "@/components/MessagesLibrary";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import { getLiveStatus } from "@/lib/live";
import { getMessages } from "@/lib/messages";
import { buildMetadata, site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Sermons",
  description:
    "Watch recently streamed messages from Bellingham Bible Baptist Church.",
  path: "/sermons",
});

export default async function SermonsPage() {
  const [messages, live] = await Promise.all([
    getMessages(12),
    getLiveStatus(),
  ]);

  const showLiveHero = live.isLive && live.videoId;

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
              Join the service in progress. Recently streamed messages are
              available below.
            </p>
            <div className="mt-10 aspect-video overflow-hidden rounded-lg bg-black shadow-2xl">
              <iframe
                src={`https://www.youtube.com/embed/${live.videoId}?autoplay=1`}
                title="Bellingham Bible Baptist Church livestream"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
        </section>
      ) : (
        <PageHero
          eyebrow="Sermons"
          title="Most recently streamed messages"
          description="Recent services and sermons from Bellingham Bible Baptist Church."
        />
      )}
      <main className="section-pad bg-white-soft">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          {messages.length > 0 ? (
            <MessagesLibrary messages={messages} />
          ) : (
            <div className="rounded-lg border border-slate-soft bg-white p-10 text-center">
              <h2 className="display-serif text-4xl text-ink">Messages are loading soon</h2>
              <p className="mt-4 text-lg leading-8 text-text-light">
                If the feed is temporarily unavailable, you can still watch
                directly on the church&apos;s YouTube channel.
              </p>
              <a
                href={site.social.youtube}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex rounded-lg bg-ink px-6 py-3 text-sm font-extrabold uppercase tracking-[0.12em] text-white"
              >
                Open YouTube Channel
              </a>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
