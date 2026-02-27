import HeroBanner from "@/components/HeroBanner";

const activeFighters = [
  "Armando Servin",
  "Delis \"Cuba\" Borges",
  "Federico David Olivera",
  "Alan Ibarra",
  "Jacorien Walker",
  "Xavier Franklin",
];

const pastFighters = [
  {
    name: "Kurt Pitman",
    achievement: "World Amateur Light Heavyweight Kickboxing Champion",
  },
  {
    name: "Johnny Shaw",
    achievement: "Multiple Texas and US Champion",
  },
  {
    name: "Johann Hubert",
    achievement: "Dallas Golden Gloves Heavyweight Champion",
  },
  {
    name: "Ina Prevalsky",
    achievement:
      "6 Time State (Girls & Boys Div) & 5 Time US Junior Olympic Taekwondo Champion",
  },
];

export default function FightersPage() {
  return (
    <>
      <HeroBanner title="Fighters" />

      <section className="bg-white py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Active Fighters */}
          <div className="mb-16">
            <h2 className="font-heading text-2xl md:text-h2 text-black uppercase mb-8">
              Active Fighters
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {activeFighters.map((fighter) => (
                <div
                  key={fighter}
                  className="bg-black text-white rounded-lg p-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-dark-card flex items-center justify-center text-white font-heading text-sm">
                      {fighter
                        .split(" ")
                        .map((n) => n[0])
                        .filter((c) => c !== '"')
                        .join("")}
                    </div>
                    <h3 className="font-body text-lg font-semibold">
                      {fighter}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Past Fighters / Champions */}
          <div>
            <h2 className="font-heading text-2xl md:text-h2 text-black uppercase mb-8">
              Past Fighters / Champions
            </h2>
            <div className="space-y-4">
              {pastFighters.map((fighter) => (
                <div
                  key={fighter.name}
                  className="bg-medium-gray rounded-lg p-6 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6"
                >
                  <h3 className="font-heading text-lg text-black uppercase whitespace-nowrap">
                    {fighter.name}
                  </h3>
                  <p className="font-body text-body-text">
                    {fighter.achievement}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
