"use client";

import { Phone, MessageCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function MobileCTABar() {
  return (
    <div className="mobile-cta-bar">
      <a
        href="tel:+919025408659"
        className="neon-btn neon-btn-primary flex-1 gap-2"
        onClick={() => trackEvent({ action: "call_now_click", category: "CTA", label: "Mobile CTA Bar" })}
      >
        <Phone size={18} />
        <span>Call Now</span>
      </a>
      <a
        href="https://wa.me/919025408659?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment"
        target="_blank"
        rel="noopener noreferrer"
        className="neon-btn neon-btn-whatsapp flex-1 gap-2"
        onClick={() => trackEvent({ action: "whatsapp_click", category: "CTA", label: "Mobile CTA Bar" })}
      >
        <MessageCircle size={18} />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
