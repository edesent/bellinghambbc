import Link from "next/link";
import { Icon } from "@/components/Icons";
import { serviceTimes, site } from "@/lib/site";

export default function Services() {
  return (
    <section id="service-times" className="section-pad bg-slate-soft">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow">Service Times</p>
            <h2 className="mt-4 display-serif text-4xl leading-tight text-ink sm:text-5xl">
              A weekly rhythm for the whole family.
            </h2>
          </div>
          <p className="text-lg leading-8 text-text-light">
            Sunday classes, worship, midweek prayer, and Kid&apos;s Club make it
            simple to take the next step in person or online.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-ink/10 bg-ink/10 md:grid-cols-2 xl:grid-cols-4">
          {serviceTimes.map((service) => (
            <article key={service.title} className="bg-white p-7">
              <span className="inline-flex size-12 items-center justify-center rounded-lg bg-burgundy/10 text-burgundy">
                <Icon name={service.icon} className="size-6" />
              </span>
              <h3 className="mt-6 display-serif text-3xl text-ink">
                {service.title}
              </h3>
              <p className="mt-3 text-sm font-extrabold uppercase tracking-[0.16em] text-burgundy">
                {service.time}
              </p>
              <p className="mt-4 text-base leading-7 text-text-light">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col justify-between gap-4 border-l-4 border-gold bg-white p-6 sm:flex-row sm:items-center">
          <p className="text-sm leading-7 text-text-light">{site.serviceTimesNote}</p>
          <Link
            href="/live"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-extrabold uppercase tracking-[0.12em] !text-white"
          >
            Watch Live
            <Icon name="play" className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
