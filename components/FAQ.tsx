'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'

const faqs = [
  {
    q: 'What services do you offer?',
    a: "We're a one-stop-shop for all things digital! From crafting stunning websites to skyrocketing your SEO rankings, managing your social media, and building unforgettable brands, we do it all. Oh, and we promise we don't bite.",
  },
  {
    q: 'How long does it take to design a website?',
    a: 'Think of us as your digital chefs—we cook up greatness without rushing the recipe. Typically, it takes 4–6 weeks, depending on your needs. But don\u2019t worry, we keep you in the loop every step of the way!',
  },
  {
    q: 'Do you work with small businesses or just big brands?',
    a: 'Size doesn\u2019t matter! Whether you\u2019re a budding startup or an industry giant, we\u2019re here to make your vision a reality. Big dreams? Small budget? Let\u2019s chat!',
  },
  {
    q: 'Can I customize the packages you offer?',
    a: 'Absolutely! Think of our packages as a base pizza—you can add or swap toppings (services) to create your perfect slice of digital success.',
  },
  {
    q: 'How do you measure the success of a marketing campaign?',
    a: "Numbers don't lie, and neither do we! We track everything from website traffic to social media engagement and conversions. You'll get regular reports, so you're always in the know.",
  },
  {
    q: "What if I don't like the designs or strategies?",
    a: 'Honesty hour—we want you to love what we create. If you\u2019re not thrilled, we\u2019ll go back to the drawing board and tweak until it\u2019s perfect. Your happiness is our success.',
  },
  {
    q: 'How do I get started?',
    a: 'It\u2019s easy! Just click that shiny "Contact Us" button, shoot us a message, or give us a call. We\u2019ll grab coffee (virtually or in-person) and start brainstorming magic together.',
  },
  {
    q: 'Do you provide support after launching my website or campaign?',
    a: "Of course! We don't just wave goodbye after launch. We offer website maintenance, performance tracking, and ongoing support to ensure your success continues.",
  },
  {
    q: 'What makes your agency different from the rest?',
    a: "We're not just an agency—we're your partners in success. We combine creativity, strategy, and a sprinkle of fun to make your brand unforgettable. Plus, we love building relationships that last.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="max-w-3xl mx-auto py-16 px-6">
      <div className="text-center mb-10">
        <p className="section-label justify-center flex">
          <span className="bg-[#eef1f4] rounded-full px-4 py-1.5">
            Frequently Asked Questions
          </span>
        </p>
        <h2 className="font-serif text-[48px] mt-4 tracking-tight">
          FAQ It Up! Your curiosity meets our expertise, let&apos;s clear
          things up!
        </h2>
        <p className="text-black/70 mt-3">
          We&apos;ve gathered all the important info right here. Explore our
          FAQs and find the answers you need.
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((item, i) => {
          const isOpen = open === i
          return (
            <div key={item.q} className="bg-[#faf8f7] rounded-[30px] overflow-hidden">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between text-left px-6 py-5 bg-[#f5f7f9]"
              >
                <h3 className="font-semibold text-[15px]">{item.q}</h3>
                <motion.span
                  animate={{ rotate: isOpen ? 0 : 45 }}
                  transition={{ duration: 0.25 }}
                  className="shrink-0 ml-4"
                >
                  <X size={20} />
                </motion.span>
              </button>
              <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-5 pt-4 text-sm text-black/70 leading-relaxed border-t border-dashed border-black/20 mt-0">
                  {item.a}
                </p>
              </motion.div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
