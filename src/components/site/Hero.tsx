import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  const [offset, setOffset] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const letters = "FEDERICO KUHN".split("");

  return (
    <section id="top" className="relative min-h-screen overflow-hidden flex items-end">
      {/* Parallax background */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translateY(${offset * 0.3}px) scale(1.05)` }}
      >
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-60"
          width={1600}
          height={1024}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24 md:pb-32 w-full">
        <div
          className={`text-xs tracking-[0.4em] uppercase text-primary mb-6 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          — Photographer · Estudio independiente
        </div>
        <h1 className="font-display font-semibold leading-[0.95] text-[14vw] md:text-[10vw] lg:text-[8.5rem] tracking-tighter">
          {letters.map((ch, i) => (
            <span
              key={i}
              className="inline-block"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(60%)",
                transition: `opacity 0.8s ease-out, transform 0.9s cubic-bezier(0.22,1,0.36,1)`,
                transitionDelay: `${200 + i * 55}ms`,
              }}
            >
              {ch === " " ? "\u00A0" : ch}
            </span>
          ))}
        </h1>
        <div
          className={`mt-8 max-w-xl text-base md:text-lg text-muted-foreground transition-all duration-1000 delay-[1200ms] ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Retratos, editorial y proyectos documentales. La luz como materia prima, el instante como destino.
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#galeria"
        aria-label="Ir a la galería"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-foreground/70 hover:text-primary transition-colors"
      >
        <span>Scroll</span>
        <span className="w-px h-12 bg-gradient-to-b from-primary to-transparent" style={{ animation: "scroll-hint 2s ease-in-out infinite" }} />
      </a>
    </section>
  );
}
