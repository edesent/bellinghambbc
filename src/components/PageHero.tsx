import Link from "next/link";

export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(143,29,44,0.44),rgba(20,32,51,0)_52%),linear-gradient(180deg,rgba(20,32,51,0.9),rgba(20,32,51,1))]" />
      <div className="relative mx-auto max-w-7xl px-5 pt-32 pb-18 sm:px-6 lg:px-8 lg:pt-40 lg:pb-24">
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-gold-light">
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-4xl display-serif text-5xl leading-[0.98] sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76">
          {description}
        </p>
        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          <Link
            href="/#plan-your-visit"
            className="rounded-lg bg-gold px-5 py-3 font-extrabold uppercase tracking-[0.12em] text-ink transition hover:bg-gold-light"
          >
            Plan Your Visit
          </Link>
          <Link
            href="/"
            className="rounded-lg border border-white/18 px-5 py-3 font-bold text-white/82 transition hover:bg-white/10"
          >
            Home
          </Link>
        </div>
      </div>
    </section>
  );
}
