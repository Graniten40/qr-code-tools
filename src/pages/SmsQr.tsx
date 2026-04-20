import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { QRCodeCanvas } from 'qrcode.react'

function SmsQr() {
  const [phone, setPhone] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const qrRef = useRef<HTMLDivElement | null>(null)

  const smsValue = `sms:${phone}?body=${encodeURIComponent(message)}`

  useEffect(() => {
    document.title = 'Free SMS QR Code Generator'

    const description =
      'Create a free SMS QR code for ready-made text messages. Great for bookings, support, campaigns, and quick contact actions.'

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
    downloadLink.download = 'sms-qr.png'
    downloadLink.click()
  }

  return (
    <section className="content-block">
      <header className="page-header">
        <h1>Free SMS QR Code Generator</h1>
        <p>Create a QR code for a ready-made text message.</p>
      </header>

      <div className="form-stack">
        <label htmlFor="sms-phone" className="sr-only">
          Phone number
        </label>
        <input
          id="sms-phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+46701234567"
          className="input"
        />

        <label htmlFor="sms-message" className="sr-only">
          SMS message
        </label>
        <textarea
          id="sms-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your SMS message"
          className="textarea"
        />

        <div className="button-row">
          <button className="button" onClick={downloadQr} type="button">
            Download QR
          </button>
        </div>
      </div>

      <div className="qr-box" ref={qrRef}>
        <QRCodeCanvas value={phone ? smsValue : ' '} size={220} />
      </div>

      <p className="helper-text">
        Useful for bookings, support, event replies, campaigns, and quick contact actions.
      </p>

      <section className="content-block">
        <h2>What is an SMS QR code?</h2>
        <p>
          An SMS QR code opens the messaging app on a smartphone with the phone
          number and text message already filled in. This makes it faster and
          easier for users to send a text without typing the details manually.
        </p>

        <h2>How to use this SMS QR code generator</h2>
        <p>
          Enter the phone number you want to receive messages on, write the SMS
          text you want users to send, and then download the QR code. You can
          place it on posters, signs, packaging, booking pages, printed ads, or
          event materials.
        </p>

        <h2>Best use cases</h2>
        <p>
          SMS QR codes work well for booking confirmations, customer support,
          appointment requests, campaign responses, event registrations, and
          quick mobile contact flows where text messaging is the easiest option.
        </p>

        <h2>Frequently asked questions</h2>

        <h3>What happens when someone scans an SMS QR code?</h3>
        <p>
          Their device usually opens the default messaging app with the recipient
          phone number and message body already inserted.
        </p>

        <h3>Can I pre-fill the message?</h3>
        <p>
          Yes. This generator lets you create a ready-made SMS message so users
          can send it immediately or edit it before sending.
        </p>

        <h3>Do SMS QR codes work on iPhone and Android?</h3>
        <p>
          In most cases, yes. Modern smartphones can scan QR codes directly from
          the camera app and pass the SMS action to the phone’s messaging app.
        </p>

        <h2>Try more QR tools</h2>
        <p>
          You can also create QR codes for <Link to="/url-qr">URLs</Link>,{' '}
          <Link to="/wifi-qr">WiFi</Link>, <Link to="/email-qr">email</Link>,
          and <Link to="/phone-qr">phone numbers</Link>.
        </p>
      </section>
    </section>
  )
}

export default SmsQr