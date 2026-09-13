import type { Metadata } from "next";
import Link from "next/link";
import { AvailabilityBar } from "@/components/availability-bar";
import { rooms } from "@/data/rooms";

export const metadata: Metadata = {
  title: "Check availability",
  description: "Explore Casa Luma's mocked direct-booking flow. No real inventory or reservation is processed.",
};

type Search = Record<string, string | string[] | undefined>;

function value(input: string | string[] | undefined) {
  return Array.isArray(input) ? input[0] : input;
}

function validDate(value: string | undefined) {
  return Boolean(value && /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(value)));
}

export default async function BookingPage({ searchParams }: { searchParams: Promise<Search> }) {
  const search = await searchParams;
  const checkIn = value(search.checkIn);
  const checkOut = value(search.checkOut);
  const adultsRaw = value(search.adults) ?? "2";
  const requestedRoom = value(search.room);
  const adults = Math.max(1, Math.min(3, Number.parseInt(adultsRaw, 10) || 2));

  const hasDates = validDate(checkIn) && validDate(checkOut);
  const dateOrderValid = hasDates ? new Date(checkOut!).getTime() > new Date(checkIn!).getTime() : false;
  const ready = hasDates && dateOrderValid;

  const matchingRooms = rooms.filter((room) => room.capacity >= adults && (!requestedRoom || room.slug === requestedRoom));
  const noAvailabilityScenario = ready && checkIn?.endsWith("-17");
  const availableRooms = noAvailabilityScenario ? [] : matchingRooms;

  return (
    <>
      <section className="section-shell py-16 md:py-24">
        <p className="eyebrow text-[#a85f47]">Direct-booking demo</p>
        <div className="mt-4 grid gap-8 md:grid-cols-[1fr_0.7fr] md:items-end">
          <h1 className="display max-w-3xl text-5xl leading-none md:text-7xl">Check the rooms that fit your stay.</h1>
          <p className="max-w-xl text-sm leading-7 text-[#5e685f] md:justify-self-end">
            This page uses deterministic fictional availability. It demonstrates UX and integration boundaries only; it does not query a real hotel system or create reservations.
          </p>
        </div>
      </section>

      <section className="section-shell pb-12">
        <AvailabilityBar
          compact
          defaults={{ checkIn: checkIn ?? "", checkOut: checkOut ?? "", adults: String(adults) }}
        />
      </section>

      <section className="section-shell pb-24 md:pb-32">
        {!checkIn && !checkOut ? (
          <div className="rounded-[14px] border border-black/10 bg-[#fffdf8] p-8 md:p-12">
            <h2 className="display text-4xl">Start with your dates.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#5e685f]">
              Choose check-in, check-out, and guests above. The demo will then show fictional room options that match the guest count.
            </p>
          </div>
        ) : !hasDates ? (
          <Message title="Add both dates" copy="Choose a valid check-in and check-out date before we can show room options." />
        ) : !dateOrderValid ? (
          <Message title="Check-out must be later" copy="The departure date needs to come after the arrival date." />
        ) : availableRooms.length === 0 ? (
          <div className="rounded-[14px] border border-black/10 bg-[#fffdf8] p-8 md:p-12">
            <p className="eyebrow text-[#a85f47]">No mocked availability</p>
            <h2 className="display mt-3 text-4xl">Nothing matches this demo search.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#5e685f]">
              This is an intentional empty state. Try different dates or fewer guests. In this concept, searches arriving on the 17th are reserved as a reproducible “no availability” QA scenario.
            </p>
          </div>
        ) : (
          <div>
            <div className="flex flex-col gap-3 border-b border-black/10 pb-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="eyebrow text-[#5e685f]">Mocked availability</p>
                <h2 className="display mt-2 text-4xl">{availableRooms.length} room option{availableRooms.length === 1 ? "" : "s"}</h2>
              </div>
              <p className="text-sm text-[#5e685f]">{checkIn} → {checkOut} · {adults} guest{adults === 1 ? "" : "s"}</p>
            </div>

            <div className="mt-8 grid gap-6">
              {availableRooms.map((room) => {
                const handoff = new URLSearchParams({
                  checkIn: checkIn!,
                  checkOut: checkOut!,
                  adults: String(adults),
                  room: room.slug,
                }).toString();

                return (
                  <article key={room.slug} className="grid overflow-hidden rounded-[14px] border border-black/10 bg-[#fffdf8] md:grid-cols-[0.8fr_1.2fr]">
                    <img src={room.image} alt={`${room.name} interior`} className="h-full min-h-[280px] w-full object-cover" />
                    <div className="flex flex-col justify-between p-6 md:p-8">
                      <div>
                        <p className="eyebrow text-[#a85f47]">{room.eyebrow}</p>
                        <h3 className="display mt-2 text-4xl">{room.name}</h3>
                        <p className="mt-4 max-w-2xl text-sm leading-7 text-[#5e685f]">{room.shortDescription}</p>
                        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
                          <span>Up to {room.capacity} guests</span>
                          <span>{room.bed}</span>
                          <span>{room.size}</span>
                        </div>
                      </div>

                      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-black/10 pt-6">
                        <div>
                          <p className="text-xs uppercase tracking-[0.1em] text-[#5e685f]">Fictional rate</p>
                          <p className="mt-1 text-lg font-bold">USD {room.indicativeRate} / night*</p>
                        </div>
                        <div className="flex gap-3">
                          <Link href={`/rooms/${room.slug}`} className="rounded-[10px] border border-black/15 px-4 py-3 text-sm font-bold">
                            Room details
                          </Link>
                          <Link href={`/booking/handoff?${handoff}`} className="rounded-[10px] bg-[#253028] px-4 py-3 text-sm font-bold text-white">
                            Book direct
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
              <p className="text-xs text-[#5e685f]">* Fictional rate and availability for UX demonstration only.</p>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

function Message({ title, copy }: { title: string; copy: string }) {
  return (
    <div className="rounded-[14px] border border-[#a85f47]/30 bg-[#fffdf8] p-8 md:p-12">
      <p className="eyebrow text-[#a85f47]">Search needs attention</p>
      <h2 className="display mt-3 text-4xl">{title}</h2>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-[#5e685f]">{copy}</p>
    </div>
  );
}
