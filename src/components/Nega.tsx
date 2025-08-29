"use client"

import { BookOpen, Shield, Trophy, Coffee } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"
import pas from "../../public/Pas.png"
export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-white" />,
      title: "Bepul ikkinchi o'qituvchi",
      description:
        "Mavzuni yaxshi o'zlashtirmagan bo'lsangiz, yordamchi o'qituvchilar har doim yoningizda va istagan mavzuyingizni qayta tushuntirib berishadi.",
      bgColor: "bg-orange-500",
      id: "teacher",
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "SHAXSIY YONDASHUV",
      description:
        " Ushbu platformada o‘quvchilarim uy vazifalarini bajarishlari, o‘zkamchiliklari haqida individual fikrmulohaza olishlari, haftalik, oraliq vayakuniy imtihonlarni topshirishlari mumkin. Eng muhimi, platforma o‘quvchilarimizni haqiqiy imtihon muhiti uchun tayyorlaydi.",
      bgColor: "bg-green-500",
      id: "test",   
    },
    {
      icon: null,
      title: "Tajribali o'qituvchilar",
      description:
        "Har bir uspeak mentori yillik tajribaga ega bo‘lib, kamida IELTS 8+ natijaga erishgan. Ular sizga nafaqat ingliz tilini, balki uni hayotda qanday qo‘llashni hamo‘rgatadi.",
      bgColor: "bg-blue-500",
      id: "teachers",
      isCenter: true,
    },
    {
      icon: <Trophy className="w-8 h-8 text-white" />,
      title: "Onlayn - format",
      description:
        "Dunyoning istalgan nuqtasidan 24/7 vaqtda ilovaga kirish imkoniyati bor. ",
      bgColor: "bg-red-500",
      id: "events",
    },
    {
      icon: <Coffee className="w-8 h-8 text-white" />,
      title: "natija kafolati",
      description:
        "Yillar davomida o‘rganib yurmang — uspeak maxsus metodikasi bilan ingliz tilida atigi bir necha oy ichida erkin gapiring! maxsus dasturimiz orqali ingliz tilida atigi 3 oyda ravon gapira boshlaysiz! ",
      bgColor: "bg-gray-800",
      id: "coworking",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length)
  }

  return (
    <div id="nega" className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
            Nega yoshlar bizni tanlashmoqda?
          </h1>
            {/* <p className="text-lg text-gray-600 max-w-3xl mx-auto text-pretty">
                Cambridge ingliz tili o'quv markazi 2014-yildan buyon yoshlarga ingliz tilini o'rgatib kelmoqda va hozirga
                kelib 14 ta filialgaega
            </p> */}
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Left Column - 2 cards stacked */}
          <div className="flex flex-col gap-8">
            <div className="h-80 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="p-8 h-full flex flex-col">
                <div className={`w-16 h-16 ${features[0].bgColor} rounded-full flex items-center justify-center mb-6`}>
                  {features[0].icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{features[0].title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">{features[0].description}</p>
              </div>
            </div>
            <div className="h-80 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="p-8 h-full flex flex-col">
                <div className={`w-16 h-16 ${features[1].bgColor} rounded-full flex items-center justify-center mb-6`}>
                  {features[1].icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{features[1].title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">{features[1].description}</p>
              </div>
            </div>
          </div>

          {/* Center Column - Teachers Section */}
          <div className="flex flex-col">
            <div className="h-[672px] bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="p-0 h-full flex flex-col">
                {/* Teacher Image */}
                <div className="relative h-80 overflow-hidden rounded-t-lg">
                  <Image src={pas} alt="Experienced teacher" fill className="object-cover" />
                </div>
                {/* Content */}
                <div className="p-8 flex-1 flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">{features[2].title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed text-center">{features[2].description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - 2 cards stacked */}
          <div className="flex flex-col gap-8">
            <div className="h-80 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="p-8 h-full flex flex-col">
                <div className={`w-16 h-16 ${features[3].bgColor} rounded-full flex items-center justify-center mb-6`}>
                  {features[3].icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{features[3].title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">{features[3].description}</p>
              </div>
            </div>
            <div className="h-80 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="p-8 h-full flex flex-col">
                <div className={`w-16 h-16 ${features[4].bgColor} rounded-full flex items-center justify-center mb-6`}>
                  {features[4].icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{features[4].title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">{features[4].description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {features.map((feature, index) => (
                <div key={feature.id} className="w-full flex-shrink-0 px-4">
                  <div className="h-96 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="p-0 h-full flex flex-col">
                      {feature.isCenter ? (
                        // Special layout for center card with actual image
                        <>
                          <div className="relative h-48 overflow-hidden rounded-t-lg">
                            <Image
                              src={pas} 
                              alt="Experienced teacher"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="p-6 flex-1 flex flex-col justify-center">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">{feature.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed text-center">{feature.description}</p>
                          </div>
                        </>
                      ) : (
                        // Regular card layout
                        <div className="p-6 h-full flex flex-col">
                          <div
                            className={`w-14 h-14 ${feature.bgColor} rounded-full flex items-center justify-center mb-4`}
                          >
                            {feature.icon}
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed flex-1">{feature.description}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-center items-center mt-6 gap-4">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? "bg-blue-500" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
