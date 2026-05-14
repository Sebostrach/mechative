"use client";

import { ReactNode, useState } from "react";
import { motion } from "framer-motion";

type IconProps = {
  className?: string;
};

function Icon({
  children,
  className = "h-5 w-5",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {children}
    </svg>
  );
}

function Cuboid({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M21 16V8l-9-5-9 5v8l9 5 9-5Z" />
      <path d="M3.3 7.8 12 13l8.7-5.2" />
      <path d="M12 22V13" />
    </Icon>
  );
}

function Layers3({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5" />
      <path d="m3 16 9 5 9-5" />
    </Icon>
  );
}

function Sparkles({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M12 3l1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7L12 3Z" />
    </Icon>
  );
}

function Ruler({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M4 19 19 4l1 1L5 20l-1-1Z" />
      <path d="m8 15 2 2" />
      <path d="m11 12 2 2" />
    </Icon>
  );
}

function CheckCircle2({ className }: IconProps) {
  return (
    <Icon className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 2.5 2.5L16 9" />
    </Icon>
  );
}

function MousePointer2({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M5 3l13 8-6 1-3 6L5 3Z" />
    </Icon>
  );
}

function MechativeMark({
  className = "h-12 w-12",
  innerClassName = "h-7 w-7",
}: {
  className?: string;
  innerClassName?: string;
}) {
  return (
    <div
      className={`grid place-items-center border border-[#d7a64b] bg-black shadow-[0_0_28px_rgba(217,166,75,.18)] ${className}`}
    >
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
        <p className="text-lg font-semibold uppercase tracking-[0.28em] text-[#f4c66d]">
          Mechative
        </p>
        <p className="text-[10px] uppercase tracking-[0.24em] text-[#d7a64b]">
          Excellence in every detail
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  const [lang, setLang] = useState<"pl" | "en">("pl");

  const copy = {
    pl: {
      nav: ["Strona główna", "Projekty", "Pliki CAD", "Elektronika", "Poradniki", "Kontakt"],
      join: "Dołącz",
      eyebrow: "Witaj w Mechative",
      heroDesc:
        "Miejsce dla pasjonatów projektowania, elektroniki i nowoczesnych technologii. Twórz, pobieraj i rozwijaj projekty DIY razem ze społecznością.",
      browse: "Przeglądaj projekty",
      community: "Dołącz do społeczności",
      pillars: ["Profesjonalny wizerunek", "Premium jakość", "Zapada w pamięć", "Buduje zaufanie"],
      aboutLabel: "O Mechative",
      aboutTitle: "Technologia. Pasja. Innowacja.",
      aboutText:
        "Mechative to platforma dla twórców hardware, makerów i inżynierów. Znajdziesz tu projekty CAD, schematy elektroniki, kod, poradniki oraz gotowe rozwiązania do własnych konstrukcji.",
      learnMore: "Dowiedz się więcej",
      sectionTitle: "Co znajdziesz na Mechative?",
      categories: [
        ["Elektronika", "Schematy, PCB, moduły i gotowe rozwiązania."],
        ["Projekty CAD", "Modele 3D, rysunki techniczne i pliki STL."],
        ["CNC", "Projekty do obróbki, G-code i ustawienia."],
        ["Druk 3D", "Modele do druku, porady i ustawienia."],
        ["Mikrokontrolery", "Arduino, ESP32, STM32 i wiele więcej."],
        ["Projekty DIY", "Gotowe projekty krok po kroku."],
      ],
      ctaTitle: "Dołącz do społeczności",
      ctaSubtitle: "Twórz. Dziel się. Rozwijaj się.",
      ctaText:
        "Zarejestruj się i zyskaj dostęp do projektów, plików i poradników tworzonych przez społeczność Mechative.",
      register: "Zarejestruj się",
      login: "Masz już konto? Zaloguj się",
    },
    en: {
      nav: ["Home", "Projects", "CAD Files", "Electronics", "Guides", "Contact"],
      join: "Join",
      eyebrow: "Welcome to Mechative",
      heroDesc:
        "A place for design, electronics and modern technology enthusiasts. Create, download and develop DIY projects with the community.",
      browse: "Browse projects",
      community: "Join the community",
      pillars: ["Professional image", "Premium quality", "Memorable", "Builds trust"],
      aboutLabel: "About Mechative",
      aboutTitle: "Technology. Passion. Innovation.",
      aboutText:
        "Mechative is a platform for hardware creators, makers and engineers. Find CAD projects, electronics schematics, code, guides and ready-to-use solutions for your own builds.",
      learnMore: "Learn more",
      sectionTitle: "What will you find on Mechative?",
      categories: [
        ["Electronics", "Schematics, PCBs, modules and ready solutions."],
        ["CAD Projects", "3D models, technical drawings and STL files."],
        ["CNC", "Machining projects, G-code and settings."],
        ["3D Printing", "Printable models, tips and print settings."],
        ["Microcontrollers", "Arduino, ESP32, STM32 and much more."],
        ["DIY Projects", "Ready step-by-step build projects."],
      ],
      ctaTitle: "Join the community",
      ctaSubtitle: "Create. Share. Grow.",
      ctaText:
        "Register and get access to projects, files and guides created by the Mechative community.",
      register: "Register",
      login: "Already have an account? Log in",
    },
  };

  const t = copy[lang];
  const icons = [Cuboid, Layers3, Ruler, Sparkles, MousePointer2, CheckCircle2];

  return (
    <main className="min-h-screen bg-[#080807] text-white">
      <div className="pointer-events-none fixed inset-0 opacity-40 [background-image:radial-gradient(circle_at_30%_10%,rgba(217,166,75,.16),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(255,201,109,.08),transparent_22%)]" />

      <header className="sticky top-0 z-50 border-b border-[#d7a64b]/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <MechativeLogo />

          <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.16em] text-zinc-300 lg:flex">
            {t.nav.map((item, i) => (
              <a key={item} href="#" className={i === 0 ? "text-[#f4c66d]" : "hover:text-[#f4c66d]"}>
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button onClick={() => setLang("pl")} className={`px-3 py-2 text-xs ${lang === "pl" ? "bg-[#d7a64b] text-black" : "border border-[#d7a64b]/30"}`}>
              PL
            </button>
            <button onClick={() => setLang("en")} className={`px-3 py-2 text-xs ${lang === "en" ? "bg-[#d7a64b] text-black" : "border border-[#d7a64b]/30"}`}>
              EN
            </button>
            <button className="hidden border border-[#d7a64b] px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#f4c66d] hover:bg-[#d7a64b] hover:text-black sm:block">
              {t.join}
            </button>
          </div>
        </div>
      </header>

      <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:py-32">
  <div>
    <p className="mb-6 text-sm uppercase tracking-[0.24em] text-[#f4c66d]">
      {t.eyebrow}
    </p>

    <h1 className="text-5xl font-light uppercase leading-[1.05] tracking-wide md:text-7xl">
      Excellence
      <span className="block bg-gradient-to-r from-[#f8d991] via-[#d7a64b] to-[#8a561b] bg-clip-text font-semibold text-transparent">
        in every detail
      </span>
    </h1>

    <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-300">
      {t.heroDesc}
    </p>

    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
      <button className="bg-gradient-to-r from-[#f8d991] to-[#c58b31] px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-black">
        {t.browse}
      </button>

      <button className="border border-[#d7a64b]/70 px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white">
        {t.community}
      </button>
    </div>
  </div>

  <div className="relative mx-auto w-full max-w-lg">
    <div className="absolute -inset-10 bg-[#d7a64b]/10 blur-3xl" />

    <div className="relative aspect-square border border-[#d7a64b]/60 bg-[#11100e] p-5 shadow-[0_30px_100px_rgba(0,0,0,.75)]">
      <div className="grid h-full place-items-center border border-[#d7a64b]/80 bg-[radial-gradient(circle_at_50%_35%,rgba(217,166,75,.16),transparent_35%),linear-gradient(145deg,#151412,#070707)]">
        <MechativeMark className="h-64 w-64 border-2" innerClassName="h-40 w-40" />
      </div>
    </div>
  </div>
</section>

      <section className="relative z-10 border-y border-white/10 bg-black/30">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 md:grid-cols-4">
          {t.pillars.map((item, i) => {
            const IconComp = icons[i];
            return (
              <div key={item} className="flex items-center gap-5 border-[#d7a64b]/30 md:border-r md:last:border-r-0">
                <IconComp className="h-10 w-10 text-[#d7a64b]" />
                <p className="max-w-40 text-sm font-medium uppercase tracking-[0.15em]">{item}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
        <div>
          <p className="mb-5 text-sm uppercase tracking-[0.24em] text-[#f4c66d]">{t.aboutLabel}</p>
          <h2 className="text-4xl font-light uppercase leading-tight tracking-wide md:text-5xl">
            {t.aboutTitle}
          </h2>
          <p className="mt-7 max-w-xl text-base leading-8 text-zinc-300">{t.aboutText}</p>
          <button className="mt-8 border border-[#d7a64b]/70 px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] hover:bg-[#d7a64b] hover:text-black">
            {t.learnMore} →
          </button>
        </div>

        <div className="grid h-80 place-items-center border border-white/10 bg-[#111] shadow-2xl">
          <MechativeMark className="h-52 w-52 border-2" innerClassName="h-32 w-32" />
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20">
        <h2 className="mb-8 text-center text-3xl font-light uppercase tracking-wide md:text-4xl">
          {t.sectionTitle}
        </h2>

        <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-6">
          {t.categories.map(([title, desc], i) => {
            const IconComp = icons[i];
            return (
              <div key={title} className="min-h-52 border border-white/10 bg-white/[0.03] p-5 hover:border-[#d7a64b]/70">
                <IconComp className="mb-7 h-10 w-10 text-[#d7a64b]" />
                <h3 className="text-sm font-bold uppercase tracking-[0.12em]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{desc}</p>
                <p className="mt-5 text-right text-xl text-[#d7a64b]">→</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20">
        <div className="border border-white/10 bg-[linear-gradient(135deg,rgba(217,166,75,.12),rgba(255,255,255,.02))] p-8 md:flex md:items-center md:justify-between md:p-12">
          <div>
            <p className="text-xl uppercase tracking-[0.16em] text-[#f4c66d]">{t.ctaTitle}</p>
            <h2 className="mt-3 text-3xl font-light uppercase tracking-wide md:text-4xl">
              {t.ctaSubtitle}
            </h2>
            <p className="mt-5 max-w-2xl leading-7 text-zinc-300">{t.ctaText}</p>
          </div>
          <div className="mt-8 md:mt-0 md:text-right">
            <button className="bg-gradient-to-r from-[#f8d991] to-[#c58b31] px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] text-black">
              {t.register}
            </button>
            <p className="mt-4 text-sm text-zinc-400">{t.login}</p>
          </div>
        </div>
      </section>
    </main>
  );
}