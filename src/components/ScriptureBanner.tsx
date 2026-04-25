import { site } from "@/lib/site";

export default function ScriptureBanner() {
  return (
    <section className="bg-burgundy py-18 text-center text-white">
      <div className="mx-auto max-w-4xl px-5 sm:px-6">
        <p className="display-serif text-4xl leading-tight italic sm:text-5xl">
          &ldquo;{site.verse.text}&rdquo;
        </p>
        <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.2em] text-gold-light">
          {site.verse.reference}
        </p>
      </div>
    </section>
  );
}
