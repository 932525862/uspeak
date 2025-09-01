"use client"

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

// Animatsiya umumiy variantlari
const fadeInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
}

export default function GraduatesShowcase() {
  return (
    <section
      id="btru"
      className="py-12 px-4 bg-gradient-to-b from-white via-gray-100 to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Sarlavha */}
        <motion.h2
          className="text-4xl md:text-5xl text-center font-bold text-gray-900 mb-6"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Bizning bitruvchilarimiz
        </motion.h2>

        {/* Carousel */}
        <motion.div
          className="relative max-w-6xl mx-auto"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div
            className="flex gap-6 overflow-x-auto px-10 pb-6 snap-x snap-mandatory 
                       scrollbar-thin scrollbar-thumb-[#ff7aac] scrollbar-track-gray-200"
          >
            {graduates.map((graduate, i) => (
              <motion.div
                key={graduate.id}
                className="relative flex-shrink-0 snap-start w-[280px] h-[380px] rounded-3xl 
                           overflow-hidden shadow-2xl bg-gray-200"
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <img
                  src={graduate.image}
                  alt={graduate.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#f86aa5]/70 to-transparent"></div>

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white z-20">
                  <div>
                    <h3 className="text-lg font-bold">{graduate.name}</h3>
                    <p className="text-sm opacity-90">{graduate.duration}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
