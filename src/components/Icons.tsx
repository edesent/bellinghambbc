import type { ReactNode } from "react";

type IconName =
  | "arrow"
  | "bible"
  | "book"
  | "children"
  | "church"
  | "cross"
  | "family"
  | "globe"
  | "hands"
  | "heart"
  | "lamp"
  | "map"
  | "music"
  | "phone"
  | "play";

const paths: Record<IconName, ReactNode> = {
  arrow: (
    <path
      d="M5 12h14m0 0-5-5m5 5-5 5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  bible: (
    <>
      <path
        d="M7 5.5h7a3.5 3.5 0 0 1 3.5 3.5v9.5H9.5A2.5 2.5 0 0 0 7 21V5.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M7 18.5A2.5 2.5 0 0 1 9.5 16h8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12.5 8.5v4m-2-2h4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </>
  ),
  book: (
    <>
      <path
        d="M5 6.5A2.5 2.5 0 0 1 7.5 4H18v15H7.5A2.5 2.5 0 0 0 5 21V6.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9 8h5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M9 12h6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </>
  ),
  children: (
    <>
      <circle cx="9" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16" cy="9.5" r="2" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M6.5 18c0-2 1.8-4 4.5-4s4.5 2 4.5 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M13.5 18c.2-1.6 1.3-3 3.2-3 1.8 0 2.8 1.4 3 3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </>
  ),
  church: (
    <>
      <path
        d="M4.5 11 12 5l7.5 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 10.5V19h11v-8.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M12 8V3.5m-2 2h4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M10 19v-4h4v4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </>
  ),
  cross: (
    <path
      d="M12 3v18m-4-12h8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  ),
  family: (
    <>
      <circle cx="8" cy="8.5" r="2.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16.5" cy="8.5" r="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M4.5 19c.3-2.5 2.2-4.5 5-4.5S14.2 16.5 14.5 19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M10.5 19c.3-2.5 2.2-4.5 5-4.5s4.7 2 5 4.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M3.5 12h17m-8.5-8.5c2.5 2.8 3.8 5.6 3.8 8.5 0 2.9-1.3 5.7-3.8 8.5m0-17c-2.5 2.8-3.8 5.6-3.8 8.5 0 2.9 1.3 5.7 3.8 8.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </>
  ),
  hands: (
    <>
      <path
        d="M8.5 13 6 10.5a2 2 0 1 0-2.8 2.8L6.5 16.5c1.1 1.1 2.6 1.7 4.2 1.7H12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 13 18 10.5a2 2 0 1 1 2.8 2.8l-3.3 3.2c-1.1 1.1-2.6 1.7-4.2 1.7H12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 9.5 12 12l3-2.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  heart: (
    <path
      d="M12 20s-7-4.4-7-10.3C5 7 6.8 5.5 9 5.5c1.4 0 2.6.7 3 1.8.4-1.1 1.6-1.8 3-1.8 2.2 0 4 1.5 4 4.2C19 15.6 12 20 12 20Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  ),
  lamp: (
    <>
      <path
        d="M8 10a4 4 0 1 1 8 0c0 1.7-.7 2.8-1.6 3.8-.7.8-1.2 1.7-1.2 2.7h-2.4c0-1-.5-1.9-1.2-2.7C8.7 12.8 8 11.7 8 10Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M10 19h4m-3-2h2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </>
  ),
  map: (
    <>
      <path
        d="M12 20s5.5-5.3 5.5-10A5.5 5.5 0 1 0 6.5 10c0 4.7 5.5 10 5.5 10Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2" stroke="currentColor" strokeWidth="1.8" />
    </>
  ),
  music: (
    <>
      <path
        d="M15 6v8.8a2.2 2.2 0 1 1-1.5-2.1V8.5l5-1.5v6.3a2.2 2.2 0 1 1-1.5-2.1V5L15 6Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </>
  ),
  phone: (
    <path
      d="M7.8 4.8h2.7l1.2 3.2-1.5 1.5a12.1 12.1 0 0 0 4.3 4.3l1.5-1.5 3.2 1.2v2.7c0 .8-.6 1.5-1.4 1.5A14.3 14.3 0 0 1 6.3 6.2c0-.8.7-1.4 1.5-1.4Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  ),
  play: (
    <path
      d="M9 7.5v9l7-4.5-7-4.5Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinejoin="round"
    />
  ),
};

export function Icon({
  name,
  className = "size-5",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
