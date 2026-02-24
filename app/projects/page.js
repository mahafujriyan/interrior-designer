import PageFrame from "@/app/components/PageFrame";
import ProjectCard from "@/app/components/ProjectCard";
import Reveal from "@/app/components/Reveal";
import SectionIntro from "@/app/components/SectionIntro";
import { projects } from "@/lib/site-content";

export const metadata = {
  title: "Projects",
  description: "Explore residential, commercial, and hospitality interior case studies.",
};

export default function ProjectsPage() {
  return (
    <PageFrame>
      <Reveal className="container-shell py-16">
        <SectionIntro
          eyebrow="Projects"
          title="Portfolio Case Studies"
          description="Browse selected projects across Residential, Commercial, and Hospitality categories."
        />
        <div className="mb-8 flex flex-wrap gap-3 text-sm">
          {["All", "Residential", "Commercial", "Hospitality"].map((tag) => (
            <span key={tag} className="rounded-full border border-[var(--border)] px-4 py-2">
              {tag}
            </span>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Reveal>
    </PageFrame>
  );
}
