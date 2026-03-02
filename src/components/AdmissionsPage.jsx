import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ageChart = [
  {
    classLevel: "Nursery",
    ageLevel: "2.4 yrs – 3.3 yrs",
    currentYear: "May 22 – Apr 23",
    upcomingYear: "May 23 – Apr 24",
  },
  {
    classLevel: "KG I",
    ageLevel: "3.4 yrs – 4.3 yrs",
    currentYear: "May 21 – Apr 22",
    upcomingYear: "May 22 – Apr 23",
  },
  {
    classLevel: "KG II",
    ageLevel: "4.4 yrs – 5.3 yrs",
    currentYear: "May 20 – Apr 21",
    upcomingYear: "May 21 – Apr 22",
  },
  {
    classLevel: "Class I",
    ageLevel: "5.4 yrs – 6.3 yrs",
    currentYear: "May 19 – Apr 20",
    upcomingYear: "May 20 – Apr 21",
  },
  {
    classLevel: "Class II",
    ageLevel: "6.4 yrs – 7.3 yrs",
    currentYear: "May 18 – Apr 19",
    upcomingYear: "May 19 – Apr 20",
  },
  {
    classLevel: "Class III",
    ageLevel: "7.4 yrs – 8.3 yrs",
    currentYear: "May 17 – Apr 18",
    upcomingYear: "May 18 – Apr 19",
  },
  {
    classLevel: "Class IV",
    ageLevel: "8.4 yrs – 9.3 yrs",
    currentYear: "May 16 – Apr 17",
    upcomingYear: "May 17 – Apr 18",
  },
  {
    classLevel: "Class V",
    ageLevel: "9.4 yrs – 10.3 yrs",
    currentYear: "May 15 – Apr 16",
    upcomingYear: "May 16 – Apr 17",
  },
  {
    classLevel: "Class VI",
    ageLevel: "10.4 yrs – 11.3 yrs",
    currentYear: "May 14 – Apr 15",
    upcomingYear: "May 15 – Apr 16",
  },
  {
    classLevel: "Class VII",
    ageLevel: "11.4 yrs – 12.3 yrs",
    currentYear: "May 13 – Apr 14",
    upcomingYear: "May 14 – Apr 15",
  },
  {
    classLevel: "Class VIII",
    ageLevel: "12.4 yrs – 13.3 yrs",
    currentYear: "May 12 – Apr 13",
    upcomingYear: "May 13 – Apr 14",
  },
  {
    classLevel: "Class IX",
    ageLevel: "13.4 yrs – 14.3 yrs",
    currentYear: "May 11 – Apr 12",
    upcomingYear: "May 12 – Apr 13",
  },
  {
    classLevel: "Class X",
    ageLevel: "14.4 yrs – 15.3 yrs",
    currentYear: "May 10 – Apr 11",
    upcomingYear: "May 11 – Apr 12",
  },
  {
    classLevel: "Class XI",
    ageLevel: "15.4 yrs – 16.3 yrs",
    currentYear: "May 09 – Apr 10",
    upcomingYear: "May 10 – Apr 11",
  },
];

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-800">
      {children}
    </span>
  );
}

function Section({
  title,
  children,
  hint,
}) {
  return (
    <section className="space-y-3">
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          {title}
        </h2>
        {hint ? <Badge>{hint}</Badge> : null}
      </div>
      <div className="prose prose-slate max-w-none prose-p:leading-relaxed">
        {children}
      </div>
    </section>
  );
}

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-white">
      {/* HERO */}
      <header className="relative">
        <div className="absolute inset-0">
          {/* Replace the image URL with your own (or keep this gradient only). */}
          <div className="h-full w-full bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.35),rgba(16,185,129,0.05),transparent)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/65 via-emerald-900/35 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-emerald-50 ring-1 ring-white/20">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              Admissions & Eligibility
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Application Process
            </h1>
            <p className="mt-4 text-base leading-relaxed text-emerald-50/90 sm:text-lg">
              We aim to provide a strong start for every learner and are committed to
              supporting families with a clear, fair, and transparent admissions
              journey.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#apply"
                className="inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-emerald-900/10 transition hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-300"
              >
                Start Application
              </a>
              <a
                href="#age-chart"
                className="inline-flex items-center justify-center rounded-2xl bg-white/10 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/25 backdrop-blur transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              >
                View Age Chart
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Left rail */}
          <div className="lg:col-span-4">
            <Card className="sticky top-6 rounded-2xl border-emerald-100 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base">On this page</CardTitle>
              </CardHeader>
              <CardContent>
                <nav className="space-y-2 text-sm">
                  {[
                    { href: "#process", label: "Application of Admission Process" },
                    { href: "#current", label: "Admissions in the Current Academic Year" },
                    { href: "#next", label: "Admissions in the Next Academic Year" },
                    { href: "#waiting", label: "The Waiting List" },
                    { href: "#eligibility", label: "Eligibility" },
                    { href: "#age-chart", label: "Age Chart" },
                  ].map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block rounded-xl px-3 py-2 text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-800"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>

                <div className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
                  <p className="text-sm font-semibold text-emerald-900">
                    Need help?
                  </p>
                  <p className="mt-1 text-sm text-emerald-900/80">
                    Contact our admissions team for guidance on eligibility, documents,
                    and available seats.
                  </p>
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      href="#apply"
                      className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
                    >
                      Apply Online
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-emerald-800 ring-1 ring-emerald-200 transition hover:bg-emerald-50"
                    >
                      Email Admissions
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main column */}
          <div className="space-y-10 lg:col-span-8">
            <Card id="process" className="rounded-2xl border-emerald-100 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl">
                  The Application of Admission Process
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4 text-sm leading-relaxed text-slate-700">
                  <li className="rounded-2xl border border-slate-200 bg-white p-4">
                    <span className="font-semibold text-slate-900">1.</span> Fill out
                    and submit the application of admission form online.
                    <div className="mt-2 text-slate-600">
                      Please provide accurate contact details (telephone number(s) and
                      email address(es)) so communication is received by parents/guardians
                      only. Submit scanned copies of required documents.
                    </div>
                  </li>
                  <li className="rounded-2xl border border-slate-200 bg-white p-4">
                    <span className="font-semibold text-slate-900">2.</span> Pay the
                    application processing fee.
                    <div className="mt-2 text-slate-600">
                      A non‑refundable application fee (per application) is required for
                      processing. Submission does not guarantee admission.
                    </div>
                  </li>
                  <li className="rounded-2xl border border-slate-200 bg-white p-4">
                    <span className="font-semibold text-slate-900">3.</span> Entrance
                    test & interview schedule.
                    <div className="mt-2 text-slate-600">
                      After successful submission, a schedule is shared for an entrance
                      test and a parent/applicant interview.
                    </div>
                  </li>
                  <li className="rounded-2xl border border-slate-200 bg-white p-4">
                    <span className="font-semibold text-slate-900">4.</span> Offer &
                    confirmation.
                    <div className="mt-2 text-slate-600">
                      Once an offer is made, confirmation formalities are shared with
                      parents.
                    </div>
                  </li>
                </ol>

                <div id="apply" className="mt-6 rounded-2xl bg-emerald-600 p-5 text-white">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold">Ready to apply?</p>
                      <p className="mt-1 text-sm text-white/90">
                        Complete the online application and our team will guide you
                        through the next steps.
                      </p>
                    </div>
                    <a
                      href="#"
                      className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-2.5 text-sm font-semibold text-emerald-800 shadow-sm transition hover:bg-emerald-50"
                    >
                      Open Application Form
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Section id="current" title="Admissions in the Current Academic Year" hint="Subject to seats">
              <p>
                Subject to the availability of seats, an applicant is provided with a
                schedule for an entrance test followed by an interview accompanied by
                parents. Parents are encouraged to check with the school about
                availability.
              </p>
              <p>
                Parents are notified if and when there is a vacancy to proceed with
                confirmation of an admission.
              </p>
            </Section>

            <Section id="next" title="Admissions in the Next Academic Year" hint="Upcoming year">
              <p>
                Each year, applications of admission are accepted for the upcoming
                academic year at various class levels.
              </p>
              <p>Updates about availability are posted to the website regularly.</p>
            </Section>

            <Section id="waiting" title="The Waiting List" hint="First come, first served">
              <p>
                A waiting list for admission is maintained on a first‑come,
                first‑served basis.
              </p>
              <p>
                The waiting list is valid only until the end of the academic year
                selected for admission on the application. With the end of the
                academic year, applications on the waiting list are no longer valid
                and cannot be moved forward into the next academic year.
              </p>
            </Section>

            <Section id="eligibility" title="Eligibility" hint="Age criteria">
              <p>
                In order to be eligible for application of admission, an applicant
                must fall under the appropriate age level for their desired class at
                the time of admission.
              </p>
              <p className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-slate-800">
                <span className="font-semibold text-emerald-900">Example:</span> An
                applicant of admission for Class V in the next academic year must be
                between <span className="font-semibold">9.4</span> and{" "}
                <span className="font-semibold">10.3</span> years of age when the next
                academic year is due to begin (usually in August). Similarly, an
                applicant of admission for Class VII in the current academic year
                applying for admission in November must be between{" "}
                <span className="font-semibold">11.4</span> and{" "}
                <span className="font-semibold">12.3</span> years of age in November.
              </p>
            </Section>

            {/* Age Chart */}
            <Card id="age-chart" className="rounded-2xl border-emerald-100 shadow-sm">
              <CardHeader>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <CardTitle className="text-2xl sm:text-3xl">Age Chart</CardTitle>
                    <p className="mt-2 text-sm text-slate-600">
                      Use this chart to check eligibility by age level and academic
                      year.
                    </p>
                  </div>
                  <Badge>2025–2026 / 2026–2027</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-hidden rounded-2xl border border-slate-200">
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-left text-sm">
                      <thead className="bg-emerald-700 text-white">
                        <tr>
                          <th className="whitespace-nowrap px-4 py-3 font-semibold">
                            Class Level
                          </th>
                          <th className="whitespace-nowrap px-4 py-3 font-semibold">
                            Age Level
                          </th>
                          <th className="whitespace-nowrap px-4 py-3 font-semibold">
                            Current Academic Year (2025–2026)
                          </th>
                          <th className="whitespace-nowrap px-4 py-3 font-semibold">
                            Upcoming Academic Year (2026–2027)
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white">
                        {ageChart.map((row, idx) => (
                          <tr
                            key={row.classLevel}
                            className={
                              idx % 2 === 0
                                ? "bg-white"
                                : "bg-emerald-50/60"
                            }
                          >
                            <td className="px-4 py-3 font-medium text-slate-900">
                              {row.classLevel}
                            </td>
                            <td className="px-4 py-3 text-slate-700">
                              {row.ageLevel}
                            </td>
                            <td className="px-4 py-3 text-slate-700">
                              {row.currentYear}
                            </td>
                            <td className="px-4 py-3 text-slate-700">
                              {row.upcomingYear}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <p className="mt-4 text-xs text-slate-500">
                  Note: If your school uses different cut‑off dates, replace the date
                  ranges above to match your admissions policy.
                </p>
              </CardContent>
            </Card>

            {/* Footer note */}
            <div className="rounded-2xl border border-emerald-100 bg-white p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-base font-semibold text-slate-900">
                    Important
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Admissions are subject to seat availability and meeting eligibility
                    criteria. The school reserves the right to evaluate applications
                    and request additional information when required.
                  </p>
                </div>
                <a
                  href="#apply"
                  className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
