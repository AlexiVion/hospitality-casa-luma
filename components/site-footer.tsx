import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-black/10 bg-[#253028] text-[#fffdf8]">
      <div className="section-shell grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="display text-3xl">Casa Luma</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/70">
            A fictional boutique-hotel concept exploring direct booking, room discovery, and calm hospitality UX in the Sierras de Córdoba.
          </p>
          <p className="mt-5 text-xs leading-6 text-white/50">
            Concept project · Not a real hotel · No live reservations are processed.
          </p>
        </div>

        <div>
          <p className="eyebrow text-white/45">Explore</p>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            <Link href="/rooms">Rooms</Link>
            <Link href="/experiences">Experiences</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <p className="eyebrow text-white/45">Plan your stay</p>
          <p className="mt-4 text-sm leading-7 text-white/70">Choose dates and guests to explore the mocked direct-booking journey.</p>
          <Link href="/booking" className="mt-5 inline-flex rounded-[10px] bg-[#fffdf8] px-5 py-3 text-sm font-semibold text-[#253028]">
            Check availability
          </Link>
        </div>
      </div>
    </footer>
  );
}
