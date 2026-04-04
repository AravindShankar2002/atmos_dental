"use client";

import Link from "next/link";
import { Phone, MessageCircle, MapPin, Clock, Shield, Award, Heart } from "lucide-react";
import MapPreview from "@/components/MapPreview";
import { trackEvent } from "@/lib/analytics";

const services = [
  { icon: "✨", title: "Dental Cleaning", desc: "Professional cleaning for healthy gums" },
  { icon: "💎", title: "Teeth Whitening", desc: "Brighten your smile safely" },
  { icon: "😁", title: "Braces & Aligners", desc: "Straighten your teeth discreetly" },
  { icon: "🔧", title: "Root Canal", desc: "Pain-free RCT treatment" },
  { icon: "🦷", title: "Tooth Extraction", desc: "Gentle extractions when needed" },
  { icon: "🔩", title: "Dental Fillings", desc: "Restore cavities with care" },
];

const testimonials = [
  {
    name: "Priya S.",
    text: "Excellent care for my entire family. The clinic is very clean and the staff is friendly.",
    location: "Rajiv Gandhi Nagar",
  },
  {
    name: "Rajesh K.",
    text: "My child was scared of dentists, but the doctor made him comfortable. Highly recommend!",
    location: "Panaiyur",
  },
  {
    name: "Anitha M.",
    text: "Quick appointment booking via WhatsApp. Very convenient for working professionals.",
    location: "Chennai",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-section">
        {/* Floating ambient shapes */}
        <div className="hero-shapes" aria-hidden="true">
          <div className="hero-shape hero-shape-1" />
          <div className="hero-shape hero-shape-2" />
          <div className="hero-shape hero-shape-3" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="hero-badge">
            Welcome to the Future of Dental Care
          </span>

          {/* Hero Logo */}
          <div className="hero-logo-wrapper">
            <img
              src="/images/logo_black_bg.png"
              alt="Atmos Dental Logo"
              className="hero-logo hero-logo-dark"
            />
            <img
              src="/images/logo_white_bg.png"
              alt="Atmos Dental Logo"
              className="hero-logo hero-logo-light"
            />
          </div>

          <div className="hero-cta-group">
            <a href="tel:+919025408659" className="hero-cta-primary" onClick={() => trackEvent({ action: "call_now_click", category: "CTA", label: "Home Hero" })}>
              <Phone size={22} />
              <span>Call Now</span>
            </a>
            <a
              href="https://wa.me/919025408659?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta-secondary"
              onClick={() => trackEvent({ action: "whatsapp_click", category: "CTA", label: "Home Hero" })}
            >
              <MessageCircle size={22} />
              <span>Book via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-28 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-white)' }}>
              Our <span className="neon-text">Services</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto">
              Comprehensive dental care for your entire family
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {services.map((service, index) => (
              <div key={index} className="service-card text-center">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="font-semibold text-base mb-2" style={{ color: 'var(--text-white)' }}>
                  {service.title}
                </h3>
                <p className="text-sm">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="font-semibold text-lg transition-all duration-300 neon-text"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-20 md:py-28 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="trust-badge">
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center icon-glow"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-dark)',
                }}
              >
                <Award size={28} style={{ color: 'var(--accent-blue)' }} />
              </div>
              <h3 className="font-bold text-3xl mb-2" style={{ color: 'var(--text-white)' }}>10+</h3>
              <p>Years Experience</p>
            </div>
            <div className="trust-badge">
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center icon-glow"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-dark)',
                }}
              >
                <Heart size={28} style={{ color: 'var(--accent-blue)' }} />
              </div>
              <h3 className="font-bold text-3xl mb-2" style={{ color: 'var(--text-white)' }}>5000+</h3>
              <p>Happy Patients</p>
            </div>
            <div className="trust-badge">
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center icon-glow"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-dark)',
                }}
              >
                <Shield size={28} style={{ color: 'var(--accent-blue)' }} />
              </div>
              <h3 className="font-bold text-3xl mb-2" style={{ color: 'var(--text-white)' }}>100%</h3>
              <p>Sterile Environment</p>
            </div>
            <div className="trust-badge">
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center icon-glow"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-dark)',
                }}
              >
                <Clock size={28} style={{ color: 'var(--accent-blue)' }} />
              </div>
              <h3 className="font-bold text-3xl mb-2" style={{ color: 'var(--text-white)' }}>Same Day</h3>
              <p>Emergency Care</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-white)' }}>
              What Our <span className="neon-text">Patients Say</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="flex items-center gap-1 mb-4 star-rating text-xl">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <p className="mb-6">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div>
                  <p className="font-semibold" style={{ color: 'var(--text-white)' }}>
                    {testimonial.name}
                  </p>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 md:py-28 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-white)' }}>
              Visit <span className="neon-text">Us</span>
            </h2>
            <p>
              State Highway 49, Rajiv Gandhi Nagar, East Coast Rd, Panaiyur, Chennai
            </p>
          </div>
          <MapPreview />
          <div className="text-center mt-8">
            <a
              href="https://www.google.com/maps/place/Atmos+Dental+and+Aesthetic+Clinic/@12.8914394,80.2430741,17z/data=!3m2!4b1!5s0x3a525b64f132a1fb:0x68a297bf2a5c7c8!4m6!3m5!1s0x3a525b001c15d70d:0x5e0bf0119cc07dfc!8m2!3d12.8914394!4d80.245649!16s%2Fg%2F11x01d4fgx"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold transition-all duration-300 neon-text"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
