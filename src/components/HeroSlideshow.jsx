import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function HeroSlideshow() {
  const slides = useMemo(
    () => [
      {
        id: 1,
        src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=2400&q=80",
        alt: "School Children",
      },
      {
        id: 2,
        src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2400&q=80",
        alt: "Classroom",
      },
      {
        id: 3,
        src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2400&q=80",
        alt: "Graduation",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalMs = 5000;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [slides.length]);

  const active = slides[index];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image (Ken Burns) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1.08 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{
            backgroundImage: `url(${active.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-label={active.alt}
        />
      </AnimatePresence>

      {/* ✅ Premium Green Overlays (replacing black) */}
      <div className="absolute inset-0 bg-emerald-950/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/70 via-emerald-900/25 to-emerald-950/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/55 via-transparent to-emerald-950/35" />

      {/* Subtle glow accents */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-400/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 right-0 h-96 w-96 rounded-full bg-emerald-300/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white font-serif font-semibold tracking-tight text-4xl sm:text-5xl md:text-6xl"
          >
            Welcome to PWIS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-emerald-50/90 text-base sm:text-lg md:text-xl"
          >
            Learning • Confidence • Growth
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-7 flex flex-col sm:flex-row gap-3"
          >
            {/* Primary CTA */}
            <a
              href="#admission"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-emerald-950 bg-emerald-300 hover:bg-emerald-200 border border-emerald-200/40 shadow-[0_14px_40px_-18px_rgba(16,185,129,0.8)] transition"
            >
              Apply Now
            </a>

            {/* Secondary CTA */}
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white bg-emerald-500/10 hover:bg-emerald-500/15 border border-emerald-200/20 backdrop-blur transition"
            >
              Learn More
            </a>
          </motion.div>

          {/* Optional trust line */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-emerald-50/70"
          >
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              Cambridge Pathway Focus
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              Student-Centered Learning
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              Modern Campus Culture
            </span>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade (green) */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-emerald-950/60 to-transparent" />
    </section>
  );
}