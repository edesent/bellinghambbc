"use client";

import { useEffect } from "react";

const API_URL = "https://slackwebsitechat.vercel.app";
const API_KEY = "wbc_b5b4322b883e93cb3cd0a5df250882f49cc251f77702835f";

declare global {
  interface Window {
    WBCChat?: {
      open?: () => void;
      toggle?: () => void;
      coffee?: () => void;
    };
  }
}

export default function ChatWidget() {
  useEffect(() => {
    if (document.getElementById("wbc-chat-widget-script")) return;
    const script = document.createElement("script");
    script.id = "wbc-chat-widget-script";
    script.src = `${API_URL}/widget/wbc-chat.js`;
    script.defer = true;
    script.setAttribute("data-api", API_URL);
    script.setAttribute("data-key", API_KEY);
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = (e.target as HTMLElement | null)?.closest(
        'a[href*="coffee-with-pastor"]'
      );
      if (!target) return;
      if (window.WBCChat?.coffee) {
        e.preventDefault();
        window.WBCChat.coffee();
      }
    }
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
