"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const stories = [
  {
    id: 1,
    image: "/assets/s1.webp",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "",
  },
  {
    id: 2,
    image: "/assets/s2.webp",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Creme de la Creme",
  },
  {
    id: 3,
    image: "/assets/s3.webp",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "One team,\nOne dream, Syspree.",
  },
  {
    id: 4,
    image: "/assets/s4.webp",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "",
  },
  {
    id: 5,
    image: "/assets/s1.webp",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "",
  },
  {
    id: 6,
    image: "/assets/s2.webp",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Creme de la Creme",
  },
  {
    id: 7,
    image: "/assets/s3.webp",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "One team,\nOne dream, Syspree.",
  },
  {
    id: 8,
    image: "/assets/s4.webp",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "",
  },
];

export default function StoriesSection() {
  const [activeVideo, setActiveVideo] = useState(null);

  const marqueeStories = [...stories, ...stories];

  return (
    <>
      <section className="bg-[#F69208] overflow-hidden">
        <div className="pt-[80px] pb-[90px] md:pt-[5vw] md:pb-[6vw]">
          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p
              className="
                uppercase
                tracking-[2px]
                text-white
                font-medium
                text-[11px]
                md:text-[0.65vw]
              "
            >
              OUR STORIES
            </p>

            <h2
              className="
                text-white
                mt-[12px]
                text-[28px]
                md:text-[2vw]
                leading-[1.2]
                font-medium
              "
            >
              What's Happening at Syspree
            </h2>
          </motion.div>

          {/* Slider */}

          <div className="mt-[50px] md:mt-[4vw] overflow-hidden w-full">
            <motion.div
              className="flex w-max"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 40,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {marqueeStories.map((story, index) => (
                <motion.div
                  key={`${story.id}-${index}`}
                  whileHover={{
                    scale: 1.02,
                  }}
                  className="
                    relative
                    shrink-0
                    overflow-hidden
                    group
                    cursor-pointer

                    w-[220px]
                    h-[400px]
                    mr-[10px]

                    md:w-[19vw]
                    md:h-[35vw]
                    md:mr-[0.4vw]
                  "
                >
                  <Image
                    src={story.image}
                    alt={story.title || "Story"}
                    fill
                    priority={index < 4}
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  {/* Overlay */}

                  <div className="absolute inset-0 bg-black/20" />

                  {/* Logo */}

                  <div
                    className="
                      absolute
                      top-[12px]
                      left-[12px]
                      z-20
                    "
                  >
                    
                  </div>

                  {/* Play Button */}

                  <button
                    onClick={() => setActiveVideo(story.video)}
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      -translate-x-1/2
                      -translate-y-1/2
                      z-20

                      w-[72px]
                      h-[72px]

                      md:w-[4.5vw]
                      md:h-[4.5vw]

                      rounded-full
                      border-2
                      border-white
                      bg-white/10
                      backdrop-blur-sm

                      flex
                      items-center
                      justify-center

                      transition-all
                      duration-300

                      hover:scale-110
                    "
                  >
                    <div
                      className="
                        ml-[4px]

                        border-y-[12px]
                        border-y-transparent
                        border-l-[18px]
                        border-l-white

                        md:border-y-[0.75vw]
                        md:border-l-[1vw]
                      "
                    />
                  </button>

                  {/* Bottom Text */}

                  {story.title && (
                    <div
                      className="
                        absolute
                        bottom-[18px]
                        left-[16px]
                        right-[16px]
                        z-20
                      "
                    >
                      <h3
                        className="
                          text-white
                          whitespace-pre-line
                          leading-[1.15]
                          font-medium

                          text-[22px]
                          md:text-[1.25vw]
                        "
                      >
                        {story.title}
                      </h3>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Modal */}

      {activeVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setActiveVideo(null)}
          className="
            fixed
            inset-0
            bg-black/80
            z-[9999]
            flex
            items-center
            justify-center
            p-4
          "
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="
              relative
              w-full
              max-w-[1100px]
              aspect-video
              bg-black
              rounded-[20px]
              overflow-hidden
            "
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="
                absolute
                top-4
                right-4
                z-20
                text-white
                text-[32px]
              "
            >
              ×
            </button>

            <iframe
              src={`${activeVideo}?autoplay=1&rel=0`}
              title="Story Video"
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </motion.div>
        </motion.div>
      )}
    </>
  );
}