"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../../public/logo.png";

export default function Navbar() {
  const [lang, setLang] = useState("uz");
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll (kutubxonasiz)
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const NAV_HEIGHT = 80; // navbar balandligi (px) – kerak bo‘lsa moslashtiring
    const y = el.getBoundingClientRect().top + window.pageYOffset - NAV_HEIGHT;
    window.scrollTo({ top: y, behavior: "smooth" });
    setMenuOpen(false); // mobil menyuni yopamiz
  };

  if (!mounted) return null;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-[#ff7aac]"
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-12 py-4">
        {/* Logo + Links */}
        <div className="flex items-center gap-4">
          <div className="w-[140px]">
            <Image src={logo} alt="Logo" width={140} height={50} priority />
          </div>

          {/* Links (desktop) */}
          <nav className="hidden md:flex gap-6 text-black font-medium">
            <button onClick={() => scrollToSection("about")} className="hover:opacity-80">Biz haqimizda</button>
            <button onClick={() => scrollToSection("resul")} className="hover:opacity-80">Natijalar</button>
            <button onClick={() => scrollToSection("nega")} className="hover:opacity-80">Afzalliklar</button>
            <button onClick={() => scrollToSection("btru")} className="hover:opacity-80">O’qituvchilar</button>
            <button onClick={() => scrollToSection("prys")} className="hover:opacity-80">Kurslar</button>
            <button onClick={() => scrollToSection("form")} className="hover:opacity-80">Aloqa</button>
          </nav>
        </div>

        {/* Til tanlash (desktop) */}
        <div className="hidden md:block">
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="px-3 py-2 rounded-lg border-[#000000] border-2 text-sm font-medium focus:outline-none text-black"
          >
            <option value="uz">🇺🇿 Uzbek</option>
            <option value="ru">🇷🇺 Russian</option>
            <option value="en">🇬🇧 English</option>
          </select>
        </div>

        {/* Hamburger (mobil) */}
        <div className="flex items-center gap-4 md:hidden">
          <button className="p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg z-50 flex flex-col items-center gap-4 py-6">
          <button onClick={() => scrollToSection("about")} className="text-black font-medium">Biz haqimizda</button>
          <button onClick={() => scrollToSection("prys")} className="text-black font-medium">Kurslar</button>
          <button onClick={() => scrollToSection("resul")} className="text-black font-medium">Natijalar</button>
          <button onClick={() => scrollToSection("nega")} className="text-black font-medium">Afzalliklar</button>
          <button onClick={() => scrollToSection("btru")} className="text-black font-medium">O’qituvchilar</button>
          <button onClick={() => scrollToSection("form")} className="text-black font-medium">Aloqa</button>

          {/* Til tanlash (mobil) */}
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="px-3 py-2 rounded-lg border-[#000000] border-2 text-sm font-medium focus:outline-none text-black"
          >
            <option value="uz">🇺🇿 Uzbek</option>
            <option value="ru">🇷🇺 Russian</option>
            <option value="en">🇬🇧 English</option>
          </select>
        </div>
      )}
    </header>
  );
}
