// src/components/Footer.jsx
import { Link } from "react-router-dom";

const footerCols = [
  {
    title: "About",
    links: [
      { label: "Welcome to PWIS", to: "/about" },
      { label: "Our History", to: "/history" },
      { label: "Leadership", to: "/leadership" },
    ],
  },
  {
    title: "Academics",
    links: [
      { label: "Curriculum Overview", to: "/academics" },
      { label: "O-Level Results", to: "/o-level-results" },
      { label: "Co-curricular", to: "/co-curricular" },
    ],
  },
  {
    title: "Student Life",
    links: [
      { label: "Beyond the Classroom", to: "/student-life" },
      { label: "School Events", to: "/events" },
      { label: "Clubs & Societies", to: "/clubs" },
    ],
  },
  {
    title: "Admissions",
    links: [
      { label: "Primary Section", to: "/admission/primary" },
      { label: "Junior Section", to: "/admission/junior" },
      { label: "Senior Section", to: "/admission/senior" },
    ],
  },
];

const school = {
  name: "Pathways International School",
  tagline: "Excellence. Character. Global Learning.",

  // Address
  addressLine1: "Marketing Office, HH 45 Commercial",
  addressLine2: "Near Citi Housing Phase 1, WAFI",
  city: "Citi Housing, Gujranwala",
  country: "Punjab, Pakistan",
  postalCode: "52201",

  // Landline (Primary for calls)
  landlineDisplay: "+92 55 4283590",
  landlineHref: "tel:+92554283590",

  // International Call Numbers
  callUs: {
    uae: "+971 563628414",
    uk: "+44 7462 296681",
    pakistan: "+92 327 7771123"
  },

  // WhatsApp
  whatsappNumber: "923277771123",

  // Email
  email: "info@pathwaysinternationalschool.edu.pk",

  // Map
  mapHref: "https://www.google.com/maps?q=HH+45+Commercial+WAFI+Citi+Housing+Gujranwala",

  // Social Media
  facebook: "https://facebook.com",
  instagram: "https://instagram.com",
  youtube: "https://youtube.com",
  linkedin: "https://linkedin.com",
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-neutral-950 text-white/80">
      {/* soft background accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
      >
        <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-48 right-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
      </div>

      {/* Top */}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand + contact */}
          <div className="lg:col-span-4">
            <div className="flex items-start gap-4">
              {/* Logo badge */}
              <div className="h-12 w-40 shrink-0 rounded-2xl  grid place-items-center shadow-sm">
              <img src="logo.png" alt="" />
              </div>

              <div>
              
                <div className="mt-1 text-sm text-white/55">
                  {school.tagline}
                </div>

                <div className="mt-5 space-y-2 text-sm text-white/60">
                  <div className="leading-relaxed">
                    {school.addressLine1}
                    <br />
                    {school.addressLine2}
                  </div>

                  <div className="flex flex-col gap-1">
                    <a
                      href={school.phoneHref}
                      className="w-fit hover:text-white transition"
                    >
                      {school.phoneDisplay}
                    </a>
                    {/* <br />
                    <a
                      href={`mailto:${school.email}`}
                      className="w-fit hover:text-white transition"
                    >
                      {school.email}
                    </a> */}
                  </div>
                </div>

                {/* Quick actions */}
                <div className="mt-6 flex flex-wrap gap-2">
                  <ActionPill
                    href={`https://wa.me/${school.whatsappNumber}`}
                    label="WhatsApp"
                  />
                  <ActionPill href={`mailto:${school.email}`} label="Email" />
                  <ActionPill href={school.mapHref} label="Map" />
                </div>

                {/* Social */}
              
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
              {footerCols.map((col) => (
                <FooterCol key={col.title} col={col} />
              ))}
            </div>

            {/* Newsletter / note */}
            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="font-serif text-white text-lg">
                    Stay connected
                  </div>
                  <div className="text-sm text-white/60">
                    Get updates about admissions, events, and results.
                  </div>
                </div>

                <div className="flex w-full max-w-md items-center gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="h-11 w-full rounded-xl border border-white/10 bg-neutral-950/40 px-4 text-sm text-white placeholder:text-white/35 outline-none focus:border-white/25"
                  />
                  <button
                    type="button"
                    className="h-11 shrink-0 rounded-xl bg-white text-neutral-950 px-4 text-sm font-semibold hover:opacity-90 transition"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="mt-3 text-xs text-white/45">
                By subscribing, you agree to receive school updates. You can
                unsubscribe anytime.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-xs text-white/55">
              © {year}{" "}
              <span className="text-white/80">{school.name}</span>. All rights
              reserved.
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
              <Link
                to="/privacy"
                className="text-white/55 hover:text-white transition"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-white/55 hover:text-white transition"
              >
                Terms
              </Link>
              <Link
                to="/contact"
                className="text-white/55 hover:text-white transition"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ col }) {
  return (
    <div>
      <div className="font-serif text-white text-lg">{col.title}</div>
      <div className="mt-4 space-y-2">
        {col.links.map((l) => (
          <Link
            key={l.label}
            to={l.to}
            className="block text-sm text-white/55 hover:text-white transition"
          >
            {l.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function SocialIcon({ href, label, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="h-10 w-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition grid place-items-center"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white/80">
        {icon}
      </svg>
    </a>
  );
}

function ActionPill({ href, label }) {
  return (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
      className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 hover:text-white hover:border-white/20 hover:bg-white/10 transition"
    >
      {label}
    </a>
  );
}