// src/components/OlevelsSubjectOptions.jsx
export default function OlevelsSubjectOptions() {
  const leftSubjects = [
    "English Language",
    "Mathematics",
    "Urdu",
    "Pakistan Studies",
    "Islamiyat",
    "English Literature",
    "Additional Mathematics",
    "Chemistry",
    "Physics",
  ];

  const rightSubjects = [
    "Biology",
    "Computer Science",
    "Business Studies",
    "Accounting",
    "Economics",
    "Sociology",
    "Environmental Management",
    "Art",
  ];

  return (
    <section className="bg-white text-slate-900 py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* LEFT: Text */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight">
              O-Levels Subject Options
            </h2>

            <div className="mt-5 space-y-5 text-slate-600 leading-relaxed">
              <p>
                The core curriculum focuses on a holistic approach to learning with emphasis on
                English, Urdu, Mathematics, Science along with Art, Physical Education, Critical
                Thinking and German. In the later years, starting from Class 9, subject choices are
                made by students from a wide array of options. Expert subject teachers with
                effective pedagogical skills prepare students for life beyond high school.
                Counselling is offered to parents and students to assist them in making the right
                choices for the future.
              </p>

              <p>
                The Cambridge GCE and IGCSE curriculum and syllabuses for O Levels provide the core
                framework which is followed from Class 7. Certain selected subjects from Class 9
                are offered through both qualifications – GCE and IGCSE.
              </p>

              <p className="text-slate-700 font-medium">
                Subjects offered in O levels include the following:
              </p>

              {/* Subjects list (two columns) */}
              <div className="grid gap-8 sm:grid-cols-2">
                <ul className="space-y-2">
                  {leftSubjects.map((s) => (
                    <li key={s} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>

                <ul className="space-y-2">
                  {rightSubjects.map((s) => (
                    <li key={s} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p>
                Computer Science has been added to the list of subjects offered from Class 9.
                Special sessions are provided with this course, allowing students to engage in
                hands-on projects that bridge the gap between theory and practice.
              </p>

              <p>
                Along with a strong academic foundation, a plethora of co-curricular opportunities
                are offered by the section, providing unmatched educational and developmental
                experiences for students beyond the classroom. Programs like STEAM, Robotics, Public
                Speaking and MUN empower students with critical thinking, innovation and leadership
                skills. These activities foster creativity and prepare students for success in a
                rapidly changing world.
              </p>
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="lg:pt-14">
            <div className="rounded-md border border-black/10 overflow-hidden bg-slate-100 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1519682577862-22b62b24e493?auto=format&fit=crop&w=1600&q=80"
                alt="Student studying"
                className="w-full h-[320px] sm:h-[420px] lg:h-[520px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
