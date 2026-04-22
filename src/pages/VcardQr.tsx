import { useEffect, useState } from 'react'
import { QRCodeCanvas } from 'qrcode.react'

function VcardQr() {
  useEffect(() => {
    document.title = 'Free vCard QR Code Generator | Create Contact QR Codes Online'

    const description =
      'Create free vCard QR codes online for contact details like name, phone number, email, company, and job title. Fast, simple, and mobile-friendly.'

    let meta = document.querySelector('meta[name="description"]')

    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }

    meta.setAttribute('content', description)
  }, [])

  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [company, setCompany] = useState<string>('')
  const [title, setTitle] = useState<string>('')

  const fullName = `${firstName} ${lastName}`.trim()

  const vcard = `BEGIN:VCARD
VERSION:3.0
N:${lastName};${firstName}
FN:${fullName}
ORG:${company}
TITLE:${title}
TEL:${phone}
EMAIL:${email}
END:VCARD`

  const hasRequiredData = Boolean(firstName || lastName || phone || email)

  const downloadQr = () => {
    const canvas = document.querySelector('.qr-box canvas') as HTMLCanvasElement | null
    if (!canvas) return

    const url = canvas.toDataURL('image/png')
    const link = document.createElement('a')
    link.href = url
    link.download = 'vcard-qr.png'
    link.click()
  }

  return (
    <section className="page qr-tool-page">
      <div className="page-header">
        <h1>Free vCard QR Code Generator</h1>
        <p>
          Create a QR code for contact details like name, phone number, email,
          company, and job title.
        </p>
      </div>

      <div className="form-stack">
        <label htmlFor="firstName">First name</label>
        <input
          id="firstName"
          type="text"
          className="input"
          placeholder="John"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label htmlFor="lastName">Last name</label>
        <input
          id="lastName"
          type="text"
          className="input"
          placeholder="Doe"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <label htmlFor="phone">Phone number</label>
        <input
          id="phone"
          type="text"
          className="input"
          placeholder="+46701234567"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <label htmlFor="email">Email address</label>
        <input
          id="email"
          type="email"
          className="input"
          placeholder="john@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="company">Company</label>
        <input
          id="company"
          type="text"
          className="input"
          placeholder="Example Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <label htmlFor="title">Job title</label>
        <input
          id="title"
          type="text"
          className="input"
          placeholder="Marketing Manager"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {hasRequiredData && (
          <>
            <div className="button-row">
              <button type="button" className="button" onClick={downloadQr}>
                Download QR
              </button>
            </div>

            <div className="qr-box">
              <QRCodeCanvas value={vcard} size={220} />
            </div>
          </>
        )}

        <p className="helper-text">
          Works well for business cards, email signatures, printed materials,
          events, networking, and contact sharing.
        </p>
      </div>

      <section className="content-block">
        <h2>What is a vCard QR code?</h2>
        <p>
          A vCard QR code stores contact information in a format that many
          smartphones can read automatically. When someone scans the code, they
          can save the contact details directly to their phone without typing
          the information manually.
        </p>

        <h2>How to use this vCard QR code generator</h2>
        <p>
          Enter the contact details you want to include, generate the QR code,
          and download it as an image. You can then place it on business cards,
          brochures, posters, signs, or any printed or digital material where
          you want people to save your contact information quickly.
        </p>

        <h2>Best use cases</h2>
        <p>
          vCard QR codes are ideal for business cards, conferences, networking
          events, office reception desks, sales materials, email signatures, and
          personal branding. They make it easier for customers, clients, and
          partners to save your details with a single scan.
        </p>

        <h2>Frequently asked questions</h2>

        <h3>What details can I include in a vCard QR code?</h3>
        <p>
          You can include contact information such as first name, last name,
          phone number, email address, company, and job title.
        </p>

        <h3>Do vCard QR codes work on iPhone and Android?</h3>
        <p>
          In most cases, yes. Modern smartphones can usually scan the QR code
          and recognize the contact information directly.
        </p>

        <h3>Can I use a vCard QR code on a business card?</h3>
        <p>
          Yes. This is one of the most popular uses for vCard QR codes because
          it makes contact sharing much faster and easier.
        </p>

        <h2>Try more QR tools</h2>
        <p>
          You can also create QR codes for URLs, WiFi, email, phone numbers,
          SMS, WhatsApp, Google Maps, events, and plain text.
        </p>
      </section>
    </section>
  )
}

export default VcardQr