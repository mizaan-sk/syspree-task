"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CaseStudiesSection() {
  const cards = [
    {
      title: "30 Times Surge in Leads within a year",
      category: "SPORTS COACHING COMPANY",
      image: "/assets/a1.webp",
    },
    {
      title: "Improve Your Traffic by 1400% In Just 2 months!",
      category: "IMMIGRATION COMPANY",
      image: "/assets/a2.webp",
    },
    {
      title: "Manufacturing Brand Growth Strategy",
      category: "MANUFACTURING",
      image: "/assets/a3.webp",
    },
    {
      title: "Organic Marketing Success Story",
      category: "HEALTHCARE",
      image: "/assets/a4.webp",
    },
    {
      title: "Business Growth Through SEO",
      category: "DIGITAL MARKETING",
      image: "/assets/a1.webp",
    },
    {
      title: "Lead Generation Success",
      category: "B2B COMPANY",
      image: "/assets/a2.webp",
    },
  ];

  return (
    <section className="bg-[#f5f5f5]">
      <div className="mx-auto max-w-[1920px]">

        <div className="grid lg:grid-cols-[38%_62%]">

          {/* LEFT */}
          <div className="lg:sticky lg:top-0 lg:h-screen flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="px-[20px] py-[40px] lg:px-[4vw]"
            >
              <span className="uppercase text-[12px] text-gray-500 tracking-[2px]">
                CASE STUDIES
              </span>

              <h2 className="mt-[12px] text-[28px] leading-[38px] lg:text-[3vw] lg:leading-[3.2vw] font-bold text-[#f7931e]">
                Proven Results Across Industries
              </h2>

              <p className="mt-[16px] text-[14px] leading-[24px] lg:text-[1vw] lg:leading-[1.6vw] text-[#444]">
                Explore how Syspree has helped businesses achieve measurable growth
                with tailored digital strategies.
              </p>

              <button className="mt-[24px] bg-[#f7931e] text-white px-[22px] py-[12px] rounded-full">
                Learn More
              </button>
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="px-[16px] py-[40px] lg:px-[3vw] lg:py-[5vw]">

            {/* CLEAN GRID (NO COLUMNS = NO SCROLL BUG) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px] lg:gap-[1.5vw]">

              {cards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-[16px] overflow-hidden border border-[#f7931e] shadow-md"
                >

                  {/* IMAGE */}
                  <div className="relative h-[220px] lg:h-[16vw] w-full">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                      priority={index < 2}
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-[14px] lg:p-[1.2vw]">

                    <span className="text-[#f7931e] text-[10px] uppercase tracking-[1px]">
                      Case Study
                    </span>

                    <h3 className="mt-[8px] text-[18px] lg:text-[1.2vw] font-bold leading-[26px]">
                      {card.title}
                    </h3>

                    <p className="mt-[8px] text-[#f7931e] text-[10px] uppercase tracking-[1px]">
                      {card.category}
                    </p>

                    <div className="mt-[14px]">
                      <div className="w-[32px] h-[32px] border border-[#f7931e] rounded-full flex items-center justify-center text-[#f7931e]">
                        →
                      </div>
                    </div>

                  </div>
                </motion.div>
              ))}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}