import HeroBanner from "@/components/HeroBanner";

const instructors = [
  {
    name: "George Prevalsky",
    title: "Head Instructor",
    description:
      "George Prevalsky brings over 30 years of martial arts experience. He trained for 4 years with the Bulgarian Junior Olympic Boxing Team and is a USA Boxing registered coach. George is a certified Muay Thai trainer through the International Amateur Muay Thai Federation (I.A.M.T.F.) and was recognized as a Master of Muay Thai (Ajahn) by the I.A.M.T.F. on August 17, 1998. His primary influences include Jason Webster (Muay Thai) and Palmi Ranchev, the Bulgarian National Boxing head trainer.",
  },
  {
    name: "Kevin Kildea",
    title: "Certified USA Boxing Instructor",
    description:
      "Kevin Kildea has over 30 years of martial arts experience spanning Karate, Boxing, Kickboxing, Jeet Kune Do, Hapkido, Jiu-Jitsu, Escrima, and Muay Thai. He coached Karate in Scotland throughout the 1980s before moving from the UK to the USA in 1992. Outside of martial arts, Kevin is an accomplished distance runner with a marathon personal record of 2:54:36.",
  },
  {
    name: "Victor Ling",
    title: "Assistant Muay Thai Instructor",
    description:
      "Victor Ling is a dedicated Muay Thai fighter with years of martial arts experience. As an assistant instructor, Victor brings practical fighting experience and technical knowledge to every class, helping students develop their striking skills and fight IQ.",
  },
  {
    name: "Yousef Alirezaei",
    title: "Brazilian Jiu-Jitsu Instructor",
    description:
      "Yousef Alirezaei has approximately 30 years of experience in wrestling and Brazilian Jiu-Jitsu, with over 15 years of coaching. He holds a 3rd degree BJJ black belt and has accumulated over 250 gold medals in competition. Yousef is a 2001 and 2002 Sambo World Champion, with multiple national and Pan American titles to his name.",
  },
];

export default function InstructorsPage() {
  return (
    <>
      <HeroBanner title="Instructors" />

      <section className="bg-white py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {instructors.map((instructor) => (
              <div
                key={instructor.name}
                className="bg-medium-gray rounded-lg p-8 md:p-10"
              >
                {/* Avatar placeholder */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center text-white font-heading text-xl">
                    {instructor.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h3 className="font-heading text-xl md:text-2xl text-black uppercase">
                      {instructor.name}
                    </h3>
                    <p className="font-body text-body-text font-semibold">
                      {instructor.title}
                    </p>
                  </div>
                </div>
                <p className="font-body text-body-text leading-relaxed">
                  {instructor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
