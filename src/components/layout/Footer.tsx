import { useEffect, useState } from "react";
import { getSiteSettings } from "../../services/homeApi";

import {
FaFacebookF,
FaLinkedinIn,
FaYoutube,
FaEnvelope,
FaPhoneAlt,
FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
const [site, setSite] = useState<any>(null);

useEffect(() => {
getSiteSettings().then(setSite);
}, []);

if (!site) return null;

return ( <footer className="bg-primary text-white"> <div className="container-custom px-6 py-16"> <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">


      {/* Branding */}
   {/* Branding */}

<div className="flex flex-col items-center text-center lg:items-start lg:text-left">
  <img
    src="/images/ciie-logo.png"
    alt="JUT CIIE Logo"
    className="h-28 w-auto object-contain lg:ml-8"
  />

  <h3 className="mt-1 font-heading text-3xl text-white">
    JUT CIIE
  </h3>

  <p className="mt-1 max-w-xs leading-relaxed text-white/70">
    Centre for Innovation, Incubation &
    Entrepreneurship supporting innovation,
    startups and entrepreneurship across
    Jharkhand.
  </p>
</div>


      {/* Quick Links */}
      <div>
        <h4 className="mb-5 text-lg font-semibold text-white">
          Quick Links
        </h4>

        <div className="space-y-3">
          <a
            href="/"
            className="block text-white/70 transition hover:text-accent"
          >
            Home
          </a>

          <a
            href="/about"
            className="block text-white/70 transition hover:text-accent"
          >
            About
          </a>

          <a
            href="/programs"
            className="block text-white/70 transition hover:text-accent"
          >
            Programs
          </a>

          <a
            href="/events"
            className="block text-white/70 transition hover:text-accent"
          >
            Events
          </a>

          <a
            href="/startups"
            className="block text-white/70 transition hover:text-accent"
          >
            Startups
          </a>

          <a
            href="/gallery"
            className="block text-white/70 transition hover:text-accent"
          >
            Gallery
          </a>

          <a
            href="/contact"
            className="block text-white/70 transition hover:text-accent"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Contact */}
      <div>
        <h4 className="mb-5 text-lg font-semibold text-white">
          Contact
        </h4>

        <div className="space-y-4 text-white/70">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-accent" />
            <span>{site.email}</span>
          </div>

          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-accent" />
            <span>{site.phone}</span>
          </div>

          {site.alternatePhone && (
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-accent" />
              <span>{site.alternatePhone}</span>
            </div>
          )}

          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="mt-1 text-accent" />
            <span>
              Jharkhand University of Technology
              <br />
              Ranchi, Jharkhand
            </span>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div>
        <h4 className="mb-5 text-lg font-semibold text-white">
          Follow Us
        </h4>

        <div className="flex gap-4">
          {site.facebook && (
            <a
              href={site.facebook}
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:bg-accent hover:text-primary"
            >
              <FaFacebookF />
            </a>
          )}

          {site.linkedin && (
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:bg-accent hover:text-primary"
            >
              <FaLinkedinIn />
            </a>
          )}

          {site.youtube && (
            <a
              href={site.youtube}
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:bg-accent hover:text-primary"
            >
              <FaYoutube />
            </a>
          )}
        </div>
      </div>
    </div>

    <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/60">
      © 2026 JUT CIIE. All Rights Reserved.
    </div>
  </div>
</footer>


);
}
