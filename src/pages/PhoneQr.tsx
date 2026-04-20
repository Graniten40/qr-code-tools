import { useRef, useState } from 'react'
import { QRCodeCanvas } from 'qrcode.react'

function PhoneQr() {
  const [phone, setPhone] = useState<string>('')
  const qrRef = useRef<HTMLDivElement | null>(null)

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
    <section>
      <div className="page-header">
        <h1>Phone QR Generator</h1>
        <p>Generate a QR code that starts a phone call instantly.</p>
      </div>

      <div className="form-stack">
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+46701234567"
          className="input"
        />

        <div className="button-row">
          <button className="button" onClick={downloadQr}>
            Download QR
          </button>
        </div>
      </div>

      <div className="qr-box" ref={qrRef}>
        <QRCodeCanvas value={phone ? `tel:${phone}` : ' '} size={220} />
      </div>

      <p className="helper-text">Great for business cards, posters, and printed materials.</p>
    </section>
  )
}

export default PhoneQr