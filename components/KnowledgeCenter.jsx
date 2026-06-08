"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const blogs = [
  {
    image: "/assets/ims1.webp",
    title:
      "10 Proven Digital Strategies to Boost Lead Generation and Drive Business Growth",
  },
  {
   image: "/assets/ims1.webp",
    title:
      "Scaling Your Business with Digital Marketing: A Deep Dive into High-ROI Campaigns",
  },
  {
     image: "/assets/ims1.webp",
    title:
      "Deep Analysis of Lead Funnels That Deliver Results for Tech Companies",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function KnowledgeCenter() {
  return (
    <section className="relative bg-white py-[60px] md:py-[80px] lg:py-[5vw] overflow-hidden">
      <div className="mx-auto max-w-[95%] lg:max-w-[88vw]">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p
            className="
              uppercase
              tracking-[2px]
              text-black
              font-medium
              text-[11px]
              md:text-[12px]
              lg:text-[0.7vw]
            "
          >
            Our <span className="text-[#F7931E]">Expertise</span>, Your
            Knowledge
          </p>

          <h2
            className="
              mt-3
              text-black
              font-normal
              text-[28px]
              md:text-[38px]
              lg:text-[2vw]
              leading-[1.2]
            "
          >
            Blogs, Podcasts, Vlogs
          </h2>
        </motion.div>

        {/* Cards */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="
            mt-10
            lg:mt-[3vw]
            border border-[#F7931E]
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {blogs.map((blog, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              className="
                group
                border-b
                sm:border-b
                lg:border-b-0
                border-[#F7931E]
                lg:border-r
                last:border-r-0
                last:border-b-0
                p-[12px]
                md:p-[16px]
                lg:p-[0.8vw]
              "
            >
              {/* Image */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[8px]
                  h-[220px]
                  md:h-[260px]
                  lg:h-[19vw]
                "
              >
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="
                    object-cover
                    transition-all
                    duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Content */}

              <h3
                className="
                  mt-4
                  text-black
                  leading-[1.4]
                  font-normal
                  transition-colors
                  duration-300
                  group-hover:text-[#F7931E]
                  text-[15px]
                  md:text-[16px]
                  lg:text-[0.95vw]
                "
              >
                {blog.title}
              </h3>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mt-10 lg:mt-[3vw]"
        >
          <button
            className="
              bg-[#F7931E]
              text-white
              rounded-full
              font-medium
              transition-all
              duration-300
              hover:bg-black
              hover:scale-105

              px-[28px]
              py-[14px]

              md:px-[36px]
              md:py-[16px]

              lg:px-[2.2vw]
              lg:py-[0.9vw]

              text-[15px]
              md:text-[16px]
              lg:text-[0.95vw]
            "
          >
            View the Knowledge Center
          </button>
        </motion.div>
      </div>
    </section>
  );
}