import React from "react";

// Pathways International School — Principal's Welcome / Mission / Values
// TailwindCSS required in your project.
// Replace the image src and text as needed.

export default function PathwaysWelcomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white text-slate-800">
      {/* Top spacing */}
      <div className="mx-auto w-full max-w-6xl px-4 py-10 md:py-14">
        {/* Principal's Welcome */}
        <section className="rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
          <div className="grid gap-8 p-6 md:grid-cols-12 md:gap-10 md:p-10">
            {/* Left: Text */}
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800">
                <span className="h-2 w-2 rounded-full bg-green-600" />
                Pathways International School
              </div>

              <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Principal’s Welcome
              </h1>

              <div className="mt-5 space-y-4 text-sm leading-6 text-slate-700 md:text-base">
                <p>
                  Welcome to <span className="font-semibold text-slate-900">Pathways International School</span>. We
                  provide a friendly, supportive learning environment where students are encouraged to grow into
                  confident, responsible, and compassionate individuals.
                </p>
                <p>
                  Our curriculum promotes critical thinking, creativity, and a love of lifelong learning—supported by a
                  rich variety of co-curricular activities that strengthen character and leadership.
                </p>
                <p>
                  We believe every child is unique. Our educators work closely with students and families to nurture
                  strengths, support needs, and help each learner achieve their fullest potential.
                </p>
                <p>
                  Thank you for trusting us with your child’s education. We look forward to partnering with you on this
                  journey.
                </p>
              </div>

              <div className="mt-6">
                <p className="text-sm font-semibold text-slate-900">[Principal Name]</p>
                <p className="text-sm text-slate-600">Principal</p>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#mission"
                  className="rounded-2xl bg-green-700 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                  View Mission
                </a>
                <a
                  href="#values"
                  className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-green-800 ring-1 ring-green-200 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-300"
                >
                  Our Values
                </a>
              </div>
            </div>

            {/* Right: Image */}
            <div className="md:col-span-5">
              <div className="relative overflow-hidden rounded-3xl bg-green-100 ring-1 ring-green-200">
                <img
                  src="/images/principal.jpg"
                  alt="Principal of Pathways International School"
                  className="h-72 w-full object-cover md:h-[420px]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5">
                  <p className="text-sm font-semibold text-white">Pathways International School</p>
                  <p className="text-xs text-white/90">Excellence • Character • Community</p>
                </div>
              </div>

              <div className="mt-4 rounded-2xl bg-green-50 p-4 text-sm text-slate-700 ring-1 ring-green-100">
                <p className="font-semibold text-green-900">Quick Note</p>
                <p className="mt-1">
                  Replace the image at <span className="font-mono text-xs">/images/principal.jpg</span> and update the
                  principal name.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section id="mission" className="mt-12 md:mt-16">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Mission Statement</h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-green-600" />
            <p className="mt-6 text-sm leading-7 text-slate-700 md:text-base">
              At Pathways International School, our mission is to provide high-quality education that goes beyond the
              classroom. We aim to develop well-rounded, open-minded learners grounded in strong values—equipped with
              essential life skills, critical thinking, and academic excellence.
            </p>
          </div>
        </section>

        {/* Values */}
        <section id="values" className="mt-12 md:mt-16">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Values</h2>
              <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-green-600" />
              <p className="mt-6 text-sm leading-7 text-slate-700 md:text-base">
                Our efforts focus on instilling core values in our students from the earliest years—helping them become
                responsible, respectful, and confident contributors to society.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {[
                {
                  title: "Respect & Empathy",
                  text: "We practice kindness, respect, and compassion in our daily interactions—building a caring school community.",
                },
                {
                  title: "Integrity",
                  text: "We encourage truthfulness and strong moral character, empowering students to make the right choices.",
                },
                {
                  title: "Excellence",
                  text: "We set high standards in learning and personal growth, supporting every child to achieve their best.",
                },
                {
                  title: "Responsibility",
                  text: "We promote accountability, self-discipline, and teamwork—so students grow into dependable leaders.",
                },
              ].map((v) => (
                <div
                  key={v.title}
                  className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-10 w-10 shrink-0 rounded-2xl bg-green-100 ring-1 ring-green-200 flex items-center justify-center">
                      <div className="h-3 w-3 rounded-full bg-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{v.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-700">{v.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl bg-green-700 p-6 text-white md:p-8">
              <h3 className="text-xl font-bold">How we teach values</h3>
              <p className="mt-2 text-sm leading-6 text-white/90">
                Values are reinforced through meaningful classroom routines, assemblies, student leadership opportunities,
                collaborative projects, and age-appropriate activities.
              </p>
            </div>
          </div>
        </section>

       
      </div>
    </main>
  );
}
