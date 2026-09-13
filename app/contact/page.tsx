import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Concept contact and practical information page for the fictional Casa Luma boutique-hotel demo.",
};

export default function ContactPage() {
  return (
    <>
      <section className="section-shell py-20 md:py-28">
        <p className="eyebrow text-[#a85f47]">Contact</p>
        <div className="mt-4 grid gap-10 md:grid-cols-[1fr_0.75fr] md:items-end">
          <h1 className="display max-w-3xl text-5xl leading-none md:text-7xl">Practical questions should be easy to answer before booking.</h1>
          <p className="max-w-xl text-base leading-8 text-[#5e685f] md:justify-self-end">
            This page demonstrates a low-friction support layer for guests who want clarification before moving into the direct-booking flow.
          </p>
        </div>
      </section>

      <section className="section-shell grid gap-10 pb-24 md:grid-cols-[0.85fr_1.15fr] md:pb-32">
        <aside className="rounded-[14px] bg-[#253028] p-7 text-white md:p-9">
          <p className="eyebrow text-white/50">Casa Luma · Concept</p>
          <h2 className="display mt-4 text-4xl">Sierras de Córdoba, Argentina</h2>
          <p className="mt-5 text-sm leading-7 text-white/70">
            The location is intentionally broad because Casa Luma is fictional. No real street address, hotel phone number, or operating property is represented.
          </p>

          <div className="mt-9 grid gap-6 border-t border-white/15 pt-7 text-sm">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/45">Email</p>
              <p className="mt-2 text-white/75">hello@casa-luma.example</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/45">Response</p>
              <p className="mt-2 text-white/75">Demonstration content only</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/45">Booking</p>
              <Link href="/booking" className="mt-2 inline-flex font-bold text-white underline underline-offset-4">Use the demo booking flow</Link>
            </div>
          </div>
        </aside>

        <div className="rounded-[14px] border border-black/10 bg-[#fffdf8] p-7 md:p-10">
          <p className="eyebrow text-[#5e685f]">Send a question</p>
          <h2 className="display mt-3 text-4xl">Demo contact form</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#5e685f]">
            The form is intentionally non-submitting in v1. It demonstrates layout, labels, and validation-ready structure without collecting personal data.
          </p>

          <form className="mt-8 grid gap-5" action="#" method="get">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold">
                Name
                <input name="name" autoComplete="name" required className="min-h-12 rounded-[10px] border border-black/15 bg-white px-3 font-normal" placeholder="Your name" />
              </label>
              <label className="grid gap-2 text-sm font-bold">
                Email
                <input name="email" type="email" autoComplete="email" required className="min-h-12 rounded-[10px] border border-black/15 bg-white px-3 font-normal" placeholder="you@example.com" />
              </label>
            </div>
            <label className="grid gap-2 text-sm font-bold">
              What can we help with?
              <select name="topic" className="min-h-12 rounded-[10px] border border-black/15 bg-white px-3 font-normal">
                <option>Room question</option>
                <option>Arrival and location</option>
                <option>Direct booking</option>
                <option>Other</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-bold">
              Message
              <textarea name="message" required rows={6} className="rounded-[10px] border border-black/15 bg-white p-3 font-normal" placeholder="Tell us what you need to know." />
            </label>
            <button type="button" aria-describedby="demo-form-note" className="w-fit rounded-[10px] bg-[#253028] px-6 py-3 text-sm font-bold text-white">
              Demo only — no submission
            </button>
            <p id="demo-form-note" className="text-xs leading-6 text-[#5e685f]">No data is sent or stored by this concept form.</p>
          </form>
        </div>
      </section>
    </>
  );
}
