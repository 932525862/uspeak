"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import Talab from "../../public/64d8bff8a9ff3.png"

interface Graduate {
  id: number
  name: string
  score: number
  duration: string
  image: string
}

const graduates: Graduate[] = [
  { id: 1, name: "Saodat", score: 8.0, duration: "O'QIGAN: 5 OY", image: Talab.src },
  { id: 2, name: "Anastasiya", score: 8.0, duration: "O'QIGAN: 6 OY", image: Talab.src },
  { id: 3, name: "Naima", score: 8.0, duration: "O'QIGAN: 4 OY", image: Talab.src },
  { id: 4, name: "Dilnoza", score: 8.0, duration: "O'QIGAN: 5 OY", image: Talab.src },
  { id: 5, name: "Madina", score: 8.0, duration: "O'QIGAN: 7 OY", image: Talab.src },
  { id: 6, name: "Aziza", score: 8.0, duration: "O'QIGAN: 4 OY", image: Talab.src },
]

export default function GraduatesShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Responsive: screen o‘lchamiga qarab card sonini aniqlash
  const getCardsPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1 // mobile
      if (window.innerWidth < 1024) return 2 // tablet
    }
    return 4 // desktop
  }

  const cardsPerView = getCardsPerView()
  const maxIndex = Math.max(0, graduates.length - cardsPerView)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1))
  }

  const visibleGraduates = graduates.slice(currentIndex, currentIndex + cardsPerView)

  return (
    <section id="btru" className="py-12 px-4 bg-gradient-to-b from-white via-gray-100 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: 100 }}   // o‘ngdan chiqadi
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl text-center font-bold text-gray-900 mb-6 text-balance"
        >
          Bizning bitruvchilarimiz
        </motion.h2>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-lg rounded-full w-10 h-10 border border-gray-200 flex items-center justify-center"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-lg rounded-full w-10 h-10 border border-gray-200 flex items-center justify-center"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Carousel */}
          <div className="flex gap-6 overflow-hidden px-10">
            {visibleGraduates.map((graduate, index) => (
              <motion.div
                key={graduate.id}
                initial={{ opacity: 0, x: 120 }}   // ❌ boshlanishi o‘ngdan
                whileInView={{ opacity: 1, x: 0 }} // ✅ joyida to‘xtaydi
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 h-[380px] rounded-3xl overflow-hidden shadow-2xl bg-gray-200"
              >
                {/* Rasm */}
                <img
                  src={graduate.image}
                  alt={graduate.name}
                  className="w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#ff7aac]/70 to-transparent"></div>

                {/* Matn joylashuvi */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white z-20">
                  <div>
                    <h3 className="text-lg font-bold">{graduate.name}</h3>
                    <p className="text-sm opacity-90">{graduate.duration}</p>
                  </div>
                  <div className="text-4xl font-bold drop-shadow-lg">
                    {graduate.score.toFixed(1)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Indicator dots */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center mt-6 space-x-2"
          >
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-[#f86aa5]" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
