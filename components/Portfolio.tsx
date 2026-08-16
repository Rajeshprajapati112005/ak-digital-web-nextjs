'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    name: 'Star Struckbysl',
    tag: 'Beauty & Cosmetics 💄',
    href: 'https://www.starstruckbysl.com/',
    img: 'five.jpg',
  },
  {
    name: 'Bombay Shirts',
    tag: 'Clothing & Fashion 👕',
    href: 'https://www.bombayshirts.com/',
    img: '4.png',
  },
  {
    name: 'Raj Bajoria',
    tag: 'Business & Entrepreneurship 👔',
    href: 'https://rajbajoria.com/',
    img: 'six.png',
  },
  {
    name: 'Mister Photo',
    tag: 'Photography & Videography 📸',
    href: 'https://misterphoto.in/',
    img: '2.jpg',
  },
  {
    name: 'Krivansh',
    tag: 'Jewellery & Accessories 💎',
    href: 'https://www.krivansh.com/',
    img: '3.png',
  },
  {
    name: 'Get My Mettle',
    tag: 'Health & Fitness Supplements 🥤',
    href: 'https://getmymettle.com/',
    img: 'three.png',
  },
]

export default function Portfolio() {
  return (
    <section id="projects-1" className=" bg-[#f5f1ee]  md:py-16 py-3 md:px-6 text-center">
        <div className="container-px  mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-serif text-[40px] md:text-[54px] tracking-tight leading-none"
      >
        Don&apos;t trust our words, trust our <span className="text-red">work</span>!
      </motion.h2>

      <div className="grid sm:grid-cols-2 gap-6 mt-10">
        {projects.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.href}
             target="_blank"
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
              <p className="text-xs  text-neutral-500">{p.tag}</p>
              <p className="font-semibold font-serif  text-lg mt-0.5">{p.name}</p>
            </div>
            
          </motion.a>
          
        ))}
        
      </div>
       <motion.a
          href="/projects"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.5 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block mt-7 bg-red text-white rounded-full px-6 py-3 font-medium text-[15px] shadow-lg"
        >
          View All Projects
        </motion.a>
      </div>
    </section>
  )
}
