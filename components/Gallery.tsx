'use client'

import Image from 'next/image'

const rowA = [
  '/one.webp',
  '/two.webp',
  '/three.webp',
  '/four.webp',
  '/five.webp',
  '/six.webp',
]

const rowB = [
  '/1.webp',
  '/2.webp',
  '/3.webp',
  '/4.webp',
  '/5.webp',
]

export default function Gallery() {
  return (
    <section className="max-w-[1400px] mx-auto pb-4 space-y-4">

      {/* ROW A */}
      <div className="marquee-mask overflow-hidden">
        <div className="flex gap-[30px] w-max animate-marquee">

          {[...rowA, ...rowA].map((src, i) => (
            <div
              key={`row-a-${i}`}
              className="w-[390px] h-[300px] rounded-b-2xl overflow-hidden shrink-0 shadow-inner bg-[#f4f2f0]"
            >
              <Image
                src={src}
                alt=""
                width={390}
                height={300}
                loading="lazy"
                quality={70}
                sizes="390px"
                aria-hidden="true"
                className="w-full h-full object-cover object-top rounded-[31px] p-5"
              />
            </div>
          ))}

        </div>
      </div>

      {/* ROW B */}
      <div className="marquee-mask overflow-hidden">
        <div
          className="flex gap-[30px] w-max animate-marquee"
          style={{
            animationDirection: 'reverse',
          }}
        >

          {[...rowB, ...rowB].map((src, i) => (
            <div
              key={`row-b-${i}`}
              className="w-[390px] h-[300px] rounded-t-2xl overflow-hidden shrink-0 shadow-inner bg-[#f4f2f0]"
            >
              <Image
                src={src}
                alt=""
                width={390}
                height={300}
                loading="lazy"
                quality={70}
                sizes="390px"
                aria-hidden="true"
                className="w-full h-full object-cover object-top rounded-[31px] p-5"
              />
            </div>
          ))}

        </div>
      </div>

    </section>
  )
}