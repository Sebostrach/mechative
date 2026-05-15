"use client";

import { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type IconProps = { className?: string };

function Icon({ children, className = "h-5 w-5" }: { children: ReactNode; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {children}
    </svg>
  );
}

function MenuIcon({ className }: IconProps) {
  return <Icon className={className}><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></Icon>;
}

function XIcon({ className }: IconProps) {
  return <Icon className={className}><path d="M6 6l12 12" /><path d="M18 6 6 18" /></Icon>;
}

function Cuboid({ className }: IconProps) {
  return <Icon className={className}><path d="M21 16V8l-9-5-9 5v8l9 5 9-5Z" /><path d="M3.3 7.8 12 13l8.7-5.2" /><path d="M12 22V13" /></Icon>;
}

function Bolt({ className }: IconProps) {
  return <Icon className={className}><path d="M13 2 4 14h7l-1 8 10-13h-7l1-7Z" /></Icon>;
}

function Circuit({ className }: IconProps) {
  return <Icon className={className}><path d="M6 9V5h4" /><path d="M18 15v4h-4" /><path d="M10 5h4a4 4 0 0 1 4 4v6" /><path d="M14 19h-4a4 4 0 0 1-4-4V9" /><circle cx="6" cy="9" r="1" /><circle cx="18" cy="15" r="1" /></Icon>;
}

function MechativeMark({ className = "h-12 w-12", innerClassName = "h-7 w-7" }: { className?: string; innerClassName?: string }) {
  return (
    <div className={`grid place-items-center border border-[#d7a64b] bg-black shadow-[0_0_28px_rgba(217,166,75,.18)] ${className}`}>
      <div className={`relative ${innerClassName}`}>
        <span className="absolute bottom-0 left-[8%] h-[82%] w-[24%] bg-gradient-to-b from-[#f8d991] via-[#d7a64b] to-[#8a561b] [clip-path:polygon(0_0,72%_0,100%_18%,100%_100%,0_100%)]" />
        <span className="absolute bottom-0 left-1/2 h-[56%] w-[24%] -translate-x-1/2 bg-gradient-to-b from-[#f8d991] via-[#d7a64b] to-[#8a561b] [clip-path:polygon(0_0,100%_0,100%_72%,50%_100%,0_72%)]" />
        <span className="absolute bottom-0 right-[8%] h-[82%] w-[24%] bg-gradient-to-b from-[#f8d991] via-[#d7a64b] to-[#8a561b] [clip-path:polygon(28%_0,100%_0,100%_100%,0_100%,0_18%)]" />
      </div>
    </div>
  );
}

function MechativeLogo() {
  return (
    <div className="flex items-center gap-4">
      <MechativeMark />
      <div>
        <p className="text-lg font-semibold uppercase tracking-[0.28em] text-[#f4c66d]">Mechative</p>
        <p className="text-[10px] uppercase tracking-[0.24em] text-[#d7a64b]">Mechanics in motion</p>
      </div>
    </div>
  );
}

export default function Home() {
  const [lang, setLang] = useState<"pl" | "en">("pl");
  const [menuOpen, setMenuOpen] = useState(false);

  const copy = {
    pl: {
      nav: ["Projekty", "CAD", "Elektronika", "Poradniki", "Społeczność", "Kontakt"],
      join: "Dołącz",
      eyebrow: "Mechanics + Active",
      heroTitle: "Mechative",
      heroDesc: "Platforma dla aktywnych twórców: mechanika, CAD, elektronika, druk 3D, CNC i projekty DIY w jednym miejscu.",
      browse: "Przeglądaj projekty",
      add: "Dodaj projekt",
      mechanics: "Mechanics",
      active: "Active",
      result: "Mechative",
      intro: "Nazwa łączy precyzję mechaniki z aktywnym tworzeniem. Od pomysłu do działającego projektu.",
      sections: [
        ["Projekty DIY", "Gotowe konstrukcje do pobrania krok po kroku."],
        ["Pliki CAD", "Modele, rysunki, STL, STEP i dokumentacja."],
        ["Elektronika", "Schematy, mikrokontrolery, PCB i moduły."],
      ],
    },
    en: {
      nav: ["Projects", "CAD", "Electronics", "Guides", "Community", "Contact"],
      join: "Join",
      eyebrow: "Mechanics + Active",
      heroTitle: "Mechative",
      heroDesc: "A platform for active creators: mechanics, CAD, electronics, 3D printing, CNC and DIY projects in one place.",
      browse: "Browse projects",
      add: "Add project",
      mechanics: "Mechanics",
      active: "Active",
      result: "Mechative",
      intro: "The name combines mechanical precision with active building. From idea to working project.",
      sections: [
        ["DIY Projects", "Ready-to-download step-by-step builds."],
        ["CAD Files", "Models, drawings, STL, STEP and documentation."],
        ["Electronics", "Schematics, microcontrollers, PCBs and modules."],
      ],
    },
  };

  const t = copy[lang];
  const cards = [Cuboid, Circuit, Bolt];

  return (
    <main className="min-h-screen overflow-hidden bg-[#080807] text-white">
      <div className="pointer-events-none fixed inset-0 opacity-40 [background-image:radial-gradient(circle_at_30%_10%,rgba(217,166,75,.16),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(255,201,109,.08),transparent_22%)]" />

      <header className="sticky top-0 z-50 border-b border-[#d7a64b]/10 bg-black/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <MechativeLogo />

          <div className="flex items-center gap-3">
            <button onClick={() => setLang("pl")} className={`px-3 py-2 text-xs ${lang === "pl" ? "bg-[#d7a64b] text-black" : "border border-[#d7a64b]/30 text-zinc-300"}`}>PL</button>
            <button onClick={() => setLang("en")} className={`px-3 py-2 text-xs ${lang === "en" ? "bg-[#d7a64b] text-black" : "border border-[#d7a64b]/30 text-zinc-300"}`}>EN</button>
            <button onClick={() => setMenuOpen(true)} className="grid h-11 w-11 place-items-center border border-[#d7a64b]/60 text-[#f4c66d] transition hover:bg-[#d7a64b] hover:text-black" aria-label="Open menu">
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-md">
            <motion.aside initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 28, stiffness: 220 }} className="ml-auto h-full w-full max-w-md border-l border-[#d7a64b]/20 bg-[#0c0b09] p-8 shadow-2xl">
              <div className="mb-10 flex items-center justify-between">
                <MechativeLogo />
                <button onClick={() => setMenuOpen(false)} className="grid h-11 w-11 place-items-center border border-[#d7a64b]/50 text-[#f4c66d]" aria-label="Close menu">
                  <XIcon className="h-6 w-6" />
                </button>
              </div>

              <nav className="grid gap-4">
                {t.nav.map((item) => (
                  <a key={item} href="#" onClick={() => setMenuOpen(false)} className="border-b border-white/10 py-4 text-xl uppercase tracking-[0.16em] text-zinc-200 transition hover:text-[#f4c66d]">
                    {item}
                  </a>
                ))}
              </nav>

              <button className="mt-10 w-full bg-gradient-to-r from-[#f8d991] to-[#c58b31] px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-black">
                {t.join}
              </button>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative z-10 mx-auto grid min-h-[calc(100vh-81px)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1fr_.9fr]">
        <div>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="mb-6 text-sm uppercase tracking-[0.24em] text-[#f4c66d]">
            {t.eyebrow}
          </motion.p>

          <div className="mb-8 flex flex-wrap items-center gap-3 text-4xl font-light uppercase tracking-wide md:text-6xl">
            <motion.span initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .15 }} className="text-zinc-200">
              {t.mechanics}
            </motion.span>
            <motion.span initial={{ opacity: 0, scale: .5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .55 }} className="text-[#d7a64b]">
              +
            </motion.span>
            <motion.span initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .3 }} className="text-zinc-200">
              {t.active}
            </motion.span>
          </div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .8 }} className="mb-8 flex items-center gap-5">
            <MechativeMark className="h-20 w-20 border-2" innerClassName="h-12 w-12" />
            <h1 className="bg-gradient-to-r from-[#f8d991] via-[#d7a64b] to-[#8a561b] bg-clip-text text-5xl font-semibold uppercase tracking-[0.12em] text-transparent md:text-7xl">
              {t.result}
            </h1>
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="max-w-2xl text-lg leading-8 text-zinc-300">
            {t.intro}
          </motion.p>

          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.15 }} className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
            {t.heroDesc}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button className="bg-gradient-to-r from-[#f8d991] to-[#c58b31] px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-black">
              {t.browse}
            </button>
            <button className="border border-[#d7a64b]/70 px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white">
              {t.add}
            </button>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: .92, rotate: -2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ delay: .75, duration: .8 }} className="relative mx-auto w-full max-w-lg">
          <div className="absolute -inset-10 bg-[#d7a64b]/10 blur-3xl" />
          <div className="relative aspect-square border border-[#d7a64b]/60 bg-[#11100e] p-5 shadow-[0_30px_100px_rgba(0,0,0,.75)]">
            <div className="grid h-full place-items-center border border-[#d7a64b]/80 bg-[radial-gradient(circle_at_50%_35%,rgba(217,166,75,.16),transparent_35%),linear-gradient(145deg,#151412,#070707)]">
              <MechativeMark className="h-64 w-64 border-2" innerClassName="h-40 w-40" />
            </div>
          </div>
        </motion.div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-5 md:grid-cols-3">
          {t.sections.map(([title, desc], i) => {
            const CardIcon = cards[i];
            return (
              <motion.div key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .1 }} className="border border-white/10 bg-white/[0.03] p-7 transition hover:border-[#d7a64b]/70 hover:bg-[#d7a64b]/5">
                <CardIcon className="mb-7 h-11 w-11 text-[#d7a64b]" />
                <h2 className="text-lg font-bold uppercase tracking-[0.14em]">{title}</h2>
                <p className="mt-4 leading-7 text-zinc-400">{desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
