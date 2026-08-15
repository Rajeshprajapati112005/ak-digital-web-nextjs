import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;',
    }

    return entities[character]
  })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const name = String(body.name || '')
    const email = String(body.email || '')
    const phone = String(body.phone || '')
    const subject = String(body.subject || '')
    const budget = String(body.budget || '')
    const message = String(body.message || '')

    if (!name || !email || !subject || !budget || !message) {
      return Response.json(
        { error: 'Please fill all required fields.' },
        { status: 400 }
      )
    }

    const { error } = await resend.emails.send({
      from: 'AK Digital Website <info@akdigitalweb.com>',
      to: [
        'info@akdigitalweb.com',
        'rajeshprajapati112005@gmail.com',
      ],
      replyTo: email,
      subject: `New Enquiry: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || 'Not provided')}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Budget:</strong> $${escapeHtml(budget)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
      `,
    })

    if (error) {
      return Response.json({ error: error.message }, { status: 500 })
    }

    return Response.json({ success: true })
  } catch {
    return Response.json(
      { error: 'Email send nahi ho saka. Please try again.' },
      { status: 500 }
    )
  }
}