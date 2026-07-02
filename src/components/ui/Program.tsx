interface ProgramsProps {
programs: any[];
}

export default function Programs({
programs,
}: ProgramsProps) {
return ( <section className="bg-background py-20"> <div className="container-custom px-6"> <div className="mb-14 text-center"> <span className="text-secondary text-sm font-semibold uppercase tracking-[3px]">
Our Programs </span>


      <h2 className="font-heading mt-3 text-3xl text-primary md:text-5xl">
        Empowering Innovation
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-gray-600">
        Supporting innovators, entrepreneurs and startups
        through incubation, mentorship and capacity-building initiatives.
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {programs.map((program) => {
   const imageUrl = program?.image?.[0]?.url || "";

        return (
          <div
            key={program.id}
            className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Image */}
            <div className="overflow-hidden">
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt={program.title}
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              )}
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="font-heading text-xl text-primary">
                {program.title}
              </h3>

              <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-600">
                {program.description?.[0]?.children?.[0]?.text || ""}
              </p>

              <button className="mt-5 inline-flex items-center gap-2 font-semibold text-secondary transition group-hover:gap-3">
                Learn More →
              </button>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>


);
}
