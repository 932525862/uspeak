"use client";

import Image from "next/image";
import { useState } from "react";
import chat from "../../public/chae.png";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998");

  return (
    <main className="flex flex-col-reverse md:flex-row items-center justify-center flex-1 px-6 md:px-12 py-8 gap-8 bg-pink-500 min-h-[75vh]">
      <div className="text-center md:text-left max-w-xl flex flex-col items-center md:items-start">
        <h1 className="text-5xl md:text-6xl font-extrabold text-black leading-tight mb-8">
          Ingliz  tilini <br/> tez va oson o’rganing
        </h1>
        <button
          onClick={() => setOpen(true)}
          className="px-8 py-4 bg-black text-white rounded-2xl font-semibold shadow-xl hover:bg-gray-900 transition text-lg"
        >
          Find your tutor →
        </button>
      </div>

      {/* Right Image */}
      <div className="relative flex justify-center items-center w-full max-w-sm md:max-w-md">
        <div className="relative z-10 w-full">
          <Image
            src={chat}
            alt="Tutor"
            width={800}
            height={800}
            className="rounded-2xl shadow-2xl w-full object-cover"
          />
          {/* Mini Chat Image */}
          {/* <div className="absolute top-2 left-2 bg-white p-1 rounded-lg shadow-lg">
            <Image
              src={chat}
              alt="Student"
              width={400}
              height={200}
              className="rounded-lg"
            />
          </div> */}
        </div>

        {/* Layered background effect */}
        <div className="absolute top-6 right-[-20px] w-full h-[100%] bg-white rounded-2xl shadow-lg scale-95 z-0 hidden md:block" />
        <div className="absolute top-12 right-[-40px] w-full h-[100%] bg-white rounded-2xl shadow-lg scale-90 z-[-1] hidden md:block" />
      </div>

      {/* Modal */}
      {open && (
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
              onClick={() => setOpen(false)}
              className="mt-6 text-gray-600 hover:text-black text-sm underline block mx-auto"
            >
              Yopish
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
