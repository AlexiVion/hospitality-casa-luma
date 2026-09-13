import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Experiences",
  description: "Fictional Casa Luma experience content designed to show how a boutique hotel can sell the stay beyond the room.",
};

const experiences = [
  {
    title: "Slow mornings",
    copy: "Breakfast stretches into the first part of the day: local fruit, warm bread, good coffee, and no rush to turn the table.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "Hills on foot",
    copy: "Short self-guided walks and longer local routes give the stay a simple rhythm: leave after breakfast, return before the light changes.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "Water and shade",
    copy: "The concept pairs warm afternoons with a small pool, quiet outdoor corners, and places where doing very little feels intentional.",
    image: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=1400&q=85",
  },
];

export default function ExperiencesPage() {
  return (
    <>
      <section className="section-shell py-20 md:py-28">
        <p className="eyebrow text-[#a85f47]">Experiences</p>
        <div className="mt-4 grid gap-10 md:grid-cols-[1fr_0.75fr] md:items-end">
          <h1 className="display max-w-3xl text-5xl leading-none md:text-7xl">The room is only one part of the stay.</h1>
          <p className="max-w-xl text-base leading-8 text-[#5e685f] md:justify-self-end">
            This page demonstrates how a hotel can add context around place, pace, and local experience without burying the booking journey under generic destination content.
          </p>
        </div>
      </section>

      <section className="section-shell grid gap-8 pb-24 md:pb-32">
        {experiences.map((experience, index) => (
          <article key={experience.title} className="grid gap-7 md:grid-cols-2 md:items-center">
            <img
              src={experience.image}
              alt="Fictional Casa Luma experience reference"
              className={`aspect-[4/3] w-full rounded-[14px] object-cover ${index % 2 === 1 ? "md:order-2" : ""}`}
              loading="lazy"
            />
            <div className={index % 2 === 1 ? "md:pr-10" : "md:pl-10"}>
              <p className="eyebrow text-[#5e685f]">0{index + 1}</p>
              <h2 className="display mt-3 text-4xl md:text-5xl">{experience.title}</h2>
              <p className="mt-5 max-w-lg text-sm leading-7 text-[#5e685f]">{experience.copy}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-[#253028] py-20 text-white md:py-28">
        <div className="section-shell grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="eyebrow text-white/55">Ready when you are</p>
            <h2 className="display mt-4 max-w-3xl text-4xl leading-tight md:text-6xl">Choose dates, then choose the room that fits the trip.</h2>
          </div>
          <Link href="/booking" className="rounded-[10px] bg-[#fffdf8] px-5 py-3 text-sm font-bold text-[#253028]">
            Check availability
          </Link>
        </div>
      </section>
    </>
  );
}
