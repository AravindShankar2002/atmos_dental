"use client";

import { useEffect, useRef, useState } from "react";

export default function MapPreview() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="rounded-xl overflow-hidden map-preview-border"
      style={{
        border: '1px solid rgba(0, 123, 255, 0.3)',
        boxShadow: '0 0 30px rgba(0, 123, 255, 0.1)',
      }}
    >
      <div className="h-64 md:h-80">
        {isVisible ? (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.3944!2d80.2430741!3d12.8914394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525b001c15d70d%3A0x5e0bf0119cc07dfc!2sAtmos%20Dental%20and%20Aesthetic%20Clinic!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Atmos Dental Clinic Location"
          ></iframe>
        ) : (
          <div
            className="w-full h-full flex items-center justify-center map-preview-placeholder"
          >
            <p className="contact-muted">Loading map...</p>
          </div>
        )}
      </div>
    </div>
  );
}
