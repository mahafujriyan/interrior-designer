import Link from "next/link";
import PageFrame from "@/app/components/PageFrame";
import ProjectCard from "@/app/components/ProjectCard";
import Reveal from "@/app/components/Reveal";
import SectionIntro from "@/app/components/SectionIntro";
import { projects, services, studio, testimonials } from "@/lib/site-content";

export default function Home() {
  return (
    <PageFrame>
      <section className="hero-mesh">
        <Reveal className="container-shell py-24 text-white md:py-32">
          <p className="text-sm uppercase tracking-[0.2em] text-[#f4e3cd]">Interior Design Studio</p>
          <h1 className="mt-4 max-w-3xl text-5xl leading-tight font-semibold md:text-7xl">
            {studio.tagline}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-[#f7efe4]">
            We design premium residential and commercial interiors with deep focus on materiality, comfort, and timeless identity.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/book-consultation" className="cta-btn">
              Book Consultation
            </Link>
            <Link href="/projects" className="ghost-btn border-white/40 text-white">
              Explore Projects
            </Link>
          </div>
        </Reveal>
      </section>

      <Reveal className="container-shell pt-16">
        <SectionIntro
          eyebrow="Featured Work"
          title="Selected Projects"
          description="Case studies with concept development, visuals, material planning, and final execution."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Reveal>

      <Reveal className="container-shell pt-16">
        <div className="section-card grid gap-8 p-8 md:grid-cols-2 md:p-10">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent-dark)]">About Studio</p>
            <h2 className="mt-2 text-4xl font-semibold">Designed for Clarity, Crafted for Luxury</h2>
            <p className="mt-4 text-[var(--muted)]">
              Our process blends architecture, interior styling, and brand-led storytelling. Every project is tailored to the client&apos;s function and emotional experience.
            </p>
            <Link href="/about" className="mt-6 inline-flex text-sm font-semibold text-[var(--accent-dark)]">
              Read Our Story
            </Link>
          </div>
          <div className="image-block min-h-[280px]" />
        </div>
      </Reveal>

      <Reveal className="container-shell pt-16">
        <SectionIntro
          eyebrow="Services"
          title="What We Offer"
          description="From compact apartments to large commercial fit-outs, we provide structured design delivery."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 90}>
              <article className="section-card p-6">
                <h3 className="text-2xl font-semibold">{service.name}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{service.summary}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.12em] text-[var(--accent-dark)]">{service.timeline}</p>
                <p className="text-sm font-semibold">{service.price}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal className="container-shell pt-16">
        <SectionIntro
          eyebrow="Testimonials"
          title="Client Feedback"
          description="Proof of process quality and measurable project outcomes."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 100}>
              <blockquote className="section-card p-6">
                <p className="text-[var(--muted)]">&quot;{item.quote}&quot;</p>
                <footer className="mt-4 text-sm font-semibold">
                  {item.name} - <span className="font-normal text-[var(--muted)]">{item.role}</span>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal className="container-shell py-16">
        <SectionIntro
          eyebrow="Instagram"
          title="Studio Moments"
          description="Connect with our daily work, progress updates, and styling snapshots."
        />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[1, 2, 3, 4].map((slot, index) => (
            <Reveal key={slot} delay={index * 85}>
              <div className="image-block min-h-[170px]" />
            </Reveal>
          ))}
        </div>
      </Reveal>
    </PageFrame>
  );
}
