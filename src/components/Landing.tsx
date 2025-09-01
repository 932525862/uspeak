"use client"

import type React from "react"
import Image from "next/image"
import { useState } from "react"
import {  Users, Award, Globe ,Phone} from "lucide-react"
import logo from "../../public/logo.png"
export default  function Landing() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  return (
    <div id="form" className="min-h-[60vh] bg-[#f9fafb] from-background via-card to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating circles */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#f86aa5]/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-primary/10 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-[#f86aa5]/5 rounded-full blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-secondary/10 rounded-full blur-xl animate-pulse delay-500"></div>

        {/* Geometric patterns */}
        <div className="absolute top-1/3 left-0 w-64 h-64 bg-gradient-to-r from-[#f86aa5]/5 to-transparent rounded-full blur-3xl transform -translate-x-32"></div>
        <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-gradient-to-l from-primary/5 to-transparent rounded-full blur-3xl transform translate-x-40"></div>

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #f86aa5 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-8 lg:py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content Section (TEXT) */}
          <div className="bg-[#ff7aac] from-primary to-primary/80 text-primary-foreground p-8 lg:p-12 rounded-3xl shadow-2xl order-1 lg:order-1 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-foreground/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary-foreground/10 rounded-full translate-y-12 -translate-x-12"></div>

            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-[#ff7aac] rounded-xl">
                  <Image src={logo} alt="Logo" width={80} height={40} />
                </div>
                <span className="text-lg font-semibold opacity-90">English Learning Center</span>
              </div>

              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-balance">
                Orzuga yaqinroq bo\ling – o\qishga ariza bering!
              </h1>

              <div className="space-y-4 text-lg lg:text-xl leading-relaxed opacity-95">
                {/* <p>
                  Ingliz tilini o\rganishni boshlash hech qachon bunchalik oson bo\lmagan. Englify - sizga online
                  ta\limda ingliz tilini o\rganishning eng yaxshi usullarini taklif qiladi.
                </p> */}

                <p>Maqsadlaringizga tezroq erishish uchun darslarni bugundan boshlang!</p>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <div className="p-2 bg-primary-foreground/20 rounded-lg mx-auto w-fit mb-2">
                    <Users className="w-5 h-5" />
                  </div>
                  <p className="text-sm opacity-90">Expert Teachers</p>
                </div>
                <div className="text-center">
                  <div className="p-2 bg-primary-foreground/20 rounded-lg mx-auto w-fit mb-2">
                    <Award className="w-5 h-5" />
                  </div>
                  <p className="text-sm opacity-90">Certificates</p>
                </div>
                <div className="text-center">
                  <div className="p-2 bg-primary-foreground/20 rounded-lg mx-auto w-fit mb-2">
                    <Globe className="w-5 h-5" />
                  </div>
                  <p className="text-sm opacity-90">Global Access</p>
                </div>
              </div>

              {/* Decorative progress bar */}
              <div className="hidden lg:block mt-8">
                <div className="flex space-x-2">
                  <div className="w-16 h-1 bg-primary-foreground/40 rounded-full"></div>
                  <div className="w-8 h-1 bg-primary-foreground/60 rounded-full"></div>
                  <div className="w-4 h-1 bg-primary-foreground/80 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Section (FORM) */}
          <div className="order-2  lg:order-2">
            <div className="p-6 lg:p-8  shadow-2xl border-0 bg-card/90 backdrop-blur-sm rounded-3xl border border-border">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-foreground mb-2">Bepul konsultatsiya</h2>
                <p className="text-muted-foreground">Ingliz tili yo\lculigingizni boshlang</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Ismingiz va Familiyangiz"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full h-12 lg:h-14 text-base lg:text-lg border-2 border-border hover:border-primary/50 focus:border-primary bg-input placeholder:text-muted-foreground/70 rounded-xl transition-colors px-4 focus:outline-none focus:ring-0"
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Telefon raqamingiz"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full h-12 lg:h-14 text-base lg:text-lg border-2 border-border hover:border-primary/50 focus:border-primary bg-input placeholder:text-muted-foreground/70 rounded-xl transition-colors px-4 focus:outline-none focus:ring-0"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full h-12 lg:h-14 text-base lg:text-lg font-semibold bg-[#10b981] hover:bg-[#ff7aac] text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl transform hover:scale-[1.02] border-0 cursor-pointer"
                >
                  Bepul konsultatsiya olish
                </button>

                <p className="text-xs lg:text-sm text-muted-foreground text-center leading-relaxed">
                  Tugmani bosish orqali siz{" "}
                  <a href="#" className="text-primary hover:underline font-medium transition-colors">
                    shaxsiylik siyosatimizga
                  </a>{" "}
                  rozlik bildirasiz!
                </p>
              </form>

              <div className="mt-6 pt-6 border-t border-border/50">
                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>24/7 Support</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span>Free Trial</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 right-6">
          <button className="w-18 h-18 rounded-full bg-[#ff7aac] hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center">
            <Phone className="w-9 h-9" />
          </button>
        </div>


    </div>
  )
}
