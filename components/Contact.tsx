'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    // Form ko await se pehle save karna zaroori hai
    const form = e.currentTarget

    setLoading(true)
    setError('')
    setSubmitted(false)

    const formData = new FormData(form)

    const data = {
      name: formData.get('Name'),
      email: formData.get('Email'),
      phone: formData.get('Phone'),
      subject: formData.get('Subject'),
      budget: formData.get('Budget'),
      message: formData.get('Message'),
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Email send nahi hua')
      }

      form.reset()
      setSubmitted(true)
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
     <section
      id="contact"
      className="contact-section bg-[#f5f1ee]">
         <div className="container-px  ">
      <div className="contact-card">

        <div className="contact-content">
          <h2>
            Let&apos;s get in touch?
          </h2>

          <p>
            Don&apos;t let your ideas sit idle, slide into our inbox
            and let&apos;s make magic!
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="contact-form"
        >
          <input
            required
            name="Name"
            placeholder="Name"
          />

          <div className="contact-row">
            <input
              required
              type="email"
              name="Email"
              placeholder="Email"
            />

            <input
              type="tel"
              name="Phone"
              placeholder="Phone"
            />
          </div>

          <input
            required
            name="Subject"
            placeholder="Enter Subject"
          />

          <input
            required
            type="number"
            name="Budget"
            placeholder="Your Budget (USD)"
          />

          <textarea
            required
            name="Message"
            placeholder="Enter your Message"
            rows={4}
          />

          <motion.button
            whileHover={{
              scale: loading ? 1 : 1.02,
            }}
            whileTap={{
              scale: loading ? 1 : 0.98,
            }}
            type="submit"
            disabled={loading}
          >
            {loading
              ? 'Sending...'
              : submitted
                ? 'Sent!'
                : 'Submit'}
          </motion.button>

          {submitted && (
            <p className="contact-success">
              Message sent successfully!
            </p>
          )}

          {error && (
            <p className="contact-error">
              {error}
            </p>
          )}
        </form>
      </div>
      </div>
    </section>
  )
}