"use client";

import { useState } from "react";
import Image from "next/image";
import PageFrame from "@/app/components/PageFrame";
import Reveal from "@/app/components/Reveal";
import SectionIntro from "@/app/components/SectionIntro";

const galleryData = [
  // Residential
  { category: "Residential", src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000", alt: "Modern Living Room", height: 400 },
  { category: "Residential", src: "https://images.unsplash.com/photo-1600607687940-4e2a09695d51?q=80&w=1000", alt: "Luxury Bedroom", height: 280 },
  { category: "Residential", src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1000", alt: "Minimalist Kitchen", height: 350 },
  { category: "Residential", src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000", alt: "Dining Space", height: 450 },
  { category: "Residential", src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000", alt: "Sunlit Patio", height: 300 },

  // Commercial
  { category: "Commercial", src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000", alt: "Corporate Office Lounge", height: 320 },
  { category: "Commercial", src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1000", alt: "Modern Meeting Room", height: 420 },
  { category: "Commercial", src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1000", alt: "Coworking Space", height: 290 },
  { category: "Commercial", src: "https://images.unsplash.com/photo-1664575196412-ed801e83f4a8?q=80&w=1000", alt: "Reception Area", height: 380 },
  { category: "Commercial", src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000", alt: "Creative Studio", height: 340 },

  // Hospitality
  { category: "Hospitality", src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000", alt: "Luxury Hotel Lobby", height: 460 },
  { category: "Hospitality", src: "https://images.unsplash.com/photo-1551882547-ff43c63efe5c?q=80&w=1000", alt: "Boutique Resort Room", height: 310 },
  { category: "Hospitality", src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000", alt: "Fine Dining Restaurant", height: 390 },
  { category: "Hospitality", src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1000", alt: "Poolside Lounge", height: 270 },
  { category: "Hospitality", src: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1000", alt: "Modern Cafe Interior", height: 410 },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  // ফিল্টার লজিক
  const filteredImages = activeCategory === "All" 
    ? galleryData 
    : galleryData.filter(img => img.category === activeCategory);

  return (
    <PageFrame>
      <Reveal className="container-shell py-16">
        <SectionIntro
          eyebrow="Portfolio"
          title="Visual Inspiration Board"
          description="Explore our curated collection of residential, commercial, and hospitality interiors."
        />

        {/* ফিল্টার ট্যাব */}
        <div className="mb-10 flex flex-wrap gap-3 text-sm">
          {["All", "Residential", "Commercial", "Hospitality"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full border px-6 py-2.5 transition-all duration-300 ${
                activeCategory === cat 
                ? "bg-black text-white border-black" 
                : "border-[var(--border)] hover:bg-gray-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ইমেজ গ্রিড */}
        <div className="columns-1 gap-5 md:columns-2 lg:columns-3">
          {filteredImages.map((img, index) => (
            <Reveal key={img.src} delay={index * 50}>
              <div 
                className="group relative mb-5 cursor-zoom-in overflow-hidden break-inside-avoid rounded-[20px] bg-gray-100"
                onClick={() => setSelectedImage(img)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={img.height}
                  className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* হোভার ওভারলে ও টেক্সট */}
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 via-transparent to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-[10px] uppercase tracking-widest text-white/80">{img.category}</span>
                  <h3 className="text-lg font-medium text-white">{img.alt}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md transition-all duration-500"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute right-8 top-8 text-white transition-transform hover:scale-125">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
          
          <div className="relative max-h-[85vh] max-w-6xl">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              className="max-h-[80vh] w-auto rounded-lg shadow-2xl"
            />
            <div className="mt-4 text-center">
              <h2 className="text-xl font-light text-white">{selectedImage.alt}</h2>
              <p className="text-sm text-white/50">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </PageFrame>
  );
}