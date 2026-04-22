import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import UrlQr from './pages/UrlQr'
import WifiQr from './pages/WifiQr'
import EmailQr from './pages/EmailQr'
import PhoneQr from './pages/PhoneQr'
import SmsQr from './pages/SmsQr'
import Privacy from './pages/PrivacyPolicy'
import Terms from './pages/TermsOfUse'

import WhatsAppQr from './pages/WhatsAppQr'
import VcardQr from './pages/VcardQr'
import GoogleMapsQr from './pages/GoogleMapsQr'
import EventQr from './pages/EventQr'
import PlainTextQr from './pages/PlainTextQr'

function App() {
  return (
    <>
      <Navbar />

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/url-qr" element={<UrlQr />} />
          <Route path="/wifi-qr" element={<WifiQr />} />
          <Route path="/email-qr" element={<EmailQr />} />
          <Route path="/phone-qr" element={<PhoneQr />} />
          <Route path="/sms-qr" element={<SmsQr />} />
          <Route path="/whatsapp-qr" element={<WhatsAppQr />} />
          <Route path="/vcard-qr" element={<VcardQr />} />
          <Route path="/google-maps-qr" element={<GoogleMapsQr />} />
          <Route path="/event-qr" element={<EventQr />} />
          <Route path="/plain-text-qr" element={<PlainTextQr />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App