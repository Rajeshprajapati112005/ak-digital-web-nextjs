'use client'

import Image from 'next/image'
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

/*
  Smaller screenshot = much faster loading.

  900px is enough for the card.
  1800px was unnecessarily large.
*/
function getScreenshot(url: string) {
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(
    url
  )}?w=900`
}

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(12)
  const loaderRef = useRef<HTMLDivElement | null>(null)

  const visibleProjects = projects.slice(0, visibleCount)

  /*
    Infinite loading
  */
  useEffect(() => {
    const loader = loaderRef.current

    if (!loader) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]

        if (
          entry.isIntersecting &&
          visibleCount < projects.length
        ) {
          setVisibleCount((prev) =>
            Math.min(prev + 12, projects.length)
          )
        }
      },
      {
        rootMargin: '800px',
      }
    )

    observer.observe(loader)

    return () => observer.disconnect()
  }, [visibleCount])

  return (
    <main className="projects-page">

      {/* BACK TO HOME */}

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


      {/* MAIN */}

      <div className="projects-container">

        {/* HEADER */}

        <motion.header
          className="projects-header"
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <div className="projects-heading-wrap">

            <span className="projects-eyebrow">
              SELECTED WORK
            </span>

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

            const screenshot = getScreenshot(url)

            /*
              Only first 2 images are high priority.

              Everything else is lazy loaded.
            */
            const isPriority = index < 2

            return (
              <motion.a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card"
                key={`${url}-${index}`}

                initial={{
                  opacity: 0,
                  y: 40,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                viewport={{
                  once: true,
                  margin: '0px 0px -80px 0px',
                }}

                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}

                whileHover={{
                  y: -6,
                }}
              >

                {/* NUMBER */}

                <div className="project-number">
                  {String(index + 1).padStart(2, '0')}
                </div>


                {/* IMAGE */}

                <div className="project-image-wrapper">

                  <div className="project-image">

                    <Image
                      src={screenshot}
                      alt={`${name} website screenshot`}

                      /*
                        Only first 2 load immediately.
                      */
                      priority={isPriority}

                      /*
                        Browser loads remaining images
                        only when needed.
                      */
                      loading={
                        isPriority
                          ? 'eager'
                          : 'lazy'
                      }

                      /*
                        Helps browser select
                        correct image size.
                      */
                      sizes="
                        (max-width: 600px) 100vw,
                        (max-width: 900px) 100vw,
                        50vw
                      "

                      width={900}
                      height={600}

                      quality={60}

                      className="project-image-img"

                      /*
                        Prevent layout shift.
                      */
                      style={{
                        width: '100%',
                        height: '100%',
                      }}
                    />

                  </div>


                  {/* GRADIENT */}

                  <div className="project-image-overlay" />


                  {/* HOVER */}

                  <div className="project-overlay">

                    <span>
                      VIEW WEBSITE
                    </span>

                    <span className="project-arrow">
                      ↗
                    </span>

                  </div>

                </div>


                {/* INFO */}

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


        {/* LOADER */}

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
            You&apos;ve reached the end.
          </motion.div>

        )}

      </div>

    </main>
  )
}