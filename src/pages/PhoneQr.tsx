import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { QRCodeCanvas } from 'qrcode.react'

function PhoneQr() {
  const [phone, setPhone] = useState<string>('')
  const qrRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    document.title = 'Free Phone QR Code Generator'

    const description =
      'Create a free phone QR code that starts a phone call instantly. Great for business cards, posters, flyers, and printed materials.'

    let meta = document.querySelector('meta[name="description"]')

    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }

    meta.setAttribute('content', description)
  }, [])

  const downloadQr = () => {
    const canvas = qrRef.current?.querySelector('canvas')
    if (!canvas) return

    const pngUrl = canvas.toDataURL('image/png')
    const downloadLink = document.createElement('a')
    downloadLink.href = pngUrl
    downloadLink.download = 'phone-qr.png'
    downloadLink.click()
  }

  return (
    <section className="content-block">
      <header className="page-header">
        <h1>Free Phone QR Code Generator</h1>
        <p>Create a QR code that starts a phone call instantly.</p>
      </header>

      <div className="form-stack">
        <label htmlFor="phone" className="sr-only">
          Phone number
        </label>
        <input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+46701234567"
          className="input"
        />

        <div className="button-row">
          <button className="button" onClick={downloadQr} type="button">
            Download QR
          </button>
        </div>
      </div>

      <div className="qr-box" ref={qrRef}>
        <QRCodeCanvas value={phone ? `tel:${phone}` : ' '} size={220} />
      </div>

      <p className="helper-text">
        Great for business cards, posters, flyers, packaging, and printed materials.
      </p>

      <section className="content-block">
        <h2>What is a phone QR code?</h2>
        <p>
          A phone QR code opens the calling app on a smartphone and fills in the
          phone number automatically. This makes it easy for users to start a
          call without typing the number manually.
        </p>

        <h2>How to use this phone QR code generator</h2>
        <p>
          Enter the phone number you want people to call, generate the QR code,
          and download it for use on business cards, posters, product packaging,
          signs, brochures, or advertisements.
        </p>

        <h2>Best use cases</h2>
        <p>
          Phone QR codes are useful for sales teams, service businesses, local
          shops, restaurants, event materials, support contacts, and printed
          marketing where you want customers to call quickly.
        </p>

        <h2>Frequently asked questions</h2>

        <h3>What happens when someone scans a phone QR code?</h3>
        <p>
          Their device usually opens the phone dialer with the number already
          filled in, so they can start the call with one tap.
        </p>

        <h3>Do phone QR codes work on iPhone and Android?</h3>
        <p>
          In most cases, yes. Modern smartphones can scan QR codes directly
          from the camera app and recognize phone call links automatically.
        </p>

        <h3>Can I use an international phone number?</h3>
        <p>
          Yes. It is usually best to include the full international format,
          such as a plus sign followed by country code and number.
        </p>

        <h2>Try more QR tools</h2>
        <p>
          You can also create QR codes for <Link to="/url-qr">URLs</Link>,{' '}
          <Link to="/wifi-qr">WiFi</Link>, <Link to="/email-qr">email</Link>,
          and <Link to="/sms-qr">SMS messages</Link>.
        </p>
      </section>
    </section>
  )
}

export default PhoneQr