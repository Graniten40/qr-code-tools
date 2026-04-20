import { useState } from 'react'
import { QRCodeCanvas } from 'qrcode.react'

function WifiQr() {
  const [ssid, setSsid] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const wifiString = `WIFI:T:WPA;S:${ssid};P:${password};;`

  const downloadQr = () => {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement | null
    if (!canvas) return

    const pngUrl = canvas.toDataURL('image/png')
    const downloadLink = document.createElement('a')
    downloadLink.href = pngUrl
    downloadLink.download = 'wifi-qr.png'
    downloadLink.click()
  }

  return (
    <section>
      <div className="page-header">
        <h1>WiFi QR Generator</h1>
        <p>Generate a QR code for quick WiFi access.</p>
      </div>

      <div className="form-stack">
        <input
          type="text"
          value={ssid}
          onChange={(e) => setSsid(e.target.value)}
          placeholder="WiFi name"
          className="input"
        />

        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="input"
        />

        <div className="button-row">
          <button className="button" onClick={downloadQr}>
            Download QR
          </button>
        </div>
      </div>

      <div className="qr-box">
        <QRCodeCanvas value={ssid ? wifiString : ' '} size={220} />
      </div>

      <p className="helper-text">Perfect for cafés, offices, events, and guests.</p>
    </section>
  )
}

export default WifiQr