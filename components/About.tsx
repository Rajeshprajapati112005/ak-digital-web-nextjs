'use client'

import { motion } from 'framer-motion'

const team = [
  {
    name: 'Satvik Saksena',
    role: 'Co-founder',
    tag: 'Strategy Genius',
    img: 'https://framerusercontent.com/images/TucqrAHH546YbtfS2xPf3aNxIn4.png?width=16384&height=10853',
    linkedin: 'https://www.linkedin.com/in/satvik-saksena/',
  },
  {
    name: 'Manan Ahuja',
    role: 'Co-Founder',
    tag: 'Creative Wizard',
    img: 'https://framerusercontent.com/images/8PrgF8rbWEjfLAimcMBjBp5WVvk.png?width=16384&height=10852',
    linkedin: 'https://www.linkedin.com/in/mananahujaaa/',
  },
]

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto py-16 px-6">
      <p className="section-label justify-center flex">
        <span className="bg-[#eef1f4] rounded-full px-4 py-1.5">About us</span>
      </p>
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-[24px] mt-4 text-center max-w-2xl mx-auto leading-snug text-black/80 font-medium"
      >
        We began as a small group of creators with a <strong className="text-black">big</strong> belief:
        great ideas deserve <strong className="text-black">bold</strong> execution. From coffee-fueled
        brainstorms to a thriving digital Team, our mission remains simple, craft{' '}
        <strong className="text-black">impactful</strong> solutions that help brands{' '}
        <strong className="text-black">stand</strong> out. With{' '}
        <strong className="text-black">strategy, design, and a touch of magic</strong>, we bring ideas to
        life. Let&apos;s make something amazing together.
      </motion.h2>

      <div className="grid sm:grid-cols-4 gap-4 mt-10">
        {team.map((m) => (
          <div key={m.name} className="sm:col-span-1 rounded-[30px] overflow-hidden bg-[#f8faf5]">
            <div className="relative">
              <div className="absolute top-2.5 left-2.5 z-10 bg-red text-white text-xs rounded-full px-3 py-1.5 flex items-center gap-1">
                {m.tag}
              </div>
              <img src={m.img} alt={m.name} className="w-full aspect-[280/223] object-cover grayscale-0" />
            </div>
            <div className="p-4 flex items-center justify-between">
              <div>
                <p className="font-semibold">{m.name}</p>
                <p className="text-xs text-black/50">{m.role}</p>
              </div>
              <a
                href={m.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-md bg-black/5 flex items-center justify-center text-xs hover:bg-black/10 transition-colors"
                aria-label="LinkedIn"
              >
                in
              </a>
            </div>
          </div>
        ))}

        <div className="sm:col-span-2 rounded-[30px] bg-red text-white p-6 flex flex-col justify-between">
          <div>
            <p className="font-bold text-xl">You can be here</p>
            <p className="text-sm text-white/85 mt-3 leading-relaxed">
              We value curiosity, collaboration, and a can-do attitude. Oh, and coffee, lots of coffee.
              Come join a team that celebrates your unique skills and helps you unlock your full potential.
            </p>
          </div>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="mailto:elevenstudio.agency@gmail.com"
            className="bg-black text-white text-sm rounded-full px-5 py-3 mt-6 text-center hover:bg-neutral-800 transition-colors w-fit"
          >
            Join Our Team
          </motion.a>
        </div>
      </div>
    </section>
  )
}
