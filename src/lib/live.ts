const browserHeaders = {
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36",
  "Accept-Language": "en-US,en;q=0.9",
  Accept:
    "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
};

export interface LiveStatus {
  isLive: boolean;
  videoId: string | null;
}

async function isVideoLive(videoId: string): Promise<boolean> {
  try {
    const response = await fetch(
      `https://www.youtube.com/watch?v=${videoId}`,
      {
        cache: "no-store",
        headers: browserHeaders,
      },
    );
    if (!response.ok) return false;
    const html = await response.text();
    return /"isLive":true/.test(html);
  } catch {
    return false;
  }
}

export async function getLiveStatus(channelId: string): Promise<LiveStatus> {
  try {
    const rssResp = await fetch(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`,
      { cache: "no-store" },
    );
    if (!rssResp.ok) return { isLive: false, videoId: null };

    const rssXml = await rssResp.text();
    const recentIds = (
      rssXml.match(/<yt:videoId>([^<]+)<\/yt:videoId>/g) || []
    )
      .slice(0, 3)
      .map((m) => m.replace(/<\/?yt:videoId>/g, ""));

    const liveChecks = await Promise.all(
      recentIds.map(async (videoId) => ({
        videoId,
        isLive: await isVideoLive(videoId),
      })),
    );

    const liveOne = liveChecks.find((r) => r.isLive);
    if (liveOne) {
      return { isLive: true, videoId: liveOne.videoId };
    }

    return { isLive: false, videoId: null };
  } catch {
    return { isLive: false, videoId: null };
  }
}
