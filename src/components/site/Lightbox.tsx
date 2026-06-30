import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Photo } from "@/data/gallery";

type Props = {
  photos: Photo[];
  index: number | null;
  onClose: () => void;
  onChange: (i: number) => void;
};

export function Lightbox({ photos, index, onClose, onChange }: Props) {
  const isOpen = index !== null;

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onChange(((index ?? 0) + 1) % photos.length);
      if (e.key === "ArrowLeft") onChange(((index ?? 0) - 1 + photos.length) % photos.length);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen, index, onChange, onClose, photos.length]);

  if (!isOpen || index === null) return null;
  const photo = photos[index];

  return (
    <div
      className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
      style={{ animation: "fade-in 0.3s ease-out" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-5 right-5 p-2 text-foreground/70 hover:text-primary transition-colors"
        aria-label="Cerrar"
      >
        <X className="w-6 h-6" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onChange((index - 1 + photos.length) % photos.length); }}
        className="absolute left-4 md:left-10 p-3 text-foreground/70 hover:text-primary transition-colors"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onChange((index + 1) % photos.length); }}
        className="absolute right-4 md:right-10 p-3 text-foreground/70 hover:text-primary transition-colors"
        aria-label="Siguiente"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      <img
        key={index}
        src={photo.src}
        alt={photo.alt}
        className="max-h-[88vh] max-w-[90vw] w-auto h-auto object-contain shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]"
        style={{ animation: "fade-in 0.4s ease-out" }}
        onClick={(e) => e.stopPropagation()}
      />
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs tracking-widest uppercase text-foreground/60">
        {String(index + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")} — {photo.alt}
      </div>
    </div>
  );
}
