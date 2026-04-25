import Link from "next/link";

const steps = [
  "Meet with our pastor to talk through spiritual questions.",
  "Visit a Sunday service and see the church family in person.",
  "Find a class, ministry, or next step for your family.",
];

export default function StillThatChurch() {
  return (
    <section className="bg-ink py-18 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:px-8">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-gold-light">
            Take the Next Step
          </p>
          <h2 className="mt-4 display-serif text-4xl leading-tight sm:text-5xl">
            Ready for a real conversation?
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/72">
            Meet with the pastor and see how BBBC can help you in your spiritual
            walk.
          </p>
        </div>
        <div className="grid gap-px overflow-hidden rounded-lg border border-white/12 bg-white/12 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step} className="bg-white/6 p-6">
              <p className="text-sm font-extrabold text-gold-light">
                0{index + 1}
              </p>
              <p className="mt-4 text-base leading-7 text-white/76">{step}</p>
            </div>
          ))}
        </div>
        <Link
          href="/coffee-with-pastor"
          className="rounded-lg bg-gold px-6 py-3 text-center text-sm font-extrabold uppercase tracking-[0.12em] text-ink lg:col-start-2 lg:w-fit"
        >
          Have Coffee With Pastor
        </Link>
      </div>
    </section>
  );
}
