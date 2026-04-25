import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import { serviceTimes, site } from "@/lib/site";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] overflow-hidden bg-ink text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/bbbc/background-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,32,51,0.42)_0%,rgba(20,32,51,0.2)_48%,rgba(20,32,51,0)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(0deg,rgba(20,32,51,0.62)_0%,rgba(20,32,51,0)_100%)]" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-5 pt-32 pb-10 sm:px-6 lg:px-8">
        <div className="max-w-4xl pb-10">
          <Image
            src="/bbbc/logo-white.png"
            alt={site.name}
            width={685}
            height={160}
            priority
            className="animate-fade-up h-auto w-full max-w-[420px]"
          />
          <h1 className="animate-fade-up animation-delay-200 mt-10 display-serif text-5xl leading-[0.98] text-white sm:text-7xl lg:text-8xl">
            Come worship with us.
          </h1>
          <p className="animate-fade-up animation-delay-400 mt-6 max-w-2xl text-xl leading-8 text-white/88">
            We are a church that loves our community, preaches Jesus, and makes
            room for families to grow in the Word of God.
          </p>
          <div className="animate-fade-up animation-delay-600 mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#plan-your-visit"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-6 py-4 text-sm font-extrabold uppercase tracking-[0.12em] text-ink transition hover:bg-gold-light"
            >
              Plan Your Visit
              <Icon name="arrow" className="size-4" />
            </Link>
            <Link
              href="/live"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-4 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-white/18"
            >
              Attend Online
              <Icon name="play" className="size-4" />
            </Link>
          </div>
        </div>

        <div className="grid border-y border-white/16 bg-ink/72 backdrop-blur-md lg:grid-cols-4">
          {serviceTimes.map((service) => (
            <div key={service.title} className="border-white/12 p-5 lg:border-r last:border-r-0">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-gold-light">
                  <Icon name={service.icon} className="size-5" />
                </span>
                <div>
                  <p className="font-bold text-white">{service.title}</p>
                  <p className="mt-1 text-sm font-semibold text-gold-light">
                    {service.time}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/66">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
