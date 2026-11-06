import { serviceEnquiryUrl, whatsAppEnquiryUrl } from '../data/enquiryForms'

export default function ServiceEnquiry() {
  return (
    <>
      <p className="mx-auto mb-6 max-w-lg text-neutral-600">
        Ask a quick question on WhatsApp or use the form to tell me what you’d like to improve.
        Appointments are Tuesday to Thursday by arrangement.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a className="rounded-full bg-[#1a1a1a] px-6 py-3 font-medium text-white hover:bg-neutral-700" href={serviceEnquiryUrl}>
          Open enquiry form ↗
        </a>
        <a className="rounded-full border border-black/20 px-6 py-3 font-medium hover:border-black" href={whatsAppEnquiryUrl}>
          Ask on WhatsApp ↗
        </a>
      </div>
      <p className="mx-auto mt-5 max-w-md text-sm text-neutral-600">
        The WhatsApp AI enquiry service uses an automated assistant. Please leave out sensitive
        details. <a className="underline underline-offset-4" href="/privacy/">Read the Privacy Notice</a>.
      </p>
    </>
  )
}
