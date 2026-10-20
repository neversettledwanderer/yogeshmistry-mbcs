import { mkdir, readFile, writeFile } from 'node:fs/promises'

// A real directory avoids GitHub Pages' 404 fallback for direct privacy links.
const html = (await readFile('dist/index.html', 'utf8'))
  .replaceAll('./assets/', '/assets/')
  .replaceAll('Yogesh Mistry MBCS — AI Generalist &amp; Automation Consultant', 'Privacy Notice — Yogesh Mistry')
  .replaceAll('Yogesh Mistry MBCS — AI Generalist & Automation Consultant', 'Privacy Notice — Yogesh Mistry')
  .replace(/(<link rel="canonical" href=")[^"]+/, '$1https://www.yogeshmistry.com/privacy')
  .replace(/(<meta property="og:url" content=")[^"]+/, '$1https://www.yogeshmistry.com/privacy')
await mkdir('dist/privacy', { recursive: true })
await writeFile('dist/privacy/index.html', html)
