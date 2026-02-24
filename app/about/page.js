import PageFrame from "@/app/components/PageFrame";
import Reveal from "@/app/components/Reveal";
import SectionIntro from "@/app/components/SectionIntro";

export const metadata = {
  title: "About",
  description: "Meet Atelier Noor, our design philosophy, vision, and studio background.",
};

export default function AboutPage() {
  return (
    <PageFrame>
      <Reveal className="container-shell py-16">
        <SectionIntro
          eyebrow="About"
          title="Founder-Led Design Studio"
          description="Atelier Noor delivers interior solutions grounded in function, material honesty, and timeless composition."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <article className="section-card p-7">
            <h3 className="text-2xl font-semibold">Founder Story</h3>
            <p className="mt-3 text-[var(--muted)]">
              Founded in 2018, the studio started with compact residential projects and evolved into high-end multi-sector interiors.
            </p>
            <p className="mt-3 text-[var(--muted)]">
              Today, we work with homeowners, hospitality brands, and commercial clients who value design depth and execution rigor.
            </p>
          </article>
          <div className="image-block min-h-[300px]" />
          <article className="section-card p-7">
            <h3 className="text-2xl font-semibold">Design Philosophy</h3>
            <p className="mt-3 text-[var(--muted)]">
              Minimal but never sterile. Luxurious but always livable. We compose spaces through proportion, natural finishes, and layered lighting.
            </p>
          </article>
          <article className="section-card p-7">
            <h3 className="text-2xl font-semibold">Mission and Vision</h3>
            <p className="mt-3 text-[var(--muted)]">
              Our mission is to make refined design more measurable and dependable. Our vision is to be the studio clients trust for lasting interior value.
            </p>
            <p className="mt-4 text-sm text-[var(--accent-dark)]">
              8+ years experience · 120+ delivered spaces · Certified project workflows
            </p>
          </article>
        </div>
      </Reveal>
    </PageFrame>
  );
}
