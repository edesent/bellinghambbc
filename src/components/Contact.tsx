import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { Icon } from "@/components/Icons";
import { site } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contact" className="section-pad bg-white">
      <div id="plan-your-visit" className="mx-auto max-w-7xl scroll-mt-28 px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Plan Your Visit</p>
          <h2 className="mt-4 display-serif text-4xl leading-tight text-ink sm:text-5xl">
            We would love to see you this Sunday.
          </h2>
          <p className="mt-5 text-lg leading-8 text-text-light">
            Send a question, ask for prayer, or let us know which service you
            plan to attend.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-5">
            <div className="rounded-lg border border-slate-soft bg-white-soft p-7">
              <div className="flex items-start gap-4">
                <span className="inline-flex size-12 items-center justify-center rounded-lg bg-burgundy/10 text-burgundy">
                  <Icon name="map" className="size-5" />
                </span>
                <div>
                  <h3 className="display-serif text-3xl text-ink">Location</h3>
                  <p className="mt-3 text-base leading-7 text-text-light">
                    {site.address.street}
                    <br />
                    {site.address.city}, {site.address.region} {site.address.postalCode}
                  </p>
                  <a
                    href={site.directionsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex text-sm font-extrabold uppercase tracking-[0.12em] text-burgundy"
                  >
                    Directions
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-slate-soft bg-white-soft p-7">
              <div className="flex items-start gap-4">
                <span className="inline-flex size-12 items-center justify-center rounded-lg bg-gold/18 text-burgundy">
                  <Icon name="phone" className="size-5" />
                </span>
                <div>
                  <h3 className="display-serif text-3xl text-ink">Contact</h3>
                  <a href={site.phoneHref} className="mt-3 block text-lg font-bold text-ink">
                    {site.phoneDisplay}
                  </a>
                  <a href={`mailto:${site.email}`} className="mt-1 block text-base text-text-light">
                    {site.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg border border-slate-soft bg-ink text-white">
              <div className="p-6">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-gold-light">
                  Additional Parking
                </p>
                <p className="mt-3 text-sm leading-6 text-white/72">
                  Keep this current parking reference handy when planning your
                  first visit.
                </p>
              </div>
              <Image
                src="/bbbc/additional-parking.png"
                alt="Additional parking map for Bellingham Bible Baptist Church"
                width={300}
                height={169}
                className="w-full bg-white object-cover"
              />
            </div>

            <div className="overflow-hidden rounded-lg border border-slate-soft bg-white">
              <iframe
                title="Map to Bellingham Bible Baptist Church"
                src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
                className="h-[300px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
