import HeroBanner from "@/components/HeroBanner";

const trialSchedule = [
  { sport: "Boxing", days: "Mon / Wed", time: "6:30 - 8:00 PM" },
  { sport: "Boxing", days: "Saturday", time: "1:00 - 2:30 PM" },
  { sport: "Muay Thai", days: "Tue / Thu", time: "6:30 - 8:00 PM" },
  { sport: "MMA", days: "Mon / Wed", time: "8:00 - 9:15 PM" },
  { sport: "Jiu-Jitsu", days: "Mon / Tue / Wed / Thu", time: "6:30 - 8:00 PM" },
  { sport: "Kids Boxing", days: "Mon / Wed", time: "5:30 - 6:30 PM" },
];

export default function TrialDaySignUpPage() {
  return (
    <>
      <HeroBanner title="Trial Day Sign Up" />

      <section className="bg-white py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="font-heading text-2xl md:text-h2 text-black uppercase mb-6">
              Free Trial Class
            </h2>
            <p className="font-body text-body-text mb-4">
              Your first class is <strong className="text-black">free</strong>{" "}
              (one-time trial). Come try any of our programs and see if
              it&apos;s the right fit for you. No experience necessary &mdash;
              all skill levels are welcome.
            </p>
          </div>

          {/* Trial Schedule */}
          <div className="mb-10">
            <h3 className="font-heading text-xl md:text-2xl text-black uppercase mb-6">
              Trial Class Schedule
            </h3>
            <div className="overflow-x-auto">
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
          </div>

          {/* Steps */}
          <div className="mb-10">
            <h3 className="font-heading text-xl md:text-2xl text-black uppercase mb-6">
              How to Sign Up
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 bg-black text-white font-body font-bold rounded-full flex items-center justify-center">
                  1
                </span>
                <p className="font-body text-body-text pt-2">
                  Sign the waiver online (Adult or Minor) using the links below.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 bg-black text-white font-body font-bold rounded-full flex items-center justify-center">
                  2
                </span>
                <p className="font-body text-body-text pt-2">
                  Call us at{" "}
                  <a
                    href="tel:9729775605"
                    className="text-black font-semibold hover:underline"
                  >
                    972-977-5605
                  </a>{" "}
                  to book your trial class.
                </p>
              </div>
            </div>
          </div>

          {/* Waiver Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://na4.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhAzJwmGMOBl2t0BYXF9QJO7Z62ycEOUb-vJOjrlCMy5B4sZBGrFx_mACtML1WA0oSs*"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white font-body font-semibold text-center py-3 px-8 rounded hover:bg-dark-card transition-colors"
            >
              Adult Waiver
            </a>
            <a
              href="https://na4.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhAzJwmGMOBl2t0BYXF9QJO7Z62ycEOUb-vJOjrlCMy5B4sZBGrFx_mACtML1WA0oSs*"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white font-body font-semibold text-center py-3 px-8 rounded hover:bg-dark-card transition-colors"
            >
              Minor Waiver
            </a>
          </div>

          <p className="font-body text-body-text mt-8">
            Phone:{" "}
            <a
              href="tel:9729775605"
              className="text-black font-semibold hover:underline"
            >
              972-977-5605
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
