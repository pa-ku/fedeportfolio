import { Mail, Instagram, MessageCircle, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { useInView } from "@/hooks/useInView";

const items = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: `@${profile.instagram}`,
    href: `https://instagram.com/${profile.instagram}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: `+${profile.whatsapp}`,
    href: `https://wa.me/${profile.whatsapp}`,
  },
];

export function Contact() {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <section id="contacto" className="relative py-28 md:py-40 border-t border-border/40">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div
          className={`mb-16 transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="text-xs tracking-[0.4em] uppercase text-primary mb-4">— 03 / Contacto</div>
          <h2 className="font-display font-semibold text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.95] max-w-4xl">
            ¿Tenés un proyecto? <span className="text-gold-gradient italic font-light">Hablemos.</span>
          </h2>
        </div>

        <div className="divide-y divide-border/60 border-y border-border/60">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <a
                key={it.label}
                href={it.href}
                target={it.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className={`group flex items-center justify-between py-8 md:py-10 transition-all duration-700 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${300 + i * 120}ms` }}
              >
                <div className="flex items-center gap-6 md:gap-10">
                  <div className="w-12 h-12 md:w-14 md:h-14 border border-border/60 flex items-center justify-center text-primary group-hover:border-primary group-hover:bg-primary/5 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-1">{it.label}</div>
                    <div className="font-display text-2xl md:text-4xl tracking-tight group-hover:text-gold-gradient transition-all">
                      {it.value}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 text-foreground/40 group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-500" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
