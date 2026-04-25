"use client";

import { useMemo, useState } from "react";
import { Icon } from "@/components/Icons";
import type { MessageItem } from "@/lib/messages";

export default function MessagesLibrary({
  messages,
}: {
  messages: MessageItem[];
}) {
  const [activeId, setActiveId] = useState<string | null>(null);

  const activeMessage = useMemo(
    () => messages.find((message) => message.id === activeId) || null,
    [activeId, messages]
  );

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {messages.map((message) => (
          <button
            key={message.id}
            type="button"
            onClick={() => setActiveId(message.id)}
            className="group overflow-hidden rounded-[1.8rem] border border-sand-dark bg-white text-left shadow-[0_24px_80px_rgba(31,42,34,0.07)] transition hover:-translate-y-1"
          >
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={message.thumbnail}
                alt={message.title}
                className="aspect-[16/10] w-full object-cover"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <span className="absolute right-4 bottom-4 inline-flex size-12 items-center justify-center rounded-full bg-white/92 text-ink shadow-lg transition group-hover:scale-105">
                <Icon name="play" className="size-5" />
              </span>
            </div>
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-clay">
                {message.published}
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-tight text-ink">
                {message.title}
              </h2>
              <p className="mt-3 line-clamp-3 text-sm leading-7 text-text-light">
                {message.description || "Recent message from the church's official YouTube channel."}
              </p>
            </div>
          </button>
        ))}
      </div>

      {activeMessage ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/88 p-4">
          <button
            type="button"
            onClick={() => setActiveId(null)}
            className="absolute top-4 right-4 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Close
          </button>
          <div className="w-full max-w-6xl overflow-hidden rounded-[2rem] bg-black shadow-2xl">
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${activeMessage.id}?autoplay=1`}
                title={activeMessage.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
