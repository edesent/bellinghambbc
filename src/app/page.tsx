import Image from "next/image";
import Link from "next/link";

const heroVideo =
  "https://video.wixstatic.com/video/2fc867_954e23ffa843462ab99bbe7e2b2102f7/480p/mp4/file.mp4";

const navItems = [
  { label: "Visit", href: "#visit" },
  { label: "About", href: "#about" },
  { label: "Sermons", href: "#sermons" },
  { label: "Contact", href: "#contact" },
];

const services = [
  ["Sunday School", "10:00 AM", "Classes for every age"],
  ["Sunday Morning", "11:00 AM", "Preaching, singing, and worship"],
  ["Sunday Evening", "6:00 PM", "A faithful close to the Lord's Day"],
  ["Thursday Groups", "5:30 PM", "Discipleship and fellowship"],
  ["Midweek Service", "7:00 PM", "Prayer and Bible preaching"],
];

const pathways = [
  {
    title: "About BMBC",
    text: "Meet the pastor, staff, and the convictions that shape this church family in Rockwell.",
    href: "https://www.bmbcrockwell.com/about-bmbc",
  },
  {
    title: "Bring the Book 2026",
    text: "A preaching meeting built around the Book, the local church, and a burden for revival.",
    href: "https://www.bmbcrockwell.com/bring-the-book",
  },
  {
    title: "Sermons and Teaching",
    text: "Watch recent services and Bible teaching from Bible Missionary Baptist Church.",
    href: "https://www.bmbcrockwell.com/sermons-and-teaching",
  },
];

const beliefs = [
  "King James Bible",
  "Gospel preaching",
  "Local church",
  "World missions",
  "Family discipleship",
  "Old-time worship",
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4" fill="none">
      <path
        d="M5 12h14m0 0-5-5m5 5-5 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function CrossMark({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 60 60" className={className} fill="none">
      <path
        d="M30 5v50M17 20h26"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="5"
      />
      <path
        d="M10 52h40"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="3"
        opacity=".35"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="bg-bmbc-cream text-bmbc-ink">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-bmbc-ink/72 text-white backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a
            href="#home"
            className="flex items-center gap-3 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-bmbc-gold"
          >
            <Image
              src="/bmbc/logo.jpg"
              alt="Bible Missionary Baptist Church"
              width={52}
              height={39}
              priority
              className="h-10 w-auto bg-white object-contain p-1"
            />
            <div className="leading-none">
              <p className="font-serif text-xl font-black tracking-normal">BMBC</p>
              <p className="mt-1 hidden text-[10px] font-bold uppercase tracking-[0.22em] text-bmbc-gold sm:block">
                Rockwell, North Carolina
              </p>
            </div>
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-sm px-3 py-2 text-sm font-bold text-white/86 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="https://tithe.ly/give?c=6688536"
            className="rounded-sm bg-bmbc-gold px-4 py-2 text-sm font-black uppercase text-bmbc-ink transition hover:bg-white"
          >
            Give
          </a>
        </nav>
      </header>

      <section id="home" className="relative min-h-[100svh] overflow-hidden bg-bmbc-ink text-white">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/bmbc/hero-poster.jpg"
          aria-hidden="true"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,26,31,0.92)_0%,rgba(14,26,31,0.72)_42%,rgba(14,26,31,0.30)_100%)]" />
        <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(120deg,transparent_0_34%,rgba(201,166,83,.24)_34%_35%,transparent_35%_100%),linear-gradient(60deg,transparent_0_58%,rgba(126,31,42,.26)_58%_59%,transparent_59%_100%)]" />

        <div className="relative mx-auto grid min-h-[100svh] max-w-7xl content-end gap-10 px-4 pb-8 pt-28 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
          <div className="max-w-4xl pb-8 lg:pb-20">
            <div className="inline-flex items-center gap-3 border border-white/18 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-bmbc-gold backdrop-blur">
              <CrossMark className="size-5" />
              Relevant in the present, rooted in the past
            </div>
            <h1 className="mt-7 font-serif text-5xl font-black leading-[0.92] tracking-normal text-white sm:text-7xl lg:text-8xl">
              Bible Missionary Baptist Church
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-white/82 sm:text-xl">
              A King James Bible-believing Baptist church in Rockwell, NC, preaching Christ, loving families,
              and keeping the Book open.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#visit"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-bmbc-red px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:bg-bmbc-red-dark"
              >
                Plan Your Visit <ArrowIcon />
              </a>
              <a
                href="https://www.bmbcrockwell.com/live-stream"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/28 bg-white/10 px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:bg-white/18"
              >
                Watch Live <ArrowIcon />
              </a>
            </div>
          </div>

          <div id="visit" className="self-end border border-white/16 bg-bmbc-ink/76 p-4 shadow-2xl backdrop-blur-md lg:mb-12">
            <div className="grid gap-px bg-white/12 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {services.map(([title, time, text]) => (
                <div key={title} className="bg-bmbc-ink/92 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-bmbc-gold">{title}</p>
                  <p className="mt-2 font-serif text-3xl font-black text-white">{time}</p>
                  <p className="mt-2 text-sm leading-6 text-white/68">{text}</p>
                </div>
              ))}
              <div className="bg-bmbc-gold p-5 text-bmbc-ink">
                <p className="text-xs font-black uppercase tracking-[0.2em]">Address</p>
                <p className="mt-2 text-lg font-black leading-6">
                  11360 Old Concord Rd
                  <br />
                  Rockwell, NC 28138
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-x-0 top-0 h-2 bg-[linear-gradient(90deg,#7e1f2a,#c9a653,#2f6967,#7e1f2a)]" />
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
          <div className="relative min-h-[560px]">
            <Image
              src="/bmbc/church-exterior.jpg"
              alt="Bible Missionary Baptist Church exterior"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
            <div className="absolute -bottom-6 right-0 w-52 border-8 border-bmbc-cream bg-white shadow-2xl sm:w-64">
              <Image
                src="/bmbc/lobby-bmbc.jpg"
                alt="BMBC lobby display"
                width={900}
                height={2070}
                className="h-72 w-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center lg:pl-8">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-bmbc-red">About BMBC</p>
            <h2 className="mt-4 font-serif text-4xl font-black leading-tight text-bmbc-ink sm:text-6xl">
              A church with the warmth of a family and the backbone of the Book.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-bmbc-muted">
              BMBC is a local, independent Baptist church serving Rockwell and Rowan County with plain Bible
              preaching, reverent worship, missions, and ministries for the whole home.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {beliefs.map((belief) => (
                <span key={belief} className="border border-bmbc-stone bg-white px-3 py-2 text-sm font-bold text-bmbc-ink shadow-sm">
                  {belief}
                </span>
              ))}
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="border-l-4 border-bmbc-red bg-white p-5 shadow-sm">
                <p className="font-serif text-4xl font-black">2018</p>
                <p className="mt-2 text-sm font-bold text-bmbc-muted">Pastor Cody Zorn accepted the call to pastor BMBC.</p>
              </div>
              <div className="border-l-4 border-bmbc-teal bg-white p-5 shadow-sm">
                <p className="font-serif text-4xl font-black">5</p>
                <p className="mt-2 text-sm font-bold text-bmbc-muted">Weekly gatherings for preaching, groups, prayer, and worship.</p>
              </div>
              <div className="border-l-4 border-bmbc-gold bg-white p-5 shadow-sm">
                <p className="font-serif text-4xl font-black">KJV</p>
                <p className="mt-2 text-sm font-bold text-bmbc-muted">A Bible-believing ministry built around the Scriptures.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bmbc-ink py-20 text-white sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_.9fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-bmbc-gold">Our Pastor</p>
            <h2 className="mt-4 font-serif text-4xl font-black leading-tight sm:text-6xl">Pastor Cody Zorn</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
              Bro. Cody Zorn has preached across the country and overseas, and now serves BMBC in Rockwell
              with his wife Tristan and their children. His ministry remains relevant in the present and
              rooted in the past.
            </p>
            <a
              href="https://www.bmbcrockwell.com/about-bmbc"
              className="mt-8 inline-flex items-center gap-2 border-b-2 border-bmbc-gold pb-2 text-sm font-black uppercase tracking-[0.14em] text-bmbc-gold"
            >
              Meet the church staff <ArrowIcon />
            </a>
          </div>
          <div className="relative min-h-[340px] overflow-hidden border border-white/14 bg-white/8">
            <Image
              src="/bmbc/pastor-family.jpg"
              alt="Pastor Cody Zorn and family"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section id="sermons" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-bmbc-red">Connect</p>
              <h2 className="mt-4 font-serif text-4xl font-black leading-tight sm:text-6xl">
                Step into the life of the church.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-bmbc-muted lg:justify-self-end">
              From first visit to livestream, events, giving, and special meetings, the next step should be
              clear before you ever walk through the doors.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {pathways.map((path) => (
              <a
                key={path.title}
                href={path.href}
                className="group border border-bmbc-stone bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-bmbc-gold hover:shadow-xl"
              >
                <p className="font-serif text-2xl font-black text-bmbc-ink">{path.title}</p>
                <p className="mt-4 min-h-24 leading-7 text-bmbc-muted">{path.text}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.14em] text-bmbc-red">
                  Open <ArrowIcon />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="grid min-h-[520px] bg-bmbc-stone lg:grid-cols-2">
        <div className="relative min-h-[360px]">
          <Image
            src="/bmbc/congregation.jpg"
            alt="BMBC congregation"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="flex items-center px-4 py-16 sm:px-10 lg:px-16">
          <div className="max-w-xl">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-bmbc-red">First Visit</p>
            <h2 className="mt-4 font-serif text-4xl font-black leading-tight sm:text-5xl">
              Come as a guest. Leave knowing where to return.
            </h2>
            <p className="mt-6 text-lg leading-8 text-bmbc-muted">
              You will find Bible preaching, congregational singing, friendly people, and clear service
              times. Bring your family, bring your Bible, and make yourself at home.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://maps.google.com/?cid=9859333115249271562"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-bmbc-ink px-5 py-4 text-sm font-black uppercase tracking-[0.12em] text-white"
              >
                Get Directions <ArrowIcon />
              </a>
              <a
                href="tel:+17048568093"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-bmbc-ink/18 px-5 py-4 text-sm font-black uppercase tracking-[0.12em] text-bmbc-ink"
              >
                Call Church
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-white py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-4">
            <Image
              src="/bmbc/logo.jpg"
              alt="Bible Missionary Baptist Church"
              width={78}
              height={59}
              className="h-14 w-auto object-contain"
            />
            <div>
              <p className="font-serif text-2xl font-black">Bible Missionary Baptist Church</p>
              <p className="mt-1 text-sm font-bold text-bmbc-muted">11360 Old Concord Rd, Rockwell, NC 28138</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 text-sm font-black uppercase tracking-[0.12em] text-bmbc-ink">
            <a href="mailto:bmbcrockwell@gmail.com" className="border border-bmbc-stone px-4 py-3">
              Email
            </a>
            <a href="tel:+17048568093" className="border border-bmbc-stone px-4 py-3">
              (704) 856-8093
            </a>
            <Link href="/" className="border border-bmbc-stone px-4 py-3">
              Top
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
