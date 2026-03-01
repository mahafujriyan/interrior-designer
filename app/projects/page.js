"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // অ্যানিমেশনের জন্য
import PageFrame from "@/app/components/PageFrame";
import ProjectCard from "@/app/components/ProjectCard";
import Reveal from "@/app/components/Reveal";
import SectionIntro from "@/app/components/SectionIntro";
import { projects } from "@/lib/site-content";

const projectThumbnails = {
  "riverview-residence": "https://images.unsplash.com/photo-1600607687940-4e2a09695d51?q=80&w=800",
  "northpoint-office": "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800",
  "saffron-bistro": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800",
};

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <PageFrame>
      <Reveal className="container-shell py-16">
        <SectionIntro
          eyebrow="Portfolio"
          title="Portfolio Case Studies"
          description="Browse selected projects across Residential, Commercial, and Hospitality categories."
        />

        {/* প্রিমিয়াম ফিল্টার বাটন সেকশন */}
        <div className="mb-12 flex flex-wrap items-center gap-3 text-sm">
          <span className="mr-2 text-[10px] uppercase tracking-widest text-gray-400 font-bold">Filter By</span>
          {["All", "Residential", "Commercial", "Hospitality"].map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveCategory(tag)}
              className={`relative rounded-full px-6 py-2.5 transition-all duration-500 ${
                activeCategory === tag
                  ? "bg-black text-white shadow-xl shadow-black/20"
                  : "border border-gray-200 text-gray-500 hover:border-black hover:text-black"
              }`}
            >
              {tag}
              {activeCategory === tag && (
                <motion.span
                  layoutId="activePill"
                  className="absolute inset-0 rounded-full bg-black -z-10"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* প্রোজেক্ট গ্রিড উইথ অ্যানিমেশন */}
        <motion.div 
          layout
          className="grid gap-x-8 gap-y-12 md:grid-cols-2 xl:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard 
                  project={{
                    ...project,
                    image: projectThumbnails[project.slug] || "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800"
                  }} 
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="mt-32 text-center"
          >
            <p className="text-xl font-light text-gray-400">No projects found in this category.</p>
          </motion.div>
        )}
      </Reveal>

      {/* কন্টাক্ট সেকশন (যাতে রিয়েল মনে হয়) */}
      <div className="container-shell mb-24 mt-20">
        <div className="rounded-[40px] bg-[#f9f8f6] p-12 text-center md:p-20">
          <h2 className="text-3xl md:text-5xl font-light italic tracking-tight">
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-gray-500">
            Let's create something extraordinary together. From initial concept to final styling.
          </p>
          <button className="mt-10 rounded-full bg-black px-10 py-4 text-white hover:bg-zinc-800 transition-transform active:scale-95">
            Book a Consultation
          </button>
        </div>
      </div>
    </PageFrame>
  );
}