"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const brands = [
  { id: 1, logo: "/assets/l1.webp", alt: "Business Standard" },
  { id: 2, logo: "/assets/l2.webp", alt: "Frontline" },
  { id: 3, logo: "/assets/l3.webp", alt: "Intel" },
  { id: 4, logo: "/assets/l4.webp", alt: "Vehance" },
  { id: 5, logo: "/assets/l5.webp", alt: "Elan" },

  { id: 6, logo: "/assets/l1.webp", alt: "Business Standard" },
  { id: 7, logo: "/assets/l2.webp", alt: "Frontline" },
  { id: 8, logo: "/assets/l3.webp", alt: "Intel" },
  { id: 9, logo: "/assets/l4.webp", alt: "Vehance" },
  { id: 10, logo: "/assets/l5.webp", alt: "Elan" },

  { id: 11, logo: "/assets/l1.webp", alt: "Business Standard" },
  { id: 12, logo: "/assets/l2.webp", alt: "Frontline" },
  { id: 13, logo: "/assets/l3.webp", alt: "Intel" },
  { id: 14, logo: "/assets/l4.webp", alt: "Vehance" },
  { id: 15, logo: "/assets/l5.webp", alt: "Elan" },
];

export default function TrustedBrands() {
  return (
    <section className="relative overflow-hidden bg-white!  py-[6vw] max-md:py-[60px]">

      {/* Background Shape */}
      <div className="absolute left-[8%] top-0 h-[18vw] w-[18vw] opacity-[0.03] max-md:hidden">
        <img
          src="/images/shape.svg"
          alt=""
          className="h-full w-full object-contain"
        />
      </div>

      <div className="relative z-10 mx-auto w-[92vw]">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            mb-[5vw]
            max-w-[75vw]
            text-center
            font-serif
            uppercase
            tracking-[0.08em]
            text-[#232323]
            text-[1.05vw]
            leading-[1.8]
            max-md:max-w-full
            max-md:text-[12px]
            max-md:leading-[22px]
            max-md:px-5
            max-md:mb-[50px]
          "
        >
          Trusted by 1,000+ brands as their preferred digital marketing agency
          in Mumbai. Chosen for one reason: Results.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
        >
          <Swiper
  modules={[Autoplay]}
  loop={true}
  slidesPerView={"auto"}
  speed={5000} // increase for slower movement
  spaceBetween={60}
  allowTouchMove={false}
  autoplay={{
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  }}

            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 60,
              },
              1440: {
                slidesPerView: 6,
                spaceBetween: 80,
              },
            }}
          >
            {brands.map((brand) => (
              <SwiperSlide key={brand.id}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="
                    group
                    relative
                    flex
                    h-[7vw]
                    items-center
                    justify-center
                    cursor-pointer
                    max-md:h-[70px]
                  "
                >
                  {/* Gray Layer */}

                  <img
                    src={brand.logo}
                    alt={brand.alt}
                    className="
                      absolute
                      max-h-full
                      max-w-full
                      object-contain
                      grayscale
                      opacity-100
                      transition-all
                      duration-500
                      group-hover:opacity-0
                    "
                  />

                  {/* Color Layer */}

                  <img
                    src={brand.logo}
                    alt={brand.alt}
                    className="
                      absolute
                      max-h-full
                      max-w-full
                      object-contain
                      opacity-0
                      scale-[0.98]
                      transition-all
                      duration-500
                      group-hover:opacity-100
                      group-hover:scale-100
                    "
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}