import { useEffect, useState } from "react";
import { getAnnouncements } from "../../services/homeApi";

export default function Announcements() {
  const [announcements, setAnnouncements] = useState<any[]>([]);

  useEffect(() => {
    getAnnouncements().then(setAnnouncements);
  }, []);

  return (
    <section className="bg-background py-24">
      <div className="container-custom px-6">
        <div className="mb-16 text-center">
          <h1 className="font-heading text-5xl text-primary">
            Announcements
          </h1>

          <p className="mt-4 text-gray-600">
            Latest notices, applications, events and opportunities.
          </p>
        </div>

        <div className="space-y-8">
          {announcements.map((announcement) => {
            const pdfUrl =
              announcement?.noticePDF?.url
                ? `${import.meta.env.VITE_STRAPI_URL}${announcement.noticePDF.url}`
                : "";

            return (
              <div
                key={announcement.id}
                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
              >
                <div className="mb-4 flex gap-3">
                  <span className="rounded-full bg-secondary/10 px-3 py-1 text-sm text-secondary">
                    {announcement.category}
                  </span>
                </div>

                <h2 className="font-heading text-3xl text-primary">
                  {announcement.title}
                </h2>

                <p className="mt-4 text-gray-600">
                  {announcement.description?.[0]?.children?.[0]?.text}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {pdfUrl && (
                    <a
                      href={pdfUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl bg-primary px-5 py-3 text-white"
                    >
                      View PDF
                    </a>
                  )}

                  {announcement.formLink && (
                    <a
                      href={announcement.formLink}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl bg-secondary px-5 py-3 text-white"
                    >
                      {announcement.buttonText || "Open Link"}
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}