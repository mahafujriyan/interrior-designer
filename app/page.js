"use client"; 

import Link from "next/link";
import Image from "next/image"; 
import { Swiper, SwiperSlide } from "swiper/react"; 
import { Autoplay, Pagination } from "swiper/modules"; 
import { motion } from "framer-motion"; 

// Swiper স্টাইল ইমপোর্ট করুন
import "swiper/css";
import "swiper/css/pagination";

import PageFrame from "@/app/components/PageFrame";
import ProjectCard from "@/app/components/ProjectCard";
import Reveal from "@/app/components/Reveal";
import SectionIntro from "@/app/components/SectionIntro";
import { projects, services, studio, testimonials } from "@/lib/site-content";

// ইন্সটাগ্রাম বা স্টুডিও মোমেন্টের জন্য আলাদা আলাদা রিলেভেন্ট ইমেজ
const studioMoments = [
  "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=400", // ড্রয়িং টেবিল
  "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=400", // টিম মিটিং
  "https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=400", // মেটেরিয়াল সিলেকশন
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=400", // ফাইনাল সাইট ভিজিট
];

export default function Home() {
  return (
    <PageFrame>
      {/* Hero Section with Premium, Sunlit Image Overlay */}
      <section className="relative min-h-[90vh] flex items-center bg-black overflow-hidden">
        {/* Background Image - Joss! */}
        <Image 
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600"
            alt="Atelier Noor - Elevated Living"
            fill
            className="object-cover opacity-60 scale-105"
            priority
        />
        
        <Reveal className="container-shell relative z-10 py-24 text-white md:py-32">
          <p className="text-sm uppercase tracking-[0.2em] text-[#f4e3cd] font-medium">Interior Design Studio</p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-6 max-w-4xl text-6xl leading-[1.1] font-extralight md:text-8xl tracking-tighter"
          >
            {studio.tagline}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 max-w-2xl text-xl text-[#f7efe4] font-light leading-relaxed"
          >
            We design premium residential and commercial interiors with deep focus on materiality, comfort, and timeless identity.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex flex-wrap gap-5"
          >
            <Link href="/book-consultation" className="cta-btn text-base px-10 py-4.5 rounded-full bg-[#f4e3cd] text-black hover:bg-white transition-all font-semibold">
              Book Consultation
            </Link>
            <Link href="/projects" className="ghost-btn text-base px-10 py-4.5 rounded-full border border-white/40 text-white hover:bg-white/10 transition-all">
              Explore Projects
            </Link>
          </motion.div>
        </Reveal>
        
        {/* Subtle bottom gradient to blend with the next section */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Featured Projects - Now with Images in ProjectCard */}
      <Reveal className="container-shell pt-24 pb-16">
        <SectionIntro
          eyebrow="Featured Work"
          title="Selected Projects"
          description="Case studies with concept development, visuals, material planning, and final execution."
        />
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3 mt-12">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Reveal>

      {/* About Studio with a Workspace Image */}
      <Reveal className="container-shell pt-16">
        <div className="section-card grid gap-8 p-8 md:grid-cols-2 lg:items-center md:p-10 bg-white rounded-3xl border border-gray-100 shadow-sm">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent-dark)] font-bold">About Studio</p>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight leading-tight">Designed for Clarity, Crafted for Luxury</h2>
            <p className="mt-6 text-lg text-[var(--muted)] font-light leading-relaxed">
              Our process blends architecture, interior styling, and brand-led storytelling. Every project is tailored to the client&apos;s function and emotional experience.
            </p>
            <Link href="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-dark)] hover:gap-3 transition-all">
              Read Our Story
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path></svg>
            </Link>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl shadow-lg border-4 border-white">
            <Image 
                src="/interrior-about.png"
                alt="Atelier Noor Workspace"
                fill
                className="object-cover"
            />
          </div>
        </div>
      </Reveal>

      <Reveal className="container-shell pt-24">
        <SectionIntro
          eyebrow="Services"
          title="What We Offer"
          description="From compact apartments to large commercial fit-outs, we provide structured design delivery."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 mt-12">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 90}>
              <article className="section-card p-8 h-full flex flex-col justify-between bg-white rounded-3xl border border-gray-100 hover:border-amber-200 hover:shadow-lg transition-all duration-300">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">{service.name}</h3>
                  <p className="mt-4 text-[var(--muted)] font-light leading-relaxed text-base">{service.summary}</p>
                </div>
                <div className="mt-8 border-t border-gray-100 pt-6 flex items-center justify-between">
                  <p className="text-sm font-semibold text-black">{service.price}</p>
                  <p className="text-xs uppercase tracking-[0.12em] text-amber-700 bg-amber-50 px-3 py-1 rounded-full">{service.timeline}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Reveal>

   {/* Running Testimonials Slider - Left to Right! */}
<Reveal className="container-shell pt-24">
  <SectionIntro
    eyebrow="Testimonials"
    title="Client Feedback"
    description="Proof of process quality and measurable project outcomes."
  />
  <div className="testimonial-slider pb-20 mt-12">
    <Swiper
      // মডিউলগুলো অবশ্যই এখানে থাকতে হবে
      modules={[Autoplay, Pagination]} 
      spaceBetween={30}
      slidesPerView={1}
      loop={true} 
      autoplay={{
        delay: 4000, // ৪ সেকেন্ড পর পর স্লাইড হবে
        disableOnInteraction: false, 
        reverseDirection: false, // ডান থেকে বামে যাবে (ডিফল্ট)
      }}
      pagination={{ clickable: true }}
      breakpoints={{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="pb-12"
    >
      {testimonials.map((item) => (
        <SwiperSlide key={item.name}>
          <div className="section-card p-10 h-[320px] flex flex-col justify-between bg-[#f9f8f6] border border-gray-100 rounded-[32px] shadow-sm">
            <div className="relative">
              <span className="text-6xl text-amber-600 font-serif absolute -top-8 -left-3 opacity-15">"</span>
              <p className="text-gray-700 leading-relaxed italic relative z-10 text-lg">
                &quot;{item.quote}&quot;
              </p>
            </div>
            <footer className="mt-8 border-t border-gray-200 pt-6">
              <p className="font-bold text-lg text-black">{item.name}</p>
              <p className="text-sm text-[var(--muted)] uppercase tracking-wider">{item.role}</p>
            </footer>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</Reveal>

      {/* Studio Moments with Relevant, Unique Images */}
      <Reveal className="container-shell py-16 mb-24 mt-12">
        <SectionIntro
          eyebrow="Instagram"
          title="Studio Moments"
          description="Connect with our daily work, progress updates, and styling snapshots."
        />
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4 mt-12">
          {studioMoments.map((src, index) => (
            <Reveal key={index} delay={index * 85}>
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100 group shadow-sm">
                <Image 
                    src={src}
                    alt={`Studio moment ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-9 h-9 text-white opacity-80" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24"><path d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path></svg>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </PageFrame>
  );
}