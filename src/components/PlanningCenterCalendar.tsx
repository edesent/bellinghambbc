"use client";

import { useEffect, useRef } from "react";

export default function PlanningCenterCalendar() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    container.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://bellinghambbc.churchcenter.com/assets/calendar_embed.js";
    script.async = true;
    script.setAttribute("data-view", "gallery");
    script.setAttribute("data-height", "auto");

    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden rounded-lg border border-ink/10 bg-white p-4 shadow-sm sm:p-6"
    />
  );
}
