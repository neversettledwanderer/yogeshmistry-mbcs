# Handover

Date: 20 October 2026
Task: Publish Privacy Notice and link enquiry form.

Completed: Added /privacy page, homepage footer link, direct-entry build output, and mailbox/Meta disclosures. No dependencies added or upgraded.
Modified: App.tsx selects the privacy page; PrivacyNotice.tsx owns notice content; StudioCV.tsx adds footer link; package.json and scripts/build-privacy.mjs build and lint the new page; root deployment files generated from source.
Validation: npm run build and npm run lint passed. Local direct /privacy/ preview inspected. Live privacy page returned HTTP 200 and displayed the notice. Verified homepage footer navigation to /privacy and a clickable notice link in the public Google Form introduction. Editor reports all changes saved and still shows 2 responses.
Risk: Low UI risk; privacy arrangements require continued operational review. Mailbox readiness and Meta access confirmed by owner. Provider account contracts and mailbox delivery not independently audited. Existing locked dependency audit reports vulnerabilities; no package changes attempted.
Rollback: Revert only the privacy publication commit. Previous revision 1749bbe890677b0fe7cc4e1112540af56dcb9033. Rebuild/copy deployment files if editing source. Check homepage and form privacy link after rollback.
Published website commit: 045eed7. Form description now links to https://www.yogeshmistry.com/privacy/.
Outstanding: No requested publication tasks remain. Continue reviewing operational retention and provider arrangements when services change. No test form submission planned, to preserve existing responses and avoid emails/Notion writes.

## 6 November 2026 · Services catalogue alignment

Implemented the approved design in the isolated services-catalogue working copy based on 67a1a77. The original homepage layout, hero artwork and headline, proof, capabilities, portfolio and About remain. The homepage dark panel introduces the three tiers and links to their sections on /services/. The new catalogue has seven service cards and native scope disclosures. Optimised JPEG derivatives preserve the supplied artwork. The existing public form and WhatsApp link are shared across both pages.

Source lives under yogeshmistry-website-source. Service data is in src/data/services.ts, the catalogue is in src/pages/ServicesPricing.tsx, and shared enquiry content is in src/components/ServiceEnquiry.tsx. The production build emits the static catalogue, privacy directory and sitemap. Root deployment files are prepared from that output. Existing CNAME and security policy are retained.

Validation: npm run build (including TypeScript) and npm run lint passed. Local browser verified the homepage, a direct tier link, the seven prices, keyboard expansion, six portfolio PDF links, Privacy Notice navigation and 320 px layout without horizontal overflow. Generated route and asset checks passed. Browserslist reported its existing data-age warning. No production request, form submission, WhatsApp message or CRM write was made during implementation. The WhatsApp destination and downstream attribution remain release checks.

Risk: Medium for catalogue routing, enquiry attribution and generated files. Before any release, record the deployed revision and artifact, verify the WhatsApp destination and confirm the public form source field. Service buttons reach the common enquiry panel, and the form uses manual service and source selection. The separate technical SEO patch remains separate and overlaps with sitemap and route generation. Reconcile those files if that patch is integrated later.

Recovery: If a future release regresses routing or enquiries, redeploy the recorded pre-release artifact or revert only the services release, rebuild and republish. Check the homepage, portfolio, privacy route and existing form links after rollback. Local work can be discarded by dropping the isolated copy. Publishing requires separate approval.
