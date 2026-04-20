import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { QRCodeCanvas } from 'qrcode.react'

function UrlQr() {
  const [url, setUrl] = useState<string>('https://example.com')
  const qrRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    document.title = 'Free URL QR Code Generator'

    const description =
      'Create a free QR code for any website or link. Fast, simple, and works directly in your browser for landing pages, product links, and more.'

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
    downloadLink.download = 'url-qr.png'
    downloadLink.click()
  }

  return (
    <section className="content-block">
      <header className="page-header">
        <h1>Free URL QR Code Generator</h1>
        <p>Paste a link below and generate a QR code instantly.</p>
      </header>

      <div className="form-stack">
        <label htmlFor="url" className="sr-only">
          Website URL
        </label>
        <input
          id="url"
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
          className="input"
        />

        <div className="button-row">
          <button className="button" onClick={downloadQr} type="button">
            Download QR
          </button>
        </div>
      </div>

      <div className="qr-box" ref={qrRef}>
        <QRCodeCanvas value={url || ' '} size={220} />
      </div>

      <p className="helper-text">
        Works for websites, landing pages, product links, menus, and printed materials.
      </p>

      <section className="content-block">
        <h2>What is a URL QR code?</h2>
        <p>
          A URL QR code sends users directly to a website or web page when they
          scan it with their phone. It is one of the most common types of QR
          codes because it is fast, simple, and works well for both digital and
          printed marketing.
        </p>

        <h2>How to use this URL QR code generator</h2>
        <p>
          Paste the full website address you want to share, generate the QR code,
          and download it as an image. You can then use it on posters, product
          packaging, menus, business cards, flyers, signs, or advertisements.
        </p>

        <h2>Best use cases</h2>
        <p>
          URL QR codes are ideal for landing pages, online stores, restaurant
          menus, event pages, booking forms, app download links, and product
          promotions. They make it easier for people to open a page without
          typing a long web address manually.
        </p>

        <h2>Frequently asked questions</h2>

        <h3>What happens when someone scans a URL QR code?</h3>
        <p>
          Their phone usually recognizes the QR code and opens the linked web
          page in a browser immediately.
        </p>

        <h3>Can I use a URL QR code for product pages?</h3>
        <p>
          Yes. URL QR codes work very well for product links, campaign pages,
          contact pages, menus, and any other web-based destination.
        </p>

        <h3>Do URL QR codes work on iPhone and Android?</h3>
        <p>
          In most cases, yes. Modern smartphones can scan QR codes directly from
          the built-in camera app and open the link automatically.
        </p>

        <h2>Try more QR tools</h2>
        <p>
          You can also create QR codes for <Link to="/wifi-qr">WiFi</Link>,{' '}
          <Link to="/email-qr">email</Link>, <Link to="/phone-qr">phone numbers</Link>,
          and <Link to="/sms-qr">SMS messages</Link>.
        </p>
      </section>
    </section>
  )
}

export default UrlQr