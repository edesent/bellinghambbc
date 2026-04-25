import Link from "next/link";
import { getEvents } from "@/lib/events";

export default async function Events() {
  const events = await getEvents();

  return (
    <section id="events" className="section-pad bg-white-soft">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Events</p>
          <h2 className="mt-4 display-serif text-4xl leading-tight text-ink sm:text-5xl">
            Pursue Jesus. Unite the church. Reach the world.
          </h2>
          <p className="mt-5 text-lg leading-8 text-text-light">
            Connect and be encouraged by God&apos;s people through the weekly
            life and special events of BBBC.
          </p>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {events.map((event) => (
            <article
              key={`${event.title}-${event.time}`}
              className={`rounded-lg border p-7 ${
                event.accent
                  ? "border-gold/45 bg-gold/14"
                  : "border-slate-soft bg-white"
              }`}
            >
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-burgundy">
                {event.month} · {event.day} · {event.label}
              </p>
              <h3 className="mt-4 display-serif text-3xl text-ink">
                {event.title}
              </h3>
              <p className="mt-3 text-sm font-extrabold uppercase tracking-[0.14em] text-burgundy">
                {event.time}
              </p>
              <p className="mt-4 text-base leading-7 text-text-light">
                {event.description}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/events"
            className="inline-flex rounded-lg border border-ink/15 px-6 py-3 text-sm font-extrabold uppercase tracking-[0.12em] text-ink transition hover:bg-white"
          >
            Event Details
          </Link>
        </div>
      </div>
    </section>
  );
}
