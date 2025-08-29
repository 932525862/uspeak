"use client"

import { useEffect, useRef } from "react"

export default function HomePage() {
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const container = carouselRef.current
        const cardWidth = 320 + 24 // card width + gap
        const maxScroll = container.scrollWidth - container.clientWidth

        if (container.scrollLeft >= maxScroll) {
          container.scrollTo({ left: 0, behavior: "smooth" })
        } else {
          container.scrollBy({ left: cardWidth, behavior: "smooth" })
        }
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div id="resul" className="bg-gray-50">
      {/* Student Results and Testimonials Section */}
      <section className="py-8 px-4 max-w-6xl mx-auto"> {/* py-16 → py-8, max-w-7xl → max-w-6xl */}
        <div className="text-center mb-8"> {/* mb-12 → mb-8 */}
          <h2 className="text-4xl md:text-5xl text-center font-bold text-gray-900 mb-6 text-balance "> {/* text-3xl → text-2xl */}
            Bizning o/quvchilarimizning natijalari va fikrlari
          </h2>
          <p className="text-gray-600 text-base max-w-xl mx-auto"> {/* text-lg → text-base, max-w-2xl → max-w-xl */}
            O\quvchilarimizning muvaffaqiyat hikoyalari va tajribalari
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-3 snap-x snap-mandatory"
          >
            {/* Video Card 1 */}
            <div className="flex-none w-80 snap-start bg-white rounded-lg shadow-md border border-gray-200">
              <div className="p-3">
                <div className="aspect-[9/10] mb-2 rounded-lg overflow-hidden bg-gray-100">
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Student Success Story 1"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <h3 className="font-semibold text-sm mb-1 text-gray-900">Aziza Karimova</h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Bu kurslar orqali men ingliz tilini mukammal o\rgandim va endi xalqaro kompaniyada ishlayman.
                  Ustozlarimga katta rahmat!
                </p>
              </div>
            </div>

            {/* Video Card 2 */}
            <div className="flex-none w-80 snap-start bg-white rounded-lg shadow-md border border-gray-200">
              <div className="p-3">
                <div className="aspect-[9/10] mb-2 rounded-lg overflow-hidden bg-gray-100">
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Student Success Story 2"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <h3 className="font-semibold text-sm mb-1 text-gray-900">Bobur Rahimov</h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  IELTS imtihonida 7.5 ball oldim! Bu natijaga erishishimda kursning roli juda katta bo\ldi. Tavsiya
                  qilaman!
                </p>
              </div>
            </div>

            {/* Video Card 3 */}
            <div className="flex-none w-80 snap-start bg-white rounded-lg shadow-md border border-gray-200">
              <div className="p-3">
                <div className="aspect-[9/10] mb-2 rounded-lg overflow-hidden bg-gray-100">
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Student Success Story 3"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <h3 className="font-semibold text-sm mb-1 text-gray-900">Malika Tosheva</h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  6 oyda ingliz tilini o\rganib, Amerika universitetiga grant yutdim. Bu kurslar hayotimni
                  o\zgartirdi!
                </p>
              </div>
            </div>

            {/* Video Card 4 */}
            <div className="flex-none w-80 snap-start bg-white rounded-lg shadow-md border border-gray-200">
              <div className="p-3">
                <div className="aspect-[9/10] mb-2 rounded-lg overflow-hidden bg-gray-100">
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Student Success Story 4"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <h3 className="font-semibold text-sm mb-1 text-gray-900">Sardor Aliyev</h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Speaking qismida juda qiynalardim, lekin endi erkin gaplasha olaman. Ustozlar juda professional!
                </p>
              </div>
            </div>

            {/* Video Card 5 */}
            <div className="flex-none w-80 snap-start bg-white rounded-lg shadow-md border border-gray-200">
              <div className="p-3">
                <div className="aspect-[9/10] mb-2 rounded-lg overflow-hidden bg-gray-100">
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Student Success Story 5"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <h3 className="font-semibold text-sm mb-1 text-gray-900">Nigora Usmanova</h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Grammatika va vocabulary bo\yicha juda ko\p bilim oldim. Endi kitoblarni ingliz tilida o\qiyman!
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-2 mt-6"> {/* mt-8 → mt-6 */}
            <button
              className="w-10 h-10 rounded-full border border-gray-300 bg-white hover:bg-gray-50 flex items-center justify-center transition-colors"
              onClick={() => {
                if (carouselRef.current) {
                  carouselRef.current.scrollBy({ left: -320, behavior: "smooth" })
                }
              }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="w-10 h-10 rounded-full border border-gray-300 bg-white hover:bg-gray-50 flex items-center justify-center transition-colors"
              onClick={() => {
                if (carouselRef.current) {
                  carouselRef.current.scrollBy({ left: 320, behavior: "smooth" })
                }
              }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
