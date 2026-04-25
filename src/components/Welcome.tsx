import Image from "next/image";
import Link from "next/link";
import { pastorBio, site } from "@/lib/site";

export default function Welcome() {
  return (
    <section id="welcome" className="section-pad bg-white-soft">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
        <div className="grid grid-cols-2 gap-3">
          <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-lg border border-slate-soft">
            <Image
              src="/bbbc/kids-5.jpg"
              alt="Church family at Bellingham Bible Baptist Church"
              fill
              sizes="(min-width: 1024px) 44vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-slate-soft">
            <Image
              src="/bbbc/kids-2.jpg"
              alt="Children's ministry at BBBC"
              fill
              sizes="(min-width: 1024px) 22vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-slate-soft">
            <Image
              src="/bbbc/kids-7.jpg"
              alt="Church fellowship at BBBC"
              fill
              sizes="(min-width: 1024px) 22vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <p className="eyebrow">You are welcome here</p>
          <h2 className="mt-4 display-serif text-4xl leading-tight text-ink sm:text-5xl">
            Find a church family that helps yours follow Jesus.
          </h2>
          <p className="mt-5 text-lg leading-8 text-text-light">
            Bellingham Bible Baptist Church is a family-oriented congregation of
            people just like you. We love our community and want to share the
            good news of the gospel with clarity, warmth, and conviction.
          </p>
          <p className="mt-5 text-lg leading-8 text-text-light">
            {pastorBio.intro}
          </p>
          <blockquote className="mt-8 border-l-4 border-gold bg-parchment px-6 py-5 display-serif text-2xl leading-9 text-ink">
            &ldquo;Find a place in your community. Find a family that encourages
            yours. Find the Word of God to build your faith.&rdquo;
          </blockquote>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/our-pastor"
              className="rounded-lg bg-ink px-6 py-3 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-ink-soft"
            >
              Meet {site.pastor}
            </Link>
            <Link
              href="/what-to-expect"
              className="rounded-lg border border-ink/15 px-6 py-3 text-sm font-extrabold uppercase tracking-[0.12em] text-ink transition hover:bg-slate-soft"
            >
              What to Expect
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
