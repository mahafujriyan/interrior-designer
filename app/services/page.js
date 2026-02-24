import Link from "next/link";
import PageFrame from "@/app/components/PageFrame";
import Reveal from "@/app/components/Reveal";
import SectionIntro from "@/app/components/SectionIntro";
import { services } from "@/lib/site-content";

export const metadata = {
  title: "Services",
  description: "Interior design services with process, timeline, and starting pricing.",
};

export default function ServicesPage() {
  return (
    <PageFrame>
      <Reveal className="container-shell py-16">
        <SectionIntro
          eyebrow="Services"
          title="Design Services"
          description="Each service includes a clear process, realistic timeline, and defined project scope."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 85}>
              <article className="section-card p-7">
                <h2 className="text-3xl font-semibold">{service.name}</h2>
                <p className="mt-3 text-[var(--muted)]">{service.summary}</p>
                <div className="mt-4 flex gap-4 text-sm">
                  <p>
                    <span className="font-semibold">Timeline:</span> {service.timeline}
                  </p>
                  <p>
                    <span className="font-semibold">Price:</span> {service.price}
                  </p>
                </div>
                <ol className="mt-5 list-decimal pl-5 text-sm text-[var(--muted)]">
                  {service.steps.map((step) => (
                    <li key={step} className="mb-1">
                      {step}
                    </li>
                  ))}
                </ol>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <Link href="/book-consultation" className="cta-btn">
            Start a Consultation
          </Link>
        </div>
      </Reveal>
    </PageFrame>
  );
}
