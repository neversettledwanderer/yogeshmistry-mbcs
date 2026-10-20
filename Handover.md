# Handover

Date: 20 October 2026
Task: Publish Privacy Notice and link enquiry form.

Completed: Added /privacy page, homepage footer link, direct-entry build output, and mailbox/Meta disclosures. No dependencies added or upgraded.
Modified: App.tsx selects the privacy page; PrivacyNotice.tsx owns notice content; StudioCV.tsx adds footer link; package.json and scripts/build-privacy.mjs build and lint the new page; root deployment files generated from source.
Validation: npm run build and npm run lint passed. Local direct /privacy/ preview inspected. Live deployment and form link verification pending publication.
Risk: Low UI risk; privacy arrangements require continued operational review. Mailbox readiness and Meta access confirmed by owner. Provider account contracts and mailbox delivery not independently audited. Existing locked dependency audit reports vulnerabilities; no package changes attempted.
Rollback: Revert only the privacy publication commit. Previous revision 1749bbe890677b0fe7cc4e1112540af56dcb9033. Rebuild/copy deployment files if editing source. Check homepage and form privacy link after rollback.
Outstanding: Verify live page and add form notice link. No test form submission planned, to preserve existing responses and avoid emails/Notion writes.
