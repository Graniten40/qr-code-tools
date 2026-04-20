import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { QRCodeCanvas } from 'qrcode.react'

function EmailQr() {
  const [email, setEmail] = useState<string>('')
  const [subject, setSubject] = useState<string>('')
  const [body, setBody] = useState<string>('')

  const qrRef = useRef<HTMLDivElement | null>(null)

  const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

  useEffect(() => {
    document.title = 'Free Email QR Code Generator'

    const description = 'Create a free email QR code that opens a pre-filled email with recipient, subject, and message. Fast, simple, and works directly in your browser.'
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
    downloadLink.download = 'email-qr.png'
    downloadLink.click()
  }

  return (
    <section className="content-block">
      <header className="page-header">
        <h1>Free Email QR Code Generator</h1>
        <p>
          Create a QR code that opens a pre-filled email with recipient, subject,
          and message.
        </p>
      </header>

      <div className="form-stack">
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="name@example.com"
          className="input"
        />

        <label htmlFor="subject" className="sr-only">
          Email subject
        </label>
        <input
          id="subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject"
          className="input"
        />

        <label htmlFor="body" className="sr-only">
          Email message
        </label>
        <textarea
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Message"
          className="textarea"
        />

        <div className="button-row">
          <button className="button" onClick={downloadQr} type="button">
            Download QR
          </button>
        </div>
      </div>

      <div className="qr-box" ref={qrRef}>
        <QRCodeCanvas value={email ? mailto : ' '} size={220} />
      </div>

      <p className="helper-text">
        Useful for support, contact pages, marketing campaigns, and business cards.
      </p>

      <section className="content-block">
        <h2>What is an email QR code?</h2>
        <p>
          An email QR code opens the user’s default email app with a ready-made
          message. It can include the recipient address, a subject line, and a
          pre-filled message body. This makes it easier for people to contact
          you without typing everything manually.
        </p>

        <h2>How to use this email QR code generator</h2>
        <p>
          Enter the email address you want messages sent to, add an optional
          subject, and write a message if needed. Then download the QR code and
          place it on printed material, business cards, posters, flyers, or
          contact pages.
        </p>

        <h2>Best use cases</h2>
        <p>
          Email QR codes work well for customer support, lead generation, event
          follow-ups, product packaging, and printed advertisements. They are
          also useful when you want to guide users directly into composing an
          email with the correct details already filled in.
        </p>

        <h2>Frequently asked questions</h2>

        <h3>What happens when someone scans an email QR code?</h3>
        <p>
          Their device usually opens the default email application with the
          recipient, subject, and message already inserted.
        </p>

        <h3>Can I include both subject and message?</h3>
        <p>
          Yes. This generator supports both a subject line and a message body,
          in addition to the recipient email address.
        </p>

        <h3>Do email QR codes work on phones?</h3>
        <p>
          In most cases, yes. Modern smartphones can scan QR codes directly from
          the camera app and then open the email app automatically.
        </p>

        <h2>Try more QR tools</h2>
        <p>
          You can also create QR codes for <Link to="/url-qr">URLs</Link>,{' '}
          <Link to="/wifi-qr">WiFi</Link>, <Link to="/phone-qr">phone numbers</Link>,
          and <Link to="/sms-qr">SMS messages</Link>.
        </p>
      </section>
    </section>
  )
}

export default EmailQr