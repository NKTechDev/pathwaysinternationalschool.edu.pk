import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function HeroSlideshow() {
  const slides = useMemo(
    () => [
      {
        id: 1,
        // ✅ Stable Unsplash CDN link
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

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-black/45" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white font-serif font-semibold tracking-tight text-4xl sm:text-5xl md:text-6xl"
          >
            Welcome to FEC
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-white/85 text-base sm:text-lg md:text-xl"
          >
            Learning • Confidence • Growth
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-7 flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#admission"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur transition"
            >
              Apply Now
            </a>

            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white bg-transparent hover:bg-white/10 border border-white/20 backdrop-blur transition"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
    </section>
  );
}
