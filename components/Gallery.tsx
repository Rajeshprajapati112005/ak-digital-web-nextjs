const rowA = [
  '/one.png',
  '/two.png',
  '/three.png',
  '/four.png',
  '/five.jpg',
  '/six.png',
]

const rowB = [
  '/1.png',
  '/2.jpg',
  '/3.png',
  '/4.png',
  '/5.png',
]

export default function Gallery() {
  return (
    <section className="max-w-[1400px] mx-auto pb-4 space-y-4">
      
      {/* Row A */}
      <div className="marquee-mask overflow-hidden">
        <div className="flex gap-[30px] w-max animate-marquee">
          {[...rowA, ...rowA].map((src, i) => (
            <div
              key={i}
              className="w-[390px] h-[300px] rounded-b-2xl overflow-hidden shrink-0 shadow-inner bg-[#f4f2f0]"
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover object-top rounded-[31px] p-5"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row B */}
      <div className="marquee-mask overflow-hidden">
        <div
          className="flex gap-[30px] w-max animate-marquee"
          style={{ animationDirection: 'reverse' }}
        >
          {[...rowB, ...rowB].map((src, i) => (
            <div
              key={i}
              className="w-[390px] h-[300px] rounded-t-2xl overflow-hidden shrink-0 shadow-inner bg-[#f4f2f0]"
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover object-top rounded-[31px] p-5"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}