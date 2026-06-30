import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs tracking-widest uppercase text-muted-foreground">
        <div>© {new Date().getFullYear()} {profile.name}</div>
        <div>Todos los derechos reservados</div>
      </div>
    </footer>
  );
}
