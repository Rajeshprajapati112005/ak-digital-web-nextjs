const logos = [
  'https://framerusercontent.com/images/ZBMiH2N430LluD7H9wH6XZs6EZ0.png?width=2723&height=512',
  'https://framerusercontent.com/images/luDvGvJDgNU0eZo4PdWMhLoWOro.png?width=642&height=851',
  'https://framerusercontent.com/images/ACtlEGCe8iLlaDZFBzpuh8wMs4.png?width=400&height=100',
  'https://framerusercontent.com/images/3tPRRg7hXqn9SEy5IfOaZkhFOVo.png?width=3581&height=1789',
  'https://framerusercontent.com/images/Vo1YUWceh4H4n8CulxGQpEPVAc.png?width=4792&height=2976',
  'https://framerusercontent.com/images/xf9qrZ73Ok1glRrOgz7nNzpgpw.png?width=976&height=176',
  'https://framerusercontent.com/images/ZR5X9sDol6jGkeER2DwA3F0afU.png?width=2460&height=1528',
  'https://framerusercontent.com/images/BnDujRCyqlMVS8oaGHpDkvgcjg.png?width=2956&height=513',
  'https://framerusercontent.com/images/tKZ43F944IbnntN9BZRmNxU7Kg.png?width=1968&height=512',
  'https://framerusercontent.com/images/bcDbIDawJANBkXkKFMsh57ei7Q.png?width=925&height=155',
  'https://framerusercontent.com/images/wTFl2cOHqWCEAx4HMSu2JE4ACA.png?width=1000&height=411',
  'https://framerusercontent.com/images/X2h6IXXv9QruJH8zUrA1jkK90U.png?width=2795&height=519',
  'https://framerusercontent.com/images/Fv13I532kXbPgTOnOdQGWQYcSek.png?width=260&height=60',
]

export default function Logos() {
  return (
    <section style={{ backgroundColor: '#f5f1ee' }} id="collab" className=" mx-auto py-16 text-center">
      <h2 className="font-serif text-[52px] tracking-tight leading-none">
        We don&apos;t just work together, we{' '}
        <span className="text-red">grow</span> together.
      </h2>

      <div className="mt-12 marquee-mask overflow-hidden">
        <div className="flex items-center gap-3 w-max animate-marquee-slow">
          {[...logos, ...logos].map((src, i) => (
            <div
              key={i}
              className="h-[120px] w-[150px] shrink-0 bg-[#faf8f7] border-8 border-[#faf8f7] rounded-[20px] flex items-center justify-center px-4"
            >
              <img src={src} alt="" className="max-h-[44px] max-w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
