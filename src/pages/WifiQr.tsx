import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { QRCodeCanvas } from 'qrcode.react'

function WifiQr() {
  const [ssid, setSsid] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const qrRef = useRef<HTMLDivElement | null>(null)

  const wifiString = `WIFI:T:WPA;S:${ssid};P:${password};;`

  useEffect(() => {
    document.title = 'Free WiFi QR Code Generator'

    const description =
      'Create a free WiFi QR code for guests, cafés, offices, hotels, and events. Fast, simple, and works directly in your browser.'

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
    downloadLink.download = 'wifi-qr.png'
    downloadLink.click()
  }

  return (
    <section className="content-block">
      <header className="page-header">
        <h1>Free WiFi QR Code Generator</h1>
        <p>Generate a QR code for quick WiFi access.</p>
      </header>

      <div className="form-stack">
        <label htmlFor="ssid" className="sr-only">
          WiFi name
        </label>
        <input
          id="ssid"
          type="text"
          value={ssid}
          onChange={(e) => setSsid(e.target.value)}
          placeholder="WiFi name"
          className="input"
        />

        <label htmlFor="wifi-password" className="sr-only">
          WiFi password
        </label>
        <input
          id="wifi-password"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="input"
        />

        <div className="button-row">
          <button className="button" onClick={downloadQr} type="button">
            Download QR
          </button>
        </div>
      </div>

      <div className="qr-box" ref={qrRef}>
        <QRCodeCanvas value={ssid ? wifiString : ' '} size={220} />
      </div>

      <p className="helper-text">
        Perfect for cafés, offices, hotels, events, waiting rooms, and guests.
      </p>

      <section className="content-block">
        <h2>What is a WiFi QR code?</h2>
        <p>
          A WiFi QR code lets people join a wireless network by scanning a code
          with their phone instead of typing the network name and password
          manually. It is a simple way to make guest WiFi access faster and
          easier.
        </p>

        <h2>How to use this WiFi QR code generator</h2>
        <p>
          Enter your WiFi network name and password, generate the QR code, and
          download it as an image. You can then print it or display it on a
          screen where guests, customers, or visitors can scan it to connect.
        </p>

        <h2>Best use cases</h2>
        <p>
          WiFi QR codes are useful for cafés, restaurants, hotels, offices,
          waiting rooms, events, rental properties, shops, and home guest
          access. They help reduce friction and make network sharing more
          convenient.
        </p>

        <h2>Frequently asked questions</h2>

        <h3>What happens when someone scans a WiFi QR code?</h3>
        <p>
          Their phone usually recognizes the network details and offers to join
          the WiFi automatically without typing the password manually.
        </p>

        <h3>Do WiFi QR codes work on iPhone and Android?</h3>
        <p>
          In most cases, yes. Modern smartphones can scan QR codes directly
          from the camera app and support WiFi connection prompts.
        </p>

        <h3>Is a WiFi QR code useful for guest networks?</h3>
        <p>
          Yes. It is especially useful for guest WiFi, since it makes access
          faster for visitors while reducing the need to repeat the password.
        </p>

        <h2>Try more QR tools</h2>
        <p>
          You can also create QR codes for <Link to="/url-qr">URLs</Link>,{' '}
          <Link to="/email-qr">email</Link>, <Link to="/phone-qr">phone numbers</Link>,
          and <Link to="/sms-qr">SMS messages</Link>.
        </p>
      </section>
    </section>
  )
}

export default WifiQr