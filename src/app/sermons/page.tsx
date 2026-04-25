import type { Metadata } from "next";
import Footer from "@/components/Footer";
import MessagesLibrary from "@/components/MessagesLibrary";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import { getMessages } from "@/lib/messages";
import { buildMetadata, site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Sermons",
  description:
    "Watch recently streamed messages from Bellingham Bible Baptist Church.",
  path: "/sermons",
});

export default async function SermonsPage() {
  const messages = await getMessages(12);

  return (
    <>
      <Navbar />
      <PageHero
        eyebrow="Sermons"
        title="Most recently streamed messages"
        description="Recent services and sermons from Bellingham Bible Baptist Church."
      />
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
