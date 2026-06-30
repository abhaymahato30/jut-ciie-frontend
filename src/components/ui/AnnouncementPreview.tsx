interface AnnouncementPreviewProps {
announcements: any[];
}

export default function AnnouncementPreview({
announcements,
}: AnnouncementPreviewProps) {
return ( <section className="bg-background py-16"> <div className="container-custom px-6"> <div className="mb-10 flex items-center justify-between"> <div> <span className="text-secondary text-sm font-semibold uppercase tracking-wider">
Latest Announcements </span>


        <h2 className="font-heading mt-2 text-3xl text-primary md:text-4xl">
          Notices & Updates
        </h2>
      </div>

      <a
        href="/announcements"
        className="hidden text-secondary hover:underline md:block"
      >
        View All →
      </a>
    </div>

    <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
      {announcements.slice(0, 5).map((announcement, index) => {
        const pdfUrl = announcement?.noticePDF?.url
          ? `${import.meta.env.VITE_STRAPI_URL}${announcement.noticePDF.url}`
          : "";

        return (
          <div
            key={announcement.id}
            className={`flex flex-col gap-4 p-5 transition hover:bg-gray-50 md:flex-row md:items-center md:justify-between ${
              index !== announcements.slice(0, 5).length - 1
                ? "border-b border-gray-100"
                : ""
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                📢
              </div>

              <div>
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
                    {announcement.category}
                  </span>

                  <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-600">
                    NEW
                  </span>
                </div>

                <h3 className="font-semibold text-primary">
                  {announcement.title}
                </h3>

                <p className="mt-1 line-clamp-2 text-sm text-gray-600">
                  {announcement.description?.[0]?.children?.[0]?.text}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              {pdfUrl && (
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-primary px-4 py-2 text-sm text-primary transition hover:bg-primary hover:text-white"
                >
                  PDF
                </a>
              )}

              {announcement.formLink && (
                <a
                  href={announcement.formLink}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg bg-secondary px-4 py-2 text-sm text-white transition hover:opacity-90"
                >
                  Apply
                </a>
              )}
            </div>
          </div>
        );
      })}
    </div>

    <div className="mt-6 text-center md:hidden">
      <a
        href="/announcements"
        className="text-secondary hover:underline"
      >
        View All Announcements →
      </a>
    </div>
  </div>
</section>


);
}
