import { Metadata } from "next";
import { Award, Heart, Shield, Clock, Stethoscope, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Atmos Dental & Aesthetic Clinic",
  description: "Learn about Atmos Dental & Aesthetic Clinic - our team, qualifications, and commitment to patient care.",
  openGraph: {
    title: "About Us | Atmos Dental & Aesthetic Clinic",
    description: "Learn about Atmos Dental & Aesthetic Clinic - our team, qualifications, and commitment to patient care.",
    images: [{ url: "/images/logo_black_bg.png", width: 400, height: 400, alt: "Atmos Dental Logo" }],
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 md:py-28 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-white)' }}>
            About <span className="neon-text">Us</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Your trusted neighborhood dental clinic in Panaiyur, Chennai
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-28 section-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--text-white)' }}>
            Welcome to Atmos Dental & Aesthetic Clinic
          </h2>
          <p className="text-lg mb-8">
            Atmos Dental & Aesthetic Clinic has been serving the Panaiyur and Rajiv Gandhi Nagar communities
            for over a decade. Our mission is to provide top-quality dental care in a warm, welcoming
            environment where patients of all ages feel comfortable and cared for.
          </p>
          <p className="text-lg">
            We believe that excellent dental care should be accessible to everyone. Our team of experienced
            professionals uses the latest technology and techniques to ensure the best outcomes for our patients.
            From routine check-ups to complex procedures, we are committed to helping you achieve and maintain
            a healthy, beautiful smile.
          </p>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="py-20 md:py-28 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-white)' }}>
              Meet Your <span className="neon-text">Doctor</span>
            </h2>
          </div>
          <div
            className="max-w-md mx-auto rounded-2xl p-10 card-glow"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-dark)',
            }}
          >
            <div
              className="w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center icon-glow"
              style={{
                background: 'var(--bg-card-hover)',
                border: '2px solid var(--accent-blue)',
              }}
            >
              <Stethoscope size={48} style={{ color: 'var(--accent-blue)' }} />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-white)' }}>
                Dr. [Doctor Name]
              </h3>
              <p className="font-medium mb-4 neon-text">BDS, MDS</p>
              <p className="mb-6">
                With over 10 years of experience in general and cosmetic dentistry,
                Dr. [Doctor Name] is committed to providing personalized care to each patient.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {["Dental Surgery", "Aesthetic Dentistry", "Pediatric Care"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full text-sm font-medium"
                    style={{
                      background: 'var(--bg-card-hover)',
                      border: '1px solid var(--border-dark)',
                      color: 'var(--accent-blue)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-20 md:py-28 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-white)' }}>
              Why <span className="neon-text">Choose Us</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, stat: "10+ Years", label: "Of trusted dental expertise" },
              { icon: Shield, stat: "100% Sterile", label: "Strict hygiene protocols" },
              { icon: Heart, stat: "5000+ Happy", label: "Patients and counting" },
              { icon: Clock, stat: "Same Day", label: "Emergency appointments" },
            ].map((item, index) => (
              <div key={index} className="trust-badge">
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center icon-glow"
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-dark)',
                  }}
                >
                  <item.icon size={28} style={{ color: 'var(--accent-blue)' }} />
                </div>
                <h3 className="font-bold text-xl mb-2" style={{ color: 'var(--text-white)' }}>
                  {item.stat}
                </h3>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 md:py-28 section-border-glow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles size={48} style={{ color: 'var(--accent-blue)' }} className="mx-auto mb-6 icon-glow" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-white)' }}>
            Our Commitment to You
          </h2>
          <p className="text-xl max-w-2xl mx-auto">
            We are dedicated to providing compassionate, patient-centered care.
            Your comfort and health are our top priorities, and we strive to make
            every visit a positive experience.
          </p>
        </div>
      </section>
    </div>
  );
}
