import { useEffect, useState } from "react";

const links = [
  { href: "#galeria", label: "Galería" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 backdrop-blur-md bg-background/70 border-b border-border/50"
          : "py-6 bg-transparent"
      } ${mounted ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
      style={{ transitionProperty: "transform, opacity, padding, background-color, backdrop-filter, border-color" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2 group">
          <span className="font-display font-semibold tracking-tight text-lg">
            Federico <span className="text-gold-gradient">Kuhn</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-10 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="story-link text-foreground/80 hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contacto"
          className="md:hidden text-xs tracking-widest uppercase text-primary"
        >
          Contacto
        </a>
      </div>
    </header>
  );
}
