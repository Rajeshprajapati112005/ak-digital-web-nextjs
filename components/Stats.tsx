'use client'

import { motion } from 'framer-motion'

const stats = [
  {
    value: '20',
    suffix: '+',
    label: 'Projects Delivered',
    desc: "We've successfully completed over 25 projects—and we're just getting started!",
  },
  {
    value: '70',
    suffix: '%',
    label: 'Business Growth',
    desc: 'Our strategies have helped clients achieve up to 70% revenue growth in just one year!',
  },
  {
    value: '50',
    suffix: '+',
    label: 'Happy Clients',
    desc: 'More than 50 satisfied clients trust us to bring their ideas to life.',
  },
]

export default function Stats() {
  return (
    <section id="stats" className="max-w-5xl mx-auto py-20 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-serif text-[54px] tracking-tight leading-none"
      >
        <span className="text-red">Building</span> brands,{' '}
        <span className="text-red">boosting</span> businesses, and{' '}
        <span className="text-red">redefining</span> possibilities. Let&apos;s
        grow your brand together.
      </motion.h2>

      <div className="grid sm:grid-cols-3 gap-6 mt-14">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-left border border-dashed border-black/30 rounded-[30px] p-6"
          >
            <p className="font-serif text-red text-[56px] leading-none">
              {s.value}
              <span className="align-top text-[40px]">{s.suffix}</span>
            </p>
            <p className="font-medium mt-3 text-lg">{s.label}</p>
            <p className="text-sm text-black/60 mt-2">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
