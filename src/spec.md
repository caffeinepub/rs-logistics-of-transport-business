# Specification

## Summary
**Goal:** Display the founder’s name/title and the correct phone number across the Contact section and site footer, and update the contact form phone placeholder example.

**Planned changes:**
- Update `frontend/src/components/sections/ContactSection.tsx` to show founder identification (“RAJU SARKAR”, “Founder”) and replace any placeholder phone number with “+91 8135954933”, presented as a clickable `tel:+918135954933` link.
- Update `frontend/src/components/SiteFooter.tsx` to include founder identification (“RAJU SARKAR”, “Founder”) and replace any placeholder phone number with “+91 8135954933” (using `tel:+918135954933` if interactive) without breaking mobile layout.
- Update `frontend/src/components/ContactForm.tsx` phone input placeholder text to use “+91 8135954933” as the example format, keeping validation and success/error behavior unchanged.

**User-visible outcome:** Visitors see “RAJU SARKAR (Founder)” and can clearly view/click the phone number “+91 8135954933” in the Contact section and footer, and the contact form shows a realistic phone placeholder example.
