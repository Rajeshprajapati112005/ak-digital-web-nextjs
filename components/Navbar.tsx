'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const menuRef = useRef<HTMLUListElement>(null)

  const itemRefs = useRef<
    Record<string, HTMLLIElement | null>
  >({})

  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
  })

  const [isReady, setIsReady] = useState(false)

  /* ================================
     ACTIVE SECTION DETECTION
  ================================= */

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

  /* ================================
     DESKTOP RED INDICATOR
  ================================= */

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

  /* ================================
     LOCK BODY WHEN MOBILE MENU OPEN
  ================================= */

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  /* ================================
     MENU CLICK
  ================================= */

  const handleMenuClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault()

    setActiveSection(sectionId)

    const target =
      document.getElementById(sectionId)

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }

    window.history.pushState(
      null,
      '',
      `#${sectionId}`
    )

    // Mobile menu close
    setMobileMenuOpen(false)
  }

  return (
    <>
      {/* =================================
          DESKTOP NAVBAR
      ================================== */}

      <header className="navbar-header">
        <nav className="navbar-nav">
          <div className="navbar-container">
            <ul
              ref={menuRef}
              className="navbar-menu"
            >
              {/* Moving red background */}

              <motion.div
                className="navbar-indicator"
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
                    className="navbar-item"
                  >
                    <a
                      href={link.href}
                      onClick={(e) =>
                        handleMenuClick(
                          e,
                          sectionId
                        )
                      }
                      className={`navbar-link ${
                        isActive ? 'active' : ''
                      }`}
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

      {/* =================================
          MOBILE HEADER
      ================================== */}

      <header className="mobile-navbar">
        <a
          href="#home"
          className="mobile-navbar-logo"
          onClick={(e) =>
            handleMenuClick(e, 'home')
          }
        >
          {/* Put your real logo at public/logo.png */}
          <img
            src="logo.png"
            alt="Eleven"
          />
        </a>

        <button
          type="button"
          className="mobile-menu-button"
          aria-label="Open menu"
          onClick={() =>
            setMobileMenuOpen(true)
          }
        >
          <span></span>
          <span></span>
        </button>
      </header>

      {/* =================================
          MOBILE MENU
      ================================== */}

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay */}

            <motion.div
              className="mobile-menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.3,
              }}
              onClick={() =>
                setMobileMenuOpen(false)
              }
            />

            {/* Side Drawer */}

            <motion.aside
              className="mobile-menu-drawer"
              initial={{
                x: '100%',
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: '100%',
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Close Button */}

              <button
                type="button"
                className="mobile-menu-close"
                aria-label="Close menu"
                onClick={() =>
                  setMobileMenuOpen(false)
                }
              >
                ×
              </button>

              {/* Mobile Menu Links */}

              <nav className="mobile-menu-links">
                {links.map((link, index) => {
                  const sectionId =
                    link.href.replace('#', '')

                  const isActive =
                    activeSection === sectionId

                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      onClick={(e) =>
                        handleMenuClick(
                          e,
                          sectionId
                        )
                      }
                      className={`mobile-menu-link ${
                        isActive
                          ? 'active'
                          : ''
                      }`}
                      initial={{
                        opacity: 0,
                        x: 25,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay:
                          0.12 +
                          index * 0.05,
                        duration: 0.3,
                      }}
                    >
                      {link.label}
                    </motion.a>
                  )
                })}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}