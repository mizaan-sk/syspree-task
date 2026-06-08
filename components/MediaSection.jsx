"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const mediaItems = [
  {
    quote:
      "SySpree's results-driven approach emphasizes trust and transparency.",
    source: "MSN",
    color: "#1D9BF0",
  },
  {
    quote:
      "SySpree remains the gateway to digital triumphs.",
    source: "Business Insider",
    color: "#333333",
  },
  {
    quote:
      "SySpree's inhouse IP generates unparalleled growth.",
    source: "Active",
    color: "#D32F2F",
  },
];

export default function MediaSection() {
  return (
    <section className="relative w-full md:max-w-[72vw] mx-auto bg-white overflow-hidden">
      {/* Athlete Silhouette */}
      <div
        className="
          absolute
          right-0
          top-0
          hidden
          lg:block
          w-[28vw]
          h-full
          opacity-[0.05]
          pointer-events-none
        "
      >
        <img
          src="/athlete-silhouette.png"
          alt=""
          className="w-full h-full object-contain object-right"
        />
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[90vw]
          py-[70px]
          md:py-[5vw]
        "
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="
              block
              uppercase
              tracking-[2px]
              text-[#111]

              text-[11px]
              md:text-[0.65vw]
            "
          >
            Media
          </span>

          <h2
            className="
              mt-4
              font-medium
              text-[#f58220]

              text-[28px]
              md:text-[1.9vw]
            "
          >
            Syspree in Media
          </h2>

          <p
            className="
              mt-4
              text-[#555]
              leading-relaxed

              text-[14px]
              md:text-[0.82vw]

              max-w-full
              md:max-w-[42vw]
            "
          >
            Our work and achievements have been recognized in
            leading newspapers, blogs, and industry
            publications. Here are some of the places where
            SySpree has been featured.
          </p>
        </motion.div>

        {/* Cards */}
     <div
  className="
    mt-10
    md:mt-[3vw]

    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3

    gap-6
    md:gap-[1.5vw]

    max-w-full
    md:max-w-[72vw]

    mx-auto
  "
>
          {mediaItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
                boxShadow:
                  "0 20px 40px rgba(0,0,0,0.08)",
              }}
              className="
                bg-white

                border
                border-[#d8d8d8]

                p-6
                md:p-[1.5vw]

                min-h-[220px]
                md:min-h-[13vw]

                transition-all
                duration-300
              "
            >
              <Quote
                className="
                  text-[#f58220]

                  w-7
                  h-7

                  md:w-[1.5vw]
                  md:h-[1.5vw]
                "
                strokeWidth={2.5}
              />

              <p
                className="
                  mt-5

                  text-[#222]
                  leading-relaxed

                  text-[16px]
                  md:text-[0.95vw]
                "
              >
                {item.quote}
              </p>

              <div
                className="
                  mt-8
                  flex
                  items-center
                "
              >
                <span
                  style={{
                    color: item.color,
                  }}
                  className="
                    font-semibold

                    text-[15px]
                    md:text-[0.9vw]
                  "
                >
                  {item.source}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}