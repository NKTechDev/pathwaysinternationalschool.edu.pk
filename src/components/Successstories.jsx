import React from "react";

// Pathways International School — Success Stories Page
// TailwindCSS required
// Replace images and data as needed

const alumni = [
  {
    name: "Saad Usmani",
    role: "Entrepreneur",
    batch: "Class of 2005",
    image: "/images/alumni/saad.jpg",
    featured: true,
  },
  {
    name: "Azal Ahsan",
    role: "Store Manager",
    batch: "Class of 2008",
    image: "/images/alumni/azal.jpg",
  },
  {
    name: "Zain Jafar",
    role: "Business Professional",
    batch: "Class of 2004",
    image: "/images/alumni/zain.jpg",
  },
  {
    name: "Suhace Abro",
    role: "Classical & Contemporary Dancer",
    batch: "Class of 2010",
    image: "/images/alumni/suhace.jpg",
  },
  {
    name: "Hamza Bangash",
    role: "Corporate Leader",
    batch: "Class of 2008",
    image: "/images/alumni/hamza.jpg",
  },
  {
    name: "Amm Karim",
    role: "Media Professional",
    batch: "Class of 2010",
    image: "/images/alumni/amm.jpg",
  },
  {
    name: "Idrees Ali",
    role: "National Security Correspondent",
    batch: "Class of 2007",
    image: "/images/alumni/idrees.jpg",
  },
  {
    name: "Mahnoor Wahaj",
    role: "Business Graduate",
    batch: "Class of 2011",
    image: "/images/alumni/mahnoor.jpg",
  },
  {
    name: "Omar Haroon",
    role: "Civil Engineer",
    batch: "Class of 2003",
    image: "/images/alumni/omar.jpg",
  },
];

export default function SuccessStoriesPage() {
  const featuredAlumni = alumni.find((a) => a.featured);
  const otherAlumni = alumni.filter((a) => !a.featured);

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* Hero Section */}
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900">
            Our Success Stories
          </h1>
          <div className="mx-auto mt-4 h-1 w-24 bg-green-600 rounded-full" />
          <p className="mt-6 text-slate-700 max-w-3xl mx-auto text-base md:text-lg">
            At Pathways International School, we take pride in our alumni who
            continue to excel in diverse fields across the globe. Their
            achievements reflect our commitment to academic excellence,
            leadership, and character development.
          </p>
        </section>

        {/* Featured Alumni */}
        {featuredAlumni && (
          <section className="mt-14">
            <div className="grid md:grid-cols-2 gap-10 items-center bg-white rounded-3xl shadow-md p-6 md:p-10">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={featuredAlumni.image}
                  alt={featuredAlumni.name}
                  className="w-full h-[350px] md:h-[450px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Featured Alumni
                </span>
                <h2 className="mt-4 text-3xl font-bold text-slate-900">
                  {featuredAlumni.name}
                </h2>
                <p className="mt-2 text-green-700 font-medium">
                  {featuredAlumni.role}
                </p>
                <p className="mt-1 text-slate-600 text-sm">
                  {featuredAlumni.batch}
                </p>
                <p className="mt-6 text-slate-700 leading-6">
                  A proud graduate of Pathways International School, {featuredAlumni.name} exemplifies
                  leadership, resilience, and excellence. Their journey inspires
                  current students to pursue ambition with confidence and integrity.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Alumni Grid */}
        <section className="mt-16">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {otherAlumni.map((person) => (
              <div
                key={person.name}
                className="group relative overflow-hidden rounded-3xl shadow-md bg-white"
              >
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-90" />

                <div className="absolute bottom-0 p-5 text-white">
                  <h3 className="text-lg font-semibold">
                    {person.name}
                  </h3>
                  <p className="text-sm text-green-300 font-medium">
                    {person.role}
                  </p>
                  <p className="text-xs mt-1">
                    {person.batch}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-20 bg-green-700 text-white rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Be Our Next Success Story
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-green-100">
            Join Pathways International School and start your journey toward
            excellence. Your future begins here.
          </p>
          <button className="mt-6 bg-white text-green-800 font-semibold px-6 py-3 rounded-2xl hover:bg-green-100 transition">
            Apply Now
          </button>
        </section>

      
      </div>
    </main>
  );
}
