import { useEffect, useState } from "react";
import { getEvents } from "../../services/homeApi";

export default function Events() {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    getEvents().then(setEvents);
  }, []);

  return (
    <section className="bg-background py-24">
      <div className="container-custom px-6">
        <div className="mb-16 text-center">
          <h1 className="font-heading text-5xl text-primary">
            Events & Activities
          </h1>

          <p className="mt-4 text-gray-600">
            Workshops, bootcamps, competitions and networking opportunities.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => {
            const imageUrl =
              event?.image?.[0]?.url
                ? `${import.meta.env.VITE_STRAPI_URL}${event.image[0].url}`
                : "";

            return (
              <div
                key={event.id}
                className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
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

                  <div className="mt-4 space-y-2">
                    <p className="text-sm text-secondary">
                      📍 {event.location}
                    </p>

                    {event.eventdate && (
                      <p className="text-sm text-gray-500">
                        📅 {event.eventdate}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}