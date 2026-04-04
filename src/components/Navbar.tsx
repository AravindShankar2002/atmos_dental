"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "@/context/ThemeContext";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "navbar-scrolled"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-4 group hover:scale-[1.02] transition-transform duration-200">
              <img
                src={theme === "light" ? "/images/logo_white_bg.png" : "/images/logo_black_bg.png"}
                alt="Atmos Dental Logo"
                style={{ height: "48px", width: "auto" }}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="navbar-link"
                >
                  {link.label}
                </Link>
              ))}
              <a href="tel:+919025408659" className="neon-btn neon-btn-primary gap-2">
                <Phone size={18} />
                Call Now
              </a>
              <ThemeToggle />
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center gap-3 md:hidden">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 navbar-hamburger"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mobile-nav-open">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
              <div className="flex flex-col gap-1 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="navbar-link py-3 px-2"
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="tel:+919025408659"
                  className="neon-btn neon-btn-primary gap-2 mt-4"
                >
                  <Phone size={18} />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content jump when navbar is fixed */}
      <div className="h-20" />
    </>
  );
}
