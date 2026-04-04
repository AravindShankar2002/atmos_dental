"use client";

import { useTheme } from "@/context/ThemeContext";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const { theme } = useTheme();
  return (
    <footer className="footer-dark py-16 pb-28 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Clinic Info */}
          <div>
            <div className="mb-6">
              <img
                src={theme === "light" ? "/images/logo_white_bg.png" : "/images/logo_black_bg.png"}
                alt="Atmos Dental Logo"
                style={{ height: "100px", width: "auto" }}
              />
            </div>
            <div className="footer-social-icons">
              <a
                href="https://wa.me/919025408659"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="WhatsApp"
              >
                <MessageCircle size={22} />
              </a>
              <a
                href="https://www.instagram.com/atmos_dental/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <MapPin size={20} className="footer-contact-icon mt-0.5" />
                <span className="footer-text">
                  State Highway 49, 5, 1st Floor, Rajiv Gandhi Nagar, 1st Main Road, East Coast Rd, Panaiyur, Chennai, Tamil Nadu 600119
                </span>
              </li>
              <li>
                <a href="tel:+919025408659" className="footer-link flex items-center gap-4">
                  <Phone size={20} className="footer-contact-icon" />
                  +91 90254 08659
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 text-center footer-divider">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Atmos Dental & Aesthetic Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
