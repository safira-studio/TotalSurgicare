/** TotalSurgicare prescription module — premium OPD / clinical surfaces */
export const Lux = {
  ink: "#0B1220",
  navySoft: "#1B2A41",
  teal: "#00A9B7",
  tealDeep: "#007D8C",
  gold: "#D4A853",
  goldDeep: "#B8892A",
  hero: "linear-gradient(155deg, #0B1220 0%, #152238 42%, #0a4a55 100%)",
} as const;

export const lux = {
  shell: "relative mx-auto max-w-3xl space-y-10 pb-20 pt-1",
  eyebrow: "text-[10px] font-semibold uppercase tracking-[0.38em] text-[#B8892A]",
  title:
    "font-serif text-[1.65rem] font-light leading-tight tracking-tight text-[#0B1220] sm:text-4xl sm:leading-tight",
  subtitle: "mt-3 max-w-2xl text-[0.9375rem] leading-relaxed text-stone-600",
  card: "rounded-2xl border border-[#E6DFD4] bg-[#FFFCF9] p-6 shadow-[0_16px_40px_-20px_rgba(11,18,32,0.12)] md:p-8",
  cardLift:
    "rounded-2xl border border-[#E0D8CC] bg-white p-6 shadow-[0_28px_56px_-24px_rgba(11,18,32,0.16)] md:p-8",
  cardAccentTop:
    "pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#D4A853]/70 to-transparent",
  input:
    "w-full rounded-xl border border-[#E6DFD4] bg-[#FAF8F5] px-4 py-3 text-sm text-[#0B1220] shadow-inner transition placeholder:text-stone-400 focus:border-[#00A9B7]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00A9B7]/25",
  label: "text-[11px] font-semibold uppercase tracking-[0.12em] text-stone-500",
  queueRow:
    "group flex w-full items-center justify-between gap-4 rounded-xl border border-stone-200/80 bg-gradient-to-b from-white to-stone-50/60 px-5 py-4 text-left transition hover:border-[#00A9B7]/35 hover:shadow-md",
} as const;
