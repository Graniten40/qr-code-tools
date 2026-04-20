import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  useEffect(() => {
    document.title = 'Free QR Code Generator for URL, WiFi, Email, Phone and SMS'

    const description =
      'Create free QR codes for URLs, WiFi, email, phone numbers, and SMS. Fast, simple, mobile-friendly, and works directly in your browser.'

    let meta = document.querySelector('meta[name="description"]')

    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }

    meta.setAttribute('content', description)
  }, [])

  return (
    <section className="content-block">
      <div className="hero">
        <h1>Free QR Code Generator for URL, WiFi, Email, Phone and SMS</h1>
        <p>
          Create QR codes online for websites, wireless access, email, phone
          numbers, and text messages. Fast, simple, and easy to use directly in
          your browser.
        </p>

        <p className="helper-text">
          No signup. No installation. Works directly in your browser.
        </p>
      </div>

      <div className="card-grid">
        <Link to="/url-qr" className="card">
          <h2>URL QR</h2>
          <p>Create QR codes for websites, landing pages, product links, and menus.</p>
        </Link>

        <Link to="/wifi-qr" className="card">
          <h2>WiFi QR</h2>
          <p>Create QR codes for quick WiFi access in cafés, offices, hotels, and events.</p>
        </Link>

        <Link to="/email-qr" className="card">
          <h2>Email QR</h2>
          <p>Create QR codes that open a pre-filled email with recipient, subject, and message.</p>
        </Link>

        <Link to="/phone-qr" className="card">
          <h2>Phone QR</h2>
          <p>Create QR codes that let users start a phone call instantly.</p>
        </Link>

        <Link to="/sms-qr" className="card">
          <h2>SMS QR</h2>
          <p>Create QR codes for ready-made text messages and quick contact actions.</p>
        </Link>
      </div>

      <section className="content-block">
        <h2>What is a QR code generator?</h2>
        <p>
          A QR code generator lets you create scannable codes that open a link,
          connect to WiFi, start a phone call, open an email, or prepare an SMS
          message. QR codes are widely used on posters, product packaging,
          menus, business cards, signs, and printed marketing materials because
          they make it easy for people to access information with a smartphone.
        </p>

        <h2>What can you create on this site?</h2>
        <p>
          This QR code tool site includes multiple generators for different use
          cases. You can create a <Link to="/url-qr">URL QR code</Link> for a
          website, a <Link to="/wifi-qr">WiFi QR code</Link> for quick network
          access, an <Link to="/email-qr">Email QR code</Link> for pre-filled
          messages, a <Link to="/phone-qr">Phone QR code</Link> for direct
          calling, and an <Link to="/sms-qr">SMS QR code</Link> for ready-made
          text messages.
        </p>

        <h2>Why use QR codes?</h2>
        <p>
          QR codes reduce friction. Instead of typing a long website address,
          WiFi password, email address, or phone number manually, users can scan
          a code and get where they need to go immediately. This makes QR codes
          useful for businesses, events, customer support, printed materials,
          hospitality, restaurants, retail, and marketing campaigns.
        </p>

        <h2>Popular use cases</h2>
        <p>
          Use QR codes on restaurant menus, event posters, hotel guest
          information, office reception desks, business cards, product labels,
          flyers, brochures, and social or marketing campaigns. They work well
          anywhere you want to connect offline materials with quick mobile
          actions.
        </p>

        <h2>Frequently asked questions</h2>

        <h3>Do these QR codes work on iPhone and Android?</h3>
        <p>
          In most cases, yes. Modern smartphones can scan QR codes directly from
          the built-in camera app and open the related action automatically.
        </p>

        <h3>Do I need to sign up to use the QR tools?</h3>
        <p>
          No. The site is designed to be simple and accessible, with no signup
          and no installation required.
        </p>

        <h3>Can I download the QR code after creating it?</h3>
        <p>
          Yes. Each tool includes a download option so you can save the QR code
          and use it on digital or printed material.
        </p>

        <h2>Start with the right QR tool</h2>
        <p>
          Choose the generator that matches your goal: use{' '}
          <Link to="/url-qr">URL QR</Link> for websites,{' '}
          <Link to="/wifi-qr">WiFi QR</Link> for network access,{' '}
          <Link to="/email-qr">Email QR</Link> for contact messages,{' '}
          <Link to="/phone-qr">Phone QR</Link> for direct calls, and{' '}
          <Link to="/sms-qr">SMS QR</Link> for text-based contact flows.
        </p>
      </section>
    </section>
  )
}

export default Home