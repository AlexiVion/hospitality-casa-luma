import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "The fictional Casa Luma property story and design concept.",
};

export default function AboutPage() {
  return (
    <>
      <section className="section-shell py-20 md:py-28">
        <p className="eyebrow text-[#a85f47]">About Casa Luma</p>
        <h1 className="display mt-4 max-w-4xl text-5xl leading-[1.02] md:text-7xl">
          A small hotel concept built around light, materials, and a slower rhythm.
        </h1>
      </section>

      <section className="section-shell grid gap-10 pb-24 md:grid-cols-[1.05fr_0.95fr] md:items-center md:pb-32">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85"
          alt="Warm contemporary architecture with natural materials"
          className="aspect-[4/5] w-full rounded-[14px] object-cover"
        />
        <div className="md:pl-10">
          <p className="eyebrow text-[#5e685f]">The concept</p>
          <h2 className="display mt-3 text-4xl md:text-5xl">Independent hospitality without the generic hotel language.</h2>
          <div className="mt-6 grid gap-5 text-sm leading-7 text-[#5e685f]">
            <p>
              Casa Luma is fictional, but the business problem is real: small properties often need a first-party digital experience that feels as considered as the stay itself while still making practical information and booking easy to understand.
            </p>
            <p>
              The concept imagines ten rooms, three categories, warm local materials, simple service, and a direct-booking journey that can sit in front of the hotel&apos;s existing operational systems rather than replacing them.
            </p>
            <p>
              That distinction matters. The website is responsible for trust, discovery, room presentation, and booking intent. Live inventory, payment, reservation records, PMS data, and channel synchronization remain with hospitality software built for those jobs.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#fffdf8] py-20 md:py-28">
        <div className="section-shell grid gap-8 md:grid-cols-3">
          {[
            ["10 rooms", "Enough variety to compare, small enough to keep the property identity intimate."],
            ["3 categories", "Clear differences in space, outlook, and amenities instead of confusing rate-plan complexity."],
            ["1 booking path", "The same direct-booking logic stays visible whether the guest starts at Home or on a room page."],
          ].map(([title, copy]) => (
            <div key={title} className="border-t border-black/10 pt-6">
              <p className="display text-4xl">{title}</p>
              <p className="mt-4 text-sm leading-7 text-[#5e685f]">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-24 text-center md:py-32">
        <p className="eyebrow text-[#a85f47]">See the rooms</p>
        <h2 className="display mx-auto mt-4 max-w-3xl text-4xl md:text-6xl">The concept becomes useful when the guest can make a decision.</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/rooms" className="rounded-[10px] border border-black/15 px-5 py-3 text-sm font-bold">Explore rooms</Link>
          <Link href="/booking" className="rounded-[10px] bg-[#253028] px-5 py-3 text-sm font-bold text-white">Check availability</Link>
        </div>
      </section>
    </>
  );
}
