# Decisions

Model: not available
Date: 20 October 2026
Task: Privacy Notice publication
Decision: Reuse React/Tailwind and select the privacy page by pathname; emit a physical privacy/index.html for GitHub Pages. No routing dependency.
Reason: Existing app has one page and root-deployed assets; a dedicated directory prevents direct privacy links relying on an HTTP 404 fallback.
Alternatives: A router would add unnecessary dependency; 404-only routing would return the wrong status.
Trade-off: Full navigation between homepage and notice; appropriate for two static pages.

Decision: Use owner-confirmed privacy@yogeshmistry.com and disclose iCloud-to-Gmail forwarding, Google/Notion enquiry processing and Meta AI access. Use retention criteria rather than invent a fixed period. Link provider privacy/transfer information without claiming account-specific legal verification.
Reason: Owner supplied mailbox readiness and Meta involvement; workflow records verify Google/Notion. Unverified contractual safeguards must not be asserted as audited.

## 6 November 2026 · Services catalogue alignment

Model: not available
Task: Implement the approved service-led navigation and catalogue while retaining the original site.
Decision: Build on 67a1a77 in an isolated copy. Keep the original homepage layout and use the existing dark panel for the three tiers. Publish the seven service cards as physical static HTML at /services/ using the existing React and Vite stack.
Reason: Direct GitHub Pages entry and readable scope without client scripts, while leaving the separate SEO patch available for its own review.
Alternatives and trade-off: A client-only route would depend on the Pages fallback and JavaScript. Merging the older SEO patch would couple this approval to unrelated homepage and 404 changes. Sitemap and route generation will need reconciliation if that patch is integrated later.

Decision: Use the confirmed public form link and share the WhatsApp and privacy choices on both pages.
Reason: The public form lists all seven services. Earlier prefill values were not confirmed against current options.
Trade-off: The visitor chooses the service and website source in the form. Keep legacy URL definitions available and coordinate any future attribution changes with the intake owner.
