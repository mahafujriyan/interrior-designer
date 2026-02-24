import Link from "next/link";
import { studio } from "@/lib/site-content";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-[var(--border)]/70 bg-[var(--surface)]/90 backdrop-blur">
      <div className="container-shell flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-semibold">
          {studio.name}
        </Link>
        <nav className="hidden gap-5 text-sm lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-[var(--muted)] hover:text-[var(--foreground)]">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/book-consultation" className="cta-btn text-sm">
          Book Consultation
        </Link>
      </div>
    </header>
  );
}
