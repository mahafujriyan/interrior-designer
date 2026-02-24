import Link from "next/link";
import Reveal from "@/app/components/Reveal";

export default function ProjectCard({ project }) {
  return (
    <Reveal>
      <article className="section-card overflow-hidden p-5">
        <div className="image-block" />
        <div className="mt-5">
          <p className="text-xs uppercase tracking-[0.15em] text-[var(--accent-dark)]">{project.category}</p>
          <h3 className="mt-1 text-2xl font-semibold">{project.name}</h3>
          <p className="text-sm text-[var(--muted)]">{project.location}</p>
          <p className="mt-3 line-clamp-2 text-sm text-[var(--muted)]">{project.description}</p>
          <Link href={`/projects/${project.slug}`} className="mt-4 inline-flex text-sm font-semibold text-[var(--accent-dark)]">
            View Details
          </Link>
        </div>
      </article>
    </Reveal>
  );
}
