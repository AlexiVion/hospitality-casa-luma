import type { Metadata } from "next";
import Link from "next/link";
import { getRoom } from "@/data/rooms";

export const metadata: Metadata = {
  title: "Booking handoff",
  description: "Conceptual booking-engine handoff for the Casa Luma portfolio demo.",
};

type Search = Record<string, string | string[] | undefined>;

function value(input: string | string[] | undefined) {
  return Array.isArray(input) ? input[0] : input;
}

export default async function BookingHandoffPage({ searchParams }: { searchParams: Promise<Search> }) {
  const search = await searchParams;
  const roomSlug = value(search.room);
  const room = roomSlug ? getRoom(roomSlug) : undefined;
  const checkIn = value(search.checkIn);
  const checkOut = value(search.checkOut);
  const adults = value(search.adults) ?? "2";

  return (
    <section className="section-shell py-20 md:py-32">
      <div className="mx-auto max-w-3xl rounded-[16px] border border-black/10 bg-[#fffdf8] p-7 shadow-[0_30px_90px_rgba(37,48,40,0.12)] md:p-12">
        <p className="eyebrow text-[#a85f47]">Integration boundary reached</p>
        <h1 className="display mt-4 text-5xl leading-none md:text-6xl">This is where the real booking engine would take over.</h1>
        <p className="mt-6 text-base leading-8 text-[#5e685f]">
          Casa Luma is a portfolio concept, so this demo deliberately stops before inventory confirmation, payment, or reservation creation. In a real hotel project, the selected booking parameters would be passed to the property&apos;s approved booking engine.
        </p>

        <dl className="mt-9 grid gap-5 rounded-[12px] bg-[#f5f0e7] p-6 sm:grid-cols-2">
          <div>
            <dt className="text-xs font-bold uppercase tracking-[0.12em] text-[#5e685f]">Room</dt>
            <dd className="mt-2 font-bold">{room?.name ?? "Selected room"}</dd>
          </div>
          <div>
            <dt className="text-xs font-bold uppercase tracking-[0.12em] text-[#5e685f]">Guests</dt>
            <dd className="mt-2 font-bold">{adults}</dd>
          </div>
          <div>
            <dt className="text-xs font-bold uppercase tracking-[0.12em] text-[#5e685f]">Check-in</dt>
            <dd className="mt-2 font-bold">{checkIn ?? "—"}</dd>
          </div>
          <div>
            <dt className="text-xs font-bold uppercase tracking-[0.12em] text-[#5e685f]">Check-out</dt>
            <dd className="mt-2 font-bold">{checkOut ?? "—"}</dd>
          </div>
        </dl>

        <div className="mt-9 border-t border-black/10 pt-7">
          <h2 className="text-sm font-bold">Production responsibility split</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#5e685f]">Website</p>
              <p className="mt-2 text-sm leading-7 text-[#5e685f]">Discovery, rooms, dates, guests, booking intent, and handoff.</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#5e685f]">Hotel systems</p>
              <p className="mt-2 text-sm leading-7 text-[#5e685f]">Live inventory, rates, payment, reservation record, PMS and channel synchronization.</p>
            </div>
          </div>
        </div>

        <div className="mt-9 flex flex-wrap gap-3">
          <Link href="/booking" className="rounded-[10px] bg-[#253028] px-5 py-3 text-sm font-bold text-white">
            Try another search
          </Link>
          <Link href="/rooms" className="rounded-[10px] border border-black/15 px-5 py-3 text-sm font-bold">
            Back to rooms
          </Link>
        </div>
      </div>
    </section>
  );
}
