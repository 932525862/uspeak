"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const container = carouselRef.current;
        const cardWidth = 320 + 24; // card width + gap
        const maxScroll = container.scrollWidth - container.clientWidth;

        if (container.scrollLeft >= maxScroll) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: cardWidth, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="resul" className="bg-gray-50">
      <section className="py-8 px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}   // ❌ boshlanishi pastda
          whileInView={{ opacity: 1, y: 0 }} // ✅ ko‘rinishda pastdan chiqib keladi
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
            Bizning o‘quvchilarimizning natijalari va fikrlari
          </h2>
          <p className="text-gray-600 text-base max-w-xl mx-auto">
            O‘quvchilarimizning muvaffaqiyat hikoyalari va tajribalari
          </p>
        </motion.div>

        {/* Carousel Container */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-[#ff7aac] scrollbar-track-gray-200"
          >
            {[1, 2, 3, 4, 5].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex-none w-80 snap-start bg-white rounded-lg shadow-md border border-gray-200"
              >
                <div className="p-3">
                  <div className="aspect-[9/10] mb-2 rounded-lg overflow-hidden bg-gray-100">
                    <iframe
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                      title={`Student Success Story ${item}`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <h3 className="font-semibold text-sm mb-1 text-gray-900">
                    Student {item}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Bu joyda talabaning qisqa fikri bo‘ladi.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center gap-2 mt-6"
          >
            <button
              className="w-10 h-10 rounded-full border border-gray-300 bg-white hover:bg-gray-50 flex items-center justify-center transition-colors"
              onClick={() => {
                if (carouselRef.current) {
                  carouselRef.current.scrollBy({
                    left: -320,
                    behavior: "smooth",
                  });
                }
              }}
            >
              ◀
            </button>
            <button
              className="w-10 h-10 rounded-full border border-gray-300 bg-white hover:bg-gray-50 flex items-center justify-center transition-colors"
              onClick={() => {
                if (carouselRef.current) {
                  carouselRef.current.scrollBy({
                    left: 320,
                    behavior: "smooth",
                  });
                }
              }}
            >
              ▶
            </button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
