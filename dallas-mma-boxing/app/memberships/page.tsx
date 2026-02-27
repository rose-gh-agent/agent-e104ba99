import HeroBanner from "@/components/HeroBanner";
import Link from "next/link";

const plans = [
  {
    name: "Basic",
    price: "$89",
    period: "/month",
    features: [
      "Access to boxing classes",
      "2 classes per week",
      "Locker access",
    ],
  },
  {
    name: "Standard",
    price: "$129",
    period: "/month",
    featured: true,
    features: [
      "Access to all striking classes (Boxing + Muay Thai)",
      "Unlimited classes",
      "Locker access",
      "Free gi",
    ],
  },
  {
    name: "Premium",
    price: "$179",
    period: "/month",
    features: [
      "Unlimited all classes (Boxing, Muay Thai, MMA, BJJ)",
      "Personal training session / month",
      "Competition prep",
      "Priority scheduling",
    ],
  },
  {
    name: "Kids",
    price: "$79",
    period: "/month",
    features: [
      "Kids Boxing, Jiu-Jitsu, or Wrestling",
      "Ages 8–12",
      "3 classes per week",
    ],
  },
];

export default function MembershipsPage() {
  return (
    <>
      <HeroBanner
        title="Join Our Gym"
        subtitle="Choose Your Membership Plan"
      />

      <section className="bg-white py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-lg p-8 flex flex-col ${
                  plan.featured
                    ? "bg-black text-white ring-2 ring-white shadow-2xl scale-105"
                    : "bg-medium-gray text-black"
                }`}
              >
                <h3 className="font-heading text-2xl uppercase mb-2">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="font-body text-4xl font-bold">
                    {plan.price}
                  </span>
                  <span
                    className={`font-body text-sm ${
                      plan.featured ? "text-light-gray" : "text-body-text"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <svg
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          plan.featured ? "text-white" : "text-black"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span
                        className={`font-body text-sm ${
                          plan.featured ? "text-light-gray" : "text-body-text"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact-us"
                  className={`block text-center font-body font-semibold py-3 px-6 rounded transition-colors ${
                    plan.featured
                      ? "bg-white text-black hover:bg-light-gray"
                      : "bg-black text-white hover:bg-dark-card"
                  }`}
                >
                  Sign Up
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center space-y-2">
            <p className="font-body text-body-text">
              For billing questions, contact Member Solutions:{" "}
              <a
                href="tel:8882774408"
                className="text-black font-semibold hover:underline"
              >
                888-277-4408
              </a>
            </p>
            <p className="font-body text-sm text-body-text">
              This page is for informational purposes. Contact the gym to
              complete enrollment.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
