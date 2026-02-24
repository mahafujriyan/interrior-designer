import PageFrame from "@/app/components/PageFrame";
import Reveal from "@/app/components/Reveal";
import SectionIntro from "@/app/components/SectionIntro";
import { blogPosts } from "@/lib/site-content";

export const metadata = {
  title: "Blog",
  description: "Interior design insights, planning guides, and material strategies.",
};

export default function BlogPage() {
  return (
    <PageFrame>
      <Reveal className="container-shell py-16">
        <SectionIntro
          eyebrow="Blog"
          title="Design Insights"
          description="Educational content to strengthen your decisions before starting a project."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 90}>
              <article className="section-card p-7">
                <p className="text-xs uppercase tracking-[0.14em] text-[var(--accent-dark)]">{post.date}</p>
                <h2 className="mt-2 text-2xl font-semibold">{post.title}</h2>
                <p className="mt-3 text-sm text-[var(--muted)]">{post.excerpt}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </PageFrame>
  );
}
