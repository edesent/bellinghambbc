# Bellingham Bible Baptist Church

Public website for Bellingham Bible Baptist Church — Bellingham, Massachusetts.

- Live site: <https://bellinghambbc.com>
- Vercel preview: <https://bellinghambbc.vercel.app>
- Repo: `edesent/bellinghambbc` — deploys to Vercel automatically on push to `main`.

## For AI editors (ChatGPT, Claude, etc.) — read this before editing

This project's conventions differ from older Next.js documentation. **Following an out-of-date pattern will fail the production build and the site will silently roll back to a previous deploy** — meaning your edit appears to "404" or simply not happen.

### Stack snapshot

| Thing | Version / Setting |
| --- | --- |
| Next.js | **16.2.4** (App Router, Server Components by default) |
| React | 19 |
| Tailwind | **v4** (CSS-first config in `src/app/globals.css`, no `tailwind.config.js`) |
| TypeScript | strict — `next build` fails on any type error |
| Hosting | Vercel — push to `main` triggers a production deploy in ~30s |

### Next.js 16 conventions that bite older code

1. **Dynamic route `params` is a Promise.** Pages must be `async` and `await` params before destructuring.
   ```ts
   // ✅ CORRECT for Next.js 16
   export default async function Page({
     params,
   }: {
     params: Promise<{ slug: string }>;
   }) {
     const { slug } = await params;
   }
   ```
2. **`searchParams` is also a Promise.** Same `await` pattern.
3. **`generateMetadata` is async** and receives the same async `params` / `searchParams`.
4. **`<Image>` remote hosts must be allow-listed** in `next.config.ts` under `images.remotePatterns`. Adding an image from a new external host without updating the config produces a runtime error.
5. **Tailwind v4** — no `tailwind.config.js`. Theme tokens live in `src/app/globals.css` under `@theme`.

### Project shape

- `src/app/` — App Router routes: `/`, `/beliefs`, `/coffee-with-pastor`, `/counseling`, `/events`, `/faith-based-counseling`, `/give`, `/history`, `/jesus`, `/live`, `/messages`, `/ministries`, `/mission`, `/missionaries`, `/our-pastor`, `/pastor`, `/sermons`, `/statement-of-faith`, `/what-to-expect`, and the long-tail `/jesus-church-bellingham-massachusetts` landing page. Server Components by default; client components are explicitly marked `"use client"`.
- `src/lib/site.ts` — single source of truth for site copy: church info, services, navigation, page content. Most copy edits should change this file, not JSX.
- `src/lib/events.ts` — calendar events.
- `src/lib/messages.ts` — sermon/message data.
- `public/bbbc/` — photos, logo, hero video. **Don't commit empty placeholder files (e.g. 68-byte 1×1 PNGs renamed `.jpg`)** — they render as broken images on the live site. If the upload failed, leave the previous image reference in place rather than committing an empty file.

### Editing safely

- For any change to an existing file, prefer a targeted edit. Don't rewrite the whole file unless you're truly rewriting it end-to-end.
- Before pushing, mentally trace the change against the conventions above. If you can't, **don't push** — the type-check will fail on Vercel and silently keep the old build live.
- The deploy you just made isn't necessarily the deploy that's serving traffic. After pushing, watch the Vercel deploy status; if it errors, fix forward — don't assume your edit is live.

## Commands

```bash
npm run dev    # local dev server (http://localhost:3000)
npm run build  # production build — same type-check Vercel runs
npm run lint
```

## Repo conventions

- Default branch is `main`. Every push to `main` ships to production.
- Commits should describe the *why*, briefly. The pastor sees the commit list in the site history.
- Photos go under `public/bbbc/<descriptive-name>.<ext>` at full size — don't compress or resize.
