'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="max-w-5xl mx-auto py-8 px-6">
      <div className="grid md:grid-cols-2 rounded-[30px] overflow-hidden">
        <div className="bg-red text-white p-10 flex flex-col justify-center">
          <h2 className="font-serif text-[48px] tracking-tight leading-none">
            Lets get in touch?
          </h2>
          <p className="text-white/90 mt-4 text-xl font-medium">
            Don&apos;t let your ideas sit idle, slide into our inbox and
            let&apos;s make magic!
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-black text-white p-8 flex flex-col gap-4"
        >
          <input
            required
            name="Name"
            placeholder="Name"
            className="bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3 placeholder:text-white/40 focus:outline-none focus:border-orange-400 transition-colors"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              required
              type="email"
              name="Email"
              placeholder="Email"
              className="bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3 placeholder:text-white/40 focus:outline-none focus:border-orange-400 transition-colors"
            />
            <input
              type="tel"
              name="Phone"
              placeholder="Phone"
              className="bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3 placeholder:text-white/40 focus:outline-none focus:border-orange-400 transition-colors"
            />
          </div>
          <input
            required
            name="Subject"
            placeholder="Enter Subject"
            className="bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3 placeholder:text-white/40 focus:outline-none focus:border-orange-400 transition-colors"
          />
          <input
            required
            type="number"
            name="Budget"
            placeholder="Your Budget (USD)"
            className="bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3 placeholder:text-white/40 focus:outline-none focus:border-orange-400 transition-colors"
          />
          <textarea
            required
            name="Message"
            placeholder="Enter your Message"
            rows={3}
            className="bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3 placeholder:text-white/40 focus:outline-none focus:border-orange-400 resize-none transition-colors"
          />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="bg-red rounded-full py-3 font-medium mt-1"
          >
            {submitted ? 'Sent!' : 'Submit'}
          </motion.button>
        </form>
      </div>
    </section>
  )
}
