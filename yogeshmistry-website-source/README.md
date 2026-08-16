# yogeshmistry.com

Portfolio-led consulting website for **Yogesh Mistry MBCS**, an AI Generalist and Automation Consultant in London.

The site keeps the portfolio as its proof layer while helping prospective clients understand:

- the business problems Yogesh can help investigate;
- three practical ways to begin an engagement;
- which systems are live, in development, or research;
- how to start a relevant conversation.

## Stack

- React 19 and TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- GitHub Pages

## Local development

Install dependencies from a clean checkout:

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run build
npm run lint
```

The source archive originally included design-exploration pages and generated UI components that are not part of the production page. The production TypeScript build is intentionally scoped to `StudioCV` and its data dependencies. Run focused linting on the production surface with:

```bash
npx eslint src/App.tsx src/main.tsx src/pages/StudioCV.tsx src/data/cv.ts
```

## Content architecture

Core profile, project, problem, offer, credential, and pipeline content lives in:

```text
src/data/cv.ts
```

The production page and its information architecture live in:

```text
src/pages/StudioCV.tsx
```

## Deployment

Build the source project:

```bash
npm run build
```

GitHub Pages serves the repository root. Copy the generated deployment files into the parent repository:

```text
dist/index.html       → ../index.html and ../404.html
dist/assets/          → ../assets/
dist/hero-abstract.png
dist/mbcs-pin.jpg
dist/CNAME
```

Review the generated page locally before committing or publishing.

## Positioning principles

- Portfolio-led, not aggressively sales-led.
- Buyer problems before tools.
- Offers expressed as clear starting points, not unsupported promises.
- Live systems, prototypes, and research labelled separately.
- No invented clients, testimonials, or outcomes.
- Essential hero content remains visible without an entrance-animation delay.
