'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const services = [
  {
    id: 'service-1',
    title: 'Web Design and Development',
    desc: "Your website is like your digital handshake—it's the first thing people notice about you online. Our Web Design & Development services are all about making that handshake firm, friendly, and unforgettable.",
    items: [
      'UI UX Design',
      'Custom Website Design',
      'E-Commerce Development',
      'Content Management Systems (CMS)',
      'Website Maintenance and Support',
      'SEO Integration',
      'UX/UI Optimization',
    ],
  },

  {
    id: 'service-2',
    title: 'Digital Marketing',
    desc: "Let's face it, the internet is a noisy place. But with our Digital Marketing services, you won't just stand out—you'll shine. We'll help you show up where your customers are hanging out, whether that's Google, Instagram, or somewhere in between. Think of us as your online hype team, always finding clever ways to boost your visibility and drive those sweet, sweet clicks.",
    items: [
      'SEO (Search Engine Optimization)',
      'PPC Advertising',
      'Social Media Marketing',
      'Email Marketing',
      'Content Marketing',
    ],
  },

  {
    id: 'service-3',
    title: 'Branding & Creative Services',
    desc: "Your brand is so much more than a logo—it's your story, your personality, and your promise to customers. Our Branding & Creative Services bring your identity to life in a way that's bold, beautiful, and 100% you. We'll help you stand out, stick in people's minds, and make your competitors go, “Whoa, that's cool.”",
    items: [
      'Logo Design',
      'Brand Strategy & Positioning',
      'Visual Identity Design',
      'Brand Guidelines',
      'Social media graphics',
      'Email design',
      'Pitch decks & presentations',
      'Packaging design',
    ],
  },

  {
    id: 'service-4',
    title: 'App Design & Development',
    desc: "Got a brilliant app idea? Let's make it a reality! Whether it's a mobile game, a productivity tool, or the next big social platform, we'll build something that's smooth, sleek, and downright addictive. Our apps are made with love (and a whole lot of coding).",
    items: [
      'UI/UX for Apps',
      'Custom App Development',
      'Mobile Optimization',
      'App Store Optimization',
    ],
  },
]

export default function Services() {
  const [open, setOpen] = useState<string | null>('service-1')

  return (
    <section
      id="services"
      className="  py-16 px-6 bg-[#f5f1ee]"
    >

      {/* ================================
          HEADING
      ================================= */}
       <div className="container-px  ">
      <div className="text-center max-w-3xl mx-auto">

        <p className="section-label justify-center flex">
          <span className="bg-[#fff] rounded-full px-4 py-1.5 inline-flex items-center gap-2">

            <span className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-[10px]">
              i
            </span>

            Our services

          </span>
        </p>

        <h2 className="font-serif text-[42px] mt-4 tracking-tight">
          Services designed to help your{' '}
          <span className="text-red">
            brand shine
          </span>{' '}
          brighter.
        </h2>

      </div>


      {/* ================================
          MAIN CONTENT
      ================================= */}

      <div className="grid md:grid-cols-[1fr_2.2fr] gap-8 mt-12">


        {/* =================================
            DESKTOP SIDE NAVIGATION
        ================================= */}

        <div className="hidden md:flex flex-col gap-6 sticky top-28 self-start">

          {services.map((service) => {

            const isActive = open === service.id

            return (

              <motion.a
                key={service.id}
                href={`#${service.id}`}
                onClick={() => setOpen(service.id)}
                className={`service-nav-item ${
                  isActive
                    ? 'service-nav-active'
                    : ''
                }`}
                whileHover={{
                  x: 8,
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >

                {/* Arrow */}

                <motion.span
                 
                  animate={
                    isActive
                      ? {
                          opacity: 1,
                          x: 0,
                        }
                      : {
                          opacity: 0,
                          x: -8,
                        }
                  }
                  whileHover={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                
                </motion.span>


                {/* Service title */}

                <motion.span
                  className="service-nav-title"
                  animate={{
                    color: isActive
                      ? '#111111'
                      : '#111111',
                  }}
                  whileHover={{
                    color: '#0768e7',
                  }}
                  transition={{
                    duration: 0.25,
                    ease: 'easeOut',
                  }}
                >
                  {service.title}
                </motion.span>

              </motion.a>

            )
          })}

        </div>


        {/* =================================
            ACCORDION CONTENT
        ================================= */}

        <div className="space-y-4">

          {services.map((service) => {

            const isOpen = open === service.id

            return (

              <div
                key={service.id}
                id={service.id}
                className="bg-[#faf8f7] rounded-[34px] p-6 md:p-8 scroll-mt-28"
              >

                {/* Accordion Header */}

                <button
                  type="button"
                  onClick={() =>
                    setOpen(
                      isOpen
                        ? null
                        : service.id
                    )
                  }
                  className="w-full flex items-center justify-between text-left"
                >

                  <h3 className="font-serif text-2xl font-semibold">
                    {service.title}
                  </h3>


                  <motion.span
                    animate={{
                      rotate: isOpen
                        ? 180
                        : 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeOut',
                    }}
                    className="text-black/60 shrink-0 ml-4"
                  >
                    <ChevronDown size={20} />
                  </motion.span>

                </button>


                {/* Accordion Body */}

                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen
                      ? 'auto'
                      : 0,
                    opacity: isOpen
                      ? 1
                      : 0,
                  }}
                  transition={{
                    height: {
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    },
                    opacity: {
                      duration: 0.25,
                    },
                  }}
                  className="overflow-hidden"
                >

                  {/* Description */}

                  <p className="text-black/70 text-[15px] leading-relaxed mt-4">
                    {service.desc}
                  </p>


                  {/* Service Tags */}

                  <div className="flex flex-wrap gap-2 mt-5">

                    {service.items.map((item) => (

                      <span
                        key={item}
                        className="text-sm bg-white border border-black/10 rounded-full px-4 py-2 text-black/80 flex items-center gap-1.5"
                      >

                        <span className="w-1.5 h-1.5 rounded-full bg-black inline-block" />

                        {item}

                      </span>

                    ))}

                  </div>

                </motion.div>

              </div>

            )
          })}

        </div>

      </div>
   </div>
    </section>
  )
}