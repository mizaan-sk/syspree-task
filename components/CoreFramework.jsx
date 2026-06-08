"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const coreItems = [
  {
    title: "Consult",
    icon: "/assets/w1.webp",
    description:
      "Marketing is done right when we understand you, your clients and target them with the right strategy. The first step to digital success.",
  },
  {
    title: "Optimize",
    icon: "/assets/w2.webp",
    description:
      "Here we execute what we strategized. Doing what we say and what is a habit at Sypree. This reflects in our successful results.",
  },
  {
    title: "Reinforce",
    icon: "/assets/w3.webp",
    description:
      "At Sypree, we don't rest on our laurels. We continue improving and refining strategies to ensure lasting success.",
  },
  {
    title: "Excel",
    icon: "/assets/w4.webp",
    description:
      "Excellence in all we do. With Sypree, you don't just strive for success, you strive harder for excellence.",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

export default function CoreFramework() {
  return (
    <section className="relative overflow-hidden bg-white! py-[60px] md:py-[5vw]">
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
        <Image
          src="/images/core-bg.png"
          alt="Background"
          width={700}
          height={700}
          className="w-[90vw] max-w-[700px] h-auto"
        />
      </div>

      <div className="relative z-10 mx-auto w-[92%] max-w-[1600px]">
        {/* Top Label */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            text-center
            text-[#f58c1f]
            uppercase
            tracking-[2px]
            font-semibold
            text-[11px]
            md:text-[0.72vw]
          "
        >
          Inhouse Proven Framework
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="
            mt-3
            text-center
            font-serif
            font-medium
            text-[28px]
            md:text-[2vw]
            text-[#111]
          "
        >
          The{" "}
          <span className="font-bold text-[#f58c1f]">
            CORE
          </span>{" "}
          Framework: Consult, Optimize, Reinforce, Excel
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="
            mx-auto
            mt-5
            max-w-[900px]
            text-center
            leading-relaxed
            text-[#666]
            text-[14px]
            md:text-[0.95vw]
          "
        >
          Our in-house CORE Framework is the foundation of success. By
          focusing on consulting, optimizing, reinforcing strategies and
          driving excellence, we help businesses achieve sustainable growth
          through a structured and data-driven approach.
        </motion.p>

        {/* Center Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center mt-10 md:mt-[3vw]"
        >
          <div className="relative">
            <Image
              src="/assets/ab.webp"
              alt="CORE Framework"
              width={320}
              height={320}
              className="
                w-[220px]
                md:w-[18vw]
                h-auto
              "
            />
          </div>
        </motion.div>

        {/* Cards */}
        <div
          className="
            mt-12
            md:mt-[4vw]
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-5
            md:gap-[1.5vw]
          "
        >
          {coreItems.map((item, index) => (
            <motion.div
              key={item.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                transition: {
                  duration: 0.25,
                },
              }}
              className="
                bg-white
                border
                border-[#e8e8e8]
                rounded-[12px]
                shadow-sm
                hover:shadow-xl
                transition-all
                duration-300
                p-[24px]
                md:p-[1.4vw]
                min-h-[280px]
                md:min-h-[18vw]
              "
            >
              <div className="mb-5">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={40}
                  height={40}
                  className="
                    w-[32px]
                    md:w-[2vw]
                    h-auto
                  "
                />
              </div>

              <h3
                className="
                  text-[#f58c1f]
                  font-semibold
                  text-[24px]
                  md:text-[1.4vw]
                  mb-4
                  font-serif
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  text-[#444]
                  leading-relaxed
                  text-[14px]
                  md:text-[0.92vw]
                "
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mt-12 md:mt-[4vw]"
        >
          <button
            className="
              bg-[#f58c1f]
              hover:bg-[#e47f14]
              text-white
              font-semibold
              rounded-full
              transition-all
              duration-300
              shadow-lg
              
              px-[28px]
              py-[14px]
              
              md:px-[2.3vw]
              md:py-[0.9vw]
              
              text-[15px]
              md:text-[1vw]
            "
          >
            Find Out How CORE Can Help You
          </button>
        </motion.div>
      </div>
    </section>
  );
}