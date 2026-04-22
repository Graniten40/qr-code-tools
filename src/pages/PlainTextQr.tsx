import { useEffect, useState } from 'react'
import { QRCodeCanvas } from 'qrcode.react'

function PlainTextQr() {
  useEffect(() => {
    document.title = 'Free Plain Text QR Code Generator | Create Text QR Codes Online'

    const description =
      'Create free plain text QR codes online for notes, short instructions, codes, and written content. Fast, simple, and mobile-friendly.'

    let meta = document.querySelector('meta[name="description"]')

    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }

    meta.setAttribute('content', description)
  }, [])

  const [text, setText] = useState<string>('')

  const hasText = Boolean(text.trim())

  const downloadQr = () => {
    const canvas = document.querySelector('.qr-box canvas') as HTMLCanvasElement | null
    if (!canvas) return

    const url = canvas.toDataURL('image/png')
    const link = document.createElement('a')
    link.href = url
    link.download = 'plain-text-qr.png'
    link.click()
  }

  return (
    <section className="page qr-tool-page">
      <div className="page-header">
        <h1>Free Plain Text QR Code Generator</h1>
        <p>
          Create a QR code from plain text, notes, short instructions, codes,
          and simple written content.
        </p>
      </div>

      <div className="form-stack">
        <label htmlFor="text">Plain text</label>
        <textarea
          id="text"
          className="textarea"
          placeholder="Enter your text here"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        {hasText && (
          <>
            <div className="button-row">
              <button type="button" className="button" onClick={downloadQr}>
                Download QR
              </button>
            </div>

            <div className="qr-box">
              <QRCodeCanvas value={text} size={220} />
            </div>
          </>
        )}

        <p className="helper-text">
          Works for notes, access instructions, product information, short
          messages, IDs, and internal workflows.
        </p>
      </div>

      <section className="content-block">
        <h2>What is a plain text QR code?</h2>
        <p>
          A plain text QR code stores written text directly inside the QR code.
          When someone scans it, the text appears on their phone without opening
          a website or app link. This makes it useful when you want to share
          short written information quickly.
        </p>

        <h2>How to use this plain text QR code generator</h2>
        <p>
          Enter the text you want to include, generate the QR code, and download
          it as an image. You can then place it on packaging, printed materials,
          signs, labels, handouts, or internal documentation where users need
          instant access to short information.
        </p>

        <h2>Best use cases</h2>
        <p>
          Plain text QR codes are useful for notes, short messages, instructions,
          product descriptions, internal codes, setup information, classroom
          material, visitor directions, and quick offline-to-mobile sharing.
        </p>

        <h2>Frequently asked questions</h2>

        <h3>What happens when someone scans a plain text QR code?</h3>
        <p>
          Their phone reads the text stored in the QR code and displays it
          directly, instead of opening a web page.
        </p>

        <h3>Can I use a plain text QR code for short instructions?</h3>
        <p>
          Yes. Plain text QR codes are a good fit for simple instructions,
          reference notes, and short written information.
        </p>

        <h3>Do plain text QR codes work on iPhone and Android?</h3>
        <p>
          In most cases, yes. Modern smartphones can scan QR codes directly from
          the camera app and display the stored text.
        </p>

        <h2>Try more QR tools</h2>
        <p>
          You can also create QR codes for URLs, WiFi, email, phone numbers,
          SMS, WhatsApp, vCards, Google Maps, and events.
        </p>
      </section>
    </section>
  )
}

export default PlainTextQr