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
      <div className="container-px  mx-auto  text-center">
        <p className="section-label justify-center about-label mb-3"><span class="about-label-icon"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg></span>They trust us</p>
         <h2 className="font-serif md:text-[52px] text-[40px] tracking-tight leading-none">
        Real feedback,{' '}
        <span className="text-red">real results.</span>
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