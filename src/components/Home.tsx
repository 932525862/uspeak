"use client";

import Image from "next/image";
import { useState } from "react";
import chat from "../../public/chae.png";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998");

  return (
    <main
      className="flex flex-col-reverse md:flex-row items-center justify-center flex-1 
  px-4 md:px-12 py-6 md:py-8 gap-6 md:gap-8 bg-[#ff7aac]
  min-h-[85vh] md:min-h-[62vh]"
    >
      <div className="text-center md:text-left max-w-xl flex flex-col items-center md:items-start">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-black leading-snug md:leading-tight mb-6 md:mb-8">
          Ingliz tilini <br /> tez va oson o’rganing
        </h1>

        {/* Button */}
        <button
          onClick={() => setOpen(true)}
          className="px-6 sm:px-8 py-3 sm:py-4 bg-black text-white rounded-xl md:rounded-2xl font-semibold shadow-xl hover:bg-gray-900 transition text-base sm:text-lg md:text-xl"
        >
          Find your tutor →
        </button>
      </div>

      {/* Right Image */}
      <div className="relative flex justify-center items-center w-full max-w-xs sm:max-w-sm md:max-w-md">
        <div className="relative z-10 w-full">
          <Image
            src={chat}
            alt="Tutor"
            width={800}
            height={800}
            className="rounded-xl md:rounded-2xl shadow-2xl w-full object-cover"
          />
        </div>

        {/* Layered background effect */}
        <div className="absolute top-4 right-[-10px] w-full h-[100%] bg-white rounded-xl md:rounded-2xl shadow-lg scale-95 z-0 hidden md:block" />
        <div className="absolute top-8 right-[-20px] w-full h-[100%] bg-white rounded-xl md:rounded-2xl shadow-lg scale-90 z-[-1] hidden md:block" />
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl p-6 sm:p-8 w-[90%] max-w-md shadow-2xl animate-fadeIn">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center text-black">
              Ushbu fo‘rmani to‘ldiring, tez orada aloqaga chiqamiz
            </h2>

            <form className="flex flex-col gap-4">
              {/* Ism */}
              <input
                type="text"
                placeholder="Ismingiz"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-2 text-black rounded-lg px-3 py-2 sm:px-4 sm:py-3 focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm sm:text-base"
              />

              {/* Telefon */}
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border-2 text-black rounded-lg px-3 py-2 sm:px-4 sm:py-3 focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm sm:text-base"
              />

              <button
                type="submit"
                className="bg-pink-500 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-pink-600 transition text-sm sm:text-base"
              >
                Yuborish
              </button>
            </form>

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="mt-6 text-gray-600 hover:text-black text-xs sm:text-sm underline block mx-auto"
            >
              Yopish
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
