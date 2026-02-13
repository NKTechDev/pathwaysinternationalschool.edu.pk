import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const TABS = [
  { key: "campus", label: "Campus" },
  { key: "event", label: "Event" },
];

export default function OurCampuses() {
  const [tab, setTab] = useState("campus");

  const data = useMemo(() => {
    const campus = [
      {
        id: "primary",
        title: "Primary School",
        subtitle: "Campus",
        img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80",
        to: "/campuses/primary",
      },
      {
        id: "junior",
        title: "Junior School",
        subtitle: "Campus",
        img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80",
        to: "/campuses/junior",
      },
      {
        id: "senior",
        title: "Senior School",
        subtitle: "Campus",
        img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=80",
        to: "/campuses/senior",
      },
    ];

    const event = [
      {
        id: "primary",
        title: "Primary School",
        subtitle: "Event",
        img: "https://images.unsplash.com/photo-1541692641319-981cc79ee10a?auto=format&fit=crop&w=1400&q=80",
        to: "/events/primary",
      },
      {
        id: "junior",
        title: "Junior School",
        subtitle: "Event",
        img: "https://images.unsplash.com/photo-1520975693411-6f4f6a2a57b9?auto=format&fit=crop&w=1400&q=80",
        to: "/events/junior",
      },
      {
        id: "senior",
        title: "Senior School",
        subtitle: "Event",
        img: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1400&q=80",
        to: "/events/senior",
      },
    ];

    return { campus, event };
  }, []);

  const cards = tab === "campus" ? data.campus : data.event;

  return (
    <section className="bg-white text-slate-900 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 md:mb-10">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight">
            Our Campuses
          </h2>
          <p className="mt-3 max-w-3xl text-base md:text-lg text-slate-500">
            Froebel Education Centre is home to three spacious campuses, each offering
            age-appropriate facilities and large playgrounds.
          </p>

          {/* Tabs */}
          <div className="mt-7 flex items-center gap-6">
            {TABS.map((t) => {
              const active = tab === t.key;
              return (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  className={`relative text-lg md:text-xl transition ${
                    active ? "text-slate-900 font-semibold" : "text-slate-400 hover:text-slate-600"
                  }`}
                >
                  {t.label}
                  {active && (
                    <span className="absolute left-0 -bottom-2 h-[2px] w-full bg-blue-600" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {cards.map((c) => (
              <CampusCard key={`${tab}-${c.id}`} item={c} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function CampusCard({ item }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
      className="group"
    >
      <Link to={item.to} className="block">
        {/* Image */}
        <div className="overflow-hidden rounded-md border border-black/10 bg-slate-100">
          <motion.img
            src={item.img}
            alt={item.title}
            loading="lazy"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.35 }}
            className="h-64 w-full object-cover md:h-72"
          />
        </div>

        {/* Text */}
        <div className="pt-4 text-center">
          <h3 className="font-serif text-3xl font-bold text-slate-900 underline decoration-slate-300 underline-offset-8 decoration-2">
            {item.title}
          </h3>
          <div className="mt-2 text-sm md:text-base text-slate-500">
            {item.subtitle}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
