import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { renderServices } from '../.cache/services-render/render-services.js'

const url = 'https://www.yogeshmistry.com/services/'
const title = 'Services &amp; Pricing | Yogesh Mistry MBCS'
const description = 'Compare seven AI and automation services, from £39 Quick Start sessions to scoped workflow automation and prototype support.'
const template = await readFile('dist/index.html', 'utf8')

// The catalogue uses native links and disclosure controls and can ship as static HTML.
const html = template
  .replaceAll('./assets/', '/assets/')
  .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
  .replace(/(<meta\s+(?:property="og:title"|name="twitter:title")\s+content=")[^"]*/g, `$1${title}`)
  .replace(/(<meta\s+(?:name="description"|property="og:description"|name="twitter:description")\s+content=")[^"]*/g, `$1${description}`)
  .replace(/(<link rel="canonical" href="|<meta property="og:url" content=")[^"]*/g, `$1${url}`)
  .replace(/<script\b[^>]*>[^]*?<\/script>/g, '')
  .replace('<div id="root"></div>', () => `<div id="root">${renderServices()}</div>`)

await mkdir('dist/services', { recursive: true })
await writeFile('dist/services/index.html', html.replace(/^[ \t]+$/gm, ''))
