"use client";

import HeroBanner from "@/components/HeroBanner";
import { useState } from "react";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <HeroBanner title="Contact Us" />

      <section className="bg-white py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-2xl md:text-h2 text-black uppercase mb-6">
                Get In Touch
              </h2>
              <div className="space-y-4 font-body text-body-text">
                <div>
                  <h4 className="font-semibold text-black mb-1">Address</h4>
                  <p>612 South Valley Ranch Pkwy, Irving, TX 75063</p>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">Phone</h4>
                  <p>
                    <a
                      href="tel:9729775605"
                      className="hover:text-black transition-colors"
                    >
                      972-977-5605
                    </a>
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">
                    Billing / Membership (Member Solutions)
                  </h4>
                  <p>
                    <a
                      href="tel:8882774408"
                      className="hover:text-black transition-colors"
                    >
                      888-277-4408
                    </a>
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">Email</h4>
                  <p>
                    <a
                      href="mailto:georgeprevalsky@gmail.com"
                      className="hover:text-black transition-colors"
                    >
                      georgeprevalsky@gmail.com
                    </a>
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">Hours</h4>
                  <p>11:30 am &ndash; 9:15 pm daily</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-heading text-2xl md:text-h2 text-black uppercase mb-6">
                Send a Message
              </h2>
              {submitted ? (
                <div className="bg-medium-gray rounded-lg p-8 text-center">
                  <p className="font-body text-black font-semibold text-lg">
                    Thank you for your message!
                  </p>
                  <p className="font-body text-body-text mt-2">
                    We will get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-body text-sm font-semibold text-black mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full border border-gray-300 rounded px-4 py-3 font-body text-black focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-body text-sm font-semibold text-black mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full border border-gray-300 rounded px-4 py-3 font-body text-black focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block font-body text-sm font-semibold text-black mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full border border-gray-300 rounded px-4 py-3 font-body text-black focus:outline-none focus:ring-2 focus:ring-black resize-vertical"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-black text-white font-body font-semibold py-3 px-8 rounded hover:bg-dark-card transition-colors"
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Google Maps */}
          <div className="mt-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3352.5!2d-96.9707!3d32.8582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7f2c30a7c6e5%3A0x8b8d8b8d8b8d8b8d!2s612%20Valley%20Ranch%20Pkwy%20S%2C%20Irving%2C%20TX%2075063!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
              title="George's MMA & Boxing Gym Location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
