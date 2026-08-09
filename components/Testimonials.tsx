'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Justin H.',
    role: 'Head of Product | Apex',
    quote:
      "I am beyond impressed with the results and would highly recommend Eleven Studio to anyone looking to elevate their brand and online presence.",
    img: 'https://framerusercontent.com/images/Ka93pnMawHbTEI3Xk0jbAEMGA.png?scale-down-to=512',
    rotate: 3,
  },
  {
    name: 'Harsh',
    role: 'CEO | Ahatherapy',
    quote:
      "Top notch graphic and product designs! The intent and ownership is on a different level. A personal reco to any startup which is young and need help on design, reach out to them!",
    img: 'https://framerusercontent.com/images/zBJJoMB8oYHGcpVLEq6oBco.png?width=800&height=800',
    rotate: -2,
  },
  {
    name: 'Hiveschool',
    role: "India's first sales focused B-School",
    quote:
      "One of our proudest collabs with Eleven Studio's for all of our design requirements, the most incredible team we can have.",
    img: 'https://framerusercontent.com/images/ECS2dQeIYtOojUCAJOMN05rKxsk.png?width=2264&height=2264',
    rotate: 2,
  },
  {
    name: 'Gopi Krishna Lakkepuram',
    role: 'Founder | Hyperleap',
    quote:
      "Our goal was a chatbot deployment flow that anyone could complete in under 60 seconds. Eleven Studios made it possible.",
    img: 'https://framerusercontent.com/images/r9r5FUZrqFhKoqTFemPzVaKuH8.jpeg?width=800&height=800',
    rotate: -3,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#f5f1ee] py-16 ">
      <div className="container-px max-w-5xl mx-auto text-center">
        <p className="section-label justify-center">They trust us</p>
        <h2 className="font-serif text-[44px] mt-3 tracking-tight">
          Real feedback, <span className="text-red">real results.</span>
        </h2>
        <p className="text-black/60 mt-3 max-w-md mx-auto text-[17px]">
          Hear from the brands we&apos;ve partnered with and discover the
          impact our designs have made.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 text-left">
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              initial={{ rotate: t.rotate, opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ rotate: 0, scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl p-5 shadow-[0_4px_12px_rgba(0,0,0,0.1)] border-4 border-black/[0.04]"
            >
              <div className="w-16 h-16 rounded-2xl overflow-hidden border-[3px] border-neutral-100 shadow -rotate-6 mb-4">
                <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
              </div>
              <p className="text-sm text-neutral-700 leading-relaxed">
                {t.quote}
              </p>
              <div className="mt-4 pt-3 border-t border-black/5">
                <p className="text-sm font-semibold text-black">{t.name}</p>
                <p className="text-xs text-black/50 mt-0.5">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
