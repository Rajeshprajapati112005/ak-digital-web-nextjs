"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

import {
  type LucideIcon,
  PenTool,
  Target,
  PanelsTopLeft,
  FileText,
  Facebook,
  Mail,
  Presentation,
  Package,
  Monitor,
  ShoppingCart,
  Code2,
  Smartphone,
  Globe,
  Zap,
  Database,
  Plug,
  Gauge,
  Search,
  BarChart3,
  Megaphone,
  MousePointerClick,
  Palette,
  BookOpen,
  MessageCircle,
  Bot,
  BrainCircuit,
  Workflow,
  Settings2,
  SmartphoneIcon,
  AppWindow,
  Server,
  Store,
  CreditCard,
  Tags,
  LayoutDashboard,
  Wrench,
  LineChart,
} from "lucide-react"


// =====================================================
// TYPES
// =====================================================

type ServiceItem = {
  name: string
  icon: LucideIcon
}

type Service = {
  id: string
  number: string
  title: string
  desc: string
  items: ServiceItem[]
}


// =====================================================
// SERVICES DATA
// =====================================================

const services: Service[] = [
  {
    id: "service-1",
    number: "01",
    title: "Web Design & Development",

    desc:
      "We create high-performing digital experiences that combine thoughtful design, powerful technology, and seamless user experience. From business websites to complex web applications, we build digital platforms designed to look great, perform fast, and drive real business growth.",

    items: [
      {
        name: "UI/UX Design",
        icon: PanelsTopLeft,
      },
      {
        name: "Custom Website Design",
        icon: Monitor,
      },
      {
        name: "Business Website Development",
        icon: Globe,
      },
      {
        name: "Next.js & React Development",
        icon: Code2,
      },
      {
        name: "WordPress Development",
        icon: FileText,
      },
      {
        name: "Shopify Development",
        icon: Store,
      },
      {
        name: "Web Application Development",
        icon: AppWindow,
      },
      {
        name: "CMS Development",
        icon: LayoutDashboard,
      },
      {
        name: "API Integration",
        icon: Plug,
      },
      {
        name: "Performance Optimization",
        icon: Gauge,
      },
      {
        name: "SEO Integration",
        icon: Search,
      },
      {
        name: "Website Maintenance",
        icon: Wrench,
      },
    ],
  },

  {
    id: "service-2",
    number: "02",
    title: "E-Commerce & Digital Solutions",

    desc:
      "We build eCommerce experiences that make it easier for businesses to sell, scale, and connect with customers online. From storefront design and development to payments, optimization, and automation, we create digital solutions built around your business goals.",

    items: [
      {
        name: "E-Commerce Website Design",
        icon: ShoppingCart,
      },
      {
        name: "WooCommerce Development",
        icon: ShoppingCart,
      },
      {
        name: "Shopify Development",
        icon: Store,
      },
      {
        name: "Custom E-Commerce",
        icon: Code2,
      },
      {
        name: "Payment Gateway Integration",
        icon: CreditCard,
      },
      {
        name: "Product & Category Setup",
        icon: Tags,
      },
      {
        name: "Cart & Checkout Optimization",
        icon: MousePointerClick,
      },
      {
        name: "E-Commerce SEO",
        icon: Search,
      },
      {
        name: "Custom Business Solutions",
        icon: Settings2,
      },
      {
        name: "Third-Party Integrations",
        icon: Plug,
      },
      {
        name: "Analytics & Tracking",
        icon: BarChart3,
      },
      {
        name: "Store Support",
        icon: Wrench,
      },
    ],
  },

  {
    id: "service-3",
    number: "03",
    title: "Branding & Digital Marketing",

    desc:
      "A strong brand needs more than a great logo—it needs a clear identity and the right strategy to reach the people who matter. We combine branding, creative design, SEO, and digital marketing to help businesses build recognition, attract the right audience, and turn attention into growth.",

    items: [
      {
        name: "Logo Design",
        icon: PenTool,
      },
      {
        name: "Brand Strategy & Positioning",
        icon: Target,
      },
      {
        name: "Visual Identity Design",
        icon: Palette,
      },
      {
        name: "Brand Guidelines",
        icon: BookOpen,
      },
      {
        name: "Social Media Graphics",
        icon: Facebook,
      },
      {
        name: "Email Design",
        icon: Mail,
      },
      {
        name: "Pitch Decks & Presentations",
        icon: Presentation,
      },
      {
        name: "Packaging Design",
        icon: Package,
      },
      {
        name: "SEO & Local SEO",
        icon: Search,
      },
      {
        name: "Google Ads & PPC",
        icon: Megaphone,
      },
      {
        name: "Social Media Marketing",
        icon: MessageCircle,
      },
      {
        name: "Lead Generation",
        icon: LineChart,
      },
    ],
  },

  {
    id: "service-4",
    number: "04",
    title: "AI, Apps & Automation",

    desc:
      "We turn ambitious ideas into intelligent digital products. From mobile apps and AI-powered experiences to business automation, we use modern technologies to simplify workflows, improve customer experiences, and create smarter ways for businesses to operate and grow.",

    items: [
      {
        name: "AI-Powered Websites",
        icon: BrainCircuit,
      },
      {
        name: "AI Chatbots",
        icon: Bot,
      },
      {
        name: "AI API Integration",
        icon: Plug,
      },
      {
        name: "Custom AI Solutions",
        icon: BrainCircuit,
      },
      {
        name: "RAG & Knowledge-Based AI",
        icon: Database,
      },
      {
        name: "AI Workflow Automation",
        icon: Workflow,
      },
      {
        name: "Mobile App UI/UX",
        icon: Smartphone,
      },
      {
        name: "Custom App Development",
        icon: SmartphoneIcon,
      },
      {
        name: "Web App Development",
        icon: AppWindow,
      },
      
      {
        name: "Business Automation",
        icon: Zap,
      },
      {
        name: "App Store Optimization",
        icon: Search,
      },
    ],
  },
]


// =====================================================
// MAIN COMPONENT
// =====================================================

export default function Services() {
  const [open, setOpen] = useState("service-1")

  const activeService =
    services.find((service) => service.id === open) || services[0]


  return (
    <section
      id="services"
      className="bg-[#f5f1ee] py-10 "
    >
      <div className="container-px max-w-7xl">


        {/* =================================================
            SECTION HEADING
        ================================================= */}

        <div className="text-center">

          <p className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm text-black">

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-[10px] text-white">
                i
              </span>

              Our services

            </span>
          </p>


          <h2 className="mt-5 font-serif text-[36px] leading-tight tracking-tight text-black md:text-[46px] lg:text-[52px]">

            Services designed to help your{" "}

            <span className="text-[#0768e7]">
              brand shine
            </span>{" "}

            brighter.

          </h2>

        </div>


        {/* =================================================
            MAIN SERVICE AREA
        ================================================= */}

        <div className="md:mt-14 mt-6 grid gap-10 md:grid-cols-[0.8fr_2.2fr] lg:gap-16">


          {/* =================================================
              LEFT SERVICE MENU
          ================================================= */}

          <div className="self-start md:sticky md:top-28">

            <div className="flex flex-col gap-3">

              {services.map((service) => {

                const isActive = open === service.id

                return (
                  <motion.button
                    key={service.id}
                    type="button"
                    onClick={() => setOpen(service.id)}
                    className="group flex w-fit items-center text-left"
                    whileHover={{ x: 6 }}
                    transition={{
                      duration: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >

                    {/* ACTIVE ARROW */}

                    <motion.span
                      initial={false}
                      animate={{
                        width: isActive ? 18 : 0,
                        opacity: isActive ? 1 : 0,
                        marginRight: isActive ? 10 : 0,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="flex shrink-0 overflow-hidden"
                    >
                      <span className="text-[18px] leading-none text-[#0768e7]">
                        ›
                      </span>
                    </motion.span>


                    {/* SERVICE TITLE */}

                    <motion.span
                      animate={{
                        color: isActive
                          ? "#111111"
                          : "#444444",
                        fontWeight: isActive ? 500 : 400,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="text-[17px] leading-7 md:text-[18px]"
                    >
                      {service.title}
                    </motion.span>

                  </motion.button>
                )
              })}

            </div>

          </div>


          {/* =================================================
              RIGHT ACTIVE SERVICE
          ================================================= */}

          <div className="min-w-0">

            <AnimatePresence
              mode="wait"
              initial={false}
            >

              <motion.div
                key={activeService.id}

                initial={{
                  opacity: 0,
                  y: 18,
                  filter: "blur(5px)",
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}

                exit={{
                  opacity: 0,
                  y: -12,
                  filter: "blur(5px)",
                }}

                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}

                className="rounded-[34px] bg-[#fafafa] p-6 md:p-8 lg:p-9"
              >


                {/* =================================================
                    TITLE
                ================================================= */}

                <div className="flex items-start gap-4">

                  <span className="mt-1 text-sm font-medium text-black/35">
                    {activeService.number}
                  </span>

                  <h3 className="font-serif text-[28px]  leading-tight tracking-tight text-[#111111] md:text-[32px]">
                    {activeService.title}
                  </h3>

                </div>


                {/* =================================================
                    DESCRIPTION
                ================================================= */}

                <p className="mt-5 max-w-4xl text-[15px] leading-7 text-black/70 md:text-[16px]">
                  {activeService.desc}
                </p>


                {/* =================================================
                    SERVICE PILLS
                ================================================= */}

                <div className="mt-7 flex flex-wrap gap-2.5">

                  {activeService.items.map((item, index) => {

                    const Icon = item.icon

                    return (
                      <motion.div
                        key={item.name}
                        initial={{
                          opacity: 0,
                          y: 8,
                        }}

                        animate={{
                          opacity: 1,
                          y: 0,
                        }}

                        transition={{
                          duration: 0.3,
                          delay: Math.min(index * 0.035, 0.35),
                          ease: [0.22, 1, 0.36, 1],
                        }}

                        whileHover={{
                          y: -2,
                          scale: 1.015,
                        }}

                        className="group inline-flex cursor-default items-center gap-2 rounded-full border border-black/10 bg-white px-3.5 py-2 text-[14px] text-black/85 transition-colors duration-200 hover:border-black/20 md:px-4"
                      >

                        {/* ICON */}

                        <motion.span
                          whileHover={{
                            rotate: -8,
                            scale: 1.12,
                          }}

                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 18,
                          }}

                          className="flex shrink-0"
                        >

                          <Icon
                            size={16}
                            strokeWidth={1.8}
                            className="text-black"
                          />

                        </motion.span>


                        {/* NAME */}

                        <span>
                          {item.name}
                        </span>

                      </motion.div>
                    )
                  })}

                </div>

              </motion.div>

            </AnimatePresence>

          </div>

        </div>


        {/* =================================================
            MOBILE SERVICE MENU
        ================================================= */}

        <div className="mt-10 md:hidden">

          <div className="grid grid-cols-1 gap-2">

            {services.map((service) => {

              const isActive = open === service.id

              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setOpen(service.id)}
                  className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-left transition-all ${
                    isActive
                      ? "bg-white text-black"
                      : "text-black/60"
                  }`}
                >

                  <span
                    className={`h-2 w-2 rounded-full ${
                      isActive
                        ? "bg-[#0768e7]"
                        : "bg-black/20"
                    }`}
                  />

                  <span className="text-sm">
                    {service.title}
                  </span>

                </button>
              )
            })}

          </div>

        </div>


      </div>
    </section>
  )
}