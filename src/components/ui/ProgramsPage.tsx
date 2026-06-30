interface ProgramsPageProps {
programs: any[];
}

export default function ProgramsPage({
programs,
}: ProgramsPageProps) {
return (
<>
{/* Hero Section */} <section className="relative flex h-[55vh] items-center justify-center overflow-hidden bg-primary"> <div className="absolute inset-0 bg-black/50" />


    <div className="relative z-10 px-6 text-center text-white">
      <h1 className="font-heading text-5xl md:text-6xl">
        Our Programs
      </h1>

      <p className="mx-auto mt-6 max-w-3xl text-lg text-white/80">
        Empowering innovators, entrepreneurs and startups
        through incubation, mentorship and innovation-driven
        initiatives.
      </p>
    </div>
  </section>

  {/* Intro */}
  <section className="bg-white py-20">
    <div className="container-custom px-6">
      <div className="mx-auto max-w-4xl text-center">
        <span className="text-secondary text-sm font-semibold uppercase tracking-[3px]">
          Programs
        </span>

        <h2 className="font-heading mt-4 text-4xl text-primary">
          Building Future Entrepreneurs
        </h2>

        <p className="mt-6 leading-8 text-gray-600">
          At JUT CIIE, we offer a range of programs designed
          to support students, innovators and entrepreneurs
          at every stage of their journey.
        </p>
      </div>
    </div>
  </section>

  {/* Programs List */}
  <section className="bg-background py-20">
    <div className="container-custom px-6">
      <div className="space-y-24">
        {programs.map((program, index) => {
          const imageUrl = program?.image?.[0]?.url
            ? `${import.meta.env.VITE_STRAPI_URL}${program.image[0].url}`
            : "";

          return (
            <div
              key={program.id}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt={program.title}
                    className="w-full rounded-3xl shadow-xl"
                  />
                )}
              </div>

              <div>
                <span className="text-secondary font-semibold uppercase tracking-wider">
                  Program {index + 1}
                </span>

                <h2 className="font-heading mt-3 text-4xl text-primary">
                  {program.title}
                </h2>

                <p className="mt-6 leading-8 text-gray-600">
                  {program.description?.[0]?.children?.[0]?.text || ""}
                </p>

                <button className="mt-8 rounded-xl bg-secondary px-6 py-3 font-medium text-white transition hover:opacity-90">
                  Learn More
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>

  {/* Support Process */}
  <section className="bg-white py-20">
    <div className="container-custom px-6">
      <div className="mb-14 text-center">
        <h2 className="font-heading text-4xl text-primary">
          How We Support Startups
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-3xl bg-background p-8 text-center shadow-sm">
          <div className="mb-4 text-5xl">💡</div>
          <h3 className="font-semibold text-primary">
            Idea Validation
          </h3>
        </div>

        <div className="rounded-3xl bg-background p-8 text-center shadow-sm">
          <div className="mb-4 text-5xl">🤝</div>
          <h3 className="font-semibold text-primary">
            Mentorship
          </h3>
        </div>

        <div className="rounded-3xl bg-background p-8 text-center shadow-sm">
          <div className="mb-4 text-5xl">🚀</div>
          <h3 className="font-semibold text-primary">
            Incubation
          </h3>
        </div>

        <div className="rounded-3xl bg-background p-8 text-center shadow-sm">
          <div className="mb-4 text-5xl">📈</div>
          <h3 className="font-semibold text-primary">
            Growth Support
          </h3>
        </div>
      </div>
    </div>
  </section>

  {/* Benefits */}
  <section className="bg-background py-20">
    <div className="container-custom px-6">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="font-heading text-4xl text-primary">
            Why Join JUT CIIE?
          </h2>

          <div className="mt-8 space-y-4 text-gray-700">
            <div>✓ Expert Mentorship</div>
            <div>✓ Startup Incubation</div>
            <div>✓ Innovation Ecosystem</div>
          </div>
        </div>

        <div className="space-y-4 text-gray-700">
          <div>✓ Industry Collaboration</div>
          <div>✓ Networking Opportunities</div>
          <div>✓ Capacity Building Programs</div>
        </div>
      </div>
    </div>
  </section>

  {/* CTA */}
  <section className="bg-primary py-20 text-center text-white">
    <div className="container-custom px-6">
      <h2 className="font-heading text-4xl">
        Ready to Start Your Innovation Journey?
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-white/80">
        Join JUT CIIE and transform your ideas into
        impactful ventures through innovation,
        mentorship and incubation support.
      </p>

      <button className="mt-8 rounded-xl bg-secondary px-8 py-4 font-semibold text-white">
        Apply Now
      </button>
    </div>
  </section>
</>


);
}
