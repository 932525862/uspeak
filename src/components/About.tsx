"use client"

import { useEffect, useRef, useState } from "react"

interface CounterProps {
  end: number
  label: string
  duration?: number
}

function AnimatedCounter({ end, label, duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const counterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      // Generate random numbers during animation, then settle on final value
      if (progress < 0.8) {
        const randomValue = Math.floor(Math.random() * end * 1.5)
        setCount(randomValue)
      } else {
        // Smooth transition to final value
        const easeOut = 1 - Math.pow(1 - (progress - 0.8) / 0.2, 3)
        const finalValue = Math.floor(easeOut * end)
        setCount(finalValue)
      }

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isVisible, end, duration])

  return (
    <div ref={counterRef} className="text-center">
      <div className="text-5xl md:text-6xl font-bold text-gray-800 mb-2">{count.toLocaleString()}</div>
      <div className="text-sm text-gray-600 leading-relaxed">{label}</div>
    </div>
  )
}

export default function HomePage() {
  return (
    <div id="about" className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
          {/* Video Section */}
          <div className="w-full lg:w-1/2">
            <div className="w-full h-80 md:h-96 lg:h-[500px] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Inter Nation School Video"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl md:text-4xl  font-bold text-gray-800 mb-6 text-balance">
              INGLIZ TILI PLATFORMAMIZ HAQIDA
            </h1>

            <div className="space-y-4 text-xl text-gray-600 leading-relaxed text-pretty">
              <p>
                Uspeak- ingliz tilini atigi 3 oy ichida ravon gapirishni boshlang! Jonli darslar, shaxsiy mentorlar,
                interaktiv mashqlar va gamifikatsiya orqali qisqa vaqt ichida erkin muloqot qiling.
              </p>

              <p>
                Bizning jamoamiz – xalqaro sertifikatlarga ega tajribali mutaxassislar: TESOL, IELTS, CEFR, TESL. Biz
                zamonaviy metodlar, individual yondashuv va interaktiv texnologiyalar orqali ta'limni samarali va
                qiziqarli qilamiz.
              </p>

              <p>
                Farzandingiz yoki o'zingiz ingliz tilini mustaqil o'rganib, natijalarni esa kuzatib boring. Telefoningiz
                bo'lsa bas — Uspeak bilan ingliz tilini istalgan joyda va istalgan vaqtda o'rganing! 24/7 o'zingizga
                qulay bo'lgan joyda: uyda, ko'chada, kafeda, tog'da va hatto choyxonada ham ingliz tilini o'rganasiz.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-9 pt-12 border-t border-gray-200">
          <div className="rounded-lg p-8 border border-gray-200 bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-xl  text-[#000000] mb-2">Bizda</div>
                <AnimatedCounter end={12} label="filial mavjud" />
              </div>

              <div className="text-center">
                <div className="text-xl  text-[#000000] mb-2">Ingliz tili kurslarimizda</div>
                <AnimatedCounter end={18000} label="o'quvchilar bor" />
              </div>

              <div className="text-center">
                <div className="text-xl  text-[#000000] mb-2">Xodimlarimiz</div>
                <AnimatedCounter end={500} label="dan ziyod" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
