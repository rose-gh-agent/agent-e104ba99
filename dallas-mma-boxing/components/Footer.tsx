import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark-section border-t border-dark-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-body text-sm text-light-gray">
            Copyright &copy; 2026 Georges MMA and Boxing Gym - All Rights
            Reserved.
          </p>

          <div className="flex items-center space-x-6">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/GeorgesMmaAndBoxingGym/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-gray hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/muaythaiboxing_dallas/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-gray hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>

            {/* Yelp */}
            <a
              href="https://www.yelp.com/biz/george-prevalskys-boxing-and-muay-thai-boxing-club-irving-3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-gray hover:text-white transition-colors"
              aria-label="Yelp"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 011.596-.206 9.194 9.194 0 012.364 3.252 1.073 1.073 0 01-.694 1.459zm-3.1 5.017l-4.053-3.09c-.78-.594-.39-1.836.59-1.878l5.176-.22a1.073 1.073 0 011.07.81 9.222 9.222 0 01-.18 4.053 1.072 1.072 0 01-1.534.586l-1.07-.261zm-5.865 1.978l-.948-5.084c-.182-.978 1.05-1.54 1.762-.803l3.528 3.67a1.073 1.073 0 01-.12 1.636 9.217 9.217 0 01-3.398 1.294 1.072 1.072 0 01-1.255-.713h.431zm-2.26-7.94l3.34-3.833c.647-.74 1.823-.19 1.783.835l-.23 5.175c-.026.696-.8 1.1-1.39.725l-3.11-1.956c-.59-.372-.73-1.147-.393-1.746v.8zm-1.167-7.496l2.168 4.683c.42.908-.56 1.852-1.48 1.424L3.89 8.263a1.073 1.073 0 01-.428-1.463 9.194 9.194 0 013.08-3.003 1.072 1.072 0 011.396.353h-.121z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-dark-card">
          <div className="flex flex-wrap justify-center gap-4 text-xs text-body-text font-body">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link
              href="/schedule"
              className="hover:text-white transition-colors"
            >
              Schedule
            </Link>
            <Link
              href="/programs"
              className="hover:text-white transition-colors"
            >
              Programs
            </Link>
            <Link
              href="/instructors"
              className="hover:text-white transition-colors"
            >
              Instructors
            </Link>
            <Link
              href="/fighters"
              className="hover:text-white transition-colors"
            >
              Fighters
            </Link>
            <Link
              href="/contact-us"
              className="hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
