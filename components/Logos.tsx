'use client'

const logosRowA = [
  '/l1.png',
  '/l2.jpg',
  '/l3.png',
  '/l4.png',
  '/l5.jpg',
  '/l6.png',
]

const logosRowB = [
  '/l7.png',
  '/l8.png',
  '/l9.png',
  '/l10.webp',
  '/l11.png',
  '/l12.png',
  '/l13.png',
  '/l9.svg',
]

export default function Logos() {
  return (
    <section id="collab" className=" bg-[#f5f1ee] py-16 text-center">
      <div className="max-w-6xl mx-auto px-6 text-center">
         <h2 className="font-serif text-[52px] tracking-tight leading-none">
        We don&apos;t just work together, we{' '}
        <span className="text-red">grow</span> together.
      </h2>

        <div className="mt-12 space-y-3">
          {/* Row A */}
          <div className="logos-mask overflow-hidden">
            <div className="logos-track logos-track-right">
              {[...logosRowA, ...logosRowA, ...logosRowA].map((src, i) => (
                <div
                  key={i}
                  className="h-[120px] w-[150px] shrink-0 bg-[#faf8f7] border-8 border-[#faf8f7] rounded-[20px] flex items-center justify-center px-4"
                >
                  <img
                    src={src}
                    alt=""
                    className="rounded"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row B */}
          <div className="logos-mask overflow-hidden">
            <div className="logos-track logos-track-left">
              {[...logosRowB, ...logosRowB, ...logosRowB].map((src, i) => (
                <div
                  key={i}
                  className="h-[120px] w-[150px] shrink-0 bg-[#faf8f7] border-8 border-[#faf8f7] rounded-[20px] flex items-center justify-center px-4"
                >
                  <img
                    src={src}
                    alt=""
                    className="rounded"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .logos-mask {
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }

        .logos-track {
          display: flex;
          align-items: center;
          gap: 12px;
          width: max-content;
          will-change: transform;
        }

        .logos-track-left {
          animation: scrollLeft 22s linear infinite;
        }

        .logos-track-right {
          animation: scrollRight 22s linear infinite;
        }

        /* 3 copies => move only 1/3 */
        @keyframes scrollLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.3333%);
          }
        }

        @keyframes scrollRight {
          from {
            transform: translateX(-33.3333%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  )
}