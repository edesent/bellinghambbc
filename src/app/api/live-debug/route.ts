import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const channelId = "UCgZhLi5jHOWD3j9dhY24S-g";

const browserHeaders = {
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36",
  "Accept-Language": "en-US,en;q=0.9",
  Accept:
    "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
};

function scanSignals(html: string) {
  return {
    length: html.length,
    hlsManifestUrl: (html.match(/"hlsManifestUrl"/g) || []).length,
    isLiveTrue: (html.match(/"isLive":true/g) || []).length,
    isLiveContentTrue: (html.match(/"isLiveContent":true/g) || []).length,
    isUpcomingTrue: (html.match(/"isUpcoming":true/g) || []).length,
    liveStreamOffline: (html.match(/"status":"LIVE_STREAM_OFFLINE"/g) || [])
      .length,
    badgeLiveNow: (html.match(/BADGE_STYLE_TYPE_LIVE_NOW/g) || []).length,
    concurrentViewers: (html.match(/"concurrentViewers"/g) || []).length,
    canonical: html.match(/<link rel="canonical" href="([^"]+)"/)?.[1] ?? null,
  };
}

export async function GET() {
  try {
    const liveResp = await fetch(
      `https://www.youtube.com/channel/${channelId}/live`,
      { cache: "no-store", headers: browserHeaders },
    );
    const liveHtml = await liveResp.text();
    const liveSignals = {
      ok: liveResp.ok,
      status: liveResp.status,
      ...scanSignals(liveHtml),
    };

    const rssResp = await fetch(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`,
      { cache: "no-store" },
    );
    const rssXml = await rssResp.text();
    const recentVideoIds =
      rssXml
        .match(/<yt:videoId>([^<]+)<\/yt:videoId>/g)
        ?.slice(0, 3)
        .map((m) => m.replace(/<\/?yt:videoId>/g, "")) ?? [];

    const watchResults = await Promise.all(
      recentVideoIds.map(async (videoId) => {
        try {
          const watchResp = await fetch(
            `https://www.youtube.com/watch?v=${videoId}`,
            { cache: "no-store", headers: browserHeaders },
          );
          const watchHtml = await watchResp.text();
          return {
            videoId,
            ok: watchResp.ok,
            status: watchResp.status,
            ...scanSignals(watchHtml),
          };
        } catch (err) {
          return {
            videoId,
            error: err instanceof Error ? err.message : String(err),
          };
        }
      }),
    );

    return NextResponse.json({
      live_url: liveSignals,
      watch_urls: watchResults,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : String(error) },
      { status: 500 },
    );
  }
}
