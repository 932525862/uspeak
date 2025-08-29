"use client"

import { useState, useEffect } from "react"
import { Check, ChevronLeft, ChevronRight, Phone } from "lucide-react"

// Kurslar ma'lumotlari
const courses = [
  {
    title: "General English",
    price: "820 000 so'm",
    features: [
      "Guruh: 13 (±1) talaba",
      "2 kitob: Student's book, Workbook",
      "Academic Support xizmati",
      "Har bir dars uchun video darslar",
      "Speaking klubi va master-klass",
    ],
  },
  {
    title: "IELTS",
    price: "890 000 so'm",
    features: [
      "Guruh: 13 (±1) talaba",
      "2 kitob: Student's book, Workbook",
      "Academic Support xizmati",
      "Har bir dars uchun video darslar",
      "Speaking klubi va master-klass",
      "Mock IELTS",
    ],
  },
  {
    title: "SAT Math",
    price: "920 000 so'm",
    features: ["Guruh: 14-16 o'quvchi", "Haftada 3 kun 80 daqiqa", "Kitoblar: Handouts", "Academic support"],
  },
]

// Modal komponenti
function Modal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("+998")

  if (!open) return null

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl p-8 w-[90%] max-w-md shadow-2xl animate-fadeIn">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">
          Ushbu fo‘rmani to‘ldiring, tez orada aloqaga chiqamiz
        </h2>

        <form className="flex flex-col gap-4">
          {/* Ism */}
          <input
            type="text"
            placeholder="Ismingiz"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-2 text-black rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          {/* Telefon */}
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border-2 text-black rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          <button
            type="submit"
            className="bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600 transition"
          >
            Yuborish
          </button>
        </form>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="mt-6 text-gray-600 hover:text-black text-sm underline block mx-auto"
        >
          Yopish
        </button>
      </div>
    </div>
  )
}

export default function CoursePricing() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [openModal, setOpenModal] = useState(false) // modal state

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % courses.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + courses.length) % courses.length)
  }

  return (
    <div id="prys" className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">KURSLAR VA NARXLAR</h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-16">
          {courses.map((course, index) => (
            <div
              key={index}
              className="relative bg-card border border-border rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="p-6 text-center pb-4">
                <h3 className="text-2xl font-bold text-card-foreground mb-2">{course.title}</h3>
                <div className="text-3xl font-bold text-primary">{course.price}</div>
                <div className="w-full h-px bg-border mt-4"></div>
              </div>
              <div className="p-6 pt-0 space-y-4">
                <ul className="space-y-3">
                  {course.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-card-foreground text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6">
                  <button
                    onClick={() => setOpenModal(true)}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-4 rounded-lg transition-colors"
                  >
                    Ro\yxatdan o\tish
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 border border-primary flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex space-x-2">
              {courses.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? "bg-primary" : "bg-border"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 border border-primary flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {courses.map((course, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <div className="bg-card border border-border rounded-lg shadow-sm">
                    <div className="p-6 text-center pb-4">
                      <h3 className="text-xl font-bold text-card-foreground mb-2">{course.title}</h3>
                      <div className="text-2xl font-bold text-primary">{course.price}</div>
                      <div className="w-full h-px bg-border mt-4"></div>
                    </div>
                    <div className="p-6 pt-0 space-y-4">
                      <ul className="space-y-3">
                        {course.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-card-foreground text-sm leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4">
                        <button
                          onClick={() => setOpenModal(true)}
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-4 rounded-lg transition-colors"
                        >
                          Ro\yxatdan o\tish
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Button */}
        <div className="fixed bottom-6 right-6">
          <button className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center">
            <Phone className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Modal qo'shildi */}
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  )
}
