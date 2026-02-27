import HeroBanner from "@/components/HeroBanner";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroBanner
        title="George Prevalsky Gym"
        subtitle="Boxing, Muay Thai, Brazilian Jiu-Jitsu and MMA"
        ctaText="See Schedule"
        ctaHref="/schedule"
        fullHeight
      />

      {/* About Us Section */}
      <section className="bg-black py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl md:text-h2 text-white uppercase text-center mb-12">
            About Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h4 className="font-body text-h4 font-bold text-white mb-4">
                Who We Are
              </h4>
              <p className="font-body text-light-gray leading-relaxed">
                We are a Muay Thai and Boxing Gym located in the center of the
                DFW area. The Club was established in 1996 &ndash; Since then we
                have had 20 continuous years of teaching and training, appealing
                to both fighters (Amateur and Professional) and recreational
                athletes. The original location was established at the Boy Scout
                building at Lee Park in the Turtle Creek / Oak Lawn area of
                Dallas.
              </p>
            </div>
            <div>
              <h4 className="font-body text-h4 font-bold text-white mb-4">
                Your Success is Our Goal
              </h4>
              <p className="font-body text-light-gray leading-relaxed">
                Our goal has always been to become the number one stand up
                striking training center in the DFW area. In 2010 we relocated
                to the current facility &ndash; A standalone, 6,000 sq.ft.
                building. We have built a full size boxing ring, a cage for MMA,
                separate mat area for ground fighting and training, and a full
                weight room with cardio equipment.
              </p>
            </div>
            <div>
              <h4 className="font-body text-h4 font-bold text-white mb-4">
                Programs
              </h4>
              <p className="font-body text-light-gray leading-relaxed">
                We have a wide array of programs to meet your interests. We
                specialize in Muay Thai, Boxing, and MMA. We have also added
                wrestling and Brazilian Jiu-Jitsu. Whether you are interested in
                competing as a fighter, or just looking for a fun way to stay in
                shape, we have a program for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="bg-dark-section py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-h2 text-white uppercase mb-8">
              George&apos;s MMA &amp; Boxing Gym
            </h2>
            <div className="space-y-3 font-body text-light-gray">
              <p>612 Valley Ranch Pkwy S, Irving, TX 75063</p>
              <p>
                Phone:{" "}
                <a
                  href="tel:9729775605"
                  className="hover:text-white transition-colors"
                >
                  972-977-5605
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:georgeprevalsky@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  georgeprevalsky@gmail.com
                </a>
              </p>
              <p>Open today 11:30 am &ndash; 9:15 pm</p>
            </div>
            <a
              href="https://www.google.com/maps/dir//612+Valley+Ranch+Pkwy+S,+Irving,+TX+75063"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 bg-white text-black font-body font-semibold text-base px-8 py-3 rounded hover:bg-light-gray transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="bg-white py-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3352.5!2d-96.9707!3d32.8582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7f2c30a7c6e5%3A0x8b8d8b8d8b8d8b8d!2s612%20Valley%20Ranch%20Pkwy%20S%2C%20Irving%2C%20TX%2075063!5e0!3m2!1sen!2sus!4v1700000000000"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="George&#39;s MMA &amp; Boxing Gym Location"
        />
      </section>

      {/* Instagram Section */}
      <section className="bg-black py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl md:text-h2 text-white uppercase mb-4">
            Follow Us on Instagram
          </h2>
          <a
            href="https://www.instagram.com/muaythaiboxing_dallas/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-body text-lg text-light-gray hover:text-white transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            @muaythaiboxing_dallas
          </a>
        </div>
      </section>
    </>
  );
}
