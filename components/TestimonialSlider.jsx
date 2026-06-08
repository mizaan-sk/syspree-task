"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Fancybox } from "@fancyapps/ui";
import { motion } from "framer-motion";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  { id: 1, thumbnail: "/assets/t1.webp", youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
  { id: 2, thumbnail: "/assets/t2.webp", youtubeUrl: "https://www.youtube.com/watch?v=jNQXAC9IVRw" },
  { id: 3, thumbnail: "/assets/t3.webp", youtubeUrl: "https://www.youtube.com/watch?v=M7lc1UVf-VE" },

  { id: 4, thumbnail: "/assets/t1.webp", youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
  { id: 5, thumbnail: "/assets/t2.webp", youtubeUrl: "https://www.youtube.com/watch?v=jNQXAC9IVRw" },
  { id: 6, thumbnail: "/assets/t3.webp", youtubeUrl: "https://www.youtube.com/watch?v=M7lc1UVf-VE" },

  { id: 7, thumbnail: "/assets/t1.webp", youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
  { id: 8, thumbnail: "/assets/t2.webp", youtubeUrl: "https://www.youtube.com/watch?v=jNQXAC9IVRw" },
  { id: 9, thumbnail: "/assets/t3.webp", youtubeUrl: "https://www.youtube.com/watch?v=M7lc1UVf-VE" },

  { id: 10, thumbnail: "/assets/t1.webp", youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
  { id: 11, thumbnail: "/assets/t2.webp", youtubeUrl: "https://www.youtube.com/watch?v=jNQXAC9IVRw" },
  { id: 12, thumbnail: "/assets/t3.webp", youtubeUrl: "https://www.youtube.com/watch?v=M7lc1UVf-VE" },
];
const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
export default function TestimonialSlider() {
  useEffect(() => {
    Fancybox.bind('[data-fancybox="testimonials"]', {
      dragToClose: false,
      animated: true,
      showClass: "fancybox-fadeIn",
      hideClass: "fancybox-fadeOut",
      Toolbar: {
        display: {
          left: [],
          middle: [],
          right: ["close"],
        },
      },
      Youtube: {
        autoplay: true,
      },
    });

    return () => {
      Fancybox.destroy();
    };
  }, []);

  return (
    <motion.section
  className="relative overflow-hidden  "
  variants={sectionVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>
      {/* Heading */}
      <div className="py-[1rem] md:py-[1vw]">
        <h2
          className="
            text-center
            uppercase
            tracking-[0.08em]
            text-[#24364d]
            font-serif
            text-[1rem]
            md:text-[1.1vw]
          "
        >
          OUR CLIENTS SPEAK FOR US
        </h2>
      </div>

      {/* Orange Section */}
      <div className="relative bg-[#f7931a] py-[1.5rem] md:py-[2vw]">
        {/* Left Arrow */}
        <button
          className="
            testimonial-prev
            absolute
            left-[0.5rem]
            md:left-[0.8vw]
            top-1/2
            z-30
            -translate-y-1/2
            text-white
            hover:opacity-80
          "
        >
          <FiChevronLeft className="text-[2rem] md:text-[2vw]" />
        </button>

        {/* Right Arrow */}
        <button
          className="
            testimonial-next
            absolute
            right-[0.5rem]
            md:right-[0.8vw]
            top-1/2
            z-30
            -translate-y-1/2
            text-white
            hover:opacity-80
          "
        >
          <FiChevronRight className="text-[2rem] md:text-[2vw]" />
        </button>

        <Swiper
          modules={[Navigation]}
          loop
          centeredSlides
          speed={700}
          navigation={{
            prevEl: ".testimonial-prev",
            nextEl: ".testimonial-next",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.15,
              spaceBetween: 12,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="w-full"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              {({ isActive }) => (
                <div className="flex justify-center items-center">
                  <a
                    href={item.youtubeUrl}
                    data-fancybox="testimonials"
                    className="block cursor-pointer"
                  >
                    <div
                      className="
                        relative
                        overflow-hidden
                        bg-white
                        shadow-lg
                        border-[0.15rem]
                        border-white

                        w-[20rem]
                        h-[8rem]

                        md:w-[32vw]
                        md:h-[20vw]

                        transition-all
                        duration-500
                      "
                      style={{
                        transform: isActive
                          ? "perspective(1200px) rotateY(0deg) scale(1)"
                          : item.id === 1
                          ? "perspective(1200px) rotateY(13deg) scale(.92)"
                          : item.id === 3
                          ? "perspective(1200px) rotateY(-13deg) scale(.92)"
                          : "perspective(1200px) rotateY(13deg) scale(.92)",
                      }}
                    >
                      <Image
                        src={item.thumbnail}
                        alt="Client Testimonial"
                        fill
                        priority
                        className="object-cover"
                      />

                      {/* Play Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                        <div
                          className="
                            flex
                            items-center
                            justify-center
                            rounded-full
                            bg-white/95
                            shadow-lg

                            w-[3.5rem]
                            h-[3.5rem]

                            md:w-[4vw]
                            md:h-[4vw]
                          "
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="#f7931a"
                            className="
                              w-[1.5rem]
                              h-[1.5rem]
                              md:w-[1.4vw]
                              md:h-[1.4vw]
                            "
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Bottom Grey Strip */}
      <div className="h-[1.5rem] md:h-[1.8vw]  " />
    </motion.section>
  );
}