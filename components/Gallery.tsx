const rowA = [
  'https://framerusercontent.com/images/R6qU2vUGFz5GAySDCd2GI2yCns0.png?width=1024',
  'https://framerusercontent.com/images/YBIOADZj5EMcS7tWgAbuNf4XcTE.png?width=1024',
  'https://framerusercontent.com/images/NWTRkxDSFv3bHjMof65fa6o30.png?width=1024',
  'https://framerusercontent.com/images/QacaLzpAkr7yOGJLmPYa2LGvgI.png?width=1024',
  'https://framerusercontent.com/images/pZsfOpkaIqmnGsBmX9aS2bYnUy4.png?width=1024',
]

const rowB = [
  'https://framerusercontent.com/images/64OsMqkJC87666383uvpw01o.png?width=1024',
  'https://framerusercontent.com/images/XBOzkgEpMFaBu6Tzq9Nliww0qlM.png?width=1024',
  'https://framerusercontent.com/images/EUWwWNBn4FuErH0dgrTl4M6ZqE.png?width=1024',
  'https://framerusercontent.com/images/bINMHS6Z7AfsXv92u9zqjIa4WI.png?width=1024',
  'https://framerusercontent.com/images/y6q1FXxUo30FLBH4se9FBSQMYE.png?width=1024',
  'https://framerusercontent.com/images/XWftVWlImM3uhjSckAUCjFGaO6s.png?width=1024',
]

export default function Gallery() {
  return (
    <section className="max-w-[1400px] mx-auto pb-4 space-y-4">
      <div className="marquee-mask overflow-hidden">
        <div className="flex gap-[30px] w-max animate-marquee">
          {[...rowA, ...rowA].map((src, i) => (
            <div
              key={i}
              className="w-[390px] h-[300px] rounded-b-2xl overflow-hidden shrink-0 shadow-inner bg-[#f4f2f0]"
            >
              <img   style={{ padding: '20px' }} src={src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
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
              <img style={{ padding: '20px' }} src={src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
