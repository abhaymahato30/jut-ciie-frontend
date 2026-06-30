interface EventPreviewProps {
  events: any[];
}

export default function EventPreview({
  events,
}: EventPreviewProps) {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom px-6">
        <div className="mb-16 text-center">
          <span className="text-secondary font-semibold uppercase">
            Upcoming Events
          </span>

          <h2 className="font-heading mt-4 text-4xl text-primary">
            Events & Activities
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.slice(0, 3).map((event) => {
            const imageUrl =
              event?.image?.[0]?.url
                ? `${import.meta.env.VITE_STRAPI_URL}${event.image[0].url}`
                : "";

            return (
              <div
                key={event.id}
                className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm"
              >
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt={event.title}
                    className="h-56 w-full object-cover"
                  />
                )}

                <div className="p-6">
                  <h3 className="font-heading text-2xl text-primary">
                    {event.title}
                  </h3>

                  <p className="mt-3 text-gray-600">
                    {event.description?.[0]?.children?.[0]?.text}
                  </p>

                  <p className="mt-4 text-sm font-medium text-secondary">
                    📍 {event.location}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}