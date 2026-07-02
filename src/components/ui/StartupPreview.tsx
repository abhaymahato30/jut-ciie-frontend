interface StartupPreviewProps {
  startups: any[];
}

export default function StartupPreview({
  startups,
}: StartupPreviewProps) {
  return (
    <section className="bg-background py-24">
      <div className="container-custom px-6">
        <div className="mb-16 text-center">
          <span className="text-secondary font-semibold uppercase tracking-wider">
            Featured Startups
          </span>

          <h2 className="font-heading mt-4 text-4xl text-primary md:text-5xl">
            Innovation in Action
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {startups.slice(0, 3).map((startup) => {
            const logoUrl = startup?.logo?.url || "";

            return (
              <div
                key={startup.id}
                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}