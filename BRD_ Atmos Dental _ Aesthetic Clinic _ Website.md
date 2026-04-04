# BRD: Atmos Dental & Aesthetic Clinic – Website

### TL;DR

Atmos Dental & Aesthetic Clinic in Panaiyur, Chennai requires a clean, mobile-first website to attract local patients and drive appointment inquiries via phone calls and WhatsApp. The website is informational only (no backend/CMS), composed of four main pages, and built with React/Next.js and Tailwind CSS. The priority is to rapidly generate trust and convert local searches into direct patient contact.

---

## Goals

### Business Goals

* Generate qualified inbound calls and WhatsApp appointment inquiries from residents within 5–10 km of the clinic.
* Establish trust and credibility among first-time website visitors.
* Achieve visibility on Google Search for queries like 'dentist in Panaiyur / Rajiv Gandhi Nagar / Chennai.'
* Minimize steps from landing on the website to appointment inquiry—goal: below 2 clicks between discovery and booking.

### User Goals

* Instantly locate essential clinic details (address, hours, contact info) upon landing.
* Easily understand available dental and aesthetic services prior to visiting or calling.
* Reach the clinic with one tap via WhatsApp or direct call, particularly on mobile devices.
* See clear evidence of clinical hygiene, doctor’s expertise, and quality of care, increasing comfort in booking.

### Non-Goals

* No online payment gateway, insurance processing, or appointment slot selection in v1.
* No patient login, registration, or records management.
* No backend content management system (CMS) in the initial version.

---

## User Stories

**Personas**

* New Patient (local resident)
* Returning Patient
* Mobile User on the Go
* Parent (decision-maker for child)
* Working Professional

**Stories**

* As a new patient, I want to see what dental services are available so I know if the clinic can address my needs before visiting.
* As a mobile user, I want a click-to-call button to be immediately visible, so I can reach the clinic without searching.
* As a local resident, I want to view the clinic’s location on a map, so I can estimate travel time easily.
* As a parent, I want to read about the doctor and hygiene protocols so I feel safe bringing my child for treatment.
* As a working professional, I want to be able to send a WhatsApp message to book an appointment quickly, without making a phone call.

---

## Functional Requirements

* **Home Page (Priority: P0)**

  * *Hero Section*: Clinic name, tagline (“Healthy Smiles, Right in Your Neighborhood”), and three CTA buttons: Call Now, Book via WhatsApp, Get Directions.
  * *Services Overview*: Grid of 6 service cards/icons.
  * *Testimonials*: Placeholder section for brief social proof.
  * *Map Preview*: Google Maps embed or image preview showing clinic location.

* **About Page (Priority: P0)**

  * *Introduction*: Brief clinic background paragraph.
  * *Doctor Profile*: Name, qualifications, experience (placeholder if not finalized).
  * *Trust Badges*: Graphics/text for years of experience, hygiene standards, and patient care.

* **Services Page (Priority: P0)**

  * *Service List*: 8–10 cards for core dental services —
    * Dental Cleaning
    * Teeth Whitening
    * Dental Braces/Aligners
    * Root Canal Treatment
    * Tooth Extraction
    * Dental Fillings
    * Crowns & Bridges
    * Pediatric Dentistry
    * Smile Makeover
    * Aesthetic Treatments
  * Each card includes icon + 2-line description.

* **Contact Page (Priority: P0)**

  * *Contact Info*: Large phone number (click-to-call), address.
  * *Google Maps*: Full embed showing clinic location.
  * *Contact Form*: Name, phone, and message; submission via Formspree.
  * *WhatsApp CTA*: Prominent button for WhatsApp inquiry.

* **Global Features (Priority: P0)**

  * Sticky top navbar (logo left, navigation right; hamburger on mobile).
  * Footer with address, phone, WhatsApp link, copyright.
  * Sticky bottom mobile CTA bar with Call/WhatsApp always accessible.
  * WhatsApp floating button on all pages.
  * Responsive mobile-first layout.
  * Fast loading, image lazy-loading, minimal asset size.
  * Basic SEO: meta titles, Open Graph tags, structured schema.org local business data.

---

## User Experience

**Entry Point & First-Time User Experience**

* Most users will discover the site through Google searches like “dental clinic near Panaiyur” or “dentist in Rajiv Gandhi Nagar.”
* On landing, hero section with clinic name, tagline, and large, instantly visible CTA buttons—especially “Call Now” on mobile.
* No login, onboarding, or registration required.

**Core Experience**

* **Step 1:** User lands on Home. Hero section loads instantly with three CTA buttons.
  * On mobile, “Call Now” is thumb-friendly and prominent at the top.
  * Minimal friction and loading time prioritized.
* **Step 2:** User scrolls to services grid for a quick overview of major service offerings.
  * Visual icons and short text clarify covered needs (e.g., braces, whitening, pediatric).
* **Step 3:** Testimonials and map preview provide social proof and show location proximity.
* **Step 4:** User clicks “Call Now” or “Book via WhatsApp.”
  * Call Now: Opens phone dialer (mobile) or prompts on desktop.
  * WhatsApp: Deep-link to WhatsApp app or web (test for iOS/Android/desktop).
* **Alternate Journey** (Contact Page): User clicks contact, fills out the short form (name, phone, message), and submits.
  * Inline confirmation on successful completion using Formspree.
  * Form error handling: clear error message with WhatsApp fallback prompt.

**Advanced Features & Edge Cases**

* WhatsApp desktop: link opens web.whatsapp.com.
* Map embed is static until scrolled into view (lazy-load iframe).
* Click-to-call and WhatsApp buttons always visible for mobile users.
* If form submission fails, prompt user to use WhatsApp link instead.

**UI/UX Highlights**

* Sticky mobile CTA bar for “Call Now” and “WhatsApp” always visible.
* Blue (#1D4ED8 primary) and white palette with soft gray accents.
* Clean sans-serif font (e.g., Inter); all text high-contrast, min 16px body size.
* Cards gently elevate on hover for desktop; tap-friendly on mobile.
* Clinic logo on left in navbar, accessible from all pages.
* Lightweight maps (iframe, not full JS API).

---

## Narrative

Priya, a working professional living in Rajiv Gandhi Nagar, wakes on a Sunday to find her child complaining of a toothache. She searches “dentist near Panaiyur” on her phone and immediately sees Atmos Dental & Aesthetic Clinic at the top of local results. The website loads instantaneously, displaying a friendly clinic name, a comforting tagline, and two oversized buttons: “Call Now” and “WhatsApp.” Wanting to avoid waking the house with a phone call, Priya taps the WhatsApp button and quickly sends a message about Sunday availability. Within minutes, she receives a reassuring reply.

Thinking ahead, Priya browses the Services page and finds “Pediatric Dentistry”—exactly what her child needs. A glance at the About page introduces her to the doctor’s credentials and the clinic’s hygiene commitments, putting her mind at ease. The Contact page shows the exact location on an embedded map, making it easy for Priya to plan her visit. She saves the number directly from the Contact page for quick future access.

By the time the clinic opens the next morning, Priya feels confident booking her child’s appointment—not due to gimmicks, but because the site delivered the right information and trust at the perfect moment. For Atmos Dental, this is the ideal journey: a local search turns into a WhatsApp inquiry, then a booked appointment, then a loyal family patient.

---

## Success Metrics

* **User-Centric Metrics**

  * Click-through rate on “Call Now” and “WhatsApp” (Target: >30% of mobile visitors).
  * Average time-to-first-CTA-click (Target: <60 seconds).
  * Services page views per session (indicates research and intent).

* **Business Metrics**

  * Number of WhatsApp/call inquiries per week (tracked via site buttons post-launch).
  * Google Search impressions for “dentist Panaiyur” and related queries (via Search Console).
  * Number of contact form submissions per month.

* **Technical Metrics**

  * Mobile site load time <2 seconds (measured with Lighthouse/Core Web Vitals).
  * Core Web Vitals: LCP <2.5s, CLS <0.1, FID <100ms.
  * Site uptime: 99.9% (according to Vercel SLA).

* **Tracking Plan**

  * GA4 Tracks:
    * CTA button clicks (Call Now, WhatsApp, Get Directions).
    * Form submission (success/failure).
    * Per-page views.
    * Home page scroll depth.
    * Bounce rate segmented by mobile/desktop.

---

## Technical Considerations

### Technical Needs

* Frontend: Next.js (App Router, static generation for SEO/local discoverability).
* Styling: Tailwind CSS for compact, mobile-first, and maintainable UI.
* No server-side backend required.
* Contact form delivered via Formspree (free plan supports 50 monthly submissions).
* Images optimized and lazy-loaded (Next.js Image component, WebP/optimized PNG).
* Icons: Lucide React or Heroicons for lightweight vector assets.
* Meta tags/Open Graph for shareability; structured data using schema.org for rich results.

### Integration Points

* Formspree for contact form submissions (email integration).
* Google Maps for embed previews on Home and Contact.
* WhatsApp API “wa.me/{phone}” links for direct chats.
* Google Analytics 4 for event and traffic tracking.
* Google Search Console XML sitemap and performance monitoring.

### Data Storage & Privacy

* All contact form data handled externally via Formspree—no local or self-hosted storage.
* GDPR-aware: no cookies beyond those for analytics (GA4); a simple, minimal cookie notice/banner.
* No user/patient PII stored on the clinic’s end.

### Scalability & Performance

* Static files and assets served via Vercel for extreme reliability and speed.
* Expected visitor volume is low to moderate; free tier sufficient.
* Images lazy-loaded and only minimum JS dependencies.
* Site degrades gracefully if maps or form integration fail (buttons/links still work).

### Potential Challenges

* Google Maps iframe can impact load—defer loading until map section is visible.
* WhatsApp deep-linking tested across iOS, Android, and desktop for consistent user experience.
* Formspree free tier has monthly submission cap—monitor usage and upgrade if needed.

---

## Milestones & Sequencing

### Project Estimate

* **Small**: 1–2 weeks from kickoff to launch.

### Team Size & Composition

* **Small Team**: 1 frontend developer (core build), optional 1 designer for fast, clean visuals.

### Suggested Phases

**Phase 1: Setup & Structure (Days 1–2)**

* Deliverables: Next.js app initialized; Tailwind CSS configured; pages/routes scaffolded (Home, About, Services, Contact); navbar/footer built; initial Vercel deployment.
* Dependencies: Clinic contact/WhatsApp number, verified address.

**Phase 2: Core Pages (Days 3–6)**

* Deliverables: Home, Services grid, Testimonials section, Map preview. About and Contact pages with all required content fields and UI elements designed and developed.
* Dependencies: Doctor’s name, qualifications; placeholder or official clinic photos (if available).

**Phase 3: Polish & SEO (Days 7–9)**

* Deliverables: Meta tags, Open Graph, and schema.org JSON-LD; image optimization; GA4 event tracking; form validation; Lighthouse score improvement; responsive/mobile testing.
* Dependencies: All site copy finalized.

**Phase 4: Launch (Days 10–14)**

* Deliverables: Final review with clinic; minor content adjustments; connect custom domain; submit sitemap to Search Console; website go-live.
* Dependencies: Domain purchase/access if required.

---

## Future Scope

The following are out of scope for v1, but recommended for v2:

* Online appointment booking system (integrate with Calendly or custom time slots).
* Live patient testimonial section, dynamically fetched from Google Reviews or via submissions.
* SEO-focused blog/education section (“How to Care for Your Braces,” etc.).
* Multi-language toggle (add Tamil for regional accessibility).
* WhatsApp Business API integration for automated replies and appointment confirmations.