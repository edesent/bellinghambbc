import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Ministries from "@/components/Ministries";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Ministries",
  description: "Connect with ministries at Bellingham Bible Baptist Church, including BBC Kids.",
  path: "/ministries",
});

export default function MinistriesPage() {
  return (
    <>
      <Navbar />
      <PageHero
        eyebrow="Connect"
        title="Ministries for the whole family"
        description="Nursery, BBC Kids, counseling, livestream, and church family connection."
      />
      <Ministries />
      <Footer />
    </>
  );
}
