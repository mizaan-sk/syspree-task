"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function IndustriesSection() {
    const industries = [
  {
    title: "E-commerce",
    description:
      "Competing for traffic? Our SEO and ads bring in visitors, while smart UX turns them into customers.",
    active: true,
  },
  {
    title: "Technology and SaaS",
    description:
      "Struggling with ARR? Our inbound marketing and SEO attract qualified leads to boost your revenue.",
  },
  {
    title: "Consulting and Corporate Services",
    description:
      "Need more RFPs? Our content marketing builds credibility, turning prospects into contracts.",
  },
  {
    title: "Education and Training",
    description:
      "Struggling with retention? Our SEO and social boost enrollments and retention.",
  },
  {
    title: "Healthcare",
    description:
      "Need more patients? We boost local visibility with SEO and compliant content.",
  },
  {
    title: "Interior Designers and Renovators",
    description:
      "Attracting high-value clients? We showcase your luxury designs to land bigger projects.",
  },
  {
    title: "Travel and Tourism",
    description:
      "Want to increase ADR? Our marketing personalizes offers to boost bookings.",
  },
  {
    title: "Hospitality and FnB",
    description:
      "Seeing a drop in RevPAR? We use local SEO and ORM to boost your bookings.",
    active: true,
  },
];
  return (
    <section className="relative py-[60px] md:py-[5vw] bg-[#f7931e] overflow-hidden">
      {/* Orange Glow Border */}
      <div className="absolute inset-0 rounded-[20px] bg-[#f7931e] opacity-[0.08]" />

      <div className="relative z-10 w-[94%] md:max-w-[90vw] mx-auto">
        {/* Main Container */}
        <div
          className="
            bg-[#f6f6f6]
            rounded-[20px]
            shadow-[0_15px_50px_rgba(0,0,0,0.08)]
            p-[24px]
            md:p-[2.5vw]
          "
        >
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <p
                className="
                  uppercase
                  text-[#f7931e]
                  tracking-[2px]
                  font-semibold
                  text-[11px]
                  md:text-[0.7vw]
                "
              >
                Industry Expertise
              </p>

              <h2
                className="
                  mt-2
                  font-serif
                  text-[#111]
                  font-medium
                  text-[28px]
                  md:text-[2vw]
                "
              >
                Industries we serve
              </h2>
            </div>

            <p
              className="
                text-[#555]
                leading-relaxed
                lg:text-right
                text-[14px]
                md:text-[0.88vw]
              "
            >
              At Sypree, we tailor our digital marketing and web development
              solutions to meet the unique needs of various industries. Our
              CORE framework has proven successful across diverse sectors,
              ensuring measurable results and sustainable growth.
            </p>
          </div>

          {/* Cards */}
          <div
            className="
              mt-10
              md:mt-[3vw]
              grid
              grid-cols-1
              sm:grid-cols-2
              xl:grid-cols-4
              gap-5
              md:gap-[1.2vw]
            "
          >
            {industries.map((item, index) => (
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
                  delay: index * 0.08,
                  duration: 0.6,
                }}
                whileHover={{
                  y: -10,
                }}
                className={`
                  group
                  rounded-[14px]
                  p-[24px]
                  md:p-[1.5vw]
                  min-h-[240px]
                  md:min-h-[14vw]
                  flex
                  flex-col
                  justify-between
                  transition-all
                  duration-300
                  cursor-pointer
                  ${
                    item.active
                      ? "bg-[#ff7300] text-white"
                      : "bg-[#ececec] hover:bg-white"
                  }
                `}
              >
                <div>
                  <h3
                    className="
                      font-semibold
                      text-center
                      text-[18px]
                      md:text-[1vw] text-black!
                    "
                  >
                    {item.title}
                  </h3>
                </div>

                <p
                  className={`
                    text-center
                    leading-relaxed
                    text-[13px]
                    md:text-[0.82vw]
                    ${
                      item.active
                        ? "text-white"
                        : "text-[#555]"
                    }
                  `}
                >
                  {item.description}
                </p>

                <div className="flex justify-center">
                  <div
                    className={`
                      w-[36px]
                      h-[36px]
                      rounded-full
                      border
                      flex
                      items-center
                      justify-center
                      transition-all
                      duration-300
                      ${
                        item.active
                          ? "border-white"
                          : "border-[#ff7300]"
                      }
                    `}
                  >
                    <ArrowRight
                      size={18}
                      className={
                        item.active
                          ? "text-white"
                          : "text-[#ff7300]"
                      }
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-10 md:mt-[3vw]">
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="
                bg-[#f7931e]
                text-white
                rounded-full
                shadow-lg
                font-medium
                transition-all

                px-[26px]
                py-[13px]

                md:px-[2vw]
                md:py-[0.8vw]

                text-[14px]
                md:text-[0.9vw]
              "
            >
              Digital Marketing in more industries
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}