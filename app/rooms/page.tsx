import type { Metadata } from "next";
import Link from "next/link";
import { AvailabilityBar } from "@/components/availability-bar";
import { rooms } from "@/data/rooms";

export const metadata: Metadata = {
  title: "Rooms",
  description: "Compare Casa Luma's three fictional room categories and continue into the direct-booking demo.",
};

export default function RoomsPage() {
  return (
    <>
      <section className="section-shell grid gap-10 py-20 md:grid-cols-[1fr_0.7fr] md:items-end md:py-28">
        <div>
          <p className="eyebrow text-[#a85f47]">Rooms</p>
          <h1 className="display mt-4 max-w-3xl text-5xl leading-[1.02] md:text-7xl">Three ways to stay, all intentionally small-scale.</h1>
        </div>
        <p className="max-w-xl text-base leading-8 text-[#5e685f] md:justify-self-end">
          Casa Luma's room categories are designed to be easy to compare before a guest opens the details. Capacity, outlook, space, and standout features are visible at a glance.
        </p>
      </section>

      <section className="section-shell pb-16">
        <AvailabilityBar compact />
      </section>

      <section className="section-shell grid gap-8 pb-24 md:pb-32">
        {rooms.map((room, index) => (
          <article
            key={room.slug}
            className="grid overflow-hidden rounded-[14px] border border-black/10 bg-[#fffdf8] lg:grid-cols-[1.15fr_0.85fr]"
          >
            <img
              src={room.image}
              alt={`${room.name} interior`}
              className={`h-full min-h-[360px] w-full object-cover ${index % 2 === 1 ? "lg:order-2" : ""}`}
              loading="lazy"
            />
            <div className="flex flex-col justify-between p-7 md:p-10">
              <div>
                <p className="eyebrow text-[#a85f47]">{room.eyebrow}</p>
                <h2 className="display mt-3 text-4xl md:text-5xl">{room.name}</h2>
                <p className="mt-5 max-w-xl text-sm leading-7 text-[#5e685f]">{room.shortDescription}</p>

                <dl className="mt-8 grid grid-cols-3 gap-4 border-y border-black/10 py-5 text-sm">
                  <div>
                    <dt className="text-xs uppercase tracking-[0.1em] text-[#5e685f]">Guests</dt>
                    <dd className="mt-2 font-bold">Up to {room.capacity}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.1em] text-[#5e685f]">Bed</dt>
                    <dd className="mt-2 font-bold">{room.bed}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.1em] text-[#5e685f]">Size</dt>
                    <dd className="mt-2 font-bold">{room.size}</dd>
                  </div>
                </dl>

                <ul className="mt-6 grid gap-2 text-sm text-[#5e685f]">
                  {room.highlights.map((highlight) => (
                    <li key={highlight}>— {highlight}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.1em] text-[#5e685f]">Indicative rate</p>
                  <p className="mt-1 font-bold">From USD {room.indicativeRate}*</p>
                </div>
                <Link href={`/rooms/${room.slug}`} className="rounded-[10px] bg-[#253028] px-5 py-3 text-sm font-bold text-white">
                  View room
                </Link>
              </div>
            </div>
          </article>
        ))}
        <p className="text-xs text-[#5e685f]">* Fictional indicative rates used only to demonstrate the booking experience.</p>
      </section>
    </>
  );
}
