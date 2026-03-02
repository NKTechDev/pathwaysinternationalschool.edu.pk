// src/components/Footer.jsx
import { Link } from "react-router-dom";

const footerCols = [
  {
    title: "About",
    links: [
      { label: "Welcome to PIS", to: "/about" },
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
      { label: "Fee Structure", to: "/fees" },
    ],
  },
];

const school = {
  name: "Pathways International School",
  tagline: "Excellence. Character. Global Learning.",
  addressLine1: "Citi Housing, Gujranwala",
  addressLine2: "Punjab, Pakistan",
  phoneDisplay: "+92 300 0000000",
  phoneHref: "tel:+923000000000",
  whatsappNumber: "923000000000",
  email: "info@pathways.edu.pk",
  mapHref: "https://www.google.com/maps?q=Citi+Housing+Gujranwala",
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
              <div className="h-12 w-12 shrink-0 rounded-2xl border border-white/10 bg-white/5 grid place-items-center shadow-sm">
                <span className="font-serif text-white tracking-wide">PIS</span>
              </div>

              <div>
                <div className="font-serif text-white text-xl leading-tight">
                  {school.name}
                </div>
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
                    <a
                      href={`mailto:${school.email}`}
                      className="w-fit hover:text-white transition"
                    >
                      {school.email}
                    </a>
                  </div>
                </div>

                {/* Quick actions */}
                <div className="mt-6 flex flex-wrap gap-2">
                  <ActionPill href={school.phoneHref} label="Call" />
                  <ActionPill
                    href={`https://wa.me/${school.whatsappNumber}`}
                    label="WhatsApp"
                  />
                  <ActionPill href={`mailto:${school.email}`} label="Email" />
                  <ActionPill href={school.mapHref} label="Map" />
                </div>

                {/* Social */}
                <div className="mt-7 flex items-center gap-3">
                  <SocialIcon
                    href={school.facebook}
                    label="Facebook"
                    icon={
                      <path d="M13.5 21v-7h2.4l.6-3H13.5V9.2c0-.9.3-1.5 1.6-1.5H16.7V5.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V11H7.5v3H10v7h3.5z" />
                    }
                  />
                  <SocialIcon
                    href={school.instagram}
                    label="Instagram"
                    icon={
                      <>
                        <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Z" />
                        <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
                        <path d="M17.6 6.3a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" />
                      </>
                    }
                  />
                  {/* Optional: YouTube */}
                  <SocialIcon
                    href={school.youtube}
                    label="YouTube"
                    icon={
                      <path d="M21.6 7.3a3 3 0 0 0-2.1-2.1C17.6 4.7 12 4.7 12 4.7s-5.6 0-7.5.5A3 3 0 0 0 2.4 7.3 31 31 0 0 0 2 12a31 31 0 0 0 .4 4.7 3 3 0 0 0 2.1 2.1c1.9.5 7.5.5 7.5.5s5.6 0 7.5-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22 12a31 31 0 0 0-.4-4.7ZM10.5 15.3V8.7L16 12l-5.5 3.3Z" />
                    }
                  />
                  {/* Optional: LinkedIn */}
                  <SocialIcon
                    href={school.linkedin}
                    label="LinkedIn"
                    icon={
                      <path d="M6.5 6.8A1.8 1.8 0 1 1 6.5 3a1.8 1.8 0 0 1 0 3.8ZM5 21V9h3v12H5Zm5 0V9h2.9v1.6h.1c.4-.8 1.5-1.9 3.3-1.9 3.5 0 4.1 2.3 4.1 5.2V21h-3v-5.3c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21h-3Z" />
                    }
                  />
                </div>
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