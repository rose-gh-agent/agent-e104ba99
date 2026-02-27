import HeroBanner from "@/components/HeroBanner";

const trialSchedule = [
  { sport: "Boxing", days: "Mon / Wed", time: "6:30 - 8:00 PM" },
  { sport: "Boxing", days: "Saturday", time: "1:00 - 2:30 PM" },
  { sport: "Muay Thai", days: "Tue / Thu", time: "6:30 - 8:00 PM" },
  { sport: "MMA", days: "Mon / Wed", time: "8:00 - 9:15 PM" },
  { sport: "Jiu-Jitsu", days: "Mon / Tue / Wed / Thu", time: "6:30 - 8:00 PM" },
  { sport: "Kids Boxing", days: "Mon / Wed", time: "5:30 - 6:30 PM" },
];

const waiverLinks = [
  {
    label: "Adult Waiver",
    href: "https://na4.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhAzJwmGMOBl2t0BYXF9QJO7Z62ycEOUb-vJOjrlCMy5B4sZBGrFx_mACtML1WA0oSs*",
  },
  {
    label: "Minor Waiver",
    href: "https://na4.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhAzJwmGMOBl2t0BYXF9QJO7Z62ycEOUb-vJOjrlCMy5B4sZBGrFx_mACtML1WA0oSs*",
  },
  {
    label: "Adult Sparring Waiver",
    href: "https://na4.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhAzJwmGMOBl2t0BYXF9QJO7Z62ycEOUb-vJOjrlCMy5B4sZBGrFx_mACtML1WA0oSs*",
  },
  {
    label: "Minor Sparring Waiver",
    href: "https://na4.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhAzJwmGMOBl2t0BYXF9QJO7Z62ycEOUb-vJOjrlCMy5B4sZBGrFx_mACtML1WA0oSs*",
  },
];

export default function SchedulePage() {
  return (
    <>
      <HeroBanner title="Schedule" />

      <section className="bg-white py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl md:text-h2 text-black uppercase mb-4 text-center">
            Trial Class Schedule
          </h2>
          <p className="font-body text-body-text text-center mb-10 max-w-2xl mx-auto">
            Your first class is free (one-time). Check the schedule below and
            call us to book your trial class.
          </p>

          {/* Schedule Table */}
          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-black text-white">
                  <th className="font-body font-semibold text-left px-6 py-4 uppercase text-sm">
                    Sport
                  </th>
                  <th className="font-body font-semibold text-left px-6 py-4 uppercase text-sm">
                    Days
                  </th>
                  <th className="font-body font-semibold text-left px-6 py-4 uppercase text-sm">
                    Time
                  </th>
                </tr>
              </thead>
              <tbody>
                {trialSchedule.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-200 ${
                      i % 2 === 0 ? "bg-medium-gray" : "bg-white"
                    }`}
                  >
                    <td className="font-body text-black font-semibold px-6 py-4">
                      {row.sport}
                    </td>
                    <td className="font-body text-body-text px-6 py-4">
                      {row.days}
                    </td>
                    <td className="font-body text-body-text px-6 py-4">
                      {row.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Program Categories */}
          <div className="mb-12">
            <h3 className="font-heading text-xl md:text-2xl text-black uppercase mb-6 text-center">
              Programs
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Boxing", "Muay Thai", "MMA", "Brazilian Jiu Jitsu"].map(
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

          {/* Waiver Links */}
          <div>
            <h3 className="font-heading text-xl md:text-2xl text-black uppercase mb-6 text-center">
              Waiver Forms
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
              {waiverLinks.map((waiver) => (
                <a
                  key={waiver.label}
                  href={waiver.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-black text-white font-body font-semibold text-center py-3 px-6 rounded hover:bg-dark-card transition-colors"
                >
                  {waiver.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
