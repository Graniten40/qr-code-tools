import { useState } from 'react'
import { QRCodeCanvas } from 'qrcode.react'

function UrlQr() {
  const [url, setUrl] = useState<string>('https://example.com')

  const downloadQr = () => {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement | null
    if (!canvas) return

    const pngUrl = canvas.toDataURL('image/png')
    const downloadLink = document.createElement('a')
    downloadLink.href = pngUrl
    downloadLink.download = 'url-qr.png'
    downloadLink.click()
  }

  return (
    <section>
      <div className="page-header">
        <h1>URL QR Generator</h1>
        <p>Paste a link below and generate a QR code instantly.</p>
      </div>

      <div className="form-stack">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
          className="input"
        />

        <div className="button-row">
          <button className="button" onClick={downloadQr}>
            Download QR
          </button>
        </div>
      </div>

      <div className="qr-box">
        <QRCodeCanvas value={url || ' '} size={220} />
      </div>

      <p className="helper-text">Works for websites, landing pages, and product links.</p>
    </section>
  )
}

export default UrlQr