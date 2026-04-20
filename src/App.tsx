import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import UrlQr from './pages/UrlQr'
import WifiQr from './pages/WifiQr'
import EmailQr from './pages/EmailQr'
import PhoneQr from './pages/PhoneQr'
import SmsQr from './pages/SmsQr'

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
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App