import { useEffect } from 'react'

export default function PrivacyNotice() {
  useEffect(() => {
    document.title = 'Privacy Notice — Yogesh Mistry'
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', 'https://www.yogeshmistry.com/privacy')
  }, [])

  const heading = 'text-2xl font-semibold tracking-tight mt-10 mb-3 text-neutral-900'
  const link = 'underline underline-offset-4 focus-visible:outline focus-visible:outline-2'

  return (
    <main className="min-h-screen bg-[#faf9f6] px-6 py-10 text-neutral-800">
      <article className="max-w-prose mx-auto text-base md:text-lg leading-relaxed">
        <a className={link} href="/">← Yogesh Mistry</a>
        <header className="border-b border-neutral-300 pb-8 mt-12">
          <p className="text-sm tracking-widest uppercase text-neutral-600">Your information</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mt-3 mb-4">Privacy Notice</h1>
          <p>Last updated: 20 October 2026</p>
        </header>
        <p className="mt-8">This notice explains how Yogesh Mistry, an independent AI and technology consultant based in London, United Kingdom, uses personal information received through this website, the project enquiry form and related service enquiries.</p>

        <h2 className={heading}>Who is responsible for your information?</h2>
        <p>Yogesh Mistry is the controller of the personal information used to manage enquiries and client relationships. For privacy questions or to exercise your rights, email <a className={link} href="mailto:privacy@yogeshmistry.com">privacy@yogeshmistry.com</a>.</p>

        <h2 className={heading}>Information collected</h2>
        <p>This may include your name, email address, optional telephone or WhatsApp number, organisation, role and website; the type of customer and service you are enquiring about; your objectives, current processes, problems, tools, intended outcomes, budget and timing; delivery and appointment preferences; how you found the service; and correspondence about your enquiry. Submission timestamps and processing records are also recorded.</p>
        <p className="mt-4">Please do not provide passwords, access keys, health information, payment-card details or other highly sensitive personal information in the enquiry form. Provide only the information needed to explain your enquiry.</p>

        <h2 className={heading}>Why information is used</h2>
        <p>Information is used to respond to enquiries, understand requirements, arrange discussions, prepare proposals, provide requested services, maintain enquiry records, recognise repeat enquiries and resolve processing errors.</p>
        <p className="mt-4">Where you ask about a service for yourself, processing necessary to take steps at your request before entering a contract, or to perform that contract, relies on the contract lawful basis. Business contact enquiries and routine administration rely on legitimate interests in responding to requests, maintaining accurate records and operating a reliable service. Records required by law rely on legal obligation. A form acknowledgement confirms that you have seen this notice; it is not consent to marketing.</p>

        <h2 className={heading}>Services that handle enquiry information</h2>
        <p>The enquiry workflow uses Google Forms and Google Sheets to collect and store responses, Google Apps Script to process them, Notion to manage enquiry records, and Google email services for acknowledgements and notifications. These providers handle information under their applicable terms and data-protection arrangements. Information may also need to be disclosed to professional advisers or authorities where necessary to meet legal obligations or establish, exercise or defend legal claims.</p>
        <p className="mt-4">Email sent to privacy@yogeshmistry.com is received through Apple iCloud Mail and forwarded to a monitored Gmail inbox. Apple and Google therefore process the message content, attachments, sender details and technical email information needed to deliver and handle your request.</p>
        <p className="mt-4">If you choose to contact Yogesh through an external platform, that platform also handles your information under its own privacy notice. Information needed for a specific service, and any additional service providers involved, should be agreed before that work begins.</p>

        <h2 className={heading}>WhatsApp and Meta AI</h2>
        <p>If you use the WhatsApp AI enquiry service, you are interacting with an automated assistant using Meta technology. Your messages and information you choose to share with that assistant are made available to Meta to process the conversation and generate replies. WhatsApp also processes account, device and usage information under its own privacy terms. Do not send confidential or highly sensitive information to the assistant.</p>
        <p className="mt-4">You can use the website enquiry form or email instead of the WhatsApp AI service. Relevant enquiry details may be recorded in the Google and Notion workflow described above. Read the <a className={link} href="https://www.whatsapp.com/legal/privacy-policy">WhatsApp Privacy Policy</a> and the privacy information shown for the Meta AI service you use. Meta's own uses and retention of information are governed by the terms applicable to that service.</p>

        <h2 className={heading}>International processing</h2>
        <p>The providers described above may process information outside the United Kingdom, including in the United States and other countries where they operate. Their published arrangements include adequacy decisions and standard contractual clauses with UK provisions where applicable. The arrangement used depends on the provider, service and transfer. See the <a className={link} href="https://policies.google.com/privacy/frameworks">Google transfer frameworks</a>, <a className={link} href="https://www.notion.com/help/privacy">Notion privacy information</a>, <a className={link} href="https://www.apple.com/uk/legal/privacy/en-ww/">Apple Privacy Policy</a> and <a className={link} href="https://www.whatsapp.com/legal/privacy-policy">WhatsApp Privacy Policy</a>. Contact privacy@yogeshmistry.com for information about the safeguards relevant to your enquiry or how to obtain a copy.</p>

        <h2 className={heading}>How long information is kept</h2>
        <p>Enquiry information is kept for as long as it is needed to answer the enquiry, complete agreed follow-up and decide whether an engagement will proceed. Retention takes account of the enquiry's status, the last meaningful contact, any agreed future follow-up, and the need to resolve complaints or legal claims. Client records may need to be kept longer for contractual, accounting or legal obligations. Information that is no longer needed should be deleted or anonymised, subject to applicable backup and legal-retention requirements.</p>

        <h2 className={heading}>Your choices and rights</h2>
        <p>You can ask for access to your personal information, correction of inaccurate information, deletion or restriction of use, and, where applicable, a portable copy. These rights depend on the circumstances and lawful basis. If any processing relies on your consent, you can withdraw that consent without affecting the lawfulness of earlier processing.</p>
        <p className="mt-4 font-semibold">You have the right to object to processing based on legitimate interests, including for reasons relating to your particular situation.</p>
        <p className="mt-4">Email the contact address above to make a request. Identity may need to be checked before information is disclosed. You can also complain to the UK's Information Commissioner's Office: <a className={link} href="https://ico.org.uk/make-a-complaint/">ico.org.uk/make-a-complaint</a>.</p>

        <h2 className={heading}>Providing information and automated processing</h2>
        <p>You are not legally obliged to submit an enquiry. The form identifies required fields; without enough contact and requirement information it may not be possible to respond or assess the request. Automated steps organise records, recognise repeat enquiries and send acknowledgements. These administrative steps do not decide whether you are entitled to a service.</p>

        <h2 className={heading}>Website and external links</h2>
        <p>This website links to Google Forms, LinkedIn and other external services. Their own notices apply when you use them. The current website code does not include advertising or analytics trackers. The hosting provider may process technical request information to deliver and secure the site.</p>

        <h2 className={heading}>Changes to this notice</h2>
        <p>This notice will be updated when the relevant services or information practices change. The date above identifies the latest version.</p>
        <a className={`${link} inline-block mt-12 mb-8`} href="/">Return to the website</a>
      </article>
    </main>
  )
}
