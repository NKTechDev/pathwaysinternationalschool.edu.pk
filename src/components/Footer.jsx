// src/components/Footer.jsx
import { Link } from "react-router-dom";

const footerCols = [
  {
    title: "About us",
    links: [
      { label: "Welcome to FEC", to: "/about" },
      { label: "History", to: "/history" },
    ],
  },
  {
    title: "Academics",
    links: [
      { label: "Curriculum Overview", to: "/academics" },
      { label: "O-Level Results", to: "/o-level-results" },
    ],
  },
  {
    title: "Student Life",
    links: [
      { label: "Beyond the Classroom", to: "/student-life" },
      { label: "School Events", to: "/events" },
    ],
  },
  {
    title: "Admission",
    links: [
      { label: "Primary Section", to: "/admission/primary" },
      { label: "Junior Section", to: "/admission/junior" },
      { label: "Senior Section", to: "/admission/senior" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-white/80">
      {/* Top */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 lg:grid-cols-5 lg:items-start">
          {/* Center brand block */}
          <div className="lg:col-span-1 lg:order-3">
            <div className="flex flex-col items-center lg:items-center">
              {/* Logo placeholder */}
              <div className="h-14 w-14 rounded-full border border-white/15 bg-white/5 grid place-items-center">
                <span className="font-serif font-semibold tracking-wide text-white">FEC</span>
              </div>

              <div className="mt-4 text-center">
                <div className="font-serif text-white text-lg">Froebel</div>
                <div className="text-xs text-white/60">Education Centre</div>

                <div className="mt-3 text-xs leading-relaxed text-white/55">
                  208-209 A, Khayaban-e-Iqbal, <br />
                  Phase VIII DHA, Karachi
                </div>
              </div>
            </div>
          </div>

          {/* Columns */}
          <div className="lg:col-span-2 lg:order-1">
            <div className="grid grid-cols-2 gap-10">
              {footerCols.slice(0, 2).map((col) => (
                <FooterCol key={col.title} col={col} />
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 lg:order-5">
            <div className="grid grid-cols-2 gap-10">
              {footerCols.slice(2, 4).map((col) => (
                <FooterCol key={col.title} col={col} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-xs text-white/55">
              © {year} <span className="text-white/70">Froebel Education Centre</span>. All rights
              reserved.
            </div>

            <div className="flex items-center gap-3">
              <SocialIcon
                href="https://facebook.com"
                label="Facebook"
                icon={
                  <path d="M13.5 21v-7h2.4l.6-3H13.5V9.2c0-.9.3-1.5 1.6-1.5H16.7V5.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V11H7.5v3H10v7h3.5z" />
                }
              />
              <SocialIcon
                href="https://instagram.com"
                label="Instagram"
                icon={
                  <>
                    <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Z" />
                    <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
                    <path d="M17.6 6.3a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" />
                  </>
                }
              />
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
