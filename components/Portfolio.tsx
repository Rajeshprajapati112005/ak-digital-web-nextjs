'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    name: 'Hiveschool',
    tag: 'Web Design',
    href: '/hiveschool',
    img: 'five.jpg',
  },
  {
    name: 'Hyperleap-ai',
    tag: 'Web Design-dashboard',
    href: '/hyperleapai',
    img: '4.png',
  },
  {
    name: 'Docdune',
    tag: 'Branding',
    href: '/docdune',
    img: 'six.png',
  },
  {
    name: 'Sportaye',
    tag: 'Web Design',
    href: '/sportaye',
    img: '2.jpg',
  },
  {
    name: 'Nocage',
    tag: 'Web Design and branding',
    href: '/nocage',
    img: '3.png',
  },
  {
    name: 'Caire',
    tag: 'Web Design',
    href: '/caire',
    img: 'three.png',
  },
]

export default function Portfolio() {
  return (
    <section id="projects-1" className=" bg-[#f5f1ee]  py-16 px-6 text-center">
        <div className="container-px text-center">
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
                  className="w-full h-full object-cover object-cover object-top transition-transform duration-500 group-hover:scale-105"
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
      </div>
    </section>
  )
}
