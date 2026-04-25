import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import { serviceTimes, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink py-16 text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <Image
              src="/bbbc/logo-white.png"
              alt={site.name}
              width={685}
              height={160}
              className="h-auto w-full max-w-[330px]"
            />
            <p className="mt-5 max-w-md text-white/70">
              {site.address.street}, {site.address.city}, {site.address.region}{" "}
              {site.address.postalCode}
            </p>
            <a
              href={site.phoneHref}
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white/82 hover:text-white"
            >
              <Icon name="phone" className="size-4" />
              {site.phoneDisplay}
            </a>
          </div>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-gold-light">
              Discover
            </p>
            <div className="mt-4 space-y-3 text-sm text-white/76">
              <Link href="/jesus-church-bellingham-massachusetts" className="block hover:text-white">
                Jesus
              </Link>
              <Link href="/what-to-expect" className="block hover:text-white">
                What to Expect
              </Link>
              <Link href="/our-pastor" className="block hover:text-white">
                Our Pastor
              </Link>
              <Link href="/beliefs" className="block hover:text-white">
                Beliefs
              </Link>
            </div>
          </div>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-gold-light">
              Service Times
            </p>
            <div className="mt-4 space-y-3 text-sm text-white/76">
              {serviceTimes.map((service) => (
                <p key={service.title}>
                  <span className="font-bold text-white">{service.title}:</span>{" "}
                  {service.time}
                </p>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-gold-light">
              Connect
            </p>
            <div className="mt-4 space-y-3 text-sm text-white/76">
              <Link href="/ministries#kids" className="block hover:text-white">
                BBC Kids
              </Link>
              <Link href="/faith-based-counseling" className="block hover:text-white">
                Counseling
              </Link>
              <Link href="/sermons" className="block hover:text-white">
                Sermons
              </Link>
              <Link href="/live" className="block hover:text-white">
                Attend Online
              </Link>
              <a href={site.social.facebook} target="_blank" rel="noreferrer" className="block hover:text-white">
                Facebook
              </a>
            </div>
          </div>
        </div>
        <p className="mt-12 border-t border-white/12 pt-8 text-center display-serif text-lg italic text-gold-light">
          &ldquo;{site.verse.text}&rdquo; <span className="text-white/54">{site.verse.reference}</span>
        </p>
      </div>
    </footer>
  );
}
