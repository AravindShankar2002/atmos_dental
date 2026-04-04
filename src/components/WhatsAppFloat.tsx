"use client";

import { MessageCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function WhatsAppFloat() {
  return (
    <>
      <style>{`
        .floating-social-buttons {
          position: fixed;
          bottom: 1.5rem;
          right: 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          z-index: 40;
        }
        .floating-btn-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .floating-btn-wrapper:hover .floating-tooltip {
          opacity: 1;
          visibility: visible;
          transform: translateX(0);
        }
        .floating-tooltip {
          position: absolute;
          right: calc(100% + 12px);
          background: #1a1a1a;
          color: #ffffff;
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 500;
          white-space: nowrap;
          opacity: 0;
          visibility: hidden;
          transform: translateX(-8px);
          transition: all 0.25s ease;
          pointer-events: none;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }
        .floating-tooltip::after {
          content: '';
          position: absolute;
          right: -6px;
          top: 50%;
          transform: translateY(-50%);
          border: 6px solid transparent;
          border-left-color: #1a1a1a;
          border-right: none;
        }
        .instagram-float {
          background: linear-gradient(45deg, #f58529, #dd2a7b, #8134af, #515bd4) !important;
          color: white !important;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 16px rgba(221, 42, 123, 0.5);
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .instagram-float:hover {
          transform: scale(1.1);
          box-shadow: 0 0 20px rgba(0, 229, 255, 0.4);
        }
        .whatsapp-float {
          background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%) !important;
          color: white !important;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 16px rgba(34, 197, 94, 0.5);
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .whatsapp-float:hover {
          transform: scale(1.1);
          box-shadow: 0 0 30px rgba(34, 197, 94, 0.7);
        }
        @media (max-width: 768px) {
          .floating-social-buttons {
            display: none !important;
          }
        }
      `}</style>
      <div className="floating-social-buttons">
        <div className="floating-btn-wrapper">
          <a
            href="https://www.instagram.com/atmos_dental/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-float"
            aria-label="Follow us on Instagram"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                fill="white"
              />
            </svg>
          </a>
          <span className="floating-tooltip">Visit Instagram</span>
        </div>
        <div className="floating-btn-wrapper">
          <a
            href="https://wa.me/919025408659?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            aria-label="Chat on WhatsApp"
            onClick={() => trackEvent({ action: "whatsapp_click", category: "CTA", label: "Floating Button" })}
          >
            <MessageCircle size={28} strokeWidth={2.5} style={{ color: '#ffffff' }} />
          </a>
          <span className="floating-tooltip">Chat on WhatsApp</span>
        </div>
      </div>
    </>
  );
}
