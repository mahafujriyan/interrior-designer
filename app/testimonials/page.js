import PageFrame from "@/app/components/PageFrame";
import Reveal from "@/app/components/Reveal";
import SectionIntro from "@/app/components/SectionIntro";
import { testimonials } from "@/lib/site-content";

export const metadata = {
  title: "Testimonials",
  description: "Client testimonials and outcomes from interior design projects.",
};

export default function TestimonialsPage() {
  return (
    <PageFrame>
      <Reveal className="container-shell py-16">
        <SectionIntro
          eyebrow="Testimonials"
          title="What Clients Say"
          description="Experience-focused feedback from residential owners, business teams, and developers."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 100}>
              <article className="section-card p-7">
                <p className="text-lg text-[var(--muted)]">&quot;{item.quote}&quot;</p>
                <p className="mt-5 font-semibold">{item.name}</p>
                <p className="text-sm text-[var(--muted)]">{item.role}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </PageFrame>
  );
}
