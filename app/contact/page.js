import PageFrame from "@/app/components/PageFrame";
import Reveal from "@/app/components/Reveal";
import SectionIntro from "@/app/components/SectionIntro";
import { studio } from "@/lib/site-content";

export const metadata = {
  title: "Contact",
  description: "Contact Atelier Noor via form, email, phone, WhatsApp, and map location.",
};

export default function ContactPage() {
  return (
    <PageFrame>
      <Reveal className="container-shell py-16">
        <SectionIntro
          eyebrow="Contact"
          title="Let&apos;s Discuss Your Project"
          description="Share project type, location, and timeline. We will respond with the next steps."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <form className="section-card space-y-4 p-7">
            <input className="w-full rounded-xl border border-[var(--border)] bg-white p-3" placeholder="Full Name" />
            <input className="w-full rounded-xl border border-[var(--border)] bg-white p-3" placeholder="Email Address" type="email" />
            <input className="w-full rounded-xl border border-[var(--border)] bg-white p-3" placeholder="Phone Number" />
            <textarea className="w-full rounded-xl border border-[var(--border)] bg-white p-3" rows={5} placeholder="Tell us about your space and goals" />
            <button type="submit" className="cta-btn">
              Send Message
            </button>
          </form>
          <article className="section-card p-7">
            <h2 className="text-2xl font-semibold">Studio Info</h2>
            <p className="mt-4 text-[var(--muted)]">{studio.location}</p>
            <p className="text-[var(--muted)]">{studio.phone}</p>
            <p className="text-[var(--muted)]">{studio.email}</p>
            <a href="https://wa.me/15559041188" className="cta-btn mt-5">
              WhatsApp
            </a>
            <div className="image-block mt-6 min-h-[220px]">
              <div className="flex min-h-[220px] items-center justify-center text-white/90">Google Map Embed Area</div>
            </div>
            <p className="mt-4 text-sm text-[var(--muted)]">Follow us: Instagram / Facebook / Pinterest / LinkedIn</p>
          </article>
        </div>
      </Reveal>
    </PageFrame>
  );
}
