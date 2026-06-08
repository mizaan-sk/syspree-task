"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const stats = [
  {
    number: 10000,
    suffix: "+",
    title: "Keywords Ranked on Page 1",
  },
  {
    number: 1000,
    suffix: "+",
    title: "5X Business Growth",
  },
  {
    number: 10,
    suffix: "+",
    title: "Trusted Digital Leadership",
  },
  {
    number: 1000,
    suffix: "+",
    title: "Websites Managed",
  },
  {
    number: 100000,
    suffix: "+",
    title: "Leads per day",
  },
   {
    number: 100,
    suffix: "+",
    title: "Clients",
  },
];

export default function AchievementsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.35,
  });

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-white"
    >
      {/* Background Shape */}
     

      <div className="relative z-10 mx-auto max-w-[90vw] lg:max-w-[88vw]">
        <div className="flex flex-col lg:flex-row items-center justify-between py-[70px] md:py-[90px] lg:py-[6vw] gap-[50px] lg:gap-[4vw]">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-[38%]"
          >
            <p
              className="
                uppercase
                tracking-[2px]
                text-black
                font-semibold
                text-[11px]
                md:text-[12px]
                lg:text-[0.65vw]
                mb-3
              "
            >
              Results In Numbers
            </p>

            <h2
              className="
                font-normal
                leading-[1.2]
                text-black
                text-[28px]
                md:text-[38px]
                lg:text-[2vw]
              "
            >
              Our{" "}
              <span className="text-[#F7931E]">
                Achievements
              </span>{" "}
              in Numbers
            </h2>
          </motion.div>

          {/* Right Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[52%]"
          >
            <div className="grid grid-cols-2 lg:grid-cols-2 border border-[#F7931E]">
              
              {stats.map((item, index) => {
                const isLast = index === stats.length - 1;

                return (
                  <div
                    key={index}
                    className={`
                      flex flex-col justify-center
                      min-h-[130px]
                      md:min-h-[150px]
                      lg:min-h-[8vw]
                      px-[22px]
                      md:px-[30px]
                      lg:px-[1.6vw]
                      py-[18px]
                      lg:py-[1vw]
                      border-[#F7931E]
                      ${
                        index % 2 === 0
                          ? "border-r"
                          : ""
                      }
                      ${
                        !isLast
                          ? "border-b"
                          : ""
                      }
                    `}
                  >
                    <div
                      className="
                        text-[#F7931E]
                        font-light
                        leading-none
                        text-[36px]
                        md:text-[46px]
                        lg:text-[2.3vw]
                      "
                    >
                      {inView ? (
                        <CountUp
                          end={item.number}
                          duration={2.5}
                          separator=","
                        />
                      ) : (
                        0
                      )}
                      {item.suffix}
                    </div>

                    <p
                      className="
                        mt-2
                        text-black
                        font-normal
                        text-[13px]
                        md:text-[14px]
                        lg:text-[0.78vw]
                      "
                    >
                      {item.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}