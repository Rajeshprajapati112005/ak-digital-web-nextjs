"use client";

import { motion } from "framer-motion";

const projects = [
  { name: "Nimbus", tag: "Web Design", g: "from-indigo-400 to-blue-600" },
  { name: "Kirana Cart", tag: "Web Design — Dashboard", g: "from-emerald-400 to-teal-600" },
  { name: "Trackly", tag: "Branding", g: "from-sky-300 to-blue-400" },
  { name: "PayNest", tag: "Web Design", g: "from-orange-400 to-red" },
  { name: "EduSphere", tag: "Web Design & Branding", g: "from-zinc-700 to-zinc-900" },
  { name: "GreenRoute", tag: "Web Design", g: "from-rose-300 to-pink-400" },
];

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-5xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
          Don&rsquo;t trust our words,
          <br />
          trust our <span className="italic-accent text-red">work!</span>
        </h2>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p, i) => (
          <motion.a
            key={p.name}
            href="#"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
            className="group block overflow-hidden rounded-2xl"
          >
            <div className={`relative h-64 overflow-hidden rounded-2xl bg-gradient-to-br ${p.g}`}>
              <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-110">
                <span className="font-display text-6xl font-semibold text-cream/90">
                  {p.name[0]}
                </span>
              </div>
              <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/10" />
            </div>
            <div className="mt-4 flex items-center justify-between px-1">
              <div>
                <p className="text-xs text-fog">{p.tag}</p>
                <h3 className="font-display text-lg font-medium">{p.name}</h3>
              </div>
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-red group-hover:text-red">
                &nearr;
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
