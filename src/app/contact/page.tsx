"use client";

import { useState } from "react";
import { Phone, MapPin, MessageCircle, Clock, CheckCircle } from "lucide-react";
import MapPreview from "@/components/MapPreview";
import { trackEvent } from "@/lib/analytics";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://formspree.io/f/xyzgkqbj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormState({ name: "", phone: "", message: "" });
        trackEvent({ action: "form_submit_success", category: "conversion", label: "Contact Form" });
      } else {
        setSubmitStatus("error");
        trackEvent({ action: "form_submit_error", category: "conversion", label: "Contact Form" });
      }
    } catch {
      setSubmitStatus("error");
      trackEvent({ action: "form_submit_error", category: "conversion", label: "Contact Form" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 md:py-28 section-border-glow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact <span className="neon-text">Us</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Get in touch with us for appointments and inquiries
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 md:py-28 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>

              <div className="space-y-6">
                <a
                  href="tel:+919025408659"
                  className="flex items-start gap-5 p-6 rounded-xl transition-all duration-300 contact-info-card group"
                >
                  <div className="contact-icon-wrapper">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-2xl font-bold contact-phone">+91 90254 08659</p>
                    <p className="text-sm mt-1 contact-muted">Tap to call directly</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/919025408659?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-5 p-6 rounded-xl transition-all duration-300 contact-info-card"
                >
                  <div className="contact-icon-wrapper-whatsapp">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">WhatsApp</h3>
                    <p className="text-xl font-bold contact-whatsapp-text">Message Us</p>
                    <p className="text-sm mt-1 contact-muted">Quick response guaranteed</p>
                  </div>
                </a>

                <div className="flex items-start gap-5 p-6 rounded-xl contact-info-card">
                  <div className="contact-icon-wrapper">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p>
                      State Highway 49, 5, 1st Floor, Rajiv Gandhi Nagar, 1st Main Road, East Coast Rd,<br />
                      Panaiyur, Chennai, Tamil Nadu 600119
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 p-6 rounded-xl contact-info-card">
                  <div className="contact-icon-wrapper">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Hours</h3>
                    <p>
                      Mon - Sat: 9:00 AM - 8:00 PM<br />
                      Sunday: 10:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-10">
                <h3 className="font-semibold mb-4">Location</h3>
                <MapPreview />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Send Us a Message</h2>

              {submitStatus === "success" ? (
                <div className="text-center p-10 rounded-2xl contact-success-card">
                  <div className="contact-success-icon">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Message Sent!</h3>
                  <p className="mb-6">
                    Thank you for contacting us. We will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitStatus("idle")}
                    className="font-semibold contact-link"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-3">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="input-neon"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-3">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formState.phone}
                      onChange={(e) =>
                        setFormState({ ...formState, phone: e.target.value })
                      }
                      className="input-neon"
                      placeholder="+91 90254 08659"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-3">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="input-neon resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  {submitStatus === "error" && (
                    <div className="p-4 rounded-lg contact-error">
                      <p>
                        Something went wrong. Please try again or contact us via WhatsApp.
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="neon-btn neon-btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed text-lg py-4"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>

                  <p className="text-sm text-center contact-muted">
                    Or reach us directly on{" "}
                    <a
                      href="https://wa.me/919025408659"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold contact-whatsapp-link"
                    >
                      WhatsApp
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
