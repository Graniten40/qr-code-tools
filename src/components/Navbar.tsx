import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="logo">
          QR Code Tools
        </Link>

        <div className="nav-links">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>

          <NavLink to="/url-qr" className={({ isActive }) => (isActive ? 'active' : '')}>
            URL QR
          </NavLink>

          <NavLink to="/wifi-qr" className={({ isActive }) => (isActive ? 'active' : '')}>
            WiFi QR
          </NavLink>

          <NavLink to="/email-qr" className={({ isActive }) => (isActive ? 'active' : '')}>
            Email QR
          </NavLink>

          <NavLink to="/phone-qr" className={({ isActive }) => (isActive ? 'active' : '')}>
            Phone QR
          </NavLink>

          <NavLink to="/sms-qr" className={({ isActive }) => (isActive ? 'active' : '')}>
            SMS QR
          </NavLink>

          <NavLink to="/whatsapp-qr" className={({ isActive }) => (isActive ? 'active' : '')}>
            WhatsApp QR
          </NavLink>

          <NavLink to="/vcard-qr" className={({ isActive }) => (isActive ? 'active' : '')}>
            vCard QR
          </NavLink>

          <NavLink to="/google-maps-qr" className={({ isActive }) => (isActive ? 'active' : '')}>
            Google Maps QR
          </NavLink>

          <NavLink to="/event-qr" className={({ isActive }) => (isActive ? 'active' : '')}>
            Event QR
          </NavLink>

          <NavLink to="/plain-text-qr" className={({ isActive }) => (isActive ? 'active' : '')}>
            Plain Text QR
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar