import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const channelId = "UCgZhLi5jHOWD3j9dhY24S-g";

  try {
    const response = await fetch(
      `https://www.youtube.com/channel/${channelId}/live`,
      {
        cache: "no-store",
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36",
          "Accept-Language": "en-US,en;q=0.9",
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        },
      },
    );

    const html = await response.text();

    const signals = {
      ok: response.ok,
      status: response.status,
      length: html.length,
      hlsManifestUrl: (html.match(/"hlsManifestUrl"/g) || []).length,
      isLiveTrue: (html.match(/"isLive":true/g) || []).length,
      isLiveContentTrue: (html.match(/"isLiveContent":true/g) || []).length,
      isUpcomingTrue: (html.match(/"isUpcoming":true/g) || []).length,
      liveStreamOffline: (
        html.match(/"status":"LIVE_STREAM_OFFLINE"/g) || []
      ).length,
      badgeLiveNow: (html.match(/BADGE_STYLE_TYPE_LIVE_NOW/g) || []).length,
      concurrentViewers: (html.match(/"concurrentViewers"/g) || []).length,
      canonical: html.match(
        /<link rel="canonical" href="([^"]+)"/,
      )?.[1],
    };

    return NextResponse.json(signals);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : String(error) },
      { status: 500 },
    );
  }
}
