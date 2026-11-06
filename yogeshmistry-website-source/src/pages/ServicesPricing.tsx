import ServiceEnquiry from '../components/ServiceEnquiry'
import { serviceTiers } from '../data/services'

export default function ServicesPricing() {
  return (
    <div className="min-h-screen bg-[#f7f5f1] text-[#1a1a1a] antialiased">
      <a href="#main" className="sr-only focus:not-sr-only">Skip to content</a>
      <header className="border-b border-black/10 px-6">
        <nav aria-label="Main navigation" className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 py-2">
          <a href="/" className="inline-flex min-h-11 items-center text-lg font-semibold tracking-tight">Yogesh Mistry<span className="text-[#e8763a]">.</span></a>
          <div className="flex flex-wrap items-center gap-x-4 text-sm">
            <a className="inline-flex min-h-11 items-center font-semibold" aria-current="page" href="/services/">Services &amp; Pricing</a>
            <a className="inline-flex min-h-11 items-center hover:underline" href="/#work">Work</a>
            <a className="inline-flex min-h-11 items-center hover:underline" href="/#about">About</a>
            <a className="inline-flex min-h-11 items-center hover:underline" href="#enquire">Enquire</a>
          </div>
        </nav>
      </header>
      <main id="main" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h1 className="mb-4 text-4xl font-semibold tracking-tight md:text-6xl">
          Services &amp; Pricing<span className="text-[#e8763a]">.</span>
        </h1>
        <p className="max-w-2xl text-lg text-neutral-600">
          Compare seven services across three tiers. Prices marked “from” depend on the scope we agree before work starts.
        </p>
        {serviceTiers.map((tier, index) => (
          <section key={tier.id} id={tier.id} aria-labelledby={`${tier.id}-title`} className="mt-12 scroll-mt-6">
            <p className="mb-1 text-sm font-semibold uppercase tracking-widest text-[#984526]">Tier 0{index + 1}</p>
            <h2 id={`${tier.id}-title`} className="mb-4 text-2xl font-semibold tracking-tight">{tier.name}</h2>
            <div className={`grid gap-4 sm:grid-cols-2 ${tier.services.length === 3 ? 'lg:grid-cols-3' : ''}`}>
              {tier.services.map((service) => (
                <article id={service.id} key={service.id} className="flex min-w-0 flex-col gap-3 rounded-2xl border border-black/10 bg-white/70 p-5 md:p-6">
                  <div className="flex items-center gap-3">
                    <img src={service.icon} alt="" width="80" height="80" className="shrink-0 rounded-xl" loading="lazy" />
                    <h3 className="text-lg font-semibold leading-tight tracking-tight">{service.name}</h3>
                  </div>
                  <p className="text-2xl font-semibold tracking-tight">{service.price}</p>
                  {service.note && <p className="text-sm font-medium text-neutral-600">{service.note}</p>}
                  <p className="text-neutral-600">{service.summary}</p>
                  <details className="border-t border-black/10 text-sm">
                    <summary className="cursor-pointer py-3 font-semibold">Scope and exclusions</summary>
                    <p className="pb-3 text-neutral-600">{service.scope}</p>
                  </details>
                  <a href="#enquire" className="mt-auto inline-flex min-h-11 items-center font-medium underline underline-offset-4" aria-label={`Enquire about ${service.name}`}>
                    Enquire about this service ↓
                  </a>
                </article>
              ))}
            </div>
          </section>
        ))}
        <section id="enquire" className="mt-16 rounded-[2.5rem] bg-gradient-to-br from-[#ffe9d6] via-[#fdf3ea] to-[#e8f1f8] p-6 text-center md:p-12">
          <h2 className="mb-4 text-3xl font-semibold tracking-tight">Tell me what you’d like to improve.</h2>
          <ServiceEnquiry />
        </section>
      </main>
      <footer className="mx-auto max-w-6xl px-6 pb-10 text-sm text-neutral-600">
        Yogesh Mistry MBCS · London, UK
      </footer>
    </div>
  )
}
