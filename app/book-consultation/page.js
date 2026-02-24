import PageFrame from "@/app/components/PageFrame";
import Reveal from "@/app/components/Reveal";
import SectionIntro from "@/app/components/SectionIntro";

export const metadata = {
  title: "Book Consultation",
  description: "Book an interior design consultation for residential or commercial projects.",
};

export default function BookConsultationPage() {
  return (
    <PageFrame>
      <Reveal className="container-shell py-16">
        <SectionIntro
          eyebrow="Book Consultation"
          title="Schedule Your Discovery Call"
          description="Fill out this form and our team will contact you with available slots."
        />
        <form className="section-card grid gap-4 p-7 md:grid-cols-2">
          <input className="rounded-xl border border-[var(--border)] bg-white p-3" placeholder="Full Name" />
          <input className="rounded-xl border border-[var(--border)] bg-white p-3" type="email" placeholder="Email Address" />
          <input className="rounded-xl border border-[var(--border)] bg-white p-3" placeholder="Phone Number" />
          <select className="rounded-xl border border-[var(--border)] bg-white p-3">
            <option>Project Type</option>
            <option>Residential</option>
            <option>Commercial</option>
            <option>Hospitality</option>
          </select>
          <input className="rounded-xl border border-[var(--border)] bg-white p-3" type="date" />
          <input className="rounded-xl border border-[var(--border)] bg-white p-3" placeholder="Project Location" />
          <textarea
            className="rounded-xl border border-[var(--border)] bg-white p-3 md:col-span-2"
            rows={5}
            placeholder="Project goals, budget range, and preferred timeline"
          />
          <div className="md:col-span-2">
            <button type="submit" className="cta-btn">
              Request Consultation
            </button>
          </div>
        </form>
      </Reveal>
    </PageFrame>
  );
}
