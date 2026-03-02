import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    // 🔹 TODO: Connect to your backend API here
    setTimeout(() => {
      setStatus("sent");
    }, 800);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-white">
      {/* HERO SECTION */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.35),rgba(16,185,129,0.05),transparent)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/70 via-emerald-900/40 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 text-base leading-relaxed text-emerald-50/90 sm:text-lg">
              We’re here to help. Reach out for admissions, academics, or general
              inquiries.
            </p>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* LEFT INFO SECTION */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Admissions Office</h3>
              <p className="mt-2 text-sm text-slate-600">
                For admissions, eligibility, and registration queries.
              </p>
              <div className="mt-4 space-y-2 text-sm">
                <a
                  href="mailto:admissions@pathwaysinternationalschool.edu.pk"
                  className="block rounded-xl bg-slate-50 px-4 py-3 hover:bg-emerald-50 transition"
                >
                  admissions@pathwaysinternationalschool.edu.pk
                </a>
                <a
                  href="tel:+92XXXXXXXXXXX"
                  className="block rounded-xl bg-slate-50 px-4 py-3 hover:bg-emerald-50 transition"
                >
                  +92 XXXXXXXXXXX
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">School Address</h3>
              <p className="mt-2 text-sm text-slate-600">
                Replace this with your official campus address.
              </p>
              <div className="mt-4 rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
                <p className="font-medium text-slate-900">Pathways International School</p>
                <p>Your Campus Address Line 1</p>
                <p>Your City, Pakistan</p>
                <p className="mt-2 text-xs text-slate-500">
                  Office Hours: Mon–Fri, 9:00 AM – 4:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM SECTION */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-emerald-100 bg-white shadow-sm">
              <div className="border-b border-slate-200 p-6">
                <h2 className="text-2xl font-semibold text-slate-900">
                  Send a Message
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Fill out the form below and our team will get back to you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs font-medium text-slate-700">
                      Full Name
                    </label>
                    <input
                      required
                      className="h-10 w-full rounded-2xl border border-slate-200 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-medium text-slate-700">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      className="h-10 w-full rounded-2xl border border-slate-200 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="mb-1 block text-xs font-medium text-slate-700">
                      Message
                    </label>
                    <textarea
                      required
                      className="min-h-[140px] w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200"
                      placeholder="Write your message here..."
                    />
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <p className="text-xs text-slate-500">
                    By submitting, you agree that we may contact you regarding your inquiry.
                  </p>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className={`rounded-2xl px-6 py-2.5 text-sm font-semibold text-white transition ${
                      status === "sending"
                        ? "bg-emerald-400"
                        : "bg-emerald-600 hover:bg-emerald-700"
                    }`}
                  >
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </button>
                </div>

                {status === "sent" && (
                  <div className="mt-4 rounded-2xl bg-emerald-50 border border-emerald-200 p-4 text-sm text-emerald-900">
                    Message sent successfully. Our team will contact you soon.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
