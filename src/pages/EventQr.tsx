import { useEffect, useState } from 'react'
import { QRCodeCanvas } from 'qrcode.react'

function formatDateForICS(date: string, time: string): string {
  if (!date || !time) return ''

  const [year, month, day] = date.split('-')
  const [hours, minutes] = time.split(':')

  return `${year}${month}${day}T${hours}${minutes}00`
}

function EventQr() {
  useEffect(() => {
    document.title = 'Free Event QR Code Generator | Create Event QR Codes Online'

    const description =
      'Create free event QR codes online for event title, location, description, date, and time. Fast, simple, and mobile-friendly.'

    let meta = document.querySelector('meta[name="description"]')

    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }

    meta.setAttribute('content', description)
  }, [])

  const [title, setTitle] = useState<string>('')
  const [location, setLocation] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [startDate, setStartDate] = useState<string>('')
  const [startTime, setStartTime] = useState<string>('')
  const [endDate, setEndDate] = useState<string>('')
  const [endTime, setEndTime] = useState<string>('')

  const dtStart = formatDateForICS(startDate, startTime)
  const dtEnd = formatDateForICS(endDate, endTime)

  const eventData = `BEGIN:VEVENT
SUMMARY:${title}
LOCATION:${location}
DESCRIPTION:${description}
DTSTART:${dtStart}
DTEND:${dtEnd}
END:VEVENT`

  const hasRequiredData = Boolean(title && dtStart && dtEnd)

  const downloadQr = () => {
    const canvas = document.querySelector('.qr-box canvas') as HTMLCanvasElement | null
    if (!canvas) return

    const url = canvas.toDataURL('image/png')
    const link = document.createElement('a')
    link.href = url
    link.download = 'event-qr.png'
    link.click()
  }

  return (
    <section className="page qr-tool-page">
      <div className="page-header">
        <h1>Free Event QR Code Generator</h1>
        <p>
          Create a QR code for event details like title, location, date, time,
          and description.
        </p>
      </div>

      <div className="form-stack">
        <label htmlFor="title">Event title</label>
        <input
          id="title"
          type="text"
          className="input"
          placeholder="Summer Party 2026"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="location">Location</label>
        <input
          id="location"
          type="text"
          className="input"
          placeholder="Stockholm Waterfront"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          className="textarea"
          placeholder="Join us for an evening of music, food, and networking."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label htmlFor="startDate">Start date</label>
        <input
          id="startDate"
          type="date"
          className="input"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />

        <label htmlFor="startTime">Start time</label>
        <input
          id="startTime"
          type="time"
          className="input"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />

        <label htmlFor="endDate">End date</label>
        <input
          id="endDate"
          type="date"
          className="input"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />

        <label htmlFor="endTime">End time</label>
        <input
          id="endTime"
          type="time"
          className="input"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />

        {hasRequiredData && (
          <>
            <div className="button-row">
              <button type="button" className="button" onClick={downloadQr}>
                Download QR
              </button>
            </div>

            <div className="qr-box">
              <QRCodeCanvas value={eventData} size={220} />
            </div>
          </>
        )}

        <p className="helper-text">
          Works for conferences, weddings, parties, meetups, classes, seminars,
          and business events.
        </p>
      </div>

      <section className="content-block">
        <h2>What is an event QR code?</h2>
        <p>
          An event QR code stores event information in a scannable format. When
          someone scans it, their phone can read details such as the event name,
          location, description, start date, and end date without manual typing.
        </p>

        <h2>How to use this event QR code generator</h2>
        <p>
          Enter the event title, location, description, and start and end times.
          Generate the QR code and download it as an image. You can then use it
          on invitations, posters, flyers, tickets, email campaigns, event pages,
          or printed materials.
        </p>

        <h2>Best use cases</h2>
        <p>
          Event QR codes are ideal for business events, conferences, parties,
          concerts, weddings, school functions, workshops, classes, and
          community meetups. They make it faster for guests to access event
          details and save the information.
        </p>

        <h2>Frequently asked questions</h2>

        <h3>What information can I include in an event QR code?</h3>
        <p>
          You can include the event title, location, description, start date,
          start time, end date, and end time.
        </p>

        <h3>Do event QR codes work on iPhone and Android?</h3>
        <p>
          In many cases, yes. Modern smartphones can scan QR codes directly, but
          how the event data is handled may vary depending on the device and the
          calendar app installed.
        </p>

        <h3>Can I use an event QR code on invitations and posters?</h3>
        <p>
          Yes. Event QR codes work very well on printed invitations, flyers,
          posters, signs, and digital event materials.
        </p>

        <h2>Try more QR tools</h2>
        <p>
          You can also create QR codes for URLs, WiFi, email, phone numbers,
          SMS, WhatsApp, vCards, Google Maps, and plain text.
        </p>
      </section>
    </section>
  )
}

export default EventQr