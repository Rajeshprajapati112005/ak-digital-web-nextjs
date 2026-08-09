# Eleven — Agency Landing Page (Next.js)

Screenshot me di gayi "Eleven" agency website ka Next.js 14 (App Router) + Tailwind CSS clone.

## Sections included
- Navbar (pill nav)
- Hero ("Your MVP's favourite designers!")
- Work gallery mosaic
- Testimonials
- Client logos strip
- Stats ("Building brands, boosting businesses...")
- Portfolio grid (Hiveschool, Hyperleap-ai, Docdune, Sportaye, Nocage, Caire)
- Services (Web Design & Dev, Digital Marketing, Branding, App Design)
- About / Team + "You can be here"
- Contact form (red + black split)
- FAQ accordion
- Footer

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Notes / next steps for you
- Saari images ab **aapki live site (elevenstudios.in) ki asli Framer-hosted image URLs** use kar rahi hain — hero bg, gallery, testimonials avatars, client logos, portfolio shots, team photos, sab real hain.
- Real copy, real phone/email/hours, real social links (LinkedIn/Twitter/Instagram), aur real FAQ answers bhi daal diye hain.
- Animations: Framer Motion se — hero text blur/word reveal, scroll-reveal on stats/portfolio/testimonials, hover-straighten testimonial cards, infinite marquee for gallery + client logos, accordion for services and FAQ (rotate icon), hover scale on buttons/cards.
- Chunk jo replicate nahi kiya (bahut zyada complex Framer-internal mechanics): pixel-drag scroll-scrubbed image comparison slider in hero gallery, sticky pinned scroll-jacked project reel, exact per-letter stagger timing. Baaki sab sections/behavior functionally same hain.
- Contact form abhi sirf UI hai (submit pe kuch save nahi hota) — isse Formspree, Resend, ya apne backend API route se connect karna hoga.
- Image URLs Framer ke CDN (`framerusercontent.com`) par hosted hain — production ke liye inhe apne khud ke storage/CDN par migrate karna better rahega (Framer koi guarantee nahi deta ki ye links hamesha valid rahenge).
