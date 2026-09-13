import Link from "next/link";

const links = [
  ["Rooms", "/rooms"],
  ["Experiences", "/experiences"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f5f0e7]/95 backdrop-blur">
      <div className="section-shell flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex flex-col leading-none" aria-label="Casa Luma home">
          <span className="display text-2xl tracking-tight">Casa Luma</span>
          <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5e685f]">
            Sierras de Córdoba
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold md:flex" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="transition-opacity hover:opacity-60">
              {label}
            </Link>
          ))}
          <Link
            href="/booking"
            className="rounded-[10px] bg-[#253028] px-5 py-3 text-[#fffdf8] transition-transform hover:-translate-y-0.5"
          >
            Check availability
          </Link>
        </nav>

        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none rounded-lg border border-black/15 px-4 py-2 text-sm font-semibold">
            Menu
          </summary>
          <nav
            className="absolute right-0 top-12 flex w-64 flex-col gap-1 rounded-xl border border-black/10 bg-[#fffdf8] p-3 shadow-xl"
            aria-label="Mobile navigation"
          >
            {links.map(([label, href]) => (
              <Link key={href} href={href} className="rounded-lg px-3 py-3 text-sm font-semibold hover:bg-black/5">
                {label}
              </Link>
            ))}
            <Link href="/booking" className="mt-2 rounded-lg bg-[#253028] px-3 py-3 text-center text-sm font-semibold text-white">
              Check availability
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
