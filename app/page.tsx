"use client";

import { ReactNode, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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

function BoxIcon({ className }: IconProps) {
  return <Icon className={className}><path d="M21 16V8l-9-5-9 5v8l9 5 9-5Z" /><path d="M3.3 7.8 12 13l8.7-5.2" /><path d="M12 22V13" /></Icon>;
}

function CircuitIcon({ className }: IconProps) {
  return <Icon className={className}><path d="M6 9V5h4" /><path d="M18 15v4h-4" /><path d="M10 5h4a4 4 0 0 1 4 4v6" /><path d="M14 19h-4a4 4 0 0 1-4-4V9" /><circle cx="6" cy="9" r="1" /><circle cx="18" cy="15" r="1" /></Icon>;
}

function BoltIcon({ className }: IconProps) {
  return <Icon className={className}><path d="M13 2 4 14h7l-1 8 10-13h-7l1-7Z" /></Icon>;
}

function MechativeMark({ size = "md" }: { size?: "sm" | "md" | "lg" | "xl" }) {
  const sizes = {
    sm: "h-10 w-10",
    md: "h-12 w-12",
    lg: "h-24 w-24",
    xl: "h-40 w-40 sm:h-56 sm:w-56 lg:h-72 lg:w-72",
  };

  const inner = {
    sm: "h-6 w-6",
    md: "h-7 w-7",
    lg: "h-14 w-14",
    xl: "h-24 w-24 sm:h-36 sm:w-36 lg:h-44 lg:w-44",
  };

  return (
    <div className={`grid shrink-0 place-items-center border border-[#d7a64b] bg-black shadow-[0_0_28px_rgba(217,166,75,.18)] ${sizes[size]}`}>
      <div className={`relative ${inner[size]}`}>
        <span className="absolute bottom-0 left-[8%] h-[82%] w-[24%] bg-gradient-to-b from-[#f8d991] via-[#d7a64b] to-[#8a561b] [clip-path:polygon(0_0,72%_0,100%_18%,100%_100%,0_100%)]" />
        <span className="absolute bottom-0 left-1/2 h-[56%] w-[24%] -translate-x-1/2 bg-gradient-to-b from-[#f8d991] via-[#d7a64b] to-[#8a561b] [clip-path:polygon(0_0,100%_0,100%_72%,50%_100%,0_72%)]" />
        <span className="absolute bottom-0 right-[8%] h-[82%] w-[24%] bg-gradient-to-b from-[#f8d991] via-[#d7a64b] to-[#8a561b] [clip-path:polygon(28%_0,100%_0,100%_100%,0_100%,0_18%)]" />
      </div>
    </div>
  );
}

function MechativeLogo() {
  return (
    <div className="flex min-w-0 items-center gap-3 sm:gap-4">
      <MechativeMark size="sm" />
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold uppercase tracking-[0.18em] text-[#f4c66d] sm:text-lg sm:tracking-[0.28em]">Mechative</p>
        <p className="hidden text-[10px] uppercase tracking-[0.2em] text-[#d7a64b] sm:block">Mechanics in motion</p>
      </div>
    </div>
  );
}

export default function Home() {
  const [lang, setLang] = useState<"pl" | "en">("pl");
  const [menuOpen, setMenuOpen] = useState(false);

  const copy = {
    pl: {
      nav: ["Projekty", "Pliki CAD", "Elektronika", "Poradniki", "Społeczność", "Kontakt"],
      join: "Dołącz",
      eyebrow: "Mechanics + Active",
      mechanics: "Mechanics",
      active: "Active",
      result: "Mechative",
      intro: "Nazwa łączy precyzję mechaniki z aktywnym tworzeniem.",
      desc: "Platforma dla makerów: CAD, elektronika, CNC, druk 3D i projekty DIY w jednym miejscu.",
      browse: "Przeglądaj projekty",
      add: "Dodaj projekt",
      cards: [
        ["Projekty DIY", "Gotowe konstrukcje do pobrania krok po kroku."],
        ["Pliki CAD", "Modele 3D, STL, STEP, rysunki i dokumentacja."],
        ["Elektronika", "Schematy, mikrokontrolery, PCB i moduły."],
      ],
    },
    en: {
      nav: ["Projects", "CAD Files", "Electronics", "Guides", "Community", "Contact"],
      join: "Join",
      eyebrow: "Mechanics + Active",
      mechanics: "Mechanics",
      active: "Active",
      result: "Mechative",
      intro: "The name combines mechanical precision with active building.",
      desc: "A platform for makers: CAD, electronics, CNC, 3D printing and DIY projects in one place.",
      browse: "Browse projects",
      add: "Add project",
      cards: [
        ["DIY Projects", "Ready-to-download step-by-step builds."],
        ["CAD Files", "3D models, STL, STEP, drawings and documentation."],
        ["Electronics", "Schematics, microcontrollers, PCBs and modules."],
      ],
    },
  };

  const t = copy[lang];
  const cardIcons = [BoxIcon, CircuitIcon, BoltIcon];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#080807] text-white">
      <div className="pointer-events-none fixed inset-0 opacity-50 [background-image:radial-gradient(circle_at_30%_5%,rgba(217,166,75,.18),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(255,201,109,.09),transparent_24%)]" />
      <div className="pointer-events-none fixed inset-0 opacity-[0.05] [background-image:linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] [background-size:64px_64px]" />

      <header className="sticky top-0 z-50 border-b border-[#d7a64b]/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
          <MechativeLogo />

          <div className="flex shrink-0 items-center gap-2">
            <div className="flex border border-[#d7a64b]/25 bg-white/[0.03] p-1">
              <button onClick={() => setLang("pl")} className={`px-2.5 py-1.5 text-[11px] font-bold ${lang === "pl" ? "bg-[#d7a64b] text-black" : "text-zinc-300"}`}>PL</button>
              <button onClick={() => setLang("en")} className={`px-2.5 py-1.5 text-[11px] font-bold ${lang === "en" ? "bg-[#d7a64b] text-black" : "text-zinc-300"}`}>EN</button>
            </div>
            <button onClick={() => setMenuOpen(true)} className="grid h-10 w-10 place-items-center border border-[#d7a64b]/60 text-[#f4c66d] transition hover:bg-[#d7a64b] hover:text-black sm:h-11 sm:w-11" aria-label="Open menu">
              <MenuIcon className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-md">
            <motion.aside initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 24, opacity: 0 }} transition={{ duration: .22 }} className="h-full w-full overflow-y-auto bg-[#0c0b09] p-5 sm:ml-auto sm:max-w-md sm:border-l sm:border-[#d7a64b]/20 sm:p-8">
              <div className="mb-8 flex items-center justify-between gap-4">
                <MechativeLogo />
                <button onClick={() => setMenuOpen(false)} className="grid h-10 w-10 shrink-0 place-items-center border border-[#d7a64b]/50 text-[#f4c66d]" aria-label="Close menu">
                  <XIcon className="h-5 w-5" />
                </button>
              </div>

              <nav className="grid gap-1">
                {t.nav.map((item) => (
                  <a key={item} href="#" onClick={() => setMenuOpen(false)} className="border-b border-white/10 py-4 text-lg uppercase tracking-[0.14em] text-zinc-200 transition hover:text-[#f4c66d]">
                    {item}
                  </a>
                ))}
              </nav>

              <button className="mt-8 w-full bg-gradient-to-r from-[#f8d991] to-[#c58b31] px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-black">
                {t.join}
              </button>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative z-10 mx-auto flex max-w-7xl flex-col px-4 pb-8 pt-8 sm:px-6 sm:pb-10 sm:pt-12 lg:flex-row lg:items-center lg:gap-14 lg:py-12">
        <div className="w-full lg:w-[58%]">
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="mb-5 text-xs uppercase tracking-[0.22em] text-[#f4c66d] sm:text-sm">
            {t.eyebrow}
          </motion.p>

          <div className="space-y-2 sm:space-y-3">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[2rem] font-light uppercase leading-none tracking-wide sm:text-5xl lg:text-6xl">
              <motion.span initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .1 }} className="text-zinc-200">
                {t.mechanics}
              </motion.span>
              <motion.span initial={{ opacity: 0, scale: .5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .35 }} className="text-[#d7a64b]">
                +
              </motion.span>
              <motion.span initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .2 }} className="text-zinc-200">
                {t.active}
              </motion.span>
            </div>

            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .55 }} className="flex items-center gap-4 pt-3 sm:gap-5 sm:pt-5">
              <MechativeMark size="lg" />
              <h1 className="min-w-0 bg-gradient-to-r from-[#f8d991] via-[#d7a64b] to-[#8a561b] bg-clip-text text-[2.45rem] font-semibold uppercase leading-none tracking-[0.06em] text-transparent sm:text-6xl lg:text-7xl">
                {t.result}
              </h1>
            </motion.div>
          </div>

          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .75 }} className="mt-6 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">
            {t.intro}
          </motion.p>

          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .9 }} className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
            {t.desc}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.05 }} className="mt-7 grid gap-3 sm:flex sm:flex-wrap">
            <button className="w-full bg-gradient-to-r from-[#f8d991] to-[#c58b31] px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-black sm:w-auto">
              {t.browse}
            </button>
            <button className="w-full border border-[#d7a64b]/70 px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white sm:w-auto">
              {t.add}
            </button>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .7, duration: .65 }} className="mt-7 w-full lg:mt-0 lg:w-[42%]">
          <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[420px] lg:max-w-lg">
            <div className="absolute -inset-6 bg-[#d7a64b]/10 blur-3xl" />
            <div className="relative aspect-square border border-[#d7a64b]/60 bg-[#11100e] p-3 shadow-[0_30px_100px_rgba(0,0,0,.75)] sm:p-5">
              <div className="grid h-full place-items-center border border-[#d7a64b]/80 bg-[radial-gradient(circle_at_50%_35%,rgba(217,166,75,.16),transparent_35%),linear-gradient(145deg,#151412,#070707)]">
                <MechativeMark size="xl" />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-4 pb-12 sm:px-6 sm:pb-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.cards.map(([title, desc], i) => {
            const CardIcon = cardIcons[i];
            return (
              <motion.div key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ delay: i * .08 }} className="border border-white/10 bg-white/[0.03] p-5 transition hover:border-[#d7a64b]/70 hover:bg-[#d7a64b]/5 sm:p-7">
                <CardIcon className="mb-5 h-9 w-9 text-[#d7a64b] sm:mb-7 sm:h-11 sm:w-11" />
                <h2 className="text-base font-bold uppercase tracking-[0.12em] sm:text-lg sm:tracking-[0.14em]">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-400 sm:mt-4 sm:text-base sm:leading-7">{desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section id="kontakt" className="relative z-10 mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="grid gap-8 border border-[#d7a64b]/20 bg-white/[0.03] p-5 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.22em] text-[#f4c66d] sm:text-sm">
              {lang === "pl" ? "Kontakt" : "Contact"}
            </p>
            <h2 className="text-3xl font-light uppercase leading-tight tracking-wide sm:text-4xl">
              {lang === "pl" ? "Masz pomysł na projekt?" : "Have a project idea?"}
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
              {lang === "pl"
                ? "Napisz, czego potrzebujesz: projekt CAD, elektronika, prototyp, druk 3D albo pomysł DIY. Formularz wyśle wiadomość bezpośrednio na e-mail."
                : "Tell us what you need: CAD design, electronics, prototype, 3D printing or a DIY idea. The form sends the message directly by email."}
            </p>
            <div className="mt-7 border border-white/10 bg-black/30 p-4 text-sm leading-7 text-zinc-300">
              <p className="text-[#f4c66d]">Mechative</p>
              <p>strefacad@gmail.com</p>
            </div>
          </div>

          <form action="https://formsubmit.co/strefacad@gmail.com" method="POST" className="grid gap-4">
            <input type="hidden" name="_subject" value="Nowa wiadomość z Mechative" />
            <input type="hidden" name="_captcha" value="false" />

            <div className="grid gap-2">
              <label className="text-xs uppercase tracking-[0.16em] text-zinc-400">{lang === "pl" ? "Imię" : "Name"}</label>
              <input name="name" required className="w-full border border-white/10 bg-black/50 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-[#d7a64b]" placeholder={lang === "pl" ? "Twoje imię" : "Your name"} />
            </div>

            <div className="grid gap-2">
              <label className="text-xs uppercase tracking-[0.16em] text-zinc-400">E-mail</label>
              <input name="email" type="email" required className="w-full border border-white/10 bg-black/50 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-[#d7a64b]" placeholder="you@example.com" />
            </div>

            <div className="grid gap-2">
              <label className="text-xs uppercase tracking-[0.16em] text-zinc-400">{lang === "pl" ? "Wiadomość" : "Message"}</label>
              <textarea name="message" required rows={5} className="w-full resize-none border border-white/10 bg-black/50 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-[#d7a64b]" placeholder={lang === "pl" ? "Opisz krótko swój projekt..." : "Briefly describe your project..."} />
            </div>

            <button type="submit" className="mt-2 bg-gradient-to-r from-[#f8d991] to-[#c58b31] px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-black">
              {lang === "pl" ? "Wyślij wiadomość" : "Send message"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
