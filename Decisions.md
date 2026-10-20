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
