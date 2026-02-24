import Link from "next/link";
import { studio } from "@/lib/site-content";

export default function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="container-shell grid gap-8 py-10 md:grid-cols-3">
        <div>
          <p className="text-xl font-semibold">{studio.name}</p>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Premium interior design studio for residential and commercial spaces.
          </p>
        </div>
        <div>
          <p className="font-semibold">Quick Links</p>
          <div className="mt-2 flex flex-wrap gap-3 text-sm text-[var(--muted)]">
            <Link href="/projects">Projects</Link>
            <Link href="/services">Services</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <p className="font-semibold">Contact</p>
          <p className="mt-2 text-sm text-[var(--muted)]">{studio.location}</p>
          <p className="text-sm text-[var(--muted)]">{studio.phone}</p>
          <p className="text-sm text-[var(--muted)]">{studio.email}</p>
        </div>
      </div>
    </footer>
  );
}
