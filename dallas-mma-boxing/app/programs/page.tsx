import HeroBanner from "@/components/HeroBanner";

export default function ProgramsPage() {
  return (
    <>
      <HeroBanner title="Programs Muay Thai Boxing Gym" />

      <section className="bg-white py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Boxing */}
          <div className="mb-16">
            <h2 className="font-heading text-2xl md:text-h2 text-black uppercase mb-6">
              Boxing
            </h2>
            <p className="font-body text-body-text mb-4">
              <strong className="text-black">11 workouts per week</strong> —
              each session is approximately 90 minutes.
            </p>

            <h4 className="font-body text-h4 font-bold text-black mt-8 mb-3">
              Beginners I &amp; II
            </h4>
            <p className="font-body text-body-text mb-4">
              24 to 50 classes over 2 to 5 months. Focus on footwork, punching
              mechanics, defensive movements, combinations, and conditioning.
              Build a strong foundation in the fundamentals of boxing.
            </p>

            <h4 className="font-body text-h4 font-bold text-black mt-8 mb-3">
              Intermediate
            </h4>
            <p className="font-body text-body-text mb-4">
              Approximately 32 fundamental classes plus 20 intermediate classes,
              spanning roughly 4 months. Develop advanced combinations, counter
              punching, ring generalship, and sparring skills.
            </p>

            <h4 className="font-body text-h4 font-bold text-black mt-8 mb-3">
              Advanced
            </h4>
            <p className="font-body text-body-text mb-4">
              2 classes per week in fundamentals plus 2 intermediate sessions
              with optional sparring. Refine technique, strategy, and fight
              preparation at the highest level.
            </p>
          </div>

          <hr className="border-gray-200 my-12" />

          {/* Muay Thai */}
          <div className="mb-16">
            <h2 className="font-heading text-2xl md:text-h2 text-black uppercase mb-6">
              Muay Thai
            </h2>
            <p className="font-body text-body-text mb-4">
              <strong className="text-black">9 workouts per week</strong> —
              each session is approximately 90 minutes.
            </p>

            <h4 className="font-body text-h4 font-bold text-black mt-8 mb-3">
              Beginners
            </h4>
            <p className="font-body text-body-text mb-4">
              24 classes over approximately 2 months. Learn the fundamentals of
              Muay Thai including stance, basic strikes (punches, kicks, elbows,
              knees), clinch work, and conditioning.
            </p>

            <h4 className="font-body text-h4 font-bold text-black mt-8 mb-3">
              Intermediate
            </h4>
            <p className="font-body text-body-text mb-4">
              32 intermediate classes plus 8 punching fundamentals, spanning
              approximately 4 months. Advanced combinations, clinch techniques,
              sweep and dump strategies, and pad work.
            </p>

            <h4 className="font-body text-h4 font-bold text-black mt-8 mb-3">
              Advanced
            </h4>
            <p className="font-body text-body-text mb-4">
              1 class per week in fundamentals plus 2 intermediate sessions with
              optional sparring. Competition-level training with fight strategy,
              advanced clinch work, and sparring.
            </p>
          </div>

          <hr className="border-gray-200 my-12" />

          {/* BJJ */}
          <div className="mb-16">
            <h2 className="font-heading text-2xl md:text-h2 text-black uppercase mb-6">
              Brazilian Jiu-Jitsu (BJJ)
            </h2>
            <p className="font-body text-body-text mb-4">
              Brazilian Jiu-Jitsu focuses on grappling, ground fighting,
              joint-locks, and chokeholds. It is one of the most effective
              martial arts for self-defense and is a core component of MMA
              training.
            </p>
            <p className="font-body text-body-text mb-4">
              Students can participate in sport tournaments (gi and no-gi) as
              well as MMA competition. Classes cover defense, escape techniques,
              positional control, and submission techniques for practitioners of
              all levels.
            </p>
          </div>

          <hr className="border-gray-200 my-12" />

          {/* Kids */}
          <div>
            <h2 className="font-heading text-2xl md:text-h2 text-black uppercase mb-6">
              Kids Classes (Ages 8&ndash;12)
            </h2>
            <p className="font-body text-body-text mb-4">
              We offer martial arts programs designed specifically for children
              ages 8 to 12. Our kids classes build discipline, confidence,
              physical fitness, and self-defense skills in a safe and supportive
              environment.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              {["Kids Boxing", "Kids Jiu Jitsu", "Kids Wrestling"].map(
                (program) => (
                  <div
                    key={program}
                    className="bg-black text-white font-body font-semibold text-center py-4 px-4 rounded"
                  >
                    {program}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
