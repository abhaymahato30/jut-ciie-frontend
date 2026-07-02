import { useEffect, useState } from "react";
import { getAbout } from "../../services/homeApi";

export default function About() {
const [about, setAbout] = useState<any>(null);

useEffect(() => {
getAbout().then(setAbout);
}, []);

if (!about) {
return ( <div className="flex min-h-screen items-center justify-center">
Loading... </div>
);
}

const heroImage = about?.heroImage?.url || "";

const aboutImage = about?.aboutImage?.url || "";

const getRichText = (content: any) => {
if (!content?.length) return "";


return content
  .map((block: any) =>
    block.children?.map((child: any) => child.text).join("")
  )
  .join(" ");


};

return ( <div className="bg-background">

```
  {/* Hero */}
  <section className="relative h-[50vh] overflow-hidden">
    {heroImage && (
      <img
        src={heroImage}
        alt={about.heroTitle}
        className="absolute inset-0 h-full w-full object-cover"
      />
    )}

    <div className="absolute inset-0 bg-black/60" />

    <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
      <div className="max-w-3xl">
        <h1 className="font-heading text-4xl text-white md:text-6xl">
          {about.heroTitle}
        </h1>

        <p className="mt-6 text-lg text-white/90">
          {getRichText(about.heroSubtitle)}
        </p>
      </div>
    </div>
  </section>

  {/* About Section */}
  <section className="py-20">
    <div className="container-custom px-6">
      <div className="grid items-center gap-12 lg:grid-cols-2">

        <div>
          {aboutImage && (
            <img
              src={aboutImage}
              alt={about.aboutTitle}
              className="rounded-3xl shadow-xl"
            />
          )}
        </div>

        <div>
          <span className="text-secondary font-semibold uppercase tracking-wider">
            About Us
          </span>

          <h2 className="font-heading mt-3 text-4xl text-primary">
            {about.aboutTitle}
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            {about.aboutContent}
          </p>
        </div>

      </div>
    </div>
  </section>

  {/* Vision & Mission */}
  <section className="bg-white py-20">
    <div className="container-custom px-6">
      <div className="grid gap-8 md:grid-cols-2">

        <div className="rounded-3xl bg-primary p-8 text-white">
          <h3 className="font-heading text-3xl">
            Vision
          </h3>

          <p className="mt-4 leading-7 text-white/80">
            {about.vision}
          </p>
        </div>

        <div className="rounded-3xl bg-secondary p-8 text-white">
          <h3 className="font-heading text-3xl">
            Mission
          </h3>

          <p className="mt-4 leading-7 text-white/90">
            {about.mission}
          </p>
        </div>

      </div>
    </div>
  </section>

  {/* Why Choose Us */}
  <section className="py-20">
    <div className="container-custom px-6">
      <div className="mb-12 text-center">
        <h2 className="font-heading text-4xl text-primary">
          Why Choose JUT CIIE
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {about.whyChooseItems?.map((item: any) => (
          <div
            key={item.id}
            className="rounded-3xl bg-white p-8 text-center shadow-lg transition hover:-translate-y-2"
          >
            <div className="mb-4 text-5xl">
              {item.icon}
            </div>

            <h3 className="font-heading text-xl text-primary">
              {item.title}
            </h3>

            <p className="mt-3 text-gray-600">
              {getRichText(item.description)}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Timeline */}
  <section className="bg-white py-20">
    <div className="container-custom px-6">
      <div className="mb-12 text-center">
        <h2 className="font-heading text-4xl text-primary">
          Our Journey
        </h2>
      </div>

      <div className="space-y-8">
        {about.timeline?.map((item: any) => (
          <div
            key={item.id}
            className="flex gap-6 rounded-2xl border border-gray-200 bg-white p-6"
          >
            <div className="text-secondary text-2xl font-bold">
              {item.year}
            </div>

            <div>
              <p className="text-gray-600">
                {getRichText(item.description)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* CTA */}
  <section className="bg-primary py-20 text-center text-white">
    <div className="container-custom px-6">
      <h2 className="font-heading text-4xl">
        {about.ctaTitle}
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-white/80">
        {about.ctaDescription}
      </p>

      <button className="mt-8 rounded-xl bg-secondary px-8 py-4 font-semibold text-white">
        {about.ctaButtonText}
      </button>
    </div>
  </section>

</div>


);
}
