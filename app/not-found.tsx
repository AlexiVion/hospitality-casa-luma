import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-shell py-28 text-center md:py-40">
      <p className="eyebrow text-[#a85f47]">404</p>
      <h1 className="display mx-auto mt-4 max-w-2xl text-5xl md:text-7xl">That room is not part of Casa Luma.</h1>
      <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#5e685f]">Return to the room collection or restart the demo booking journey.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/rooms" className="rounded-[10px] border border-black/15 px-5 py-3 text-sm font-bold">View rooms</Link>
        <Link href="/booking" className="rounded-[10px] bg-[#253028] px-5 py-3 text-sm font-bold text-white">Check availability</Link>
      </div>
    </section>
  );
}
