import StudioCV from './pages/StudioCV'
import PrivacyNotice from './pages/PrivacyNotice'
import ServicesPricing from './pages/ServicesPricing'

export default function App() {
  if (/^\/services\/?$/.test(window.location.pathname)) return <ServicesPricing />
  return /^\/privacy\/?$/.test(window.location.pathname) ? <PrivacyNotice /> : <StudioCV />
}
