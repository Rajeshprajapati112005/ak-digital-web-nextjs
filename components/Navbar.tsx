'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Collab', href: '#collab' },
  { label: 'Stats', href: '#stats' },
  { label: 'Projects', href: '#projects-1' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home')

  const menuRef = useRef<HTMLUListElement>(null)

  const itemRefs = useRef<
    Record<string, HTMLLIElement | null>
  >({})

  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
  })

  const [isReady, setIsReady] = useState(false)

  /* --------------------------------
     ACTIVE SECTION DETECTION
  -------------------------------- */

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter(
        (section): section is Element =>
          section !== null
      )

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio -
              a.intersectionRatio
          )

        if (visibleSections.length > 0) {
          const newSection =
            visibleSections[0].target.id

          setActiveSection((currentSection) => {
            if (currentSection !== newSection) {
              return newSection
            }

            return currentSection
          })
        }
      },
      {
        rootMargin: '-45% 0px -45% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    )

    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  /* --------------------------------
     UPDATE RED PILL POSITION
  -------------------------------- */

  useEffect(() => {
    const updateIndicator = () => {
      const menu = menuRef.current
      const activeItem =
        itemRefs.current[activeSection]

      if (!menu || !activeItem) return

      const menuRect =
        menu.getBoundingClientRect()

      const itemRect =
        activeItem.getBoundingClientRect()

      setIndicator({
        left: itemRect.left - menuRect.left,
        width: itemRect.width,
      })

      setIsReady(true)
    }

    updateIndicator()

    requestAnimationFrame(() => {
      updateIndicator()
    })

    window.addEventListener(
      'resize',
      updateIndicator
    )

    return () => {
      window.removeEventListener(
        'resize',
        updateIndicator
      )
    }
  }, [activeSection])

  /* --------------------------------
     MENU CLICK
  -------------------------------- */

  const handleMenuClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault()

    // Immediately highlight clicked menu
    setActiveSection(sectionId)

    const target =
      document.getElementById(sectionId)

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }

    // Update URL hash without jumping
    window.history.pushState(
      null,
      '',
      `#${sectionId}`
    )
  }

  return (
    <header
      style={{
        backgroundColor: '#f5f1ee',
      }}
      className="w-full pt-4 fixed top-0 left-0 right-0 z-50"
    >
      <nav className="max-w-[540px] mx-auto flex items-center justify-center">

        <div
          className="
            relative
            overflow-hidden
            rounded-full
            bg-white/80
            backdrop-blur-md
            shadow-[0_5px_20px_rgba(0,0,0,0.05)]
          "
        >

          <ul
            ref={menuRef}
            className="
              relative
              flex
              items-center
              gap-1
              px-2
              py-2
              text-sm
              font-medium
            "
          >

            {/* --------------------------------
                SINGLE MOVING RED BACKGROUND
            -------------------------------- */}

            <motion.div
              className="
                absolute
                top-2
                bottom-2
                rounded-full
                bg-red
                z-0
              "
              initial={false}
              animate={{
                left: indicator.left,
                width: indicator.width,
                opacity: isReady ? 1 : 0,
              }}
              transition={{
                left: {
                  duration: 0.55,
                  ease: [0.65, 0, 0.35, 1],
                },
                width: {
                  duration: 0.55,
                  ease: [0.65, 0, 0.35, 1],
                },
                opacity: {
                  duration: 0.15,
                },
              }}
            />

            {/* --------------------------------
                MENU ITEMS
            -------------------------------- */}

            {links.map((link) => {
              const sectionId =
                link.href.replace('#', '')

              const isActive =
                activeSection === sectionId

              return (
                <li
                  key={link.label}
                  ref={(element) => {
                    itemRefs.current[sectionId] =
                      element
                  }}
                  className="relative z-10"
                >
                  <a
                    href={link.href}
                    onClick={(e) =>
                      handleMenuClick(
                        e,
                        sectionId
                      )
                    }
                    className={`
                      relative
                      px-4
                      py-2
                      rounded-full
                      inline-block
                      transition-colors
                      duration-200
                      ${
                        isActive
                          ? 'text-white'
                          : 'text-neutral-600 hover:text-black'
                      }
                    `}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}

          </ul>
        </div>
      </nav>
    </header>
  )
}