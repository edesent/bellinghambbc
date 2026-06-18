import type { ReactNode } from "react";
import { getLiveStatus } from "@/lib/live";

interface LiveSectionProps {
  channelId: string;
  title?: string;
  description?: string;
  iframeTitle?: string;
  offline?: ReactNode;
}

export default async function LiveSection({
  channelId,
  title = "We are streaming right now",
  description = "Grab a Bible and join the service in progress.",
  iframeTitle = "Live stream",
  offline = null,
}: LiveSectionProps) {
  const { isLive, videoId } = await getLiveStatus(channelId);

  if (!isLive || !videoId) {
    return <>{offline}</>;
  }

  return (
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
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76">
          {description}
        </p>
        <div className="mt-10 aspect-video overflow-hidden rounded-lg bg-black shadow-2xl">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={iframeTitle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
      </div>
    </section>
  );
}
