import aboutImg from "@/assets/about.jpg";
import { profile } from "@/data/profile";
import { useInView } from "@/hooks/useInView";

export function About() {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <section id="sobre-mi" className="relative py-28 md:py-40 border-t border-border/40">
      <div ref={ref} className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-10 md:gap-16 items-center">
        <div
          className={`md:col-span-5 transition-all duration-1000 ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
          }`}
        >
          <div className="relative">
            <img
              src={aboutImg}
              alt="Federico Kuhn"
              loading="lazy"
              width={900}
              height={1100}
              className="w-full h-auto object-cover"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-primary/60 -z-10" />
          </div>
        </div>

        <div
          className={`md:col-span-7 transition-all duration-1000 delay-200 ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
          }`}
        >
          <div className="text-xs tracking-[0.4em] uppercase text-primary mb-4">— 02 / Sobre mí</div>
          <h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tight mb-8">
            Una mirada al <span className="text-gold-gradient italic font-light">detalle</span>
          </h2>
          <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
            {profile.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
            {profile.stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl md:text-4xl text-gold-gradient font-semibold">{s.value}</div>
                <div className="mt-2 text-[11px] tracking-widest uppercase text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
