import { useEffect, useState } from 'react'
import { QRCodeCanvas } from 'qrcode.react'

function WhatsAppQr() {
  useEffect(() => {
    document.title = 'Free WhatsApp QR Code Generator | Create WhatsApp QR Codes Online'

    const description =
      'Create free WhatsApp QR codes online. Generate a QR code that opens a WhatsApp chat with a pre-filled message. Fast, simple, and mobile-friendly.'

    let meta = document.querySelector('meta[name="description"]')

    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }

    meta.setAttribute('content', description)
  }, [])

  const [phone, setPhone] = useState<string>('')
  const [message, setMessage] = useState<string>('Hello')

  const cleanedPhone = phone.replace(/[^\d]/g, '')
  const whatsappUrl = cleanedPhone
    ? `https://wa.me/${cleanedPhone}?text=${encodeURIComponent(message)}`
    : ''

  const downloadQr = () => {
    const canvas = document.querySelector('.qr-box canvas') as HTMLCanvasElement | null
    if (!canvas) return

    const url = canvas.toDataURL('image/png')
    const link = document.createElement('a')
    link.href = url
    link.download = 'whatsapp-qr.png'
    link.click()
  }

  return (
    <section className="page qr-tool-page">
      <div className="page-header">
        <h1>Free WhatsApp QR Code Generator</h1>
        <p>
          Create a QR code that opens a WhatsApp chat with a pre-filled message.
        </p>
      </div>

      <div className="form-stack">
        <label htmlFor="phone">Phone number with country code</label>
        <input
          id="phone"
          type="text"
          className="input"
          placeholder="+46701234567"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          className="textarea"
          placeholder="Hello"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        {whatsappUrl && (
          <>
            <div className="button-row">
              <button type="button" className="button" onClick={downloadQr}>
                Download QR
              </button>
            </div>

            <div className="qr-box">
              <QRCodeCanvas value={whatsappUrl} size={220} />
            </div>
          </>
        )}

        <p className="helper-text">
          Works for customer support, direct contact, bookings, promotions, and quick chat access.
        </p>
      </div>

      <section className="content-block">
        <h2>What is a WhatsApp QR code?</h2>
        <p>
          A WhatsApp QR code opens a chat directly in WhatsApp when someone scans
          it. You can also include a pre-filled message, which makes it easier
          for users to contact you quickly without typing anything manually.
        </p>

        <h2>How to use this WhatsApp QR code generator</h2>
        <p>
          Enter the phone number with country code, add an optional message, and
          generate the QR code. After that, you can download it and place it on
          posters, packaging, business cards, shop windows, menus, or support pages.
        </p>

        <h2>Best use cases</h2>
        <p>
          WhatsApp QR codes are useful for customer service, restaurant orders,
          appointment requests, event communication, product support, and direct
          sales inquiries.
        </p>

        <h2>Frequently asked questions</h2>

        <h3>Do I need to include the country code?</h3>
        <p>
          Yes. The phone number should include the full country code so WhatsApp
          opens the correct chat.
        </p>

        <h3>Can I include a ready-made message?</h3>
        <p>
          Yes. This tool lets you generate a WhatsApp QR code with a pre-filled
          message to make contacting you faster.
        </p>

        <h3>Does it work on iPhone and Android?</h3>
        <p>
          In most cases, yes. If WhatsApp is installed, the scanned code should
          open the chat directly.
        </p>

        <h2>Try more QR tools</h2>
        <p>
          You can also create QR codes for URLs, WiFi, email, phone numbers,
          SMS, vCards, Google Maps, events, and plain text.
        </p>
      </section>
    </section>
  )
}

export default WhatsAppQr