import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { MasonryGallery } from "@/components/site/MasonryGallery";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Federico Kuhn — Photographer" },
      { name: "description", content: "Portfolio de Federico Kuhn: retratos, editorial y proyectos documentales. La luz como materia prima." },
      { property: "og:title", content: "Federico Kuhn — Photographer" },
      { property: "og:description", content: "Portfolio de Federico Kuhn: retratos, editorial y proyectos documentales." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <MasonryGallery />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
