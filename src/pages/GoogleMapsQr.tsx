import { useEffect, useState } from 'react'
import { QRCodeCanvas } from 'qrcode.react'

function GoogleMapsQr() {
  useEffect(() => {
    document.title = 'Free Google Maps QR Code Generator | Create Map QR Codes Online'

    const description =
      'Create free Google Maps QR codes online for addresses, businesses, and locations. Fast, simple, mobile-friendly, and easy to use.'

    let meta = document.querySelector('meta[name="description"]')

    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }

    meta.setAttribute('content', description)
  }, [])

  const [location, setLocation] = useState<string>('')

  const mapsUrl = location.trim()
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`
    : ''

  const downloadQr = () => {
    const canvas = document.querySelector('.qr-box canvas') as HTMLCanvasElement | null
    if (!canvas) return

    const url = canvas.toDataURL('image/png')
    const link = document.createElement('a')
    link.href = url
    link.download = 'google-maps-qr.png'
    link.click()
  }

  return (
    <section className="page qr-tool-page">
      <div className="page-header">
        <h1>Free Google Maps QR Code Generator</h1>
        <p>
          Create a QR code that opens a location, address, or place directly in
          Google Maps.
        </p>
      </div>

      <div className="form-stack">
        <label htmlFor="location">Address or place</label>
        <input
          id="location"
          type="text"
          className="input"
          placeholder="Stockholm Central Station"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        {mapsUrl && (
          <>
            <div className="button-row">
              <button type="button" className="button" onClick={downloadQr}>
                Download QR
              </button>
            </div>

            <div className="qr-box">
              <QRCodeCanvas value={mapsUrl} size={220} />
            </div>
          </>
        )}

        <p className="helper-text">
          Works for shops, offices, restaurants, hotels, events, pickup points,
          and any place you want people to find quickly.
        </p>
      </div>

      <section className="content-block">
        <h2>What is a Google Maps QR code?</h2>
        <p>
          A Google Maps QR code opens a location directly in Google Maps when
          someone scans it. It is a simple way to help people find a business,
          office, venue, event location, or meeting point without typing the
          address manually.
        </p>

        <h2>How to use this Google Maps QR code generator</h2>
        <p>
          Enter the address, business name, or place you want to share, generate
          the QR code, and download it as an image. You can then use it on
          posters, flyers, signs, booking confirmations, brochures, invitations,
          and printed materials.
        </p>

        <h2>Best use cases</h2>
        <p>
          Google Maps QR codes are ideal for stores, restaurants, hotels,
          offices, real estate listings, weddings, conferences, events, and
          customer pickup points. They make navigation faster and reduce the
          chance of people entering the wrong address.
        </p>

        <h2>Frequently asked questions</h2>

        <h3>What happens when someone scans a Google Maps QR code?</h3>
        <p>
          Their phone opens the location in Google Maps or a maps app, depending
          on the device and setup.
        </p>

        <h3>Can I use a Google Maps QR code for my business location?</h3>
        <p>
          Yes. This is one of the most common uses. It helps customers find your
          business quickly and easily.
        </p>

        <h3>Do Google Maps QR codes work on iPhone and Android?</h3>
        <p>
          In most cases, yes. Modern smartphones can scan QR codes directly from
          the camera app and open the map link automatically.
        </p>

        <h2>Try more QR tools</h2>
        <p>
          You can also create QR codes for URLs, WiFi, email, phone numbers,
          SMS, WhatsApp, vCards, events, and plain text.
        </p>
      </section>
    </section>
  )
}

export default GoogleMapsQr