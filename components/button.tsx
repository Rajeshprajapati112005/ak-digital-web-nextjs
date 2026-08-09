'use client'

import { motion } from 'framer-motion'

export default function BookCall() {
  return (
    <motion.a
      href="https://example.com"
      target="_blank"
      rel="noopener noreferrer"
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      className="
        relative
        inline-flex
        items-center
        justify-center
        overflow-hidden
        rounded-full
        bg-red
        px-6
        py-3
        text-[15px]
        font-medium
        text-white
      "
    >
      {/* Background wipe */}
      <motion.span
        variants={{
          rest: {
            y: '100%',
          },
          hover: {
            y: '0%',
          },
        }}
        transition={{
          duration: 0.45,
          ease: [0.65, 0, 0.35, 1],
        }}
        className="
          absolute
          inset-0
          z-0
          bg-black
        "
      />

      {/* Text wrapper */}
      <span className="relative z-10 overflow-hidden">

        {/* Original text */}
        <motion.span
          variants={{
            rest: {
              y: '0%',
            },
            hover: {
              y: '-100%',
            },
          }}
          transition={{
            duration: 0.4,
            ease: [0.65, 0, 0.35, 1],
          }}
          className="block"
        >
          Book a call
        </motion.span>

        {/* New text */}
        <motion.span
          variants={{
            rest: {
              y: '100%',
            },
            hover: {
              y: '0%',
            },
          }}
          transition={{
            duration: 0.4,
            ease: [0.65, 0, 0.35, 1],
          }}
          className="absolute left-0 top-0 block"
        >
          Book a call
        </motion.span>

      </span>
    </motion.a>
  )
}