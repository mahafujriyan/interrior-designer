import PageFrame from "@/app/components/PageFrame";
import Reveal from "@/app/components/Reveal";
import SectionIntro from "@/app/components/SectionIntro";

export const metadata = {
  title: "Gallery",
  description: "High-resolution interior gallery with category-inspired visual blocks.",
};

export default function GalleryPage() {
  return (
    <PageFrame>
      <Reveal className="container-shell py-16">
        <SectionIntro
          eyebrow="Gallery"
          title="Visual Gallery"
          description="A masonry-inspired visual board for residential, commercial, and hospitality inspiration."
        />
        <div className="mb-8 flex flex-wrap gap-3 text-sm">
          {["All", "Residential", "Commercial", "Hospitality"].map((category) => (
            <span key={category} className="rounded-full border border-[var(--border)] px-4 py-2">
              {category}
            </span>
          ))}
        </div>
        <div className="columns-1 gap-4 md:columns-2 lg:columns-3">
          {[280, 360, 300, 260, 320, 380, 290, 340, 260].map((height, index) => (
            <Reveal key={index} delay={index * 70}>
              <div className="image-block mb-4 break-inside-avoid rounded-[18px]" style={{ minHeight: `${height}px` }} />
            </Reveal>
          ))}
        </div>
      </Reveal>
    </PageFrame>
  );
}
