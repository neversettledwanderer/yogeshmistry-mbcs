import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import {
  clientProblems,
  profile,
  projects,
  stats,
  skillGroups,
  experience,
  certifications,
  pipeline,
} from '../data/cv'
import { serviceTiers } from '../data/services'
import ServiceEnquiry from '../components/ServiceEnquiry'

const ease = [0.22, 1, 0.36, 1] as const

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease },
} as const

const projectSections = [
  {
    key: 'live',
    title: 'Live systems & measured work',
    description: 'Working systems with an active use case, operational workflow, or measured outcome.',
  },
  {
    key: 'building',
    title: 'Products & systems in build',
    description: 'Prototypes and specified systems, clearly labelled by their current delivery stage.',
  },
  {
    key: 'research',
    title: 'Research & evaluation',
    description: 'Structured investigations that inform tool, model, cost, and architecture decisions.',
  },
] as const

const projectDocumentHrefs: Record<string, string> = {
  'AI Job Search & Application System': '/assets/ai-job-hunt-system-portfolio.pdf',
  'UK AI & Technology Intelligence System': '/assets/ai-tech-briefing-system-portfolio.pdf',
  'AI Variance Reporting Toolkit': '/assets/ai-variance-toolkit-portfolio.pdf',
  'Lustre — AI Jewellery Photo Editor': '/assets/lustre-portfolio.pdf',
  'OmS Core — Unified Retail Operating Suite': '/assets/oms-core-portfolio.pdf',
  'Notion × ClickUp Hybrid System': '/assets/notion-clickup-integration-portfolio.pdf',
}

function getProjectLinkProps(projectName: string) {
  const documentHref = projectDocumentHrefs[projectName]

  if (documentHref) {
    return {
      href: documentHref,
      target: '_blank' as const,
      rel: 'noopener noreferrer',
      'aria-label': `Open ${projectName} portfolio PDF in a new tab`,
    }
  }

  return {
    href: `mailto:${profile.email}?subject=${encodeURIComponent(`Tell me about: ${projectName}`)}`,
  }
}

export default function StudioCV() {
  const heroRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const reveal = shouldReduceMotion ? { initial: false } : fadeUp
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])
  return (
    <div className="min-h-screen bg-[#f7f5f1] text-[#1a1a1a] antialiased" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* ── Nav ── */}
      <nav aria-label="Main navigation" className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-[#f7f5f1]/70 border-b border-black/5">
        <div className="max-w-6xl mx-auto flex flex-wrap sm:flex-nowrap justify-between items-center px-4 sm:px-6 py-2 sm:py-4">
          <span className="font-semibold tracking-tight text-lg">
            Yogesh Mistry<span className="text-[#e8763a]">.</span>
          </span>
          <div className="flex w-full flex-wrap sm:w-auto items-center gap-x-3 sm:gap-x-6 text-xs sm:text-sm">
            <a href="#problems" className="hidden md:inline text-neutral-500 hover:text-black transition-colors">Problems</a>
            <a href="/services/" className="inline-flex items-center min-h-11 text-neutral-700 hover:text-black">Services &amp; Pricing</a>
            <a href="#work" className="inline-flex items-center min-h-11 text-neutral-700 hover:text-black">Work</a>
            <a href="#about" className="inline-flex items-center min-h-11 text-neutral-700 hover:text-black">About</a>
            <a
              href="#enquire"
              className="inline-flex items-center min-h-11 px-3 rounded-full bg-[#1a1a1a] text-white"
            >
              Enquire
            </a>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section ref={heroRef} className="relative pt-28 md:pt-36 pb-10 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={false}
            className="text-sm font-medium tracking-[0.2em] uppercase text-[#e8763a] mb-6"
          >
            {profile.role} · {profile.location}
          </motion.p>
          <motion.h1
            initial={false}
            className="text-[11vw] md:text-[5.5rem] font-semibold leading-[1.02] tracking-tight max-w-5xl"
          >
            I turn repetitive business work into{' '}
            <span className="text-neutral-400">practical AI systems.</span>
          </motion.h1>
          <motion.p
            initial={false}
            className="mt-5 text-lg font-medium text-neutral-800"
          >
            {profile.name} <span className="text-[#e8763a] font-semibold">MBCS</span>
            <span className="text-neutral-500 font-normal"> — {profile.bcsLine}</span>
          </motion.p>
          <motion.p
            initial={false}
            className="mt-8 max-w-xl text-lg text-neutral-600 leading-relaxed"
          >
            I help individuals and UK small businesses get started with AI, identify useful
            opportunities, automate workflows, and test practical AI products. Focused
            sessions start at £39.
          </motion.p>
          <motion.div
            initial={false}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="/services/"
              className="px-7 py-3.5 rounded-full bg-[#1a1a1a] text-white font-medium hover:bg-[#e8763a] transition-colors"
            >
              View services &amp; pricing
            </a>
            <a
              href="#work"
              className="px-7 py-3.5 rounded-full border border-black/15 font-medium hover:border-[#e8763a] hover:text-[#e8763a] transition-colors"
            >
              Explore my work
            </a>
          </motion.div>
        </div>

        {/* hero visual with parallax */}
        <motion.div
          style={shouldReduceMotion ? undefined : { y: heroY, scale: heroScale }}
          className="max-w-6xl mx-auto mt-16 rounded-3xl overflow-hidden shadow-2xl shadow-orange-200/50"
        >
          <img
            src="/hero-abstract.png"
            alt="Abstract flowing ribbons"
            className="w-full h-[42vh] md:h-[60vh] object-cover"
          />
        </motion.div>
      </section>

      {/* ── Proof strip ── */}
      <section className="px-6 py-16 border-y border-black/5 bg-white/60">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s, i) => (
            <motion.div key={s.label} {...reveal} transition={{ ...fadeUp.transition, delay: i * 0.08 }}>
              <div className="text-5xl md:text-6xl font-semibold tracking-tight">
                {s.value}
                <span className="text-[#e8763a]">{s.suffix}</span>
              </div>
              <p className="mt-2 text-sm text-neutral-500 leading-snug">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Client problems ── */}
      <section id="problems" className="px-6 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          <motion.h2 {...reveal} className="text-4xl md:text-6xl font-semibold tracking-tight mb-4">
            Where practical AI can help<span className="text-[#e8763a]">.</span>
          </motion.h2>
          <motion.p {...reveal} className="text-neutral-500 max-w-2xl mb-14 text-lg">
            The starting point is not a model or tool. It is a business process,
            decision, or customer experience that needs to work better.
          </motion.p>
          <div className="grid md:grid-cols-3 gap-5">
            {clientProblems.map((problem, i) => (
              <motion.article
                key={problem.title}
                {...reveal}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="rounded-2xl border border-black/10 bg-white/70 p-7 md:p-8"
              >
                <span className="text-sm font-medium text-[#e8763a]">{problem.number}</span>
                <h3 className="text-2xl font-semibold tracking-tight mt-8 mb-3">{problem.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{problem.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Packaged offers ── */}
      <section id="services" className="scroll-mt-28 px-6 py-24 md:py-32 bg-[#1a1a1a] text-white rounded-[2.5rem] mx-3 md:mx-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 {...reveal} className="text-4xl md:text-6xl font-semibold tracking-tight mb-4">
            Three practical ways<br className="hidden md:block" />
            <span className="text-neutral-400">I can help.</span>
          </motion.h2>
          <motion.p {...reveal} className="text-neutral-400 max-w-2xl text-lg mb-14">
            Start with a focused session, get advice for your business, or scope a workflow or prototype.
          </motion.p>

          <div className="grid lg:grid-cols-3 gap-4">
            {serviceTiers.map((tier, index) => (
              <motion.article
                key={tier.id}
                {...reveal}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 md:p-8 flex flex-col"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img src={tier.icon} alt="" width="96" height="96" className="rounded-2xl" loading="lazy" />
                  <div>
                    <p className="text-sm text-[#e8763a]">0{index + 1}</p>
                    <p className="font-semibold">{tier.price}</p>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-3 tracking-tight">{tier.name}</h3>
                <p className="text-neutral-400 leading-relaxed mb-5">{tier.summary}</p>
                <a href={`/services/#${tier.id}`} className="mt-auto inline-flex items-center gap-2 min-h-11 font-medium hover:text-[#e8763a]">
                  View services <span className="sr-only">in {tier.name}</span><span aria-hidden="true">↗</span>
                </a>
              </motion.article>
            ))}
          </div>

          <motion.div {...reveal} className="mt-12 border-t border-white/10 pt-10">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-5">Capabilities used when the work needs them</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="font-semibold mb-3">{group.title.replace(/^[^\s]+\s/, '')}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{group.items.join(' · ')}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Selected work ── */}
      <section id="work" className="scroll-mt-28 px-6 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          <motion.h2 {...reveal} className="text-4xl md:text-6xl font-semibold tracking-tight mb-4">
            Selected builds<span className="text-[#e8763a]">.</span>
          </motion.h2>
          <motion.p {...reveal} className="text-neutral-500 max-w-2xl mb-16 text-lg">
            A portfolio of independent systems, prototypes, and research—separated by
            maturity so you can distinguish measured work from work still in development.
          </motion.p>

          <div className="space-y-20">
            {projectSections.map((section) => {
              const sectionProjects = projects
                .filter((project) => project.portfolioGroup === section.key)
                .sort((a, b) => a.portfolioOrder - b.portfolioOrder)

              return (
                <div key={section.key}>
                  <motion.div {...reveal} className="mb-5">
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight">{section.title}</h3>
                    <p className="text-sm text-neutral-500 mt-1">{section.description}</p>
                  </motion.div>
                  <div>
                    {sectionProjects.map((project, i) => (
                      <motion.a
                        key={project.name}
                        {...getProjectLinkProps(project.name)}
                        {...reveal}
                        transition={{ ...fadeUp.transition, delay: i * 0.05 }}
                        className="group grid md:grid-cols-[64px_1fr_auto] gap-4 md:gap-10 items-start py-10 border-t border-black/10 hover:bg-white rounded-2xl md:px-8 md:-mx-8 transition-colors"
                      >
                        <span className="text-sm font-medium text-neutral-400 pt-1.5">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <div>
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <h4 className="text-2xl md:text-3xl font-semibold tracking-tight group-hover:text-[#e8763a] transition-colors">
                              {project.name}
                            </h4>
                            <span
                              className={`text-[11px] font-medium uppercase tracking-widest px-2.5 py-1 rounded-full ${
                                project.status === 'live'
                                  ? 'bg-emerald-100 text-emerald-700'
                                  : 'bg-amber-100 text-amber-700'
                              }`}
                            >
                              {project.status === 'live' ? '●' : '◐'} {project.stage}
                            </span>
                          </div>
                          <p className="text-sm font-medium text-[#e8763a] mb-3">★ {project.highlight}</p>
                          <p className="text-neutral-600 leading-relaxed max-w-3xl">{project.description}</p>
                          <div className="flex flex-wrap gap-2 mt-4">
                            {project.tags.map((tag) => (
                              <span key={tag} className="text-xs px-3 py-1 rounded-full bg-black/5 text-neutral-600">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <span aria-hidden="true" className="hidden md:block text-3xl text-neutral-300 group-hover:text-[#e8763a] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                          ↗
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── About / journey ── */}
      <section id="about" className="scroll-mt-28 px-6 py-24 md:py-32">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <motion.h2 {...reveal} className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">
              Technical breadth.<br />Practical delivery<span className="text-[#e8763a]">.</span>
            </motion.h2>
            <motion.p {...reveal} className="text-neutral-600 leading-relaxed text-lg mb-6">
              {profile.bio}
            </motion.p>
            <motion.div
              {...reveal}
              className="flex items-center gap-5 rounded-2xl border border-black/10 bg-white/70 p-5 mb-8"
            >
              <img
                src="/mbcs-pin.jpg"
                alt="BCS Professional Member pin badge"
                className="w-16 h-16 rounded-xl object-cover shrink-0"
              />
              <div>
                <p className="font-semibold">{profile.name} <span className="text-[#e8763a]">MBCS</span></p>
                <p className="text-sm text-neutral-500">{profile.bcsLine}</p>
              </div>
            </motion.div>
            <motion.div {...reveal} className="space-y-3">
              {certifications.map((c) => (
                <div key={c} className="flex items-center gap-3 text-sm text-neutral-600">
                  <span className="text-[#e8763a]">▣</span> {c}
                </div>
              ))}
              <div className="flex items-center gap-3 text-sm text-neutral-600">
                <span className="text-[#e8763a]">▣</span> Diploma in Project Management — Anglia Ruskin University, London
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-600">
                <span className="text-[#e8763a]">▣</span> B.Sc. Computer Science · MBCS
              </div>
            </motion.div>
          </div>

          <div className="space-y-0">
            {experience.slice(0, 4).map((e, i) => (
              <motion.div
                key={e.title}
                {...reveal}
                transition={{ ...fadeUp.transition, delay: i * 0.06 }}
                className="py-6 border-t border-black/10"
              >
                <p className="text-xs font-medium tracking-widest uppercase text-[#e8763a]">{e.year}</p>
                <h3 className="text-xl font-semibold mt-1">{e.title}</h3>
                <p className="text-sm text-neutral-500">{e.org}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Current build pipeline ── */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto rounded-3xl border border-black/10 bg-white/70 p-10 md:p-14">
          <motion.h2 {...reveal} className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">
            Currently building<span className="text-[#e8763a]">.</span>
          </motion.h2>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
            {pipeline.map((p, i) => (
              <motion.div key={p.name} {...reveal} transition={{ ...fadeUp.transition, delay: i * 0.06 }}>
                <h3 className="font-semibold text-lg">{p.name}</h3>
                <p className="text-sm text-neutral-500 mt-1 leading-relaxed">{p.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA / footer ── */}
      <footer id="enquire" className="px-6 pb-16 scroll-mt-28">
        <div className="max-w-6xl mx-auto rounded-[2.5rem] bg-gradient-to-br from-[#ffe9d6] via-[#fdf3ea] to-[#e8f1f8] p-12 md:p-20 text-center">
          <motion.h2 {...reveal} className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
            Ready to make AI useful<span className="text-[#e8763a]">?</span>
          </motion.h2>
          <ServiceEnquiry />
          <a href={profile.socials[0].url} target="_blank" rel="noreferrer" className="inline-block mt-4 p-2 underline underline-offset-4">LinkedIn ↗</a>
          <p className="mt-14 text-xs text-neutral-500">
            © {new Date().getFullYear()} {profile.name} ({profile.credential}) — {profile.domain}
          </p>
          <a href="/privacy/" className="inline-block mt-4 p-2 text-sm text-neutral-700 underline underline-offset-4 focus-visible:outline focus-visible:outline-2">Privacy Notice</a>
        </div>
      </footer>
    </div>
  )
}
