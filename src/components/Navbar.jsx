import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/**
 * Tailwind Modern Responsive Navbar
 * - Desktop: centered pill nav with vertical separators
 * - Mobile: hamburger menu + dropdown
 * - Sticky + blur + subtle border
 *
 * If you want scroll-to-sections on same page, keep href="#about" etc.
 * If you want route navigation, change items to { to: "/about" } and use <Link>.
 */

const navItems = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Student Life", href: "#life" },
  { label: "Admission", href: "#admission" },
  { label: "Career-Job", href: "#career" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // close on ESC
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // optional: close menu when resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Top bar background */}
      <div className="bg-black/20 backdrop-blur-xl border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between gap-3">
            {/* Brand */}
            <a href="#" className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-full grid place-items-center text-white font-extrabold tracking-wide bg-white/10 border border-white/15">
                FEC
              </div>
              <div className="hidden sm:block">
                <div className="text-white font-semibold leading-tight">
                  Froebel Education Centre
                </div>
                <div className="text-white/70 text-xs -mt-0.5">
                  Learn • Grow • Lead
                </div>
              </div>
            </a>

            {/* Desktop Links */}
            <nav className="hidden lg:flex items-center rounded-full bg-black/20 border border-white/10 backdrop-blur px-3 py-2">
              {navItems.map((item, idx) => (
                <div key={item.label} className="flex items-center">
                  <a
                    href={item.href}
                    className="px-4 py-2 text-sm text-white/90 hover:text-white transition"
                  >
                    {item.label}
                  </a>

                  {/* Vertical separator (not after last) */}
                  {idx !== navItems.length - 1 && (
                    <span className="h-5 w-px bg-white/15" />
                  )}
                </div>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center gap-2">
              <a
                href="#admission"
                className="hidden sm:inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 transition"
              >
                Apply Now
              </a>

              {/* Mobile toggle */}
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-label="Open menu"
                aria-expanded={open}
                className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/15 border border-white/15 transition"
              >
                <span className="sr-only">Menu</span>
                {/* Icon */}
                {open ? (
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

          {/* Mobile menu panel */}
          {open && (
            <div className="lg:hidden pb-4">
              <div className="mt-2 rounded-2xl bg-black/30 border border-white/10 backdrop-blur p-2">
                {navItems.map((item, idx) => (
                  <div key={item.label}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-3 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition"
                    >
                      {item.label}
                    </a>

                    {/* Horizontal separator */}
                    {idx !== navItems.length - 1 && (
                      <div className="mx-4 h-px bg-white/10" />
                    )}
                  </div>
                ))}

                <div className="mt-2 px-2">
                  <a
                    href="#admission"
                    onClick={() => setOpen(false)}
                    className="block text-center w-full rounded-xl px-4 py-3 text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 transition"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Spacer so content doesn't hide behind navbar (optional) */}
      <div className="h-16" />
    </header>
  );
}
