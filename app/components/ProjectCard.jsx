import Link from "next/link";
import Image from "next/image";
import Reveal from "@/app/components/Reveal";

export default function ProjectCard({ project }) {
  return (
    <Reveal>
      <Link href={`/projects/${project.slug}`} className="group block">
        <article className="relative overflow-hidden rounded-[24px] bg-gray-100 shadow-sm transition-all duration-500 hover:shadow-2xl">
          
          {/* ইমেজ সেকশন */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            
            {/* ডার্ক ওভারলে (Hover Effect) */}
            <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex items-center justify-center">
              <span className="translate-y-4 rounded-full border border-white/30 bg-white/10 px-6 py-2 text-sm font-medium text-white backdrop-blur-md transition-transform duration-500 group-hover:translate-y-0">
                View Project
              </span>
            </div>

            {/* ছোট ক্যাটাগরি ট্যাগ (ইমেজের ওপর) */}
            <div className="absolute left-6 top-6">
              <span className="rounded-full bg-white/80 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-black backdrop-blur-sm">
                {project.category}
              </span>
            </div>
          </div>

          {/* টেক্সট সেকশন (নিচে) */}
          <div className="p-6">
            <h3 className="text-2xl font-semibold tracking-tight text-gray-900 transition-colors group-hover:text-amber-700">
              {project.name}
            </h3>
            <div className="mt-2 flex items-center gap-2 text-sm text-gray-500 font-light">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              {project.location}
            </div>
            
            <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-gray-400 font-light">
              {project.description}
            </p>
          </div>
        </article>
      </Link>
    </Reveal>
  );
}