import { useRef, useState } from 'react'
import { QRCodeCanvas } from 'qrcode.react'

function SmsQr() {
  const [phone, setPhone] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const qrRef = useRef<HTMLDivElement | null>(null)

  const smsValue = `sms:${phone}?body=${encodeURIComponent(message)}`

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
    <section>
      <div className="page-header">
        <h1>SMS QR Generator</h1>
        <p>Create a QR code for a ready-made text message.</p>
      </div>

      <div className="form-stack">
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+46701234567"
          className="input"
        />

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your SMS message"
          className="textarea"
        />

        <div className="button-row">
          <button className="button" onClick={downloadQr}>
            Download QR
          </button>
        </div>
      </div>

      <div className="qr-box" ref={qrRef}>
        <QRCodeCanvas value={phone ? smsValue : ' '} size={220} />
      </div>

      <p className="helper-text">Useful for bookings, support, and quick contact actions.</p>
    </section>
  )
}

export default SmsQr