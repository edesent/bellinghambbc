import type { MetadataRoute } from "next";
import { canonical } from "@/lib/site";

const routes = [
  "/",
  "/jesus-church-bellingham-massachusetts",
  "/what-to-expect",
  "/our-pastor",
  "/beliefs",
  "/ministries",
  "/faith-based-counseling",
  "/events",
  "/sermons",
  "/live",
  "/coffee-with-pastor",
  "/give",
  "/pastor",
  "/history",
  "/statement-of-faith",
  "/mission",
  "/counseling",
  "/missionaries",
  "/messages",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: canonical(route),
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
