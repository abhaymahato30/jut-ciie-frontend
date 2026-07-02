import { useEffect, useState } from "react";
import { getGallery } from "../../services/homeApi";

export default function Gallery() {
  const [gallery, setGallery] = useState<any[]>([]);

  useEffect(() => {
    getGallery().then(setGallery);
  }, []);

  return (
    <section className="bg-background py-24">
      <div className="container-custom px-6">
        
        <div className="mb-16 text-center">
          <span className="text-secondary font-semibold uppercase">
            Gallery
          </span>

          <h1 className="font-heading mt-4 text-5xl text-primary">
            Photo Gallery
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-gray-600">
            Explore moments from workshops, startup events,
            competitions and innovation activities.
          </p>
        </div>

        {gallery.map((item) => (
          <div
            key={item.id}
            className="mb-16"
          >
            <div className="mb-8">
              <span className="rounded-full bg-secondary/10 px-3 py-1 text-sm text-secondary">
                {item.category}
              </span>

              <h2 className="font-heading mt-4 text-3xl text-primary">
                {item.title}
              </h2>

              <p className="mt-3 text-gray-600">
                {item.description?.[0]?.children?.[0]?.text}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {item.images?.map((image: any) => {
                const imageUrl = image.url;

                return (
                  <div
                    key={image.id}
                    className="overflow-hidden rounded-2xl shadow-sm"
                  >
                    <img
                      src={imageUrl}
                      alt={item.title}
                      className="h-72 w-full object-cover transition duration-300 hover:scale-110"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}