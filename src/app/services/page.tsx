import { Metadata } from "next";
import { Phone, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Atmos Dental & Aesthetic Clinic",
  description: "Comprehensive dental services including teeth cleaning, whitening, braces, root canal, extractions, and more.",
  openGraph: {
    title: "Services | Atmos Dental & Aesthetic Clinic",
    description: "Comprehensive dental services including teeth cleaning, whitening, braces, root canal, extractions, and more.",
    images: [{ url: "/images/logo_black_bg.png", width: 400, height: 400, alt: "Atmos Dental Logo" }],
  },
};

const services = [
  {
    icon: "✨",
    title: "Dental Cleaning",
    description: "Professional teeth cleaning to remove plaque and tartar, preventing gum disease and cavities. Regular cleanings keep your smile healthy and bright.",
  },
  {
    icon: "💎",
    title: "Teeth Whitening",
    description: "Safe and effective teeth whitening treatments to brighten your smile. We offer both in-office and take-home options for your convenience.",
  },
  {
    icon: "😁",
    title: "Dental Braces & Aligners",
    description: "Traditional braces and modern clear aligners to straighten your teeth discreetly. Achieve the perfect smile you have always wanted.",
  },
  {
    icon: "🔧",
    title: "Root Canal Treatment",
    description: "Pain-free root canal therapy to save infected teeth. Our advanced techniques ensure comfortable treatment with lasting results.",
  },
  {
    icon: "🦷",
    title: "Tooth Extraction",
    description: "Gentle tooth extractions when necessary. We prioritize your comfort and provide proper aftercare instructions for quick healing.",
  },
  {
    icon: "🔩",
    title: "Dental Fillings",
    description: "Tooth-colored fillings to restore cavities while maintaining the natural appearance of your teeth. Durable and aesthetically pleasing.",
  },
  {
    icon: "👑",
    title: "Crowns & Bridges",
    description: "Custom-made crowns to protect damaged teeth and bridges to replace missing teeth. Restoring function and beauty to your smile.",
  },
  {
    icon: "🧒",
    title: "Pediatric Dentistry",
    description: "Gentle, child-friendly dental care. We make dental visits fun and stress-free for your little ones, building positive associations early.",
  },
  {
    icon: "😊",
    title: "Smile Makeover",
    description: "Comprehensive smile transformation combining multiple cosmetic treatments. Address discoloration, gaps, chips, and misalignment.",
  },
  {
    icon: "🌟",
    title: "Aesthetic Treatments",
    description: "Beyond dentistry - we offer aesthetic treatments to enhance your overall appearance. Feel confident inside and out.",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 md:py-28 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-white)' }}>
            Our <span className="neon-text">Services</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Comprehensive dental care for your entire family
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-white)' }}>
                  {service.title}
                </h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 section-border-glow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-white)' }}>
            Ready to Book an Appointment?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Contact us today via phone or WhatsApp to schedule your visit
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919025408659"
              className="neon-btn neon-btn-primary gap-2 text-lg px-8 py-4"
            >
              <Phone size={22} />
              Call +91 90254 08659
            </a>
            <a
              href="https://wa.me/919025408659?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-btn neon-btn-whatsapp gap-2 text-lg px-8 py-4"
            >
              <MessageCircle size={22} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
