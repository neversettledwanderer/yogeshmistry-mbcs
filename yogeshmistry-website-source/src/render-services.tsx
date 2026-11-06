import { renderToStaticMarkup } from 'react-dom/server'
import ServicesPricing from './pages/ServicesPricing'

export function renderServices() {
  return renderToStaticMarkup(<ServicesPricing />)
}
