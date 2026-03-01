import PageFrame from "@/app/components/PageFrame";
import Reveal from "@/app/components/Reveal";
import SectionIntro from "@/app/components/SectionIntro";
import { studio } from "@/lib/site-content";

export const metadata = {
  title: "Contact | Atelier Noor",
  description: "Contact Atelier Noor via form, email, phone, WhatsApp, and map location.",
};

export default function ContactPage() {
  // খুলনার কোঅর্ডিনেটস দিয়ে স্যাটেলাইট ম্যাপ এম্বেড ইউআরএল
  // maptype=satellite এবং q=Khulna ব্যবহার করা হয়েছে
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58850.14234397771!2d89.50346377366336!3d22.802871302360493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff8df7da9908a1%3A0x789406087900b991!2sKhulna!5e1!3m2!1sen!2sbd!4v1709280000000!5m2!1sen!2sbd&maptype=satellite";

  return (
    <PageFrame>
      <Reveal className="container-shell py-16">
        <SectionIntro
          eyebrow="Contact"
          title="Let&apos;s Discuss Your Project"
          description="Share project type, location, and timeline. We will respond with the next steps."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <form className="section-card space-y-5 p-8 bg-white border border-gray-100 rounded-[32px] shadow-sm">
            <div className="space-y-4">
              <input className="w-full rounded-2xl border border-gray-100 bg-gray-50 p-4 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all" placeholder="Full Name" />
              <input className="w-full rounded-2xl border border-gray-100 bg-gray-50 p-4 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all" placeholder="Email Address" type="email" />
              <input className="w-full rounded-2xl border border-gray-100 bg-gray-50 p-4 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all" placeholder="Phone Number" />
              <textarea className="w-full rounded-2xl border border-gray-100 bg-gray-50 p-4 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all" rows={5} placeholder="Tell us about your space and goals" />
            </div>
            <button type="submit" className="w-full py-4 rounded-full bg-black text-white font-semibold hover:bg-zinc-800 transition-transform active:scale-95">
              Send Message
            </button>
          </form>

          {/* Studio Info & Satellite Map */}
          <article className="section-card p-8 bg-[#f9f8f6] border border-gray-100 rounded-[32px] flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">Studio Info</h2>
              <div className="mt-6 space-y-3 text-lg text-gray-600 font-light">
                <p className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                  {studio.location} (Khulna, BD)
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                  {studio.phone}
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                  {studio.email}
                </p>
              </div>
              
              <div className="mt-8 flex gap-4">
                <a href="https://wa.me/8801879041188" target="_blank" className="px-8 py-3 rounded-full border border-black text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Satellite Map Embed Area */}
            <div className="mt-8 overflow-hidden rounded-2xl shadow-inner border border-white h-[280px] relative">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "contrast(1.1) brightness(0.9)" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Atelier Noor Khulna Location"
              ></iframe>
            </div>
            
            <p className="mt-6 text-sm text-gray-400 font-medium tracking-wide">
              Follow us: <span className="text-black ml-1">Instagram / Facebook / LinkedIn</span>
            </p>
          </article>
        </div>
      </Reveal>
    </PageFrame>
  );
}