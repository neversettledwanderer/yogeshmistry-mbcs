import StudioCV from './pages/StudioCV'
import PrivacyNotice from './pages/PrivacyNotice'

export default function App() {
  return /^\/privacy\/?$/.test(window.location.pathname) ? <PrivacyNotice /> : <StudioCV />
}
