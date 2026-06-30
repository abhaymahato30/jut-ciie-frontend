import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
{ label: "Home", href: "/" },
{ label: "About", href: "/about" },
{ label: "Announcements", href: "/announcements" },
{ label: "Programs", href: "/programs" },
{ label: "Startups", href: "/startups" },
{ label: "Events", href: "/events" },
{ label: "Gallery", href: "/gallery" },
{ label: "Team", href: "/team" },
{ label: "Contact", href: "/contact" },
];

const announcements = [
"Innovation Challenge 2026 registrations are now open",
"Applications invited for Startup Incubation Program",
"Workshop on AI & Entrepreneurship coming soon",
"Funding support opportunities available for student innovators",
];

export default function Navbar() {
const [isOpen, setIsOpen] = useState(false);

return ( <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
{/* University Banner */}
 <div className="border-b border-gray-200 bg-white"> 
  <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
{/* Left Logo */} 
<div className="flex h-20 w-20 items-center justify-center">
  <img
    src="/images/ciie-logo.png"
    alt="CIIE Logo"
    className="max-h-full max-w-full object-contain"
  />
</div>


      {/* Center Content */}
      <div className="flex-1 px-4 text-center">
        <h1 className="font-heading text-lg font-bold text-primary md:text-3xl">
          Centre for Innovation, Incubation & Entrepreneurship
        </h1>

        <p className="mt-1 text-xs text-gray-600 md:text-base">
          Jharkhand University of Technology
        </p>

        <p className="text-[10px] text-secondary md:text-sm">
          Empowering Innovation & Entrepreneurship
        </p>
      </div>

      {/* Right Logo */}
      <div className="flex h-20 w-20 items-center justify-center">
        <img
          src="/images/jut-logo.png"
          alt="JUT Logo"
          className="max-h-full max-w-full object-contain"
        />
      </div>
    </div>
  </div>

  {/* Navigation Row */}
  <div className="bg-primary">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            to={link.href}
            className="px-5 py-4 text-sm font-medium text-white transition hover:bg-secondary"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Desktop CTA */}
      <Link
        to="/apply"
        className="hidden rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 lg:block"
      >
        Apply Now
      </Link>

      {/* Mobile Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="py-3 text-white lg:hidden"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </div>
  </div>

  {/* Announcement Ticker */}
  <div className="overflow-hidden border-b border-gray-200 bg-yellow-50">
    <div className="relative flex overflow-hidden whitespace-nowrap py-2">
      <div className="animate-marquee flex gap-12">
        {[...announcements, ...announcements].map((item, index) => (
          <span
            key={index}
            className="text-sm font-medium text-primary"
          >
            📢 {item}
          </span>
        ))}
      </div>
    </div>
  </div>

  {/* Mobile Menu */}
  {isOpen && (
    <div className="border-t bg-white shadow-lg lg:hidden">
      <div className="flex flex-col px-4 py-4">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            to={link.href}
            onClick={() => setIsOpen(false)}
            className="border-b border-gray-100 py-3 text-primary transition hover:text-secondary"
          >
            {link.label}
          </Link>
        ))}

        <Link
          to="/apply"
          onClick={() => setIsOpen(false)}
          className="mt-4 rounded-lg bg-accent px-4 py-3 text-center font-semibold text-white"
        >
          Apply Now
        </Link>
      </div>
    </div>
  )}
</header>


);
}
