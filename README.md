# yogeshmistry.com — Personal Website

**Live site:** [https://www.yogeshmistry.com](https://www.yogeshmistry.com)

The personal website of **Yogesh Mistry MBCS** — AI Generalist & Automation Builder, London, UK.
Professional Member of BCS, The Chartered Institute for IT.

> *Building practical solutions with AI.*

The site positions my work as an AI generalist: connecting AI tools, agentic systems, automation,
and business strategy into working products and workflows — with a particular focus on helping
small businesses adopt AI in ways that are practical, governed, and measurable.

---

## ✨ What's on the site

- **Positioning & story** — AI generalist narrative, the post-2024 build journey, MBCS credentials
- **Selected builds** — seven projects with honest stage labels (live / beta / PRD stage):
  - **AI Job Search & Application System** *(in daily use)* — a 12-stage gated agentic pipeline:
    job discovery, fit-scoring rubric, hiring-manager research, outreach drafting, dynamic resume
    tailoring, adversarial pre-submission review, and ATS form-filling
  - **UK AI & Technology Intelligence System** *(beta)* — governed multi-agent pipeline:
    *Hermes governs · Claudify executes · Notion remembers · Yogi approves* — with an approved
    source registry, evidence verification, deduplication, and a human approval gate
  - **Lustre — AI Jewellery Photo Editor** *(PRD complete)* — Google-first Gemini image editing
    with anti-hallucination guardrails for e-commerce product photography
  - **OmS Core — Unified Retail Operating Suite** *(PRD v1.0)* — multi-channel inventory sync,
    AI copywriting, and BI dashboards for a jewellery retail business
  - **Notion × ClickUp Hybrid System** *(live)* — five Make.com scenarios linking strategy docs
    to task execution
  - **AI Variance Reporting Toolkit** *(in use)* — LLM reporting automation, 80% time reduction
  - **LLM Evaluation for Business Use** *(completed research)* — hybrid proprietary/open-source
    strategy, 40% cost-reduction potential
- **Services** — agentic workflows & AI agents, prompt engineering & context design,
  RAG & knowledge systems, automation (Make.com, APIs)
- **Career & credentials** — Convergys (tech support → Master Certified Facilitator, Intuit account),
  Sky, Currys AI Expert, Diploma in Project Management (Anglia Ruskin University), B.Sc. Computer
  Science, Azure Fundamentals, IIM Strategy & Leadership, Emerging Tech Bootcamp
- **Pipeline** — upcoming builds and the AI consulting/advisory offering

**Primary call to action:** [connect@yogeshmistry.com](mailto:connect@yogeshmistry.com)

---

## 🛠️ Tech stack

- **React 19 + TypeScript** — single-page application
- **Vite** — build tooling, code-split production bundle
- **Tailwind CSS** — styling
- **Framer Motion** — scroll reveals, parallax hero, micro-interactions
- **GitHub Pages** — hosting, with custom domain via `CNAME`

All site content lives in one file — **`src/data/cv.ts`** — so updates are a single edit,
a rebuild, and a push.

## 📁 Project structure

```
├── index.html            # Entry point (SEO + Open Graph meta tags)
├── 404.html              # SPA fallback for GitHub Pages
├── CNAME                 # Custom domain: www.yogeshmistry.com
├── assets/               # Bundled JS/CSS (build output)
├── hero-abstract.png     # Hero artwork (AI-generated)
├── mbcs-pin.jpg          # BCS Professional Member badge
├── archive-old-static-site/   # Previous static site (archived, kept for reference)
└── src/ (in source zip)  # React source — src/data/cv.ts holds all content
```

## 🚀 Updating the site

```bash
# 1. Edit content in src/data/cv.ts (or components in src/pages/)
# 2. Build
npm install
npm run build
# 3. Copy dist/ contents to the repo root and push
cp dist/index.html dist/404.html   # keep the SPA fallback in sync
git add -A && git commit -m "Update site" && git push origin main
```

GitHub Pages rebuilds automatically (~1–2 minutes).

## 🔗 Connect

- **LinkedIn:** [linkedin.com/in/yogeshmistry-mbcs](https://www.linkedin.com/in/yogeshmistry-mbcs)
- **GitHub:** [github.com/neversettledwanderer](https://github.com/neversettledwanderer)
- **Email:** [connect@yogeshmistry.com](mailto:connect@yogeshmistry.com)

## 📝 License

Open source under the MIT License. Site content (text, credentials, project descriptions)
is personal — please don't reuse it as your own.

---

*"Rebuilding stronger, step by step."* — Yogesh
