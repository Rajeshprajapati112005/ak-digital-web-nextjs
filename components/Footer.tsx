export default function Footer() {
  return (
    <footer className="px-2 md:px-6 pb-6 bg-[#f5f1ee]">
       <div className="container-px  mx-auto ">
      <div className="bg-black text-white rounded-[30px] p-10 md:p-14">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div>
            <h2 className="font-serif text-[52px] md:text-[120px] leading-[1.1] tracking-tight">
              <span className="text-red">ak</span>
              <span className="text-white "> digital web</span>
            </h2>
            <p className="text-white/ mt-2 max-w-sm text-[16px]  font-medium">
              AK Digital Web is a web design and development agency helping businesses build high-performing websites, eCommerce stores, digital products and growth-focused digital experiences that turn visitors into customers.
            </p>
          </div>

          <div className="flex gap-3">
            {[
              { label: 'Linkedin', href: 'https://www.linkedin.com/in/rajesh-prajapati-2254332a7/' },
              { label: 'Facebook', href: '#' },
              { label: 'Instagram', href: 'https://www.instagram.com/akdigitalweb/' },
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
            <p className="text-red font-medium mb-1">PHONE</p>
              <a
                  href="tel:+917611155473"
                  className="text-white/90 transition hover:text-white"
                >
                  +91 76111-55473
                </a>

                <a
                  href="tel:+917610541166"
                  className="text-white/90 ms-3 transition hover:text-white"
                >
                  +91 76105-41166
                </a>
          </div>
          <div>
            <p className="text-red font-medium mb-1">EMAIL</p>
            <a href="mailto:info@akdigitalweb.com" className="text-white/90 hover:text-white">
              info@akdigitalweb.com
            </a>
          </div>
          <div>
            <p className="text-red font-medium mb-1">CONTACTING HOURS</p>
            <p className="text-white/90">Mon to Sat: 9.00am - 8.30pm</p>
          </div>
        </div>
      </div>
      </div>
    </footer>
  )
}
