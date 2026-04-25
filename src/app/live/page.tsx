import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Attend Online",
  description: "Watch the Bellingham Bible Baptist Church livestream online.",
  path: "/live",
});

export default function LivePage() {
  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  );
}
