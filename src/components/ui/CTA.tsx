
export default function CTA() {
  return (
    <section className="bg-primary py-24">
      <div className="container-custom px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-12 text-center backdrop-blur-sm">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
            Join The Innovation Ecosystem
          </span>

          <h2 className="font-heading mt-4 text-4xl text-white md:text-5xl">
            Transform Your Idea Into Impact
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/80">
            Whether you're a student, researcher, entrepreneur,
            or startup founder, JUT CIIE provides mentorship,
            incubation support, networking opportunities and
            access to resources to accelerate your journey.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="rounded-xl bg-secondary px-8 py-4 font-semibold text-white transition hover:opacity-90">
              Apply for Incubation
            </button>

            <button className="rounded-xl border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white/10">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

