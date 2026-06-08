"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function AboutSection() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = (e.clientX - left - width / 2) / 20;
    const y = (e.clientY - top - height / 2) / 20;

    setTilt({ x, y });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <>
      <section className="w-full bg-white flex flex-col lg:flex-row overflow-hidden">
        {/* LEFT SIDE */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full lg:w-[65vw] px-5 lg:px-[6vw] py-10 lg:py-[4vw] flex flex-col"
        >
          {/* IMPORTANT FIX FOR SCROLL */}
          <div className="flex flex-col min-h-0">
            <motion.h2
              variants={itemVariants}
              className="text-2xl text-black! lg:text-[2.2vw] font-bold"
            >
              About Syspree
            </motion.h2>

            <motion.h3
              variants={itemVariants}
              className="text-lg lg:text-[1.5vw] text-orange-500 font-semibold mt-2"
            >
              Powerhouse of Digital Success
            </motion.h3>

            {/* SCROLL FIX IS HERE */}
            <div className="mt-4 max-h-[60vh] overflow-y-auto pr-3 custom-scrollbar min-h-0">
              <p className="mt-4 text-[14px] lg:text-[1.05vw] leading-relaxed text-gray-700">
                {" "}
                At Syspree, we don’t just create digital strategies—we engineer
                business growth. As a powerhouse of digital success, we
                specialize in high-impact digital marketing, web development,
                and AI-driven marketing solutions designed to drive revenue,
                amplify brand presence, and maximize ROI.{" "}
              </p>{" "}
              {/* Paragraph 2 */}{" "}
              <p className="mt-4 text-[14px] lg:text-[1.05vw] leading-relaxed text-gray-700">
                {" "}
                Our expertise spans across SEO, social media marketing,
                performance marketing, website design & development, branding,
                and AI-powered automation. Every campaign is tailored with
                precision to your industry and goals.{" "}
              </p>{" "}
              {/* Section Title */}{" "}
              <h4 className="mt-6 text-black! text-[18px] lg:text-[1.3vw] font-semibold">
                {" "}
                Why Choose Syspree?{" "}
              </h4>{" "}
              <ul className="mt-3 space-y-2 text-[14px] lg:text-[1vw] text-gray-700">
                {" "}
                <li>
                  <b>CORE Framework</b> – Consult, Optimize, Reinforce, Excel
                  for structured growth
                </li>{" "}
                <li>
                  <b>Results That Matter</b> – High-value client acquisition,
                  not just traffic
                </li>{" "}
                <li>
                  <b>Data-Driven Execution</b> – Real-time optimization for
                  conversions
                </li>{" "}
                <li>
                  <b>10 Years of Excellence</b> – Global experience across
                  multiple markets
                </li>{" "}
                <li>
                  <b>$3M+ Digital Services Sold</b> – Proven revenue impact
                </li>{" "}
              </ul>{" "}
              {/* Team Section */}{" "}
              <h4 className="mt-6 text-black! text-[18px] lg:text-[1.3vw] font-semibold">
                {" "}
                Our Team: Digital Growth Architects{" "}
              </h4>{" "}
              <p className="mt-3 text-[14px] lg:text-[1.05vw] text-gray-700 leading-relaxed">
                {" "}
                Syspree is led by seasoned digital strategists and growth
                marketers. Our leadership has built scalable sales ecosystems
                that translate strategy into measurable business success.{" "}
              </p>{" "}
              <p className="mt-4 text-[14px] lg:text-[1.05vw] text-gray-700">
                {" "}
                If you’re serious about scaling your business, Syspree is your
                partner in success.{" "}
              </p>{" "}
              {/* CTA */}{" "}
              <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-full text-[14px] hover:bg-orange-600 transition">
                {" "}
                Talk to us today{" "}
              </button>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-[45vw] h-[300px] lg:h-auto flex items-center justify-center">
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={resetTilt}
            animate={{
              rotateX: -tilt.y,
              rotateY: tilt.x,
            }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
            className="w-full h-full flex items-center justify-center"
          >
            <Image
              src="/assets/ab.webp"
              alt="About"
              width={300}
              height={300}
              className="w-[200px] md:w-[25vw] object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <div className="flex justify-center my-6 bg-white!">
        <Link href="/about-us">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 text-white px-6 py-3 rounded-full"
          >
            Discover more about Syspree
          </motion.button>
        </Link>
      </div>

      {/* SCROLLBAR STYLE */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #f97316;
          border-radius: 10px;
        }
      `}</style>
    </>
  );
}
