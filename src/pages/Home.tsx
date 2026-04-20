import { Link } from 'react-router-dom'

function Home() {
  return (
    <section>
      <div className="hero">
        <h1>Free QR Code Generator for URL, WiFi, Email, Phone and SMS</h1>
        <p>
          A clean QR tool site with multiple subpages. Fast, simple, and easy to
          expand with more tools later.
        </p>

        <p className="helper-text">
          No signup. No installation. Works directly in your browser.
        </p>
      </div>

      <div className="card-grid">
        <Link to="/url-qr" className="card">
          <h2>URL QR</h2>
          <p>Create QR codes for websites and links.</p>
        </Link>

        <Link to="/wifi-qr" className="card">
          <h2>WiFi QR</h2>
          <p>Create QR codes for quick WiFi login.</p>
        </Link>

        <Link to="/email-qr" className="card">
          <h2>Email QR</h2>
          <p>Create QR codes that open a pre-filled email.</p>
        </Link>

        <Link to="/phone-qr" className="card">
          <h2>Phone QR</h2>
          <p>Create QR codes for phone numbers.</p>
        </Link>

        <Link to="/sms-qr" className="card">
          <h2>SMS QR</h2>
          <p>Create QR codes for ready-made text messages.</p>
        </Link>
      </div>
    </section>
  )
}

export default Home