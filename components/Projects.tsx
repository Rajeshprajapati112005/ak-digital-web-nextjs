'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const projects = [
  'https://robertsproducts.com.au',
  'https://readingbees.com.au',
  'https://phasepacific.com',
  'https://mpcolour.com.au',
  'https://energypricesolutions.com.au',
  'https://www.starstruckbysl.com/',
  'https://createlw.cswebsites.com.au.cswebsites.com.au/',
  'https://quattrospaces.com/',
  'https://rajbajoria.com/',
  'https://misterphoto.in/',
  'https://carespheremedia.com/',
  'https://carematicshealth.com/',
  'https://daukay.com/',
  'https://saahilpackersandmovers.com/',
  'https://studio11pilates.com.au/',
  'https://jycranes.com.au/',
  'https://www.elledecorstore.in/',
  'https://krivansh.com/',
  'https://swarnabrass.com/',
  'https://flowersonplenty.com.au/',
  'https://www.bombayshirts.com/',
  'https://getmymettle.com/',
  'https://rizebar.in/',
  'https://prosserproperties.com.au/',
  'https://www.darlodogs.com.au/',
  'https://glutagen.com/',
  'http://northsidecardiology.com.au/',
  'https://3eye.com.au/',
  'https://soxybeast.com.au/',
  'https://evvictoria.au/',
  'https://koravidevelopers.com/',
  'https://northernsweeping.com.au/',
  'https://www.hrcm.in/',
  'https://adrachna.com/',
  'https://highvisionrealty.co.in/',
  'https://navchakra.com/',

  // New Projects
  'https://truckerstoystore.com.au/',
  'https://bamboobliss.com.au/',
  'https://sportsapparel.cswebsites.com.au/',
  'https://bellaeventandfurniturehire.com.au/',
  'https://animalfriendlylife.com.au/',
  'https://localarms.com.au/',
  'https://breensfurniture.com.au/',
  'https://ankahomes.com.au/',
  'https://kubenest.com.au/',
  'https://jaxtonic.com/',
  'https://www.mst.com.au/',
  'https://chiropractorepping.com.au/',
  'https://mycarentals.com.au/',
]

function getWebsiteName(url: string) {
  try {
    return new URL(url)
      .hostname
      .replace(/^www\./, '')
      .split('.')[0]
      .replace(/[-_]/g, ' ')
      .replace(/\b\w/g, (letter) => letter.toUpperCase())
  } catch {
    return 'Website'
  }
}

function getDomain(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return url
  }
}

function getScreenshot(url: string) {
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(
    url
  )}?w=1800`
}

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(12)
  const loaderRef = useRef<HTMLDivElement | null>(null)

  const visibleProjects = projects.slice(0, visibleCount)

  useEffect(() => {
    const loader = loaderRef.current

    if (!loader) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          visibleCount < projects.length
        ) {
          setVisibleCount((prev) =>
            Math.min(prev + 12, projects.length)
          )
        }
      },
      {
        rootMargin: '500px',
      }
    )

    observer.observe(loader)

    return () => {
      observer.disconnect()
    }
  }, [visibleCount])

  return (
    <main className="projects-page">

      {/* TOP NAVIGATION */}

      <div className="projects-topbar">

        <Link
          href="/"
          className="projects-back-button"
        >
          <span className="projects-back-icon">
            ←
          </span>

          <span>
            Back to Home
          </span>
        </Link>

      </div>

      {/* MAIN CONTAINER */}

      <div className="projects-container">

        {/* HEADER */}

        <motion.header
          className="projects-header"
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <div className="projects-heading-wrap">

            <h1 className="mt-5 font-serif text-[36px] leading-tight tracking-tight text-black md:text-[70px]">
              Websites we&apos;ve
              <br />
              <span>
                built &amp; launched.
              </span>
            </h1>

          </div>

          <p className="projects-description">
            A selection of digital experiences designed and
            developed for businesses, brands and growing
            companies.
          </p>

        </motion.header>


        {/* PROJECTS */}

        <div className="projects-list">

          {visibleProjects.map((url, index) => {

            const name = getWebsiteName(url)
            const domain = getDomain(url)

            return (
              <motion.a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card"
                key={`${url}-${index}`}
                initial={{
                  opacity: 0,
                  y: 70,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: '-100px',
                }}
                transition={{
                  duration: 0.75,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -8,
                }}
              >

                {/* PROJECT NUMBER */}

                <div className="project-number">
                  {String(index + 1).padStart(2, '0')}
                </div>


                {/* SCREENSHOT */}

                <div className="project-image-wrapper">

                  <div className="project-image">

                    <img
                      src={getScreenshot(url)}
                      alt={`${name} website`}
                      loading={
                        index < 4
                          ? 'eager'
                          : 'lazy'
                      }
                    />

                  </div>


                  {/* DARK OVERLAY */}

                  <div className="project-image-overlay" />


                  {/* HOVER BUTTON */}

                  <div className="project-overlay">

                    <span>
                      VIEW WEBSITE
                    </span>

                    <span className="project-arrow">
                      ↗
                    </span>

                  </div>

                </div>


                {/* PROJECT INFO */}

                <div className="project-info">

                  <div className="project-info-left">

                    <h2>
                      {name}
                    </h2>

                    <p>
                      {domain}
                    </p>

                  </div>


                  <div className="project-link-arrow">
                    ↗
                  </div>

                </div>

              </motion.a>
            )
          })}

        </div>


        {/* INFINITE SCROLL TRIGGER */}

        {visibleCount < projects.length && (
          <div
            ref={loaderRef}
            className="projects-loader"
          >

            <span className="projects-loader-dot" />

            <span>
              Loading more projects
            </span>

          </div>
        )}


        {/* END */}

        {visibleCount >= projects.length && (
          <motion.div
            className="projects-end"
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
          >
            <span>
              You&apos;ve reached the end.
            </span>
          </motion.div>
        )}

      </div>

    </main>
  )
}