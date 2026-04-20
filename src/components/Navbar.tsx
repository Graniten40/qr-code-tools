import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="logo">
          QR Code Tools
        </Link>

        <div className="nav-links">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
            Home
          </NavLink>

          <NavLink to="/url-qr" className={({ isActive }) => isActive ? 'active' : ''}>
            URL QR
          </NavLink>

          <NavLink to="/wifi-qr" className={({ isActive }) => isActive ? 'active' : ''}>
            WiFi QR
          </NavLink>

          <NavLink to="/email-qr" className={({ isActive }) => isActive ? 'active' : ''}>
            Email QR
          </NavLink>

          <NavLink to="/phone-qr" className={({ isActive }) => isActive ? 'active' : ''}>
            Phone QR
          </NavLink>

          <NavLink to="/sms-qr" className={({ isActive }) => isActive ? 'active' : ''}>
            SMS QR
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar