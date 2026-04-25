import Link from "next/link";
import { Icon } from "@/components/Icons";
import { aboutCards } from "@/lib/site";

export default function About() {
  return (
    <section id="about" className="section-pad bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Discover Bellingham</p>
          <h2 className="mt-4 display-serif text-4xl leading-tight text-ink sm:text-5xl">
            A church concerned about your spiritual health.
          </h2>
          <p className="mt-5 text-lg leading-8 text-text-light">
            We preach Christ, care for families, and want every visitor to see
            how the Word of God speaks to ordinary life.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {aboutCards.map((card) => (
            <article key={card.title} className="rounded-lg border border-slate-soft bg-white-soft p-7">
              <h3 className="display-serif text-3xl leading-tight text-ink">
                {card.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-text-light">
                {card.description}
              </p>
              <Link
                href={card.href}
                className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.12em] text-burgundy transition hover:text-burgundy-dark"
              >
                Learn More
                <Icon name="arrow" className="size-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
