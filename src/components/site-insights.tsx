"use client";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

function withoutQueryOrFragment<T extends { url: string }>(event: T): T {
  const url = new URL(event.url);
  url.search = "";
  url.hash = "";
  return { ...event, url: url.toString() };
}

export function SiteInsights() {
  return (
    <>
      <Analytics beforeSend={withoutQueryOrFragment} />
      <SpeedInsights beforeSend={withoutQueryOrFragment} />
    </>
  );
}
