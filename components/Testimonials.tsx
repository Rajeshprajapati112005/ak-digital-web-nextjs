'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Mohit Sharma',
    role: 'Founder of Caresphere Media',
    quote:
      "I had a great experience working with Rajesh. He was professional, responsive, and delivered exactly what I needed. The website looks modern, loads quickly, and works perfectly across all devices. Communication throughout the project was excellent, and any changes or requests were handled promptly. His attention to detail and technical expertise made the entire process smooth and stress-free. ",
    img: 'mohit.jpeg',
    rotate: 3,
  },
  {
    name: 'Raveena Sharma, ',
    role: 'Founder of Adrachna',
    quote:
      "Working with AK Digital Web was a smooth and professional experience. Rajesh understood our requirements quickly and delivered a clean, modern website that matched our expectations perfectly. He was always available for updates and made the entire process simple and hassle-free. I’m very happy with the final result and would definitely recommend AK Digital Web for quality web development services.",
    img: 'RS.jpeg',
    rotate: -2,
  },
  {
    name: 'Rahul',
    role: "Carematics Health",
    quote:
      "AK Digital Web delivered an excellent website for our healthcare business. They understood our requirements and created a clean, professional, and user-friendly website that makes it easy for patients to find the information they need. The communication was smooth, and every update was handled promptly. We’re very happy with the final result and highly recommend AK Digital Web.",
    img: 'rahul.jpg',
    rotate: 2,
  },
  {
    name: 'Ravi Chopra',
    role: 'Founder, Clicks Bazaar',
    quote:
      "Rajesh was a valuable part of our team at Clicks Bazaar. He consistently delivered high-quality web development work, handled projects with great attention to detail, and was always willing to take on new challenges. His technical skills, problem-solving ability, and commitment to deadlines made him a reliable team member. I would gladly recommend Rajesh to any organization looking for a skilled and dedicated web developer.",
    img: 'ravi.jpg',
    rotate: -3,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#f5f1ee] py-16   mt-6">
      <div className="container-px  text-center">
        <p className="section-label justify-center">They trust us</p>
         <h2 className="font-serif text-[52px] tracking-tight leading-none">
        We don&apos;t just work together, we{' '}
        <span className="text-red">grow</span> together.
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
              className="group relative overflow-hidden bg-white rounded-2xl p-5 shadow-[0_4px_12px_rgba(0,0,0,0.1)] border-4 border-black/[0.04]"
            >
              {/* Hover gradient overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(1deg, rgba(7, 104, 231, 1) 11%, rgba(0, 0, 0, 0) 86%)',
                }}
              />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-[3px] border-neutral-100 shadow -rotate-6 mb-4">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <p className="text-xsm text-neutral-700 leading-relaxed">
                  {t.quote}
                </p>
                <div className="mt-4 pt-3 border-t border-black/5">
                  <p className="font-medium font-semibold text-black">{t.name}</p>
                  <p className="text-sm text-black/50 mt-0.5">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}