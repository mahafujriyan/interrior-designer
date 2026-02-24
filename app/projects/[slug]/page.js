import { notFound } from "next/navigation";
import PageFrame from "@/app/components/PageFrame";
import Reveal from "@/app/components/Reveal";
import { projects } from "@/lib/site-content";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) {
    return { title: "Project Not Found" };
  }
  return {
    title: project.name,
    description: `${project.category} case study in ${project.location}.`,
  };
}

export default function ProjectDetailPage({ params }) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) {
    notFound();
  }

  return (
    <PageFrame>
      <Reveal className="container-shell py-16">
        <p className="text-sm uppercase tracking-[0.18em] text-[var(--accent-dark)]">{project.category}</p>
        <h1 className="mt-2 text-5xl font-semibold">{project.name}</h1>
        <p className="mt-2 text-[var(--muted)]">{project.location}</p>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="image-block min-h-[320px]" />
          <article className="section-card p-7">
            <h2 className="text-3xl font-semibold">Project Overview</h2>
            <p className="mt-3 text-[var(--muted)]">{project.description}</p>
            <p className="mt-5 text-sm text-[var(--muted)]">
              <span className="font-semibold text-[var(--foreground)]">Timeline:</span> {project.timeline}
            </p>
            <p className="text-sm text-[var(--muted)]">
              <span className="font-semibold text-[var(--foreground)]">Budget:</span> {project.budget}
            </p>
          </article>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="section-card p-7">
            <h3 className="text-2xl font-semibold">Client Requirement</h3>
            <p className="mt-3 text-[var(--muted)]">{project.clientRequirement}</p>
          </article>
          <article className="section-card p-7">
            <h3 className="text-2xl font-semibold">Concept and Moodboard</h3>
            <p className="mt-3 text-[var(--muted)]">{project.concept}</p>
          </article>
          <article className="section-card p-7">
            <h3 className="text-2xl font-semibold">3D Render and Final Photography</h3>
            <p className="mt-3 text-[var(--muted)]">Rendered approval scenes were translated into built details with styling refinements.</p>
          </article>
          <article className="section-card p-7">
            <h3 className="text-2xl font-semibold">Before and After</h3>
            <p className="mt-3 text-[var(--muted)]">Existing layout constraints were reworked for circulation, storage, and visual balance.</p>
          </article>
          <article className="section-card p-7">
            <h3 className="text-2xl font-semibold">Materials Used</h3>
            <p className="mt-3 text-[var(--muted)]">{project.materials}</p>
          </article>
          <article className="section-card p-7">
            <h3 className="text-2xl font-semibold">Client Feedback</h3>
            <p className="mt-3 text-[var(--muted)]">&quot;{project.feedback}&quot;</p>
          </article>
        </div>
      </Reveal>
    </PageFrame>
  );
}
