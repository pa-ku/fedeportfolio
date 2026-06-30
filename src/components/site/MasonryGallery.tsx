import { useState } from "react";
import { gallery } from "@/data/gallery";
import { Lightbox } from "./Lightbox";
import { useInView } from "@/hooks/useInView";

function GalleryItem({ src, alt, index, onOpen }: { src: string; alt: string; index: number; onOpen: (i: number) => void }) {
  const { ref, inView } = useInView<HTMLButtonElement>();
  return (
    <button
      ref={ref}
      type="button"
      onClick={() => onOpen(index)}
      className="group relative mb-4 block w-full overflow-hidden bg-card focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)",
        transitionDelay: `${(index % 4) * 80}ms`,
      }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-auto block transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="pointer-events-none absolute inset-0 ring-0 group-hover:ring-1 ring-primary/40 transition-all duration-500" />
      <div className="absolute bottom-3 left-4 right-4 text-left text-xs tracking-widest uppercase text-foreground/0 group-hover:text-foreground/90 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
        {alt}
      </div>
    </button>
  );
}

export function MasonryGallery() {
  const [open, setOpen] = useState<number | null>(null);
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="galeria" className="relative py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`flex items-end justify-between mb-12 md:mb-16 transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div>
            <div className="text-xs tracking-[0.4em] uppercase text-primary mb-4">— 01 / Galería</div>
            <h2 className="font-display font-semibold text-4xl md:text-6xl tracking-tight">
              Trabajos <span className="text-gold-gradient italic font-light">seleccionados</span>
            </h2>
          </div>
          <div className="hidden md:block text-sm text-muted-foreground max-w-xs">
            Una colección viva de imágenes recientes. Click para ampliar.
          </div>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
          {gallery.map((p, i) => (
            <GalleryItem key={i} src={p.src} alt={p.alt} index={i} onOpen={setOpen} />
          ))}
        </div>
      </div>

      <Lightbox
        photos={gallery}
        index={open}
        onClose={() => setOpen(null)}
        onChange={setOpen}
      />
    </section>
  );
}
