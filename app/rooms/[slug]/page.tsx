import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getRoom, rooms } from "@/data/rooms";

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const room = getRoom(slug);

  if (!room) return { title: "Room" };

  return {
    title: room.name,
    description: room.shortDescription,
  };
}

export default async function RoomDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const room = getRoom(slug);

  if (!room) notFound();

  return (
    <>
      <section className="section-shell py-16 md:py-20">
        <Link href="/rooms" className="text-sm font-bold text-[#5e685f]">← All rooms</Link>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="eyebrow text-[#a85f47]">{room.eyebrow}</p>
            <h1 className="display mt-4 text-5xl leading-none md:text-7xl">{room.name}</h1>
          </div>
          <p className="max-w-xl text-base leading-8 text-[#5e685f] lg:justify-self-end">{room.description}</p>
        </div>
      </section>

      <section className="section-shell grid gap-3 md:grid-cols-2">
        <img src={room.gallery[0]} alt={`${room.name} main view`} className="aspect-[4/3] h-full w-full rounded-[14px] object-cover md:row-span-2" />
        <img src={room.gallery[1]} alt={`${room.name} secondary view`} className="aspect-[8/5] h-full w-full rounded-[14px] object-cover" />
        <img src={room.gallery[2]} alt={`${room.name} detail`} className="aspect-[8/5] h-full w-full rounded-[14px] object-cover" />
      </section>

      <section className="section-shell grid gap-12 py-20 md:grid-cols-[1fr_0.8fr] md:py-28">
        <div>
          <p className="eyebrow text-[#5e685f]">At a glance</p>
          <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-8 border-y border-black/10 py-7 sm:grid-cols-4">
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
            <div>
              <dt className="text-xs uppercase tracking-[0.1em] text-[#5e685f]">From</dt>
              <dd className="mt-2 font-bold">USD {room.indicativeRate}*</dd>
            </div>
          </dl>

          <h2 className="display mt-12 text-4xl">Room highlights</h2>
          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            {room.highlights.map((highlight) => (
              <div key={highlight} className="rounded-[12px] border border-black/10 bg-[#fffdf8] p-5 text-sm font-semibold">
                {highlight}
              </div>
            ))}
          </div>

          <h2 className="display mt-12 text-4xl">Included</h2>
          <ul className="mt-6 grid gap-3 text-sm text-[#5e685f] sm:grid-cols-2">
            {room.amenities.map((amenity) => (
              <li key={amenity} className="border-b border-black/10 pb-3">{amenity}</li>
            ))}
          </ul>
        </div>

        <aside className="h-fit rounded-[14px] bg-[#253028] p-7 text-white md:sticky md:top-28 md:p-9">
          <p className="eyebrow text-white/55">Book direct</p>
          <h2 className="display mt-3 text-4xl">Check this room for your dates.</h2>
          <p className="mt-5 text-sm leading-7 text-white/70">
            Continue into the demo availability flow. No real reservation or payment will be created.
          </p>
          <form action="/booking" className="mt-7 grid gap-4">
            <input type="hidden" name="room" value={room.slug} />
            <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.1em] text-white/60">
              Check-in
              <input type="date" name="checkIn" className="min-h-12 rounded-[10px] bg-white px-3 text-sm text-[#1c211d]" />
            </label>
            <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.1em] text-white/60">
              Check-out
              <input type="date" name="checkOut" className="min-h-12 rounded-[10px] bg-white px-3 text-sm text-[#1c211d]" />
            </label>
            <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.1em] text-white/60">
              Guests
              <select name="adults" defaultValue="2" className="min-h-12 rounded-[10px] bg-white px-3 text-sm text-[#1c211d]">
                <option value="1">1 guest</option>
                <option value="2">2 guests</option>
                <option value="3">3 guests</option>
              </select>
            </label>
            <button type="submit" className="mt-2 min-h-12 rounded-[10px] bg-[#fffdf8] px-5 py-3 text-sm font-bold text-[#253028]">
              Check availability
            </button>
          </form>
          <p className="mt-5 text-xs leading-6 text-white/50">* Fictional indicative rate for demonstration only.</p>
        </aside>
      </section>
    </>
  );
}
