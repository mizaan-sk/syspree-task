"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LeadershipSection() {
  const leaders = [
    {
      name: "Leader 1",
      image: "/assets/im1.webp",
    },
    {
      name: "Leader 2",
      image: "/assets/im2.webp",
    },
  ];

  return (
    <section className="w-full bg-[#f79009] overflow-hidden">
      <div
        className="
          max-w-[100vw]
          mx-auto
          px-[24px]
          py-[60px]
          md:px-[5vw]
          md:py-[6vw]
        "
      >
        {/* Top Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p
            className="
              text-white
              uppercase
              tracking-[2px]
              text-[11px]
              md:text-[0.75vw]
              font-semibold
            "
          >
            Our Culture
          </p>

          <h2
            className="
              text-white
              font-bold
              mt-[8px]
              text-[26px]
              md:text-[2vw]
            "
          >
            Our Community
          </h2>
        </motion.div>

        {/* Main Content */}
        <div
          className="
            mt-[50px]
            md:mt-[5vw]
            grid
            grid-cols-1
            lg:grid-cols-[1.1fr_0.9fr]
            gap-[40px]
            md:gap-[4vw]
            items-center
          "
        >
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3
              className="
                text-white
                uppercase
                font-bold
                mb-[20px]
                text-[24px]
                md:text-[1.6vw]
              "
            >
              Our Leadership
            </h3>

            <div
              className="
                text-white
                leading-relaxed
                space-y-4
                text-[14px]
                md:text-[0.9vw]
                max-w-full
                md:max-w-[42vw]
              "
            >
              <p>
                At Syspree, our leadership team is at the forefront of
                innovation and strategic growth. It is the backbone of our
                success and the driving force behind our clients' success.
              </p>

              <p>
                Cahill, as the Head of Business Management, Operations, and
                Fulfillment, plays a pivotal role in ensuring seamless project
                execution and operational excellence. His leadership guarantees
                that Syspree's clients receive top-tier solutions with
                measurable impact.
              </p>

              <p>
                Jay, as the Head of Sales, drives Syspree's market growth and
                excels at strengthening client relationships. His leadership in
                expanding Syspree's reach ensures we stay competitive and
                deliver exceptional services.
              </p>

              <p>
                Together, they lead Syspree to deliver transformative results
                that drive your business forward.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="
                mt-[28px]
                border
                border-white
                text-white
                rounded-full
                font-medium
                transition-all
                duration-300
                hover:bg-white
                hover:text-[#f79009]
                px-[18px]
                py-[8px]
                text-[13px]
                md:px-[1.3vw]
                md:py-[0.5vw]
                md:text-[0.75vw]
              "
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Right Images */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
              flex
              justify-center
              lg:justify-end
              gap-[12px]
              md:gap-[1vw]
            "
          >
            {leaders.map((leader, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  relative
                  overflow-hidden
                  rounded-[6px]
                  shadow-lg
                  w-[145px]
                  h-[190px]
                  md:w-[10vw]
                  md:h-[13vw]
                "
              >
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover grayscale"
                  sizes="(max-width:768px) 145px, 10vw"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}