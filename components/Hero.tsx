'use client'

import { motion } from 'framer-motion'

const wordReveal = {
  hidden: { opacity: 0, filter: 'blur(10px)', y: 10 },
  show: (i: number) => ({
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: { delay: i * 0.03, duration: 0.5, ease: 'easeOut' },
  }),
}

function AnimatedWords({ text, className }: { text: string; className?: string }) {
  const words = text.split(' ')
  return (
    <span className={className}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={wordReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="inline-block"
        >
          {w}&nbsp;
        </motion.span>
      ))}
    </span>
  )
}

export default function Hero() {
  return (
   <section id='home'
  style={{
    backgroundColor: '#f5f1ee',
  }}
  className="relative mx-auto overflow-hidden pt-[138px] pb-16"
>
  <img
  src="https://framerusercontent.com/images/5yAhk6uaYEAOW91olrnDnYNwY.png?width=1716&height=998"
  alt=""
  className="w-full h-full object-cover"
  style={{ objectPosition: 'center', position:'absolute',top:'0' }}
/>
  <div className="container-px  mx-auto text-center">
  <div className="absolute inset-0 -z-10">
   
  </div>
      <div className="max-w-[770px] mx-auto text-center px-4 relative">
        <h1 className="font-serif text-[34px] md:text-[60px] leading-[1em] tracking-tight text-[#1d322d]">
          <AnimatedWords text="What Can We Build for Your Business?" />
          <em className="not-italic font-serif italic">
            <AnimatedWords text="We can build it all" />
          </em>
          <AnimatedWords text="– Guaranteed!" />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-4 text-[#101010] md:text-lg tracking-tight"
        >
          AK Digital Web designs and develops high-performing websites, eCommerce experiences and digital solutions for businesses ready to grow online.
        </motion.p>

        <motion.a
          href="https://calendly.com/satvik-saksena05/30min?month=2026-01"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.5 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block mt-7 bg-red text-white rounded-full px-6 py-3 font-medium text-[15px] shadow-lg"
        >
          Book a call
        </motion.a>
      </div>

      {/* Decorative graphics */}
      <motion.img
        src="/left.png"
        alt=""
        className="hidden md:block absolute w-[196px] -left-14 top-[146px] drop-shadow-lg pointer-events-none select-none"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.img
        src="right.png"
        alt=""
        className="hidden md:block absolute w-[204px] -right-7 top-[149px] drop-shadow-lg pointer-events-none select-none"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      </div>
    </section>
  )
}
