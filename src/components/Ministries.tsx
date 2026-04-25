import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import { kidsPhotos, ministryCards } from "@/lib/site";

export default function Ministries() {
  return (
    <section id="ministries" className="section-pad bg-parchment">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow">Connect</p>
            <h2 className="mt-4 display-serif text-4xl leading-tight text-ink sm:text-5xl">
              Ministry that feels personal, practical, and alive.
            </h2>
          </div>
          <p className="text-lg leading-8 text-text-light">
            From nursery to counseling to livestream, the goal is simple: help
            people discover Jesus and grow in a real church family.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {ministryCards.map((ministry) => (
            <article key={ministry.title} className="rounded-lg border border-ink/10 bg-white p-7">
              <span className="inline-flex size-12 items-center justify-center rounded-lg bg-sky/12 text-sky">
                <Icon name={ministry.icon} className="size-6" />
              </span>
              <h3 className="mt-5 display-serif text-3xl text-ink">
                {ministry.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-text-light">
                {ministry.description}
              </p>
            </article>
          ))}
        </div>

        <div id="kids" className="mt-16 scroll-mt-28 bg-ink text-white">
          <div className="grid lg:grid-cols-[0.88fr_1.12fr]">
            <div className="p-8 sm:p-10 lg:p-12">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-gold-light">
                BBC Kids
              </p>
              <h3 className="mt-4 display-serif text-4xl leading-tight sm:text-5xl">
                Safe, warm, Bible-centered program for children.
              </h3>
              <p className="mt-5 text-lg leading-8 text-white/76">
                Kids enjoy Sunday School at 10:00 AM and Junior Church at 11:00
                AM. Junior Church usually includes a Bible lesson, craft, snack,
                and prayer time.
              </p>
              <div className="mt-8 grid gap-3 text-sm text-white/78 sm:grid-cols-2">
                <p className="border border-white/12 p-4">Secure check-in</p>
                <p className="border border-white/12 p-4">Background-checked team</p>
                <p className="border border-white/12 p-4">Sunday classes</p>
                <p className="border border-white/12 p-4">Wednesday Kid&apos;s Club</p>
              </div>
              <Link
                href="/what-to-expect"
                className="mt-8 inline-flex rounded-lg bg-gold px-6 py-3 text-sm font-extrabold uppercase tracking-[0.12em] text-ink"
              >
                Plan a Family Visit
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-px bg-white/12 sm:grid-cols-4 lg:grid-cols-2">
              {kidsPhotos.slice(0, 6).map((photo, index) => (
                <div key={photo} className="relative aspect-[4/3] bg-ink">
                  <Image
                    src={photo}
                    alt={`BBC Kids ministry photo ${index + 1}`}
                    fill
                    sizes="(min-width: 1024px) 28vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
