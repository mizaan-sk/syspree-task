"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const teamMembers = [
  {
    id: 1,
    image: "/assets/im1.webp",
    alt: "Team Member",
  },
  {
    id: 2,
        image: "/assets/im2.webp",
    alt: "Team Member",
  },
  {
    id: 3,
        image: "/assets/im1.webp",

    alt: "Team Member",
  },
];

const imageVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

export default function TeamSection() {
  return (
    <section className="w-full bg-[#f4f4f4] overflow-hidden">
      <div
        className="
          max-w-[100vw]
          mx-auto
          flex
          flex-col
          lg:flex-row
          items-center
          lg:items-start
          justify-between
          px-[24px]
          md:px-[40px]
          lg:px-[5vw]
          py-[60px]
          lg:py-[6vw]
          gap-[50px]
          lg:gap-[4vw]
        "
      >
        {/* Left Images */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            w-full
            lg:w-[52vw]
            flex
            justify-center
            items-center
            items-end
            gap-[12px]
            md:gap-[16px]
            lg:gap-[1vw]
          "
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              custom={index}
              variants={imageVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="
                relative
                overflow-hidden
                rounded-[8px]
                shadow-sm
                flex-shrink-0
              "
            >
              <Image
                src={member.image}
                alt={member.alt}
                width={300}
                height={400}
                className="
                  object-cover
                  grayscale
                  transition-all
                  duration-500
                  hover:grayscale-0

                  w-[95px]
                  h-[120px]

                  sm:w-[120px]
                  sm:h-[150px]

                  md:w-[160px]
                  md:h-[210px]

                  lg:w-[8vw]
                  lg:h-[11vw]
                "
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="
            w-full
            lg:w-[68vw]
            text-center
            lg:text-left
          "
        >
          <h2
            className="
              uppercase
              tracking-[1px]
              text-[22px]
              md:text-[28px]
              lg:text-[1.45vw]
              font-semibold
              text-black
              mb-[18px]
            "
          >
            OUR TEAM
          </h2>

          <div
            className="
              text-[#111]
              leading-[1.8]
              text-[14px]
              md:text-[15px]
              lg:text-[0.82vw]
              space-y-[18px]
            "
          >
            <p>
              At Syspree, our team is not just skilled and full of domain
              expertise—they're innovators who elevate industry standards.
            </p>

            <p>
              Each member brings unique expertise, years of experience and a
              passion for driving measurable results for each of our clients.
              Our talented professionals specialize in cutting-edge digital
              marketing strategies, web development, and brand growth, helping
              businesses outperform their competition.
            </p>

            <p>
              Whether it's designing user-centric websites or crafting
              high-converting campaigns, our team delivers exceptional results,
              tailored to your specific needs. Trust in Syspree's unmatched
              talent pool to take your business to the next level with
              solutions that are creative, strategic, and results-driven.
            </p>
          </div>

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              mt-[30px]
              lg:mt-[2vw]

              bg-[#F7941D]
              hover:bg-[#e68511]

              text-white
              font-medium

              rounded-full

              px-[28px]
              py-[12px]

              lg:px-[1.8vw]
              lg:py-[0.8vw]

              text-[14px]
              lg:text-[0.85vw]

              transition-all
              duration-300
            "
          >
            Join Our Team
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}