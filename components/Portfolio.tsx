'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    name: 'Hiveschool',
    tag: 'Web Design',
    href: '/hiveschool',
    img: 'https://framerusercontent.com/images/ZPlCmDEX2rl9MgEvQZN2xjQoj9g.png?width=4797&height=3226',
  },
  {
    name: 'Hyperleap-ai',
    tag: 'Web Design-dashboard',
    href: '/hyperleapai',
    img: 'https://framerusercontent.com/images/d2RzC00oVUxvbpu2SJhldFTVU.png?width=2560&height=1440',
  },
  {
    name: 'Docdune',
    tag: 'Branding',
    href: '/docdune',
    img: 'https://framerusercontent.com/images/63UdCYtaP6lQSvdpc5yzOVlPMQw.png?width=4794&height=4050',
  },
  {
    name: 'Sportaye',
    tag: 'Web Design',
    href: '/sportaye',
    img: 'https://framerusercontent.com/images/52s7kuRUnpuPH0WCRDeWvubk8.png?width=7616&height=4280',
  },
  {
    name: 'Nocage',
    tag: 'Web Design and branding',
    href: '/nocage',
    img: 'https://framerusercontent.com/images/4UZfLmIVY1xmR38xXmHKmd9pPwI.png?width=16384&height=9217',
  },
  {
    name: 'Caire',
    tag: 'Web Design',
    href: '/caire',
    img: 'https://framerusercontent.com/images/XZxN9JFEaqcZPXUly7Nj4G0qXo.png?width=3488&height=1920',
  },
]

export default function Portfolio() {
  return (
    <section id="projects-1" className="max-w-5xl mx-auto py-16 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-serif text-[48px] tracking-tight"
      >
        Don&apos;t trust our words, trust our <span className="text-red">work</span>!
      </motion.h2>

      <div className="grid sm:grid-cols-2 gap-6 mt-10">
        {projects.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.href}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 2) * 0.1, duration: 0.5 }}
            className="block text-left group"
          >
            <div className="rounded-[48px] p-6 bg-[rgba(102,112,255,0.05)] backdrop-blur">
              <div className="rounded-3xl overflow-hidden aspect-[350/241]">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="px-6 mt-1">
              <p className="text-xs text-neutral-500">{p.tag}</p>
              <p className="font-semibold text-lg mt-0.5">{p.name}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
