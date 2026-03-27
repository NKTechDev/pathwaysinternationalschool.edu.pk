import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

/**
 * Responsive Navbar with:
 * ✅ Desktop: hover dropdowns (Framer Motion) + outside-click close
 * ✅ Mobile: hamburger + animated accordion dropdowns
 * ✅ Sticky + blur + premium look
 *
 * Notes:
 * - This version uses to anchors (#about etc). If you want routes, tell me and I’ll convert to <Link to="/...">
 *
 * ✅ UPDATED: PURE GREEN NAV BACKGROUND + WHITE TEXT
 */

const navItems = [
  { label: "Home", to: "/" },

  {
    label: "About",
    to: "#about",
    children: [
      { label: "Welcome to PWIS", to: "/welcome" },
      { label: "History", to: "#history" },
      { label: "Success Stories", to: "/success" },
    ],
  },

  {
    label: "Academics",
    to: "#academics",
    children: [
      { label: "Curriculum Overview", to: "/curriculum" },
      { label: "O-Level Results", to: "/results" },
      { label: "Early Years", to: "/early-years" },
      { label: "Kindergarten", to: "/kg" },
      { label: "Primary", to: "/primary" },
      { label: "Junior", to: "/junior" },
      { label: "Senior", to: "/senior" },
    ],
  },

  {
    label: "Student Life",
    to: "#life",
    children: [
      { label: "Beyond the Classroom", to: "/beyond" },
      { label: "Extra Curricular", to: "/extracurricular" },
      { label: "School Events", to: "/events" },
    ],
  },

  {
    label: "Admission",
    to: "#admission",
    children: [
      { label: "Application Process", to: "/application-process" },
      // { label: "Application Form", to: "#application-form" },
    ],
  },

  { label: "Career", to: "/career" },
  { label: "Contact", to: "/contact" },
];

// Animations
const dropdownVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.98, pointerEvents: "none" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    pointerEvents: "auto",
    transition: { duration: 0.18, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: 8,
    scale: 0.985,
    transition: { duration: 0.14, ease: "easeIn" },
  },
};

const mobilePanelVariants = {
  hidden: { opacity: 0, height: 0 },
  show: { opacity: 1, height: "auto", transition: { duration: 0.2 } },
  exit: { opacity: 0, height: 0, transition: { duration: 0.16 } },
};

function useOutsideClick(ref, handler, when = true) {
  useEffect(() => {
    if (!when) return;
    const listener = (e) => {
      if (!ref.current) return;
      if (ref.current.contains(e.target)) return;
      handler?.();
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler, when]);
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Desktop dropdown state
  const [activeDesktop, setActiveDesktop] = useState(null); // label or null
  const desktopNavRef = useRef(null);

  // Mobile accordion state (which parent is expanded)
  const [mobileExpanded, setMobileExpanded] = useState(null); // label or null

  // Close on ESC
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setActiveDesktop(null);
        setMobileExpanded(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Close mobile when resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
        setMobileExpanded(null);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Outside click closes desktop dropdown
  useOutsideClick(desktopNavRef, () => setActiveDesktop(null), true);

  const items = useMemo(() => navItems, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* ✅ PURE GREEN NAV BACKGROUND */}
      <div className="bg-gradient-to-br from-emerald-700 via-green-700 to-emerald-900 border-b border-emerald-500/40 shadow-lg">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between gap-3">
            {/* Brand */}
            <a
              to="#"
              className="flex items-center gap-3 select-none"
              onClick={() => {
                setMobileOpen(false);
                setActiveDesktop(null);
              }}
            >
              <div class="flex items-center space-x-3">
                <img src="logo.png" alt="Logo" class="h-16 w-auto" />
              </div>            </a>

            {/* Desktop Nav */}
            <nav
              ref={desktopNavRef}
              className="hidden lg:flex items-center rounded-full bg-emerald-800/60 border border-white/15 px-1 py-1"
            >
              {items.map((item, idx) => {
                const hasChildren =
                  Array.isArray(item.children) && item.children.length > 0;
                const isOpen = activeDesktop === item.label;

                return (
                  <div
                    key={item.label}
                    className="relative flex items-center"
                    onMouseEnter={() => hasChildren && setActiveDesktop(item.label)}
                    onMouseLeave={() => hasChildren && setActiveDesktop(null)}
                  >
                    <Link
                      to={item.to}
                      className="px-4 py-2 text-sm text-white hover:bg-emerald-600/60 rounded-full transition inline-flex items-center gap-1"
                      onClick={() => setActiveDesktop(null)}
                    >
                      {item.label}
                      {hasChildren && (
                        <span
                          className={`inline-block transition-transform ${isOpen ? "rotate-180" : "rotate-0"
                            }`}
                          aria-hidden="true"
                        >
                          ▾
                        </span>
                      )}
                    </Link>

                    {/* Dropdown */}
                    <AnimatePresence>
                      {hasChildren && isOpen && (
                        <motion.div
                          initial="hidden"
                          animate="show"
                          exit="exit"
                          variants={dropdownVariants}
                          className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-72"
                        >
                          <div className="rounded-2xl bg-white text-black shadow-2xl border border-black/10 overflow-hidden">
                            <div className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-emerald-700 border-b border-black/10 bg-emerald-50">
                              {item.label}
                            </div>

                            <div className="p-2">
                              {item.children.map((child) => (
                                <Link
                                  key={child.label}
                                  to={child.to}
                                  className="block rounded-xl px-3 py-2.5 text-sm text-black/80 hover:text-emerald-800 hover:bg-emerald-50 transition"
                                  onClick={() => setActiveDesktop(null)}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Vertical separator */}
                    {idx !== items.length - 1 && (
                      <span className="h-5 w-px bg-white/20" />
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              <Link
                to="/application-process"
                className="hidden sm:inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-emerald-800 bg-white hover:bg-emerald-50 border border-white/20 transition"
                onClick={() => {
                  setMobileOpen(false);
                  setActiveDesktop(null);
                }}
              >
                Apply Now
              </Link>

              {/* Mobile toggle */}
              <button
                type="button"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Open menu"
                aria-expanded={mobileOpen}
                className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-800 hover:bg-emerald-900 border border-white/15 transition"
              >
                {mobileOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.22 6.22a.75.75 0 0 1 1.06 0L12 10.94l4.72-4.72a.75.75 0 1 1 1.06 1.06L13.06 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L12 13.06l-4.72 4.72a.75.75 0 0 1-1.06-1.06L10.94 12 6.22 7.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.75 6.75A.75.75 0 0 1 4.5 6h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 5.25A.75.75 0 0 1 4.5 16.5h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18 }}
                className="lg:hidden pb-4"
              >
                <div className="mt-2 rounded-2xl bg-emerald-800 border border-white/15 p-2">
                  {items.map((item, idx) => {
                    const hasChildren =
                      Array.isArray(item.children) && item.children.length > 0;
                    const expanded = mobileExpanded === item.label;

                    return (
                      <div key={item.label}>
                        <div className="flex items-center justify-between">
                          <Link
                            to={item.to}
                            className="flex-1 block px-4 py-3 text-sm font-medium text-white hover:bg-emerald-700 rounded-xl transition"
                            onClick={() => {
                              if (!hasChildren) {
                                setMobileOpen(false);
                                setMobileExpanded(null);
                              }
                            }}
                          >
                            {item.label}
                          </Link>

                          {hasChildren && (
                            <button
                              type="button"
                              className="mr-2 h-10 w-10 grid place-items-center rounded-xl bg-emerald-700 hover:bg-emerald-600 border border-white/10 transition"
                              aria-label={`Toggle ${item.label}`}
                              aria-expanded={expanded}
                              onClick={() =>
                                setMobileExpanded((cur) =>
                                  cur === item.label ? null : item.label
                                )
                              }
                            >
                              <motion.span
                                animate={{ rotate: expanded ? 180 : 0 }}
                                transition={{ duration: 0.18 }}
                                className="text-white"
                              >
                                ▾
                              </motion.span>
                            </button>
                          )}
                        </div>

                        {/* Mobile dropdown children */}
                        <AnimatePresence initial={false}>
                          {hasChildren && expanded && (
                            <motion.div
                              variants={mobilePanelVariants}
                              initial="hidden"
                              animate="show"
                              exit="exit"
                              className="overflow-hidden"
                            >
                              <div className="ml-2 mr-2 mb-2 mt-1 rounded-2xl bg-emerald-700 border border-white/10 p-2">
                                {item.children.map((child) => (
                                  <Link
                                    key={child.label}
                                    to={child.to}
                                    className="block rounded-xl px-4 py-2.5 text-sm text-white hover:bg-emerald-600 transition"
                                    onClick={() => {
                                      setMobileOpen(false);
                                      setMobileExpanded(null);
                                    }}
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Separator */}
                        {idx !== items.length - 1 && (
                          <div className="mx-4 h-px bg-white/20" />
                        )}
                      </div>
                    );
                  })}

                  <div className="mt-2 px-2">
                    <Link
                      to="/application-process"
                      onClick={() => {
                        setMobileOpen(false);
                        setMobileExpanded(null);
                      }}
                      className="block text-center w-full rounded-xl px-4 py-3 text-sm font-semibold text-emerald-800 bg-white hover:bg-emerald-50 border border-white/20 transition"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Spacer so content doesn't hide behind navbar */}
      <div className="h-16" />
    </header>
  );
}