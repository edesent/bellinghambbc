const channelId = "UCgZhLi5jHOWD3j9dhY24S-g";

export interface LiveStatus {
  isLive: boolean;
  videoId: string | null;
}

export async function getLiveStatus(): Promise<LiveStatus> {
  try {
    const response = await fetch(
      `https://www.youtube.com/channel/${channelId}/live`,
      {
        next: { revalidate: 10 },
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36",
          "Accept-Language": "en-US,en;q=0.9",
        },
      },
    );

    if (!response.ok) {
      return { isLive: false, videoId: null };
    }

    const html = await response.text();

    const canonical = html.match(
      /<link rel="canonical" href="https:\/\/www\.youtube\.com\/watch\?v=([A-Za-z0-9_-]+)"/,
    );
    const videoId = canonical?.[1] ?? null;

    const isLive = /"isLive":true/.test(html);

    return { isLive, videoId };
  } catch {
    return { isLive: false, videoId: null };
  }
}
