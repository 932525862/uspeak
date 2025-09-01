"use client"

import { BookOpen, Shield, Trophy, Coffee } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"
import pas from "../../public/Pas.png"

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
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
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "SHAXSIY YONDASHUV",
      description:
        "Ushbu platformada o‘quvchilarim uy vazifalarini bajarishlari, individual fikr olishlari, imtihon topshirishlari mumkin. Eng muhimi, haqiqiy imtihon muhiti uchun tayyorlaydi.",
      bgColor: "bg-green-500",
    },
    {
      icon: null,
      title: "Tajribali o'qituvchilar",
      description:
        "Har bir uspeak mentori kamida IELTS 8+ natijaga ega. Sizga ingliz tilini va uni hayotda qanday qo‘llashni ham o‘rgatadi.",
      bgColor: "bg-blue-500",
      isCenter: true,
    },
    {
      icon: <Trophy className="w-8 h-8 text-white" />,
      title: "Onlayn - format",
      description:
        "Dunyoning istalgan nuqtasidan 24/7 vaqtda ilovaga kirish imkoniyati bor.",
      bgColor: "bg-red-500",
    },
    {
      icon: <Coffee className="w-8 h-8 text-white" />,
      title: "Natija kafolati",
      description:
        "Yillar davomida o‘rganib yurmang — uspeak maxsus metodikasi bilan ingliz tilida atigi bir necha oy ichida erkin gapiring!",
      bgColor: "bg-gray-800",
    },
  ]

  return (
    <div id="nega" className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nega yoshlar bizni tanlashmoqda?
          </h1>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Left column */}
          <div className="flex flex-col gap-8">
            {features.slice(0, 2).map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="h-80 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="p-8 h-full flex flex-col">
                  <div className={`w-16 h-16 ${f.bgColor} rounded-full flex items-center justify-center mb-6`}>
                    {f.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{f.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{f.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center column */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col"
          >
            <div className="h-[672px] bg-white rounded-lg shadow-md hover:shadow-lg overflow-hidden">
              <div className="relative h-80 overflow-hidden">
                <Image src={pas} alt="Experienced teacher" fill className="object-cover" />
              </div>
              <div className="p-8 flex-1 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                  {features[2].title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">{features[2].description}</p>
              </div>
            </div>
          </motion.div>

          {/* Right column */}
          <div className="flex flex-col gap-8">
            {features.slice(3).map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="h-80 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="p-8 h-full flex flex-col">
                  <div className={`w-16 h-16 ${f.bgColor} rounded-full flex items-center justify-center mb-6`}>
                    {f.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{f.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{f.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
