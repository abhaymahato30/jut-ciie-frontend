import { useEffect, useState } from "react";
import { getSiteSettings } from "../../services/homeApi";

export default function Contact() {
  const [site, setSite] = useState<any>(null);

  useEffect(() => {
    getSiteSettings().then(setSite);
  }, []);

  if (!site) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <section className="bg-background py-24">
      <div className="container-custom px-6">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="text-secondary font-semibold uppercase tracking-wider">
            Get In Touch
          </span>

          <h1 className="font-heading mt-4 text-5xl text-primary">
            Contact Us
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-gray-600">
            We'd love to hear from innovators, entrepreneurs,
            students and industry partners.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          
          {/* Left */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="font-heading text-3xl text-primary">
              Contact Information
            </h2>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="font-semibold text-secondary">
                  Email
                </h3>
                <p className="mt-2 text-gray-700">
                  {site.email}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-secondary">
                  Phone
                </h3>
                <p className="mt-2 text-gray-700">
                  {site.phone}
                </p>

                {site.alternatePhone && (
                  <p className="text-gray-700">
                    {site.alternatePhone}
                  </p>
                )}
              </div>

              <div>
                <h3 className="font-semibold text-secondary">
                  Address
                </h3>

                <div className="mt-2 space-y-1 text-gray-700">
                  {site.address?.map(
                    (item: any, index: number) => (
                      <p key={index}>
                        {item.children?.[0]?.text}
                      </p>
                    )
                  )}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-secondary">
                  Social Links
                </h3>

                <div className="mt-2 flex gap-4">
                  <a
                    href={site.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:text-secondary"
                  >
                    Facebook
                  </a>

                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:text-secondary"
                  >
                    LinkedIn
                  </a>

                  <a
                    href={site.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:text-secondary"
                  >
                    YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="font-heading text-3xl text-primary">
              Send a Message
            </h2>

            <form className="mt-8 space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary"
              />

              <textarea
                rows={5}
                placeholder="Message"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary"
              />

              <button
                type="submit"
                className="rounded-xl bg-secondary px-8 py-3 text-white transition hover:opacity-90"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        {site.googleMapLink && (
          <div className="mt-16">
            <a
              href={site.googleMapLink}
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-xl bg-primary px-8 py-4 text-white"
            >
              Open Location on Google Maps
            </a>
          </div>
        )}
      </div>
    </section>
  );
}