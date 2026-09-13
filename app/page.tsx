import Link from "next/link";
import { AvailabilityBar } from "@/components/availability-bar";
import { rooms } from "@/data/rooms";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[78vh] overflow-hidden bg-[#253028] text-white">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2200&q=88"
          alt="Contemporary boutique hotel architecture surrounded by vegetation"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="photo-overlay absolute inset-0" />

        <div className="section-shell relative flex min-h-[78vh] flex-col justify-end pb-28 pt-24 md:pb-36">
          <p className="eyebrow text-white/75">Boutique stay · Sierras de Córdoba</p>
          <h1 className="display mt-5 max-w-4xl text-5xl leading-[0.98] sm:text-6xl md:text-8xl">
            A quieter way to stay in the hills.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-white/82 md:text-lg">
            Casa Luma is imagined as a small design-led hotel shaped by warm materials, mountain air, and an unhurried sense of place.
          </p>
        </div>
      </section>

      <div className="section-shell relative z-10 -mt-16">
        <AvailabilityBar />
      </div>

      <section className="section-shell grid gap-12 py-24 md:grid-cols-[0.85fr_1.15fr] md:items-end md:py-32">
        <div>
          <p className="eyebrow text-[#a85f47]">The stay</p>
          <h2 className="display mt-4 text-4xl leading-tight md:text-6xl">Small by design. Generous where it matters.</h2>
        </div>
        <div className="max-w-xl md:justify-self-end">
          <p className="text-base leading-8 text-[#5e685f] md:text-lg">
            Ten rooms, three distinct categories, and shared spaces that open toward the landscape. The concept is intentionally intimate: fewer layers between arriving, settling in, and feeling somewhere specific.
          </p>
          <Link href="/about" className="mt-7 inline-flex items-center gap-2 text-sm font-bold">
            Discover Casa Luma <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="bg-[#fffdf8] py-24 md:py-32">
        <div className="section-shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow text-[#a85f47]">Rooms</p>
              <h2 className="display mt-4 max-w-2xl text-4xl md:text-6xl">Choose the space that matches the pace of your stay.</h2>
            </div>
            <Link href="/rooms" className="text-sm font-bold">
              View all rooms →
            </Link>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {rooms.map((room) => (
              <article key={room.slug} className="overflow-hidden rounded-[14px] border border-black/10 bg-white">
                <img src={room.image} alt={`${room.name} interior`} className="aspect-[4/3] w-full object-cover" loading="lazy" />
                <div className="p-6">
                  <p className="eyebrow text-[#5e685f]">{room.eyebrow}</p>
                  <h3 className="display mt-3 text-3xl">{room.name}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#5e685f]">{room.shortDescription}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-5">
                    <p className="text-sm font-semibold">From USD {room.indicativeRate}*</p>
                    <Link href={`/rooms/${room.slug}`} className="text-sm font-bold">
                      View room →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-5 text-xs text-[#5e685f]">* Fictional indicative rates used only to demonstrate the booking experience.</p>
        </div>
      </section>

      <section className="section-shell grid gap-10 py-24 md:grid-cols-2 md:items-center md:py-32">
        <div className="overflow-hidden rounded-[14px]">
          <img
            src="https://images.unsplash.com/photo-1533777324565-a040eb52facd?auto=format&fit=crop&w=1600&q=85"
            alt="Mountain landscape in warm evening light"
            className="aspect-[5/6] w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="md:pl-10">
          <p className="eyebrow text-[#a85f47]">Why book direct</p>
          <h2 className="display mt-4 text-4xl leading-tight md:text-6xl">A clearer line between you and the property.</h2>
          <div className="mt-9 grid gap-7">
            {[
              ["Direct support", "Questions and changes stay with the property instead of passing through another platform."],
              ["Local context", "Pre-arrival recommendations and practical help can be tailored to the stay."],
              ["A small welcome", "The concept includes a simple direct-booking amenity rather than a discount race."],
            ].map(([title, copy]) => (
              <div key={title} className="border-t border-black/10 pt-5">
                <h3 className="text-sm font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-[#5e685f]">{copy}</p>
              </div>
            ))}
          </div>
          <p className="mt-7 text-xs leading-6 text-[#5e685f]">
            These benefits are fictional content for the portfolio concept and do not represent an operating hotel policy.
          </p>
        </div>
      </section>

      <section className="bg-[#253028] py-24 text-white md:py-32">
        <div className="section-shell grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <p className="eyebrow text-white/55">Beyond the room</p>
            <h2 className="display mt-4 max-w-3xl text-4xl leading-tight md:text-6xl">
              Stone paths, long breakfasts, cold water, and a landscape worth leaving your phone behind for.
            </h2>
          </div>
          <div className="md:justify-self-end">
            <p className="max-w-md text-sm leading-7 text-white/70">
              The experience layer gives the booking decision context: what a guest can do, how the property relates to the region, and what kind of stay Casa Luma is designed to support.
            </p>
            <Link href="/experiences" className="mt-6 inline-flex rounded-[10px] border border-white/25 px-5 py-3 text-sm font-bold">
              Explore the stay
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell py-24 text-center md:py-32">
        <p className="eyebrow text-[#a85f47]">Plan a stay</p>
        <h2 className="display mx-auto mt-4 max-w-3xl text-4xl leading-tight md:text-6xl">Start with dates. We’ll show you the rooms that fit.</h2>
        <div className="mx-auto mt-10 max-w-5xl text-left">
          <AvailabilityBar compact />
        </div>
      </section>
    </>
  );
}
