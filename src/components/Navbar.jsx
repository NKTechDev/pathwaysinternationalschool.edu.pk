import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Responsive Navbar with:
 * ✅ Desktop: hover dropdowns (Framer Motion) + outside-click close
 * ✅ Mobile: hamburger + animated accordion dropdowns
 * ✅ Sticky + blur + premium look
 *
 * Notes:
 * - This version uses href anchors (#about etc). If you want routes, tell me and I’ll convert to <Link to="/...">
 */

const navItems = [
  { label: "Home", href: "#" },

  {
    label: "About",
    href: "#about",
    children: [
      { label: "Welcome to FEC", href: "#welcome" },
      { label: "History", href: "#history" },
      { label: "Success Stories", href: "#success" },
    ],
  },

  {
    label: "Academics",
    href: "#academics",
    children: [
      { label: "Curriculum Overview", href: "#curriculum" },
      { label: "O-Level Results", href: "#results" },
      { label: "Kindergarten", href: "#kg" },
      { label: "Primary", href: "#primary" },
      { label: "Junior", href: "#junior" },
      { label: "Senior", href: "#senior" },
    ],
  },

  {
    label: "Student Life",
    href: "#life",
    children: [
      { label: "Beyond the Classroom", href: "#beyond" },
      { label: "Extra Curricular", href: "#extracurricular" },
      { label: "School Events", href: "#events" },
    ],
  },

  {
    label: "Admission",
    href: "#admission",
    children: [
      { label: "Application Process", href: "#application-process" },
      { label: "Application Form", href: "#application-form" },
    ],
  },

  { label: "Career", href: "#career" },
  { label: "Contact", href: "#contact" },
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
      <div className="bg-black/25 backdrop-blur-xl border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between gap-3">
            {/* Brand */}
            <a
              href="#"
              className="flex items-center gap-3 select-none"
              onClick={() => {
                setMobileOpen(false);
                setActiveDesktop(null);
              }}
            >
              <div className="h-11 w-11 rounded-full grid place-items-center text-white font-extrabold tracking-wide bg-white/10 border border-white/15">
                PIS
              </div>
              <div className="hidden sm:block">
                <div className="text-white font-semibold leading-tight">
                  Pathways International School
                </div>
                <div className="text-white/70 text-xs -mt-0.5">
                  Learn • Grow • Lead
                </div>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav
              ref={desktopNavRef}
              className="hidden lg:flex items-center rounded-full bg-black/20 border border-white/10 backdrop-blur px-1 py-1"
            >
              {items.map((item, idx) => {
                const hasChildren = Array.isArray(item.children) && item.children.length > 0;
                const isOpen = activeDesktop === item.label;

                return (
                  <div
                    key={item.label}
                    className="relative flex items-center"
                    onMouseEnter={() => hasChildren && setActiveDesktop(item.label)}
                    onMouseLeave={() => hasChildren && setActiveDesktop(null)}
                  >
                    <a
                      href={item.href}
                      className="px-4 py-2 text-sm text-white/90 hover:text-white transition inline-flex items-center gap-1"
                      onClick={() => setActiveDesktop(null)}
                    >
                      {item.label}
                      {hasChildren && (
                        <span
                          className={`inline-block transition-transform ${
                            isOpen ? "rotate-180" : "rotate-0"
                          }`}
                          aria-hidden="true"
                        >
                          ▾
                        </span>
                      )}
                    </a>

                    {/* Dropdown */}
                    <AnimatePresence>
                      {hasChildren && isOpen && (
                        <motion.div
                          initial="hidden"
                          animate="show"
                          exit="exit"
                          variants={dropdownVariants}
                          className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-64"
                        >
                          <div className="rounded-2xl bg-white/95 text-black shadow-xl border border-black/10 overflow-hidden">
                            <div className="px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-black/55 border-b border-black/10">
                              {item.label}
                            </div>

                            <div className="p-2">
                              {item.children.map((child) => (
                                <a
                                  key={child.label}
                                  href={child.href}
                                  className="block rounded-xl px-3 py-2.5 text-sm text-black/80 hover:text-black hover:bg-black/5 transition"
                                  onClick={() => setActiveDesktop(null)}
                                >
                                  {child.label}
                                </a>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Vertical separator */}
                    {idx !== items.length - 1 && (
                      <span className="h-5 w-px bg-white/15" />
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              <a
                href="#admission"
                className="hidden sm:inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 transition"
                onClick={() => {
                  setMobileOpen(false);
                  setActiveDesktop(null);
                }}
              >
                Apply Now
              </a>

              {/* Mobile toggle */}
              <button
                type="button"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Open menu"
                aria-expanded={mobileOpen}
                className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/15 border border-white/15 transition"
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
                      d="M6.22 6.22a.75.75 0 0 1 1.06 0L12 10.94l4.72-4.72a.75.75 0 1 1 1.06 1.06L13.06 12l4.72 4.72a.75.75 0 1 1-1.06 1.06L12 13.06l-4.72 4.72a.75.75 0 1 1-1.06-1.06L10.94 12 6.22 7.28a.75.75 0 0 1 0-1.06Z"
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
                <div className="mt-2 rounded-2xl bg-black/30 border border-white/10 backdrop-blur p-2">
                  {items.map((item, idx) => {
                    const hasChildren =
                      Array.isArray(item.children) && item.children.length > 0;
                    const expanded = mobileExpanded === item.label;

                    return (
                      <div key={item.label}>
                        <div className="flex items-center justify-between">
                          <a
                            href={item.href}
                            className="flex-1 block px-4 py-3 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition"
                            onClick={() => {
                              // If it has children, don't auto-close, let user choose submenu OR jump to section
                              if (!hasChildren) {
                                setMobileOpen(false);
                                setMobileExpanded(null);
                              }
                            }}
                          >
                            {item.label}
                          </a>

                          {hasChildren && (
                            <button
                              type="button"
                              className="mr-2 h-10 w-10 grid place-items-center rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition"
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
                              <div className="ml-2 mr-2 mb-2 mt-1 rounded-2xl bg-white/10 border border-white/10 p-2">
                                {item.children.map((child) => (
                                  <a
                                    key={child.label}
                                    href={child.href}
                                    className="block rounded-xl px-4 py-2.5 text-sm text-white/90 hover:text-white hover:bg-white/10 transition"
                                    onClick={() => {
                                      setMobileOpen(false);
                                      setMobileExpanded(null);
                                    }}
                                  >
                                    {child.label}
                                  </a>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Separator */}
                        {idx !== items.length - 1 && (
                          <div className="mx-4 h-px bg-white/10" />
                        )}
                      </div>
                    );
                  })}

                  <div className="mt-2 px-2">
                    <a
                      href="#admission"
                      onClick={() => {
                        setMobileOpen(false);
                        setMobileExpanded(null);
                      }}
                      className="block text-center w-full rounded-xl px-4 py-3 text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 transition"
                    >
                      Apply Now
                    </a>
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