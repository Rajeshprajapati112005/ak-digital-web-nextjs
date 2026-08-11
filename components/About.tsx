'use client'

import { motion } from 'framer-motion'
import { Sparkles, Lightbulb } from 'lucide-react'


const team = [
  {
    name: 'Pradeep Prajapati',
    role: 'Co-founder',
    tag: 'STRATEGY GENIUS',
    icon: 'sparkles',
    img: 'pp.jpg',
    linkedin: 'https://www.linkedin.com/in/satvik-saksena/',
    twitter: 'https://twitter.com/',
  },
  {
    name: 'Rajesh Prajapati',
    role: 'Co-Founder',
    tag: 'CREATIVE WIZARD',
    icon: 'bulb',
    img: 'rp.jpg',
    linkedin: 'https://www.linkedin.com/in/mananahujaaa/',
    twitter: 'https://twitter.com/',
  },
]

export default function About() {
  return (
    <section id="about" className="about-section">

      {/* ABOUT LABEL */}
      <motion.div
        className="about-label-wrapper"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <span className="about-label">
          <span className="about-label-icon">
            <Sparkles size={11} />
          </span>
          About us
        </span>
      </motion.div>

      {/* INTRO */}
      <motion.h2
        className="about-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        We began as a small group of creators with a{' '}
        <strong>big belief:</strong> great ideas deserve{' '}
        <strong>bold execution.</strong> From coffee-fueled
        brainstorms to a thriving digital Team, our mission remains
        simple, craft <strong>impactful</strong> solutions that help
        brands <strong>stand</strong> out. With{' '}
        <strong>strategy, design, and a touch of magic</strong>, we
        bring ideas to life. Let&apos;s make something amazing
        together.
      </motion.h2>

      {/* TEAM */}
      <div className="about-grid">

        {team.map((member, index) => (
          <motion.div
            key={member.name}
            className="team-card"
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: '-60px',
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            {/* IMAGE */}
            <div className="team-image-wrapper">

              {/* TAG */}
              <div className="team-tag">
                {member.icon === 'sparkles' ? (
                  <Sparkles size={12} strokeWidth={2} />
                ) : (
                  <Lightbulb size={12} strokeWidth={2} />
                )}

                <span>{member.tag}</span>
              </div>

              <div className="team-image-inner">
                <motion.img
                  src={member.img}
                  alt={member.name}
                  whileHover={{ scale: 1.03 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="team-image"
                />
              </div>

            </div>

            {/* INFO */}
            <div className="team-info">

              <div>
                <h3 className="team-name">
                  {member.name}
                </h3>

                <p className="team-role">
                  {member.role}
                </p>
              </div>

              {/* SOCIAL */}
              <div className="team-socials">

                <motion.a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    y: -2,
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="social-button"
                  aria-label={`${member.name} LinkedIn`}
                >
                  in
                </motion.a>

                <motion.a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    y: -2,
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="social-button social-x"
                  aria-label={`${member.name} X`}
                >
                  𝕏
                </motion.a>

              </div>

            </div>
          </motion.div>
        ))}

        {/* JOIN CARD */}
        <motion.div
          className="join-card"
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: '-60px',
          }}
          transition={{
            duration: 0.6,
            delay: 0.24,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <div className="join-content">

            <h3>
              You can be here
            </h3>

            <p>
              We value curiosity, collaboration, and a can-do
              attitude. Oh, and coffee, lots of coffee. Come join a
              team that celebrates your unique skills and helps you
              unlock your full potential.
            </p>

          </div>

          <motion.a
            href="mailto:elevenstudio.agency@gmail.com"
            whileHover={{
              scale: 1.025,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="join-button"
          >
            Join Our Team
          </motion.a>

        </motion.div>

      </div>

    </section>
  )
}