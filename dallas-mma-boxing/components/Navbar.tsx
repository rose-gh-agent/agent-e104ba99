"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Schedule", href: "/schedule" },
  { label: "Programs", href: "/programs" },
  { label: "Trial Day Sign Up", href: "/trial-day-sign-up" },
  {
    label: "Gym Gear",
    href: "http://mma-boxing-gym.myshopify.com",
    external: true,
  },
  {
    label: "Waiver Form_Adult",
    href: "https://na4.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhAzJwmGMOBl2t0BYXF9QJO7Z62ycEOUb-vJOjrlCMy5B4sZBGrFx_mACtML1WA0oSs*",
    external: true,
  },
  { label: "Instructors", href: "/instructors" },
  { label: "Fighters", href: "/fighters" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/25 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="font-heading text-white text-xl tracking-wider">
              GMG
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-nav text-light-gray uppercase hover:text-white transition-colors whitespace-nowrap"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-body text-nav text-light-gray uppercase hover:text-white transition-colors whitespace-nowrap"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-sm">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-body text-nav text-light-gray uppercase hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block font-body text-nav text-light-gray uppercase hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
