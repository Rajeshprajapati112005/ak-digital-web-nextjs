'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'

const faqs = [
  {
    q: 'What services does AK Digital Web provide?',
    a: 'AK Digital Web provides end-to-end digital solutions including web design and development, eCommerce development, UI/UX design, branding, SEO, digital marketing, and custom digital solutions tailored to your business goals.',
  },
  {
    q: 'How long does it take to design and develop a website?',
    a: 'The timeline depends on the size and complexity of the project. A typical business website takes around 2–6 weeks, while larger eCommerce websites and custom digital solutions may require additional time. We define the timeline clearly before development begins.',
  },
  {
    q: 'Do you work with startups and small businesses?',
    a: 'Yes. We work with startups, small businesses, growing companies, and established brands. Our approach is based on your business goals, audience, and requirements rather than the size of your company.',
  },
  {
    q: 'Can you customize a website based on my business requirements?',
    a: 'Absolutely. We do not believe in one-size-fits-all solutions. Every website can be customized to match your brand, functionality, user experience, integrations, and business objectives.',
  },
  {
    q: 'Do you provide eCommerce website development?',
    a: 'Yes. We build conversion-focused eCommerce websites using platforms such as WooCommerce and Shopify, as well as custom solutions when a project requires more flexibility or advanced functionality.',
  },
  {
    q: 'Do you provide SEO and digital marketing services?',
    a: 'Yes. We provide SEO and digital marketing services focused on improving online visibility, attracting relevant traffic, and generating meaningful business opportunities. Our strategies are aligned with measurable business objectives.',
  },
  {
    q: 'What happens if I need changes during the project?',
    a: 'We maintain clear communication throughout the project. Feedback and revisions are handled according to the agreed project scope, ensuring the final product meets the defined requirements and expectations.',
  },
  {
    q: 'Do you provide support after the website is launched?',
    a: 'Yes. Our relationship does not end at launch. We can provide ongoing maintenance, technical support, performance optimization, security updates, and further improvements based on your business needs.',
  },
  {
    q: 'Can you integrate APIs and third-party tools?',
    a: 'Yes. We can integrate payment gateways, CRM systems, analytics platforms, email marketing tools, third-party APIs, automation systems, and other services required by your project.',
  },
  {
    q: 'Can you integrate AI features into a website?',
    a: 'Yes. We can integrate AI-powered functionality such as intelligent chatbots, AI assistants, knowledge-base search, content workflows, and other AI solutions where they provide genuine value to your business.',
  },
  {
    q: 'How do I get started with AK Digital Web?',
    a: 'Simply contact us and share your project requirements, goals, and timeline. We will review your requirements, discuss the best approach, and guide you through the next steps.',
  },
  {
    q: 'What makes AK Digital Web different?',
    a: 'We combine strategy, design, development, and business thinking instead of treating a website as just another design project. Our goal is to create digital experiences that look professional, perform reliably, and contribute to your long-term business growth.',
  },
]
export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-[#f5f1ee] md:py-16 py-6 ">
       <div className="container-px  mx-auto ">
        <div className='grid md:grid-cols-[2fr_2.2fr] gap-8 mt-12'>
      <div className=" md:mb-10 mb-5">
        <p className="section-label justify-center flex">
          <span className="bg-[#fff] rounded-full px-4 py-1.5">
            Frequently Asked Questions
          </span>
        </p>
        <h2 className="mt-3 font-serif  leading-tight tracking-tight text-black md:text-[52px] text-[40px]">
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
            <div key={item.q} className="bg-[#fff] rounded-[30px] overflow-hidden">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between text-left px-6 py-5 bg-[#fff]"
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
      </div>
      </div>
    </section>
  )
}
