'use client'
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Overview() {
  const [choice, setChoice] = useState("");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="w-full bg-white">
      <div className="max-w-[85vw] mx-auto flex flex-col md:flex-row items-center justify-between py-10 md:py-[4vw] gap-10">

        {/* LEFT CONTENT */}
        <motion.div
          className="w-full md:w-[50%] flex items-center justify-center flex-col"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={item} className="text-[12px] md:text-[0.9vw] tracking-wide text-gray-600 uppercase">
            Right Clients, Right Price, Right Results Tailored For You
          </motion.p>

          <motion.h1 variants={item} className="mt-3 text-[26px] text-center md:text-[2.5vw] font-semibold leading-tight">
            <span className="text-orange-500">Digital Marketing</span>{" "}
            and <span className="text-orange-500">Web Development</span>
          </motion.h1>

          <motion.h2 variants={item} className="text-[26px] text-center md:text-[2.5vw] text-black font-medium">
            Built for <span className="text-orange-500"> Your Profit</span>
          </motion.h2>

          <motion.p variants={item} className="mt-2 text-[12px] md:text-[0.9vw] uppercase tracking-widest text-gray-700">
            Powered by our proven framework <span className="font-bold">CORE.</span>
          </motion.p>

          {/* QUESTION BOX */}
          <motion.div
            variants={item}
            className="mt-8 md:mt-[2vw] border border-gray-300 shadow-md p-5 md:p-[1.5vw] w-full md:w-[80%]"
          >
            <h3 className="text-center text-[16px] md:text-[1.2vw] mb-5">
              Whats your thought?
            </h3>

            <div className="space-y-4 text-[14px] md:text-[0.9vw]">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="choice"
                  value="yes"
                  onChange={(e) => setChoice(e.target.value)}
                  className="mt-1"
                />
                <span>
                  Yes, I want to increase profits through digital marketing{" "}
                  <span className="text-orange-500 font-semibold">88%</span>
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="choice"
                  value="no"
                  onChange={(e) => setChoice(e.target.value)}
                  className="mt-1"
                />
                <span>
                  No, I am not ready to grow just yet{" "}
                  <span className="text-orange-500 font-semibold">12%</span>
                </span>
              </label>
            </div>

            <div className="flex items-center justify-center">
              <button className="mt-6 md:px-[1.5vw] px-[5px] w-fit bg-orange-500 text-white py-2 md:py-[0.8vw] text-[14px] md:text-[1vw] font-semibold rounded-full hover:bg-orange-600 transition">
                I Made My Choice
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="w-full md:w-[50%] flex flex-col items-center"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full h-[250px] md:h-[30vw]">
            <Image
              src="/assets/ov.webp"
              alt="Growth Results"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/assets/line.png"
          alt="divider line"
          width={1920}
          height={120}
          className="w-full h-auto object-cover"
        />
      </motion.div>
    </section>
  );
}