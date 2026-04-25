"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const phone = String(formData.get("phone") || "");
    const service = String(formData.get("service") || "");
    const message = String(formData.get("message") || "");

    const subject = encodeURIComponent(
      `Website inquiry from ${name || "a visitor"}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Service: ${service}`,
        "",
        message,
      ].join("\n")
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-slate-soft bg-white-soft p-6 shadow-[0_18px_50px_rgba(20,32,51,0.08)] sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-bold text-ink">
          Name
          <input
            name="name"
            required
            className="w-full rounded-lg border border-slate-soft bg-white px-4 py-3 text-base font-normal text-ink outline-none transition focus:border-gold"
          />
        </label>
        <label className="space-y-2 text-sm font-bold text-ink">
          Email
          <input
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-slate-soft bg-white px-4 py-3 text-base font-normal text-ink outline-none transition focus:border-gold"
          />
        </label>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-bold text-ink">
          Phone
          <input
            name="phone"
            className="w-full rounded-lg border border-slate-soft bg-white px-4 py-3 text-base font-normal text-ink outline-none transition focus:border-gold"
          />
        </label>
        <label className="space-y-2 text-sm font-bold text-ink">
          Service
          <select
            name="service"
            className="w-full rounded-lg border border-slate-soft bg-white px-4 py-3 text-base font-normal text-ink outline-none transition focus:border-gold"
            defaultValue="Sunday Worship"
          >
            <option>Sunday School</option>
            <option>Sunday Worship</option>
            <option>Wednesday Prayer</option>
            <option>Kid&apos;s Club</option>
            <option>General Question</option>
          </select>
        </label>
      </div>
      <label className="mt-4 block space-y-2 text-sm font-bold text-ink">
        Message
        <textarea
          name="message"
          required
          rows={6}
          className="w-full rounded-lg border border-slate-soft bg-white px-4 py-3 text-base font-normal text-ink outline-none transition focus:border-gold"
        />
      </label>
      <div className="mt-5 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="rounded-lg bg-burgundy px-6 py-3 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-burgundy-dark"
        >
          Send Message
        </button>
        <p className="text-sm text-text-light">
          Opens your email app with the church address filled in.
        </p>
      </div>
      {sent ? (
        <p className="mt-4 rounded-lg bg-sage/12 px-4 py-3 text-sm text-ink">
          Your message draft is ready. If your mail app did not open, call{" "}
          <a href={site.phoneHref} className="font-bold underline">
            {site.phoneDisplay}
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}
