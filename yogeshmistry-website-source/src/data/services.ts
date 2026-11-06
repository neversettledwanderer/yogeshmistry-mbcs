type Service = {
  id: string
  name: string
  price: string
  icon: string
  summary: string
  scope: string
  note?: string
}

type ServiceTier = {
  id: string
  name: string
  price: string
  summary: string
  icon: string
  services: Service[]
}

export const serviceTiers: ServiceTier[] = [
  {
    id: "quick-start",
    name: "Quick Start Services",
    price: "From £39",
    summary: "Get started with an AI tool, improve one everyday task, or organise your digital setup.",
    icon: "/assets/services/tier-1-quick-start-services.jpg",
    services: [
      {
        id: "ai-quick-start",
        name: "AI Quick Start",
        price: "£39",
        icon: "/assets/services/01-ai-quick-start.jpg",
        summary: "Get started with tools such as ChatGPT, Copilot or Gemini. Includes a walkthrough and three personalised prompts.",
        scope: "The session covers basic guidance or setup. It excludes business process analysis, automation, software development, hardware repair, data recovery, cybersecurity and ongoing support.",
        note: "30 minutes · Remote"
      },
      {
        id: "ai-productivity-tune-up",
        name: "AI Productivity Tune-Up",
        price: "£59",
        icon: "/assets/services/02-ai-productivity-tune-up.jpg",
        summary: "Improve one task, such as email drafting or research, with a walkthrough and up to five tailored prompts or templates.",
        scope: "One defined task. Multi-process reviews, automation builds, bespoke integrations, development and open-ended consulting are outside scope.",
        note: "Up to 60 minutes · Remote unless agreed otherwise"
      },
      {
        id: "digital-productivity-setup",
        name: "AI & Digital Productivity Setup",
        price: "£79",
        icon: "/assets/services/03-ai-digital-productivity-setup.jpg",
        summary: "Set up or organise agreed AI tools, email, files, cloud storage or productivity apps.",
        scope: "Excludes hardware repair, component diagnosis, data recovery, network engineering, cybersecurity testing and specialist IT support outside the agreed scope.",
        note: "Up to 90 minutes · Remote or local in person by arrangement"
      }
    ]
  },
  {
    id: "professional",
    name: "Professional AI Services",
    price: "From £149",
    summary: "Bring AI into your work or assess where AI and automation could help your business.",
    icon: "/assets/services/tier-2-professional-ai-services.jpg",
    services: [
      {
        id: "ai-adoption",
        name: "AI Adoption & Enablement",
        price: "From £149",
        icon: "/assets/services/04-ai-adoption-enablement.jpg",
        summary: "Bring AI into your day-to-day work with practical use cases, tool guidance, templates and handover as agreed.",
        scope: "Automation builds, custom development, API integration, ongoing support and business-critical implementation are outside the standard scope."
      },
      {
        id: "opportunity-assessment",
        name: "AI Opportunity Assessment",
        price: "£195",
        icon: "/assets/services/05-ai-opportunity-assessment.jpg",
        summary: "Review your current processes and receive prioritised recommendations, a short written summary and suggested next steps. Implementation is quoted separately.",
        scope: "The assessment excludes implementation. It does not guarantee financial returns, savings or performance improvements.",
        note: "Diagnostic and advisory"
      }
    ]
  },
  {
    id: "implementation",
    name: "Automation & Implementation",
    price: "From £295",
    summary: "Automate one defined workflow or explore a scoped prototype.",
    icon: "/assets/services/tier-3-automation-implementation.jpg",
    services: [
      {
        id: "workflow-automation",
        name: "Workflow Automation",
        price: "From £295",
        icon: "/assets/services/06-workflow-automation.jpg",
        summary: "Automate one defined workflow. The agreed scope can cover process review, design, setup, testing and handover.",
        scope: "Written scope is agreed before work begins. Pricing depends on complexity, systems, data sensitivity, third-party services, API requirements and testing."
      },
      {
        id: "ai-prototype",
        name: "AI Prototype & Implementation Support",
        price: "From £495",
        icon: "/assets/services/07-ai-prototype-implementation-support.jpg",
        summary: "Test a defined AI idea with a proof of concept or get support with early implementation.",
        scope: "Requirements are reviewed and scoped first. Complex, regulated, high-risk or business-critical work may need specialist support or be declined."
      }
    ]
  }
]
