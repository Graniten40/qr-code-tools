import { useRef, useState } from 'react'
import { QRCodeCanvas } from 'qrcode.react'

function EmailQr() {
  const [email, setEmail] = useState<string>('')
  const [subject, setSubject] = useState<string>('')
  const [body, setBody] = useState<string>('')

  const qrRef = useRef<HTMLDivElement | null>(null)

  const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

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
    <section>
      <div className="page-header">
        <h1>Email QR Generator</h1>
        <p>Create a QR code that opens a pre-filled email.</p>
      </div>

      <div className="form-stack">
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="name@example.com"
          className="input"
        />

        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject"
          className="input"
        />

        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Message"
          className="textarea"
        />

        <div className="button-row">
          <button className="button" onClick={downloadQr}>
            Download QR
          </button>
        </div>
      </div>

      <div className="qr-box" ref={qrRef}>
        <QRCodeCanvas value={email ? mailto : ' '} size={220} />
      </div>

      <p className="helper-text">Useful for support, contact forms, and campaigns.</p>
    </section>
  )
}

export default EmailQr