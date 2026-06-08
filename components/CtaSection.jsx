"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-[90vw] lg:max-w-[80vw] mx-auto py-[80px] lg:py-[8vw]">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          {/* Subtitle */}
          <span className="block uppercase font-semibold tracking-[2px] text-[#f7931e] text-[14px] lg:text-[0.9vw]">
            Get In Touch
          </span>

          {/* Heading */}
          <h2 className="mt-[20px] font-serif text-black font-medium text-[34px] leading-[44px] lg:text-[3vw] lg:leading-[3.8vw]">
            Ready to see how{" "}
            <span className="text-[#f7931e]">SySpree</span> can grow your
            business?
          </h2>

          {/* CTA Button */}
          <motion.button
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.98,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              mt-[40px]
              bg-[#f7931e]
              text-white
              font-semibold
              rounded-full
              px-[35px]
              py-[18px]
              text-[20px]
              leading-[28px]
              shadow-lg
              hover:bg-[#ea8508]
              transition-all
              duration-300
              
              lg:px-[4vw]
              lg:py-[1.3vw]
              lg:text-[1.5vw]
              lg:leading-[1.8vw]
            "
          >
            Limited time offer: Get Your Free
            <br />
            Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}