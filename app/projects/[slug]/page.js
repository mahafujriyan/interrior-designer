import { notFound } from "next/navigation";
import Image from "next/image";
import PageFrame from "@/app/components/PageFrame";
import Reveal from "@/app/components/Reveal";
import { projects } from "@/lib/site-content";

// স্লাগ অনুযায়ী ইমেজ ম্যাপিং (আপনার জেনারেট করা ইমেজগুলো এখানে অ্যাড করুন)
const projectImages = {
  "riverview-residence": "https://images.unsplash.com/photo-1600607687940-4e2a09695d51?q=80&w=1200",
  "northpoint-office": "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200",
  "saffron-bistro": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200",
};

// এই ফাংশনটি স্ট্যাটিক পেজ জেনারেট করতে সাহায্য করে
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({ params }) {
  const { slug } = params;
  
  // ডাটা থেকে প্রজেক্ট খুঁজে বের করা
  const project = projects.find((p) => p.slug === slug);

  // যদি প্রজেক্ট না পাওয়া যায় তবে ৪-৪ পেজ দেখাবে
  if (!project) {
    notFound();
  }

  const displayImage = projectImages[slug] || "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200";

  return (
    <PageFrame>
      <article className="pb-24">
        {/* Header Section */}
        <Reveal className="container-shell pt-16 md:pt-28">
          <div className="max-w-4xl">
            <span className="text-xs uppercase tracking-[0.3em] text-amber-700 font-bold">
              {project.category} — {project.location}
            </span>
            <h1 className="mt-6 text-5xl md:text-8xl font-light tracking-tighter text-gray-900 leading-[1] italic">
              {project.name}
            </h1>
            <p className="mt-10 text-xl md:text-2xl text-gray-500 leading-relaxed font-light max-w-2xl">
              {project.description}
            </p>
          </div>
        </Reveal>

        {/* Full-Width Hero Image */}
        <Reveal delay={200} className="mt-20 px-4 md:px-10">
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-[32px] md:rounded-[60px] shadow-2xl">
            <Image 
              src={displayImage} 
              alt={project.name} 
              fill 
              className="object-cover scale-105 hover:scale-100 transition-transform duration-1000"
              priority
            />
          </div>
        </Reveal>

        {/* Project Info Grid */}
        <Reveal className="container-shell mt-24 grid gap-16 lg:grid-cols-3">
          {/* Left Side: Stats */}
          <div className="space-y-10 border-l border-gray-100 pl-8">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Year</p>
              <p className="mt-2 text-lg font-medium">2023 — Completed</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Services</p>
              <p className="mt-2 text-lg font-medium">Full Interior, FF&E, Lighting</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Area</p>
              <p className="mt-2 text-lg font-medium">4,500 sq. ft.</p>
            </div>
          </div>

          {/* Right Side: Narrative */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-3xl font-medium tracking-tight">The Vision</h3>
            <div className="prose prose-lg text-gray-500 font-light leading-relaxed">
              <p>
                Every space tells a story. For {project.name}, our goal was to bridge the gap between architectural rigor and the softness of human habitability. We focused on material honesty—using unrefined stone, hand-oiled timbers, and bespoke metalwork.
              </p>
              <p className="mt-4">
                The lighting was layered to create various moods throughout the day, ensuring that the transition from a workspace to a relaxation zone feels natural and effortless.
              </p>
            </div>
          </div>
        </Reveal>
      </article>
    </PageFrame>
  );
}