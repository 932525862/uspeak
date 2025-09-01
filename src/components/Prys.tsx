"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { useState, useEffect } from "react";

function Modal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998");

  if (!open) return null;

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
  );
}

const Price: React.FC = () => {
  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState(false); // modal state
  // Tariflar ro'yxati
  const plans = [
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
      features: [
        "Guruh: 14-16 o'quvchi",
        "Haftada 3 kun 80 daqiqa",
        "Kitoblar: Handouts",
        "Academic support",
      ],
    },
  ];

  return (
    <section id="tariff" className="relative z-10">
      {/* Yuqori fon (pushti gradient) */}
      <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-r from-[#ff7aac] to-[#ff7aac] rounded-t-[40px] sm:rounded-t-[50px] z-[-1]" />

      {/* container markazga qo‘yildi */}
      <div className="container mx-auto pt-[30px] sm:pt-[50px] pb-[60px] sm:pb-[100px]">
        <div className="w-full text-center text-white">
          <h4 className="text-[28px] sm:text-[40px] font-[700] drop-shadow-lg">
            Kurslar va narxlar
          </h4>
          <p className="max-w-[400px] sm:max-w-[550px] mx-auto text-[16px] sm:text-[20px] mt-[15px] opacity-90">
            {/* Optional description */}
          </p>
        </div>

        <div className="bg-white flex justify-center items-center w-full rounded-t-[35px] sm:rounded-t-[45px] p-[30px] lg:p-[50px] mt-[30px]  sm:mt-[50px] shadow-2xl">
          <Swiper
            spaceBetween={25}
            slidesPerView={3}
            navigation={true}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            className="mySwiper"
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
          >
            {plans.map((plan, index) => (
              <SwiperSlide key={index}>
                <div className="group border border-gray-200 rounded-[30px] sm:rounded-[40px] shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="bg-gray-100 group-hover:bg-[#10b981] group-hover:text-white rounded-t-[30px] sm:rounded-t-[40px] p-[30px] sm:p-[40px] transition-all duration-300">
                    <div className="font-[600]">{plan.title}</div>
                    <div className="font-[700] text-[30px] mt-[15px]">
                      {plan.price}
                    </div>
                  </div>
                  <div className="p-[30px] sm:p-[40px] flex flex-col gap-[20px]">
                    <ul className="flex flex-col gap-[10px] list-disc list-inside text-gray-700 text-[20px]">
                      {plan.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                    {/* <a
                      href=""
                      className="bg-[#10b981] hover:bg-[#ff4f70] cursor-pointer w-full text-center text-white text-[20px] font-[600] rounded-[30px] py-[13px] transition-all duration-300"
                    >
                      Ro\yxatdan o\tish
                    </a> */}
                    <button 
                     onClick={() => setOpenModal(true)}
                    className="bg-[#10b981] hover:bg-[#ff4f70] cursor-pointer w-full text-center text-white text-[20px] font-[600] rounded-[30px] py-[13px] transition-all duration-300">
                      Ro\yxatdan o\tish
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </section>
  );
};

export default Price;
