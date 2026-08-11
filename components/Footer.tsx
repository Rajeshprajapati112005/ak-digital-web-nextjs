export default function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-2 md:px-6 pb-6">
      <div className="bg-black text-white rounded-[30px] p-10 md:p-14">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div>
            <h2 className="font-serif text-[90px] md:text-[120px] leading-[1.1] tracking-tight">
              <span className="text-white">ak</span>
              <span className="text-red"> digital web</span>
            </h2>
            <p className="text-white/90 mt-2 max-w-sm text-lg font-medium">
              The next big thing starts here, drop us a line and let&apos;s
              get creating!
            </p>
          </div>

          <div className="flex gap-3">
            {[
              { label: 'Linkedin', href: 'https://www.linkedin.com/company/eleven-design-studio/?viewAsMember=true' },
              { label: 'Twitter', href: 'https://x.com/e1evenstudios' },
              { label: 'Instagram', href: 'https://www.instagram.com/elevenstudios.in/' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 text-sm hover:text-white transition-colors flex items-center gap-1"
                style={{ color: '#0768e7' }}
              >
                {s.label} →
              </a>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/30 text-sm">
          <div>
            <p className="text-[#ff7878] font-medium mb-1">PHONE</p>
            <p className="text-white/90">+91 87690 29844, +91 8307122350</p>
          </div>
          <div>
            <p className="text-[#ff7878] font-medium mb-1">EMAIL</p>
            <a href="mailto:elevenstudio.agency@gmail.com" className="text-white/90 hover:text-white">
              elevenstudio.agency@gmail.com
            </a>
          </div>
          <div>
            <p className="text-[#ff7878] font-medium mb-1">CONTACTING HOURS</p>
            <p className="text-white/90">Mon to Sat: 9.00am - 8.30pm</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
