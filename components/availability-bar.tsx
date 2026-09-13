type AvailabilityBarProps = {
  compact?: boolean;
  defaults?: {
    checkIn?: string;
    checkOut?: string;
    adults?: string;
  };
};

export function AvailabilityBar({ compact = false, defaults = {} }: AvailabilityBarProps) {
  return (
    <form
      action="/booking"
      className={`grid gap-3 rounded-2xl border border-black/10 bg-[#fffdf8] p-4 shadow-[0_20px_60px_rgba(37,48,40,0.12)] ${
        compact ? "md:grid-cols-[1fr_1fr_0.8fr_auto]" : "md:grid-cols-[1fr_1fr_0.8fr_auto]"
      }`}
    >
      <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#5e685f]">
        Check-in
        <input
          type="date"
          name="checkIn"
          defaultValue={defaults.checkIn}
          className="min-h-12 rounded-[10px] border border-black/15 bg-white px-3 text-sm font-medium text-[#1c211d]"
        />
      </label>

      <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#5e685f]">
        Check-out
        <input
          type="date"
          name="checkOut"
          defaultValue={defaults.checkOut}
          className="min-h-12 rounded-[10px] border border-black/15 bg-white px-3 text-sm font-medium text-[#1c211d]"
        />
      </label>

      <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#5e685f]">
        Guests
        <select
          name="adults"
          defaultValue={defaults.adults ?? "2"}
          className="min-h-12 rounded-[10px] border border-black/15 bg-white px-3 text-sm font-medium text-[#1c211d]"
        >
          <option value="1">1 guest</option>
          <option value="2">2 guests</option>
          <option value="3">3 guests</option>
        </select>
      </label>

      <button
        type="submit"
        className="min-h-12 self-end rounded-[10px] bg-[#253028] px-6 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
      >
        Check availability
      </button>
    </form>
  );
}
