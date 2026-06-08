"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Web Development",
    bg: "#F7941D",
  },
  {
    title: "Digital Marketing",
    bg: "#DE6623",
  },
  {
    title: "Artificial Intelligence",
    bg: "#EEAA63",
  },
  {
    title: "IT",
    bg: "#3C4048",
  },
  {
    title: "Outsourcing",
    bg: "#727681",
  },
];

export default function CapabilitiesSection() {
  return (
    <section className="w-full bg-[#e8e8e8] overflow-hidden">
      {/* Header */}
      <div className="bg-[#ffffff] text-center py-[60px] md:py-[4vw]">
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            uppercase tracking-[3px]
            text-[11px] md:text-[0.75vw]
            font-semibold text-[#222]
          "
        >
          Our Capabilities
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="
            mt-3
            text-[26px] md:text-[2vw]
            font-semibold text-black
          "
        >
          Let's start{" "}
          <span className="text-[#f7941d]">
            growing your business
          </span>{" "}
          today!
        </motion.h2>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
        {services.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.08,
              duration: 0.5,
            }}
            whileHover={{
              y: -8,
            }}
            style={{
              backgroundColor: item.bg,
            }}
            className="
              relative
              flex flex-col
              justify-center
              items-center
              border-r border-white/10
              h-[180px]
              md:h-[10vw]
              cursor-pointer
              group
            "
          >
            {/* top dash */}
            <span
              className="
                absolute
                top-4
                left-4
                w-[18px]
                md:w-[1vw]
                h-[2px]
                bg-white/70
              "
            />

            <h3
              className="
                text-white
                font-semibold
                text-center
                text-[22px]
                md:text-[1.15vw]
                px-4
              "
            >
              {item.title}
            </h3>

            <motion.div
              whileHover={{ rotate: -45 }}
              className="
                mt-8
                w-[34px]
                h-[34px]
                md:w-[2vw]
                md:h-[2vw]
                rounded-full
                border
                border-white
                flex
                items-center
                justify-center
              "
            >
              <ArrowRight
                size={16}
                className="text-white"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* CTA Area */}
      <div className="py-[70px] md:py-[6vw] px-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            relative
            overflow-hidden
            mx-auto

            w-full
            max-w-[1100px]

            md:max-w-[58vw]

            rounded-[18px]
            md:rounded-[1vw]

            bg-gradient-to-b
            from-[#cc6707]
            via-[#e67c09]
            to-[#f47d00]

            py-[60px]
            md:py-[7vw]
          "
        >
          {/* Background Shapes */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute left-[-50px] bottom-[-30px] w-[220px] h-[220px] rounded-full bg-black blur-md" />
            <div className="absolute right-[-60px] top-[20px] w-[260px] h-[260px] rounded-full bg-black blur-md" />
          </div>

          <div className="relative z-10 text-center">
            <p
              className="
                uppercase
                text-white
                font-semibold
                tracking-[1px]
                text-[10px]
                md:text-[1.1vw]
              "
            >
              Let's Talk About Your Digital Strategy
            </p>

            <h3
              className="
                mt-5
                text-white
                font-medium

                text-[26px]
                md:text-[1.9vw]
              "
            >
              Get a{" "}
              <span className="font-bold">
                FREE
              </span>{" "}
              Business Growth Consultation{" "}
              <span className="font-bold">
                NOW
              </span>
            </h3>

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                mt-8

                bg-white
                text-[#e67c09]

                font-medium

                px-8
                py-3

                md:px-[2vw]
                md:py-[0.8vw]

                rounded-full

                text-[16px]
                md:text-[1vw]

                shadow-lg
              "
            >
              Schedule NOW
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}