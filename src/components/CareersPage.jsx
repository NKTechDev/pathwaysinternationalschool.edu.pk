import React, { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const DEPARTMENTS = [
  "All",
  "Teaching",
  "Administration",
  "Student Support",
  "IT & Systems",
  "Finance",
  "Marketing",
];

const LOCATIONS = ["All", "Campus", "Hybrid", "Remote"];

// Demo jobs (replace with your real data or API)
const JOBS = [
  {
    id: "tch-math-01",
    title: "Mathematics Teacher (Middle School)",
    department: "Teaching",
    location: "Campus",
    type: "Full-time",
    experience: "2+ years",
    deadline: "Open",
    summary:
      "Deliver engaging lessons aligned with the British curriculum, track progress, and collaborate with the subject team.",
    responsibilities: [
      "Plan and deliver well-structured lessons and assessments",
      "Differentiate instruction to support diverse learners",
      "Maintain accurate records and communicate with parents",
      "Participate in training, events, and academic planning",
    ],
    requirements: [
      "Bachelor’s degree (Master’s preferred)",
      "Experience with British/International curriculum is a plus",
      "Strong classroom management and communication skills",
    ],
  },
  {
    id: "adm-front-01",
    title: "Front Desk & Admissions Coordinator",
    department: "Administration",
    location: "Campus",
    type: "Full-time",
    experience: "1–3 years",
    deadline: "Open",
    summary:
      "Support admissions inquiries, manage front desk operations, and coordinate parent communications.",
    responsibilities: [
      "Handle walk-ins, calls, and email inquiries professionally",
      "Support admissions documentation and data entry",
      "Coordinate meetings, tours, and follow-ups",
      "Maintain confidentiality and accurate records",
    ],
    requirements: [
      "Excellent written and spoken English",
      "Comfortable with CRM/Sheets and admin workflows",
      "Professional, proactive, and organized",
    ],
  },
  {
    id: "sup-coun-01",
    title: "Student Counsellor",
    department: "Student Support",
    location: "Campus",
    type: "Full-time",
    experience: "3+ years",
    deadline: "Open",
    summary:
      "Provide student wellbeing support, counselling sessions, and collaborate with staff to build a safe learning environment.",
    responsibilities: [
      "Conduct counselling sessions and referrals",
      "Support safeguarding and wellbeing initiatives",
      "Coordinate with parents and teachers on student plans",
      "Deliver workshops on wellbeing and study skills",
    ],
    requirements: [
      "Relevant degree/certification in counselling/psychology",
      "School counselling experience preferred",
      "Strong empathy, ethics, and confidentiality",
    ],
  },
  {
    id: "it-sys-01",
    title: "IT Support Officer",
    department: "IT & Systems",
    location: "Campus",
    type: "Full-time",
    experience: "2+ years",
    deadline: "Open",
    summary:
      "Maintain campus IT systems, resolve tickets, and support staff with devices, networking, and classroom technology.",
    responsibilities: [
      "Provide L1/L2 support for staff and labs",
      "Maintain network, printers, and classroom AV",
      "Document fixes and manage inventory",
      "Support cybersecurity and backups",
    ],
    requirements: [
      "Hands-on experience with Windows/Mac and basic networking",
      "Strong troubleshooting and customer service",
      "Certifications (e.g., CompTIA) are a plus",
    ],
  },
];

function Badge({ children, tone = "green" }) {
  const map = {
    green: "border-emerald-200 bg-emerald-50 text-emerald-800",
    slate: "border-slate-200 bg-slate-50 text-slate-700",
    amber: "border-amber-200 bg-amber-50 text-amber-800",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${
        map[tone] || map.green
      }`}
    >
      {children}
    </span>
  );
}

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="scroll-mt-24 space-y-3">
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="text-sm text-slate-600 sm:text-base">{subtitle}</p>
        ) : null}
      </div>
      <div className="prose prose-slate max-w-none prose-p:leading-relaxed">
        {children}
      </div>
    </section>
  );
}

export default function CareersPage() {
  const [query, setQuery] = useState("");
  const [dept, setDept] = useState("All");
  const [loc, setLoc] = useState("All");
  const [activeJobId, setActiveJobId] = useState(JOBS[0]?.id || "");

  const filteredJobs = useMemo(() => {
    const q = query.trim().toLowerCase();
    return JOBS.filter((j) => {
      const matchesQuery =
        !q ||
        j.title.toLowerCase().includes(q) ||
        j.department.toLowerCase().includes(q) ||
        j.summary.toLowerCase().includes(q);
      const matchesDept = dept === "All" || j.department === dept;
      const matchesLoc = loc === "All" || j.location === loc;
      return matchesQuery && matchesDept && matchesLoc;
    });
  }, [query, dept, loc]);

  const activeJob = useMemo(() => {
    return filteredJobs.find((j) => j.id === activeJobId) || filteredJobs[0] || null;
  }, [filteredJobs, activeJobId]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-white">
      {/* HERO */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.38),rgba(16,185,129,0.06),transparent)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/70 via-emerald-900/40 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-emerald-50 ring-1 ring-white/20">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              Pathways International School
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Careers
            </h1>
            <p className="mt-4 text-base leading-relaxed text-emerald-50/90 sm:text-lg">
              Join a team that values professionalism, student wellbeing, and academic
              excellence. Explore current openings and apply in minutes.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#openings"
                className="inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-emerald-900/10 transition hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-300"
              >
                View Openings
              </a>
              <a
                href="#culture"
                className="inline-flex items-center justify-center rounded-2xl bg-white/10 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/25 backdrop-blur transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              >
                Our Culture
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        {/* TOP HIGHLIGHTS */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[{
            title: "Professional Environment",
            desc: "Respectful culture with clear processes and support.",
          }, {
            title: "Growth & Training",
            desc: "Ongoing development and upskilling opportunities.",
          }, {
            title: "Student-Centered",
            desc: "A safe, caring, and structured learning setting.",
          }, {
            title: "Impactful Work",
            desc: "Make a measurable difference in learners’ lives.",
          }].map((c) => (
            <Card key={c.title} className="rounded-2xl border-emerald-100 shadow-sm">
              <CardContent className="p-5">
                <p className="text-sm font-semibold text-slate-900">{c.title}</p>
                <p className="mt-1 text-sm text-slate-600">{c.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          {/* LEFT: NAV + QUICK APPLY */}
          <div className="lg:col-span-4">
            <Card className="sticky top-6 rounded-2xl border-emerald-100 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base">On this page</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <nav className="space-y-2 text-sm">
                  {[{
                    href: "#openings",
                    label: "Current Openings",
                  }, {
                    href: "#how-to-apply",
                    label: "How to Apply",
                  }, {
                    href: "#culture",
                    label: "Our Culture",
                  }, {
                    href: "#faq",
                    label: "FAQs",
                  }].map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block rounded-xl px-3 py-2 text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-800"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>

                <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
                  <p className="text-sm font-semibold text-emerald-900">
                    Prefer to send your CV?
                  </p>
                  <p className="mt-1 text-sm text-emerald-900/80">
                    Email your CV and cover letter. Mention the position title in the
                    subject line.
                  </p>
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      href="mailto:hr@pathwaysinternationalschool.com"
                      className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
                    >
                      Email HR
                    </a>
                    <p className="text-xs text-emerald-900/70">
                      hr@pathwaysinternationalschool.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* RIGHT: CONTENT */}
          <div className="space-y-10 lg:col-span-8">
            {/* OPENINGS */}
            <Card id="openings" className="rounded-2xl border-emerald-100 shadow-sm">
              <CardHeader>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <CardTitle className="text-2xl sm:text-3xl">Current Openings</CardTitle>
                    <p className="mt-2 text-sm text-slate-600">
                      Filter roles by department, location, or keywords.
                    </p>
                  </div>
                  <Badge>{filteredJobs.length} role(s)</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-5">
                {/* Filters */}
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="sm:col-span-1">
                    <label className="mb-1 block text-xs font-medium text-slate-700">
                      Search
                    </label>
                    <Input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="e.g., teacher, IT, admissions"
                      className="rounded-2xl"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-medium text-slate-700">
                      Department
                    </label>
                    <select
                      value={dept}
                      onChange={(e) => setDept(e.target.value)}
                      className="h-10 w-full rounded-2xl border border-slate-200 bg-white px-3 text-sm text-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    >
                      {DEPARTMENTS.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-medium text-slate-700">
                      Location
                    </label>
                    <select
                      value={loc}
                      onChange={(e) => setLoc(e.target.value)}
                      className="h-10 w-full rounded-2xl border border-slate-200 bg-white px-3 text-sm text-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    >
                      {LOCATIONS.map((l) => (
                        <option key={l} value={l}>
                          {l}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid gap-4 lg:grid-cols-2">
                  {/* Job list */}
                  <div className="space-y-3">
                    {filteredJobs.length === 0 ? (
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                        No roles found. Try changing filters or send your CV to HR.
                      </div>
                    ) : (
                      filteredJobs.map((job) => {
                        const active = job.id === activeJobId;
                        return (
                          <button
                            key={job.id}
                            onClick={() => setActiveJobId(job.id)}
                            className={`w-full rounded-2xl border p-4 text-left transition ${
                              active
                                ? "border-emerald-200 bg-emerald-50"
                                : "border-slate-200 bg-white hover:bg-slate-50"
                            }`}
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <p className="text-sm font-semibold text-slate-900">
                                  {job.title}
                                </p>
                                <p className="mt-1 text-xs text-slate-600">
                                  {job.department} • {job.location} • {job.type}
                                </p>
                              </div>
                              <Badge tone={active ? "green" : "slate"}>
                                {job.deadline}
                              </Badge>
                            </div>
                            <p className="mt-2 text-sm text-slate-700 line-clamp-2">
                              {job.summary}
                            </p>
                          </button>
                        );
                      })
                    )}
                  </div>

                  {/* Job details */}
                  <div className="rounded-2xl border border-slate-200 bg-white p-5">
                    {activeJob ? (
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-semibold text-slate-900">
                            {activeJob.title}
                          </h3>
                          <div className="mt-2 flex flex-wrap gap-2">
                            <Badge>{activeJob.department}</Badge>
                            <Badge tone="slate">{activeJob.location}</Badge>
                            <Badge tone="slate">{activeJob.type}</Badge>
                            <Badge tone="amber">Exp: {activeJob.experience}</Badge>
                          </div>
                          <p className="mt-3 text-sm text-slate-700">
                            {activeJob.summary}
                          </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="rounded-2xl bg-slate-50 p-4">
                            <p className="text-sm font-semibold text-slate-900">
                              Responsibilities
                            </p>
                            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                              {activeJob.responsibilities.map((r, i) => (
                                <li key={i}>{r}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="rounded-2xl bg-slate-50 p-4">
                            <p className="text-sm font-semibold text-slate-900">
                              Requirements
                            </p>
                            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                              {activeJob.requirements.map((r, i) => (
                                <li key={i}>{r}</li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                          <a
                            href="#apply"
                            className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
                          >
                            Apply for this role
                          </a>
                          <a
                            href={`mailto:hr@pathwaysinternationalschool.com?subject=${encodeURIComponent(
                              `Job Application: ${activeJob.title}`
                            )}`}
                            className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-2.5 text-sm font-semibold text-emerald-800 ring-1 ring-emerald-200 transition hover:bg-emerald-50"
                          >
                            Email application
                          </a>
                        </div>
                      </div>
                    ) : (
                      <p className="text-sm text-slate-700">Select a role to view details.</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* HOW TO APPLY */}
            <Section
              id="how-to-apply"
              title="How to Apply"
              subtitle="A simple, professional process — designed to be fast and fair."
            >
              <ol className="space-y-3 text-sm text-slate-700">
                <li className="rounded-2xl border border-slate-200 bg-white p-4">
                  <span className="font-semibold text-slate-900">1.</span> Review the
                  role details and confirm you meet the requirements.
                </li>
                <li className="rounded-2xl border border-slate-200 bg-white p-4">
                  <span className="font-semibold text-slate-900">2.</span> Submit your
                  application using the form below (CV + cover letter recommended).
                </li>
                <li className="rounded-2xl border border-slate-200 bg-white p-4">
                  <span className="font-semibold text-slate-900">3.</span> Shortlisted
                  candidates will be contacted for an interview and/or demonstration.
                </li>
                <li className="rounded-2xl border border-slate-200 bg-white p-4">
                  <span className="font-semibold text-slate-900">4.</span> Final
                  selection and onboarding.
                </li>
              </ol>
            </Section>

            {/* APPLY FORM */}
            <Card id="apply" className="rounded-2xl border-emerald-100 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl">Apply Now</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs font-medium text-slate-700">
                      Full Name
                    </label>
                    <Input className="rounded-2xl" placeholder="e.g., Ali Ahmed" />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-medium text-slate-700">
                      Email Address
                    </label>
                    <Input className="rounded-2xl" placeholder="e.g., ali@email.com" />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-medium text-slate-700">
                      Phone Number
                    </label>
                    <Input className="rounded-2xl" placeholder="e.g., +92 3XX XXXXXXX" />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-medium text-slate-700">
                      Position Applying For
                    </label>
                    <Input
                      className="rounded-2xl"
                      placeholder="e.g., Mathematics Teacher"
                      defaultValue={activeJob?.title || ""}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1 block text-xs font-medium text-slate-700">
                      Cover Letter / Message
                    </label>
                    <Textarea
                      className="min-h-[120px] rounded-2xl"
                      placeholder="Briefly describe your experience, qualifications, and why you want to join Pathways International School."
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <p className="text-sm font-semibold text-slate-900">CV Upload</p>
                      <p className="mt-1 text-sm text-slate-600">
                        Connect this input to your backend (or use a form service).
                      </p>
                      <input
                        type="file"
                        className="mt-3 block w-full text-sm text-slate-700 file:mr-4 file:rounded-xl file:border-0 file:bg-emerald-600 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-emerald-700"
                        accept=".pdf,.doc,.docx"
                      />
                      <p className="mt-2 text-xs text-slate-500">
                        Accepted formats: PDF, DOC, DOCX
                      </p>
                    </div>
                  </div>

                  <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-slate-500">
                      By submitting, you confirm the information is accurate and agree
                      to be contacted for recruitment purposes.
                    </p>
                    <Button className="rounded-2xl bg-emerald-600 hover:bg-emerald-700">
                      Submit Application
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CULTURE */}
            <Section
              id="culture"
              title="Our Culture"
              subtitle="What you can expect when you join Pathways International School."
            >
              <div className="grid gap-4 sm:grid-cols-2">
                {[{
                  title: "Clear Standards",
                  desc: "We value punctuality, professionalism, and accountability.",
                }, {
                  title: "Supportive Team",
                  desc: "Collaborative planning, mentoring, and shared resources.",
                }, {
                  title: "Student Wellbeing",
                  desc: "A respectful, safe environment for learning and growth.",
                }, {
                  title: "Continuous Improvement",
                  desc: "Regular feedback and development opportunities.",
                }].map((x) => (
                  <div key={x.title} className="rounded-2xl border border-slate-200 bg-white p-5">
                    <p className="text-sm font-semibold text-slate-900">{x.title}</p>
                    <p className="mt-1 text-sm text-slate-600">{x.desc}</p>
                  </div>
                ))}
              </div>
            </Section>

            {/* FAQ */}
            <Card id="faq" className="rounded-2xl border-emerald-100 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl">FAQs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[{
                  q: "Do you accept applications if there are no open roles?",
                  a: "Yes. You may email your CV to HR. We keep a talent pool and contact candidates when a suitable vacancy is available.",
                }, {
                  q: "What documents should I submit?",
                  a: "A current CV and a brief cover letter are recommended. For teaching roles, we may request qualifications and experience letters during shortlisting.",
                }, {
                  q: "How long does shortlisting take?",
                  a: "Shortlisting timelines vary by role and volume. If shortlisted, you’ll be contacted for interview scheduling.",
                }].map((f) => (
                  <div key={f.q} className="rounded-2xl border border-slate-200 bg-white p-4">
                    <p className="text-sm font-semibold text-slate-900">{f.q}</p>
                    <p className="mt-1 text-sm text-slate-600">{f.a}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* FOOTER CTA */}
            <div className="rounded-2xl border border-emerald-100 bg-white p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-base font-semibold text-slate-900">
                    Didn’t find the right role?
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Send your CV to HR and we’ll reach out when a suitable opening is
                    available.
                  </p>
                </div>
                <a
                  href="mailto:hr@pathwaysinternationalschool.com?subject=Career%20Inquiry%20-%20Pathways%20International%20School"
                  className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
                >
                  Email HR
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
