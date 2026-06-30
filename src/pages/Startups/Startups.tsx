import { useEffect, useState } from "react";
import { getStartups } from "../../services/homeApi";

export default function Startups() {
  const [startups, setStartups] = useState<any[]>([]);

  useEffect(() => {
    getStartups().then(setStartups);
  }, []);

  return (
    <section className="bg-background py-24">
      <div className="container-custom px-6">
        <div className="mb-16 text-center">
          <h1 className="font-heading text-5xl text-primary">
            Incubated Startups
          </h1>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {startups.map((startup) => {
            const logoUrl = startup?.logo?.url
              ? `${import.meta.env.VITE_STRAPI_URL}${startup.logo.url}`
              : "";

            return (
              <div
                key={startup.id}
                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {logoUrl && (
                  <img
                    src={logoUrl}
                    alt={startup.name}
                    className="mb-6 h-16 w-16 rounded-xl object-cover"
                  />
                )}

                <h3 className="font-heading text-2xl text-primary">
                  {startup.name}
                </h3>

                <p className="mt-4 text-gray-600">
                  {startup.description?.[0]?.children?.[0]?.text}
                </p>

                {startup.website && (
                  <a
                    href={startup.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-white transition hover:opacity-90"
                  >
                    Visit Website →
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}