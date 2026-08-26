// ─── CV data — personalised from updated CV + positioning interview ───

export const profile = {
  name: 'Yogesh Mistry',
  nameWithCredential: 'Yogesh Mistry MBCS',
  credential: 'MBCS',
  bcsLine: 'Professional Member (MBCS) of BCS, The Chartered Institute for IT',
  domain: 'www.yogeshmistry.com',
  tagline: 'Practical AI and automation for small businesses.',
  role: 'AI Generalist · AI Adoption, Automation & Implementation',
  subtitle:
    'Agentic workflows · Prompt engineering · RAG · Business automation — applied, not just discussed',
  location: 'London, UK',
  email: 'connect@yogeshmistry.com',
  bio: "I'm an AI generalist who combines technical exploration with practical delivery. I map business problems, prototype useful solutions, automate workflows, and explain the decisions in plain language. My background in customer success, training, and project management means I consider both the system and the people who will use it.",
  positioning:
    'Helping UK small businesses identify useful AI opportunities, automate high-friction workflows, and test practical AI products.',
  socials: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/yogeshmistry-mbcs' },
    { label: 'GitHub', url: 'https://github.com/neversettledwanderer' },
    { label: 'Email', url: 'mailto:connect@yogeshmistry.com' },
  ],
}

export const stats = [
  { value: 80, suffix: '%', label: 'Time reduction via LLM reporting automation' },
  { value: 5, suffix: '', label: 'Live automation scenarios across Notion and ClickUp' },
  { value: 12, suffix: '', label: 'Stages in a human-gated agentic pipeline' },
  { value: 10, suffix: '+', label: 'Years across tech, training & CX' },
]

export const clientProblems = [
  {
    number: '01',
    title: 'Repetitive work is consuming valuable time',
    text: 'A recurring reporting, administration, research, or hand-off process is slow, manual, and prone to inconsistency.',
  },
  {
    number: '02',
    title: 'Tools and information do not work together',
    text: 'Important knowledge is spread across documents, spreadsheets, task tools, inboxes, and systems that rely on manual updates.',
  },
  {
    number: '03',
    title: 'You want to use AI, but need a sensible starting point',
    text: 'The opportunity is visible, but the right use case, risk controls, cost, and first implementation step are still unclear.',
  },
]

export const offers = [
  {
    number: '01',
    name: 'AI Opportunity Review',
    forWho: 'For teams that know AI could help but do not yet know where to begin.',
    deliverables: [
      'Current-workflow and pain-point review',
      'Prioritised opportunity and risk map',
      'Practical 90-day recommendation',
    ],
    outcome: 'A clear decision on what to test, what to defer, and why.',
    cta: 'Discuss an opportunity review',
  },
  {
    number: '02',
    name: 'Workflow Automation Sprint',
    forWho: 'For a repetitive process that is costing time, creating errors, or delaying customers.',
    deliverables: [
      'Process map and success measures',
      'Working automation with human controls',
      'Testing, documentation, and handover',
    ],
    outcome: 'A working, understandable workflow—not another slide deck.',
    cta: 'Show me the workflow',
  },
  {
    number: '03',
    name: 'AI Prototype Sprint',
    forWho: 'For a defined AI product or internal-tool idea that needs evidence before larger investment.',
    deliverables: [
      'Use-case definition and prototype',
      'Evaluation criteria and test results',
      'Governance notes and next-stage plan',
    ],
    outcome: 'A testable prototype and an evidence-based build, change, or stop decision.',
    cta: 'Discuss a prototype',
  },
]

export const experience = [
  {
    year: '2024 — Now',
    title: 'AI Generalist — Self-Directed Build Journey',
    org: 'Independent',
    blurb:
      'A self-directed build journey: a Diploma in Project Management from Anglia Ruskin University, three certifications, and a portfolio of self-initiated AI systems — including a 12-stage agentic job-search pipeline I use daily and a governed AI intelligence pipeline in beta.',
    tags: ['Agentic Systems', 'LLMs', 'Automation', 'Diploma in PM'],
  },
  {
    year: '11/2025 — Now',
    title: 'AI Expert & Digital Sales Specialist',
    org: 'Currys plc',
    blurb:
      'Designated in-store AI expert: educating customers and colleagues on AI-powered products and use cases. Appointed HP Specialist and Meta Sales Expert — rapidly learning and communicating emerging technology to diverse audiences.',
    tags: ['AI Adoption', 'Customer Education', 'Emerging Tech'],
  },
  {
    year: '2020 — 2022',
    title: 'Sales Advisor',
    org: 'Sky Subscriber Services, London',
    blurb:
      'Top-ranked team performer. Improved customer satisfaction 15% through needs-based recommendations; selected to support a new product launch.',
    tags: ['CX', 'CRM', 'Needs Analysis'],
  },
  {
    year: '2014 — 2018',
    title: 'Technical Support → Master Certified Facilitator',
    org: 'Convergys (Intuit account), Bengaluru',
    blurb:
      'Climbed from 1st-line technical support to Program Ready Trainer, Associate Trainer, then Master Certified Facilitator — evaluating training faculty against Intuit LD&Q standards, owning LMS content, and running triage and refresher sessions for operations teams.',
    tags: ['Training & L&D', 'LMS Administration', 'Knowledge Transfer'],
  },
  {
    year: '2012 — 2020',
    title: 'Earlier: IT Support & Training',
    org: 'Fasthosts · Acer UK · NetCom Learning · Tesco · Royal Mail',
    blurb:
      'Server and desktop support at Fasthosts and Acer; freelance QuickBooks application trainer at NetCom Learning; frontline service roles at Tesco (95% satisfaction) and Royal Mail during the rebuild years — adaptability in action.',
    tags: ['Technical Support', 'Windows/Linux', 'Training'],
  },
]

export const projects = [
  {
    name: 'AI Job Search & Application System',
    portfolioGroup: 'live' as const,
    portfolioOrder: 3,
    status: 'live' as const,
    stage: 'In daily use',
    description:
      'A 12-stage gated agentic pipeline I built and run daily: automated job discovery from Adzuna & Indeed, fit-scoring against a custom priority rubric, hiring-manager research, tailored outreach drafting, dynamic resume tailoring from an approved accomplishment library, cover-letter generation, adversarial pre-submission review by a skeptical-recruiter agent, and automated ATS form-filling (Workday, Greenhouse, Lever) with encrypted credential handling. No application goes out cold or unreviewed.',
    tags: ['Agentic Workflows', 'LLM Orchestration', 'Prompt Engineering', 'APIs'],
    highlight: 'Flagship — 12-stage agentic pipeline, in daily use',
  },
  {
    name: 'UK AI & Technology Intelligence System',
    portfolioGroup: 'building' as const,
    portfolioOrder: 1,
    status: 'in-progress' as const,
    stage: 'Beta — first live run complete',
    description:
      'A governed research workflow that turns verified AI and technology developments into UK-relevant briefings. Every item moves through an approved source registry, primary-source verification, deterministic deduplication, a controlled lifecycle, and a hard human approval gate. The first live research run captured six records with no duplicates and exposed a publication-date integrity issue that became a permanent verification rule.',
    tags: ['Multi-Agent Systems', 'Evidence Workflows', 'Notion API', 'Governance & QC'],
    highlight: 'Evidence-backed research · deterministic deduplication · human approval',
  },
  {
    name: 'Lustre — AI Jewellery Photo Editor',
    portfolioGroup: 'building' as const,
    portfolioOrder: 3,
    status: 'in-progress' as const,
    stage: 'PRD complete — prototyping',
    description:
      'A Google-first AI image editor for jewellery e-commerce: upload a plain product photo, then direct it with natural language ("place this gold ring on warm beige marble with soft luxury lighting"). Multi-turn Gemini editing, curated style presets (Bridal, Dark Premium, Etsy Listing…), before/after slider — and strict anti-hallucination guardrails so the product itself is never altered. Architected with a modular provider layer: AI Studio → Gemini API → Vertex AI.',
    tags: ['Gemini API', 'Multimodal AI', 'Prompt Design', 'E-commerce'],
    highlight: 'Full PRD + technical blueprint written',
  },
  {
    name: 'OmS Core — Unified Retail Operating Suite',
    portfolioGroup: 'building' as const,
    portfolioOrder: 2,
    status: 'in-progress' as const,
    stage: 'PRD v1.0 — Phase 1',
    description:
      'A unified cloud operating system for a multi-channel jewellery retailer (Shopify, Amazon, Etsy, eBay, TikTok Shops + 3PL): two-way inventory sync via Apps Script, barcode scan intake through AppSheet, an on-brand Gemini copywriter with strict brand-voice rules, automated invoice parsing, and sub-3-second Looker Studio dashboards backed by BigQuery. Built for a non-technical founder — touch-first, plain-language, zero spreadsheets.',
    tags: ['Google Apps Script', 'AppSheet', 'BigQuery', 'Gemini API'],
    highlight: '6 storefronts + warehouse, one touch-first portal',
  },
  {
    name: 'Notion × ClickUp Hybrid System',
    portfolioGroup: 'live' as const,
    portfolioOrder: 2,
    status: 'live' as const,
    stage: 'Live',
    description:
      'A three-layer productivity and project-execution framework wired together through Make.com: Notion holds strategy and documentation, ClickUp handles task execution, and five automated scenarios keep them in sync — new-project sync, task push, bidirectional status sync, completion sync, and a scheduled Monday-morning weekly review. Full runbooks, unit & integration test plans (UT-01–10, IT-01–05), and a thrice-weekly Google Drive backup strategy.',
    tags: ['Make.com', 'Notion API', 'ClickUp', 'Automation Design'],
    highlight: '5 live automation scenarios · 2 platforms, one source of truth',
  },
  {
    name: 'AI Variance Reporting Toolkit',
    portfolioGroup: 'live' as const,
    portfolioOrder: 1,
    status: 'live' as const,
    stage: 'In use',
    description:
      'A prompt-engineering system that automates weekly variance reporting end-to-end: data ingestion and preprocessing, custom prompts for pattern recognition, AI-generated insights with confidence scoring, standardised report templates, and exception highlighting for critical variations.',
    tags: ['LLMs', 'Prompt Engineering', 'Reporting', 'Automation'],
    highlight: '80% time reduction · 35% more insights captured',
  },
  {
    name: 'LLM Evaluation for Business Use',
    portfolioGroup: 'research' as const,
    portfolioOrder: 1,
    status: 'live' as const,
    stage: 'Completed research',
    description:
      'A completed comparative study of proprietary and open-source models across project-management scenarios: risk analysis, stakeholder communication, timeline optimisation, and meeting summarisation. The named models reflect the evaluation period; the reusable value is the scoring method, cost analysis, and hybrid deployment decision.',
    tags: ['Model Evaluation', 'Cost Analysis', 'Decision Framework', 'AI Strategy'],
    highlight: 'Hybrid strategy identified · 40% cost reduction potential',
  },
]

export const pipeline = [
  {
    name: 'UK AI & Technology Intelligence System',
    note: 'Beta — Source Researcher live; verification, enrichment and briefing agents next. Website briefings behind a human approval gate.',
  },
  {
    name: 'Upwork Freelance Automation Suite',
    note: 'In testing — discovery agents and proposal writer targeting gig-to-proposal in under 15 minutes.',
  },
  {
    name: 'Lustre — AI Jewellery Photo Editor',
    note: 'PRD complete, prototyping with Gemini image editing — commercial-grade product imagery for small sellers.',
  },
  {
    name: 'OmS Core — Unified Retail OS',
    note: 'PRD v1.0 approved — multi-channel inventory sync and AI copywriting for a real jewellery business.',
  },
]

export const skills = [
  { name: 'Agentic Workflows & AI Agents', level: 90 },
  { name: 'Prompt Engineering & Context Design', level: 88 },
  { name: 'RAG & Knowledge Systems', level: 78 },
  { name: 'Automation (Make.com, APIs)', level: 85 },
  { name: 'Project Management (Agile & Waterfall)', level: 82 },
  { name: 'Data Analytics & Power BI', level: 75 },
  { name: 'Stakeholder Engagement & CX', level: 92 },
  { name: 'Training & Knowledge Transfer', level: 90 },
]

export const skillGroups = [
  {
    title: '🤖 AI & Agentic Systems',
    items: ['Agentic Workflows', 'AI Agents', 'Prompt Engineering', 'Context Creation', 'LLM Management', 'RAG', 'AI Ethics & Responsible AI'],
  },
  {
    title: '⚙️ Automation & Delivery',
    items: ['Make.com', 'API Workflows', 'Task Automation', 'Process Improvement', 'Digital Transformation'],
  },
  {
    title: '📊 Project & Data',
    items: ['Agile & Waterfall', 'RAID / Risk', 'PMO', 'Data Analytics', 'Power BI', 'Data Visualisation'],
  },
  {
    title: '💻 Digital Foundations',
    items: ['Microsoft 365', 'Google Workspace', 'Cloud Computing', 'CRM & LMS Systems', 'Cyber Hygiene & GDPR'],
  },
]

export const education = [
  {
    icon: '🎓',
    title: 'Diploma in Project Management',
    institution: 'Anglia Ruskin University — London',
    credential: 'Attained',
    status: '01/2025 – 11/2025',
  },
  {
    icon: '💻',
    title: 'B.Sc. in Computer Science',
    institution: 'Troy University',
    credential: 'Undergraduate degree',
    status: '2002 – 2006',
  },
]

export const certifications = [
  'Microsoft Certified: Azure Fundamentals',
  'Professional Certificate in Strategy & Leadership — IIM',
  'Emerging Tech Bootcamp — Althaus Digital',
]

export const accomplishments = [
  'Built a 12-stage agentic job-search pipeline — in daily use',
  '80% time reduction on variance reporting via LLM automation',
  'Identified hybrid LLM strategy with 40% cost reduction potential',
  'Master Certified Facilitator — evaluated faculty to Intuit LD&Q standards',
  'Diploma in Project Management — Anglia Ruskin University, London',
  'MBCS — Professional Member of BCS, The Chartered Institute for IT',
  '3 certifications: Azure Fundamentals, IIM Strategy & Leadership, Emerging Tech',
]

export const values = [
  { icon: '🎯', title: 'Mission', text: 'Turn emerging AI tools into practical products, automations, and growth opportunities' },
  { icon: '🚀', title: 'Focus', text: 'Applied AI for small businesses — workflows, agents, and digital products' },
  { icon: '💡', title: 'Belief', text: 'Every challenge is a chance to adapt and grow — rebuild stronger, step by step' },
]
