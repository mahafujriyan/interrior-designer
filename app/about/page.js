
import PageFrame from "@/app/components/PageFrame";
import Reveal from "@/app/components/Reveal";
import SectionIntro from "@/app/components/SectionIntro";
import Image from "next/image";

export const metadata = {
  title: "About | Atelier Noor",
  description: "Meet Atelier Noor, our design philosophy, vision, and studio background.",
};

export default function AboutPage() {
  return (
    <PageFrame>
      <Reveal className="container-shell py-16">
        <SectionIntro
          eyebrow="The Studio"
          title="Founder-Led Design Studio"
          description="Atelier Noor delivers interior solutions grounded in function, material honesty, and timeless composition."
        />

        <div className="grid gap-10 md:grid-cols-2 lg:items-center">
          {/* Founder/Studio Story Card */}
          <article className="section-card p-8 md:p-12 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 rounded-[32px]">
            <h3 className="text-3xl font-semibold tracking-tight">Founder Story</h3>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-gray-500 font-light">
              <p>
                Founded in 2018, the studio started with compact residential projects and evolved into high-end multi-sector interiors.
              </p>
              <p>
                Today, we work with homeowners, hospitality brands, and commercial clients who value design depth and execution rigor.
              </p>
            </div>
          </article>

          {/* রিলেভেন্ট ওয়ার্কিং ইমেজ */}
          <Reveal delay={200}>
            <div className="relative h-[500px] w-full overflow-hidden rounded-[32px] shadow-2xl">
              <Image 
                src="/interrior-about.png" 
                alt="Interior design process - Moodboards and Material samples" 
                fill 
                className="object-cover transition-transform duration-1000 hover:scale-105"
                priority
              />
              {/* ইমেজের ওপর খুব হালকা একটি ওভারলে */}
              <div className="absolute inset-0 bg-black/5" />
            </div>
          </Reveal>

          {/* Design Philosophy Card */}
          <article className="section-card p-8 md:p-12 bg-[#FBFBF9] rounded-[32px] border border-gray-100">
            <h3 className="text-3xl font-semibold tracking-tight italic">Design Philosophy</h3>
            <p className="mt-6 text-lg leading-relaxed text-gray-600 font-light italic">
              "Minimal but never sterile. Luxurious but always livable. We compose spaces through proportion, natural finishes, and layered lighting."
            </p>
          </article>

          {/* Mission & Stats Card */}
          <article className="section-card p-8 md:p-12 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 rounded-[32px]">
            <h3 className="text-3xl font-semibold tracking-tight">Our Impact</h3>
            <p className="mt-6 text-lg leading-relaxed text-gray-500 font-light">
              Our mission is to make refined design more measurable and dependable. Our vision is to be the studio clients trust for lasting interior value.
            </p>
            
            {/* ডাইনামিক স্ট্যাটাস বার */}
            <div className="mt-12 grid grid-cols-2 gap-6 border-t border-gray-100 pt-10">
               <div>
                  <span className="block text-4xl font-bold text-gray-900 tracking-tighter">08+</span>
                  <span className="text-[11px] uppercase tracking-widest text-gray-400 font-bold mt-1 block">Years of Excellence</span>
               </div>
               <div>
                  <span className="block text-4xl font-bold text-gray-900 tracking-tighter">120+</span>
                  <span className="text-[11px] uppercase tracking-widest text-gray-400 font-bold mt-1 block">Delivered Spaces</span>
               </div>
            </div>
          </article>
        </div>
      </Reveal>
    </PageFrame>
  );
}