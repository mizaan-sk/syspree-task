
"use client";

import { useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  Mail,
  User,
} from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const menuItems = [
    {
      title: "About Us",
      dropdown: ["Company", "Team", "Careers"],
    },
    {
      title: "Services",
      dropdown: ["Web Development", "Mobile Apps", "UI/UX Design"],
    },
    {
      title: "Industries",
      dropdown: ["Healthcare", "Finance", "Education"],
    },
    {
      title: "Locations",
      dropdown: ["USA", "India", "UAE"],
    },
    {
      title: "Our Works",
      dropdown: ["Portfolio", "Case Studies"],
    },
  ];

  return (
    <>
      {/* Navbar */}
      <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
        <div
          className="
          hidden lg:flex
          items-center
          justify-between
          h-[6vw]
          px-[8vw]
          "
        >
          {/* Logo */}
            <Image
        src="/assets/logo.webp"
        alt="Syspree Logo"
        width={150}
        height={50}
        className="md:w-[8vw]"
        priority
      />
          {/* Menu */}
          <nav className="flex items-center gap-[2vw]">
            <a
              href="#"
              className="text-[0.95vw] font-medium text-orange-500"
            >
              Home
            </a>

            {menuItems.map((item) => (
              <div
                key={item.title}
                className="group relative"
              >
                <button
                  className="
                  flex items-center
                  gap-[0.3vw]
                  text-[0.95vw]
                  font-medium
                  hover:text-orange-500
                  transition-all
                  duration-300
                  "
                >
                  {item.title}
                  <ChevronDown size={14} />
                </button>

                {/* Dropdown */}
                <div
                  className="
                  absolute
                  top-[2.5vw]
                  left-0
                  opacity-0
                  invisible
                  translate-y-3
                  group-hover:visible
                  group-hover:opacity-100
                  group-hover:translate-y-0
                  transition-all
                  duration-300
                  bg-white
                  shadow-xl
                  rounded-xl
                  min-w-[12vw]
                  py-[1vw]
                  "
                >
                  {item.dropdown.map((sub) => (
                    <a
                      key={sub}
                      href="#"
                      className="
                      block
                      px-[1vw]
                      py-[0.5vw]
                      text-[0.85vw]
                      hover:bg-orange-50
                      hover:text-orange-500
                      "
                    >
                      {sub}
                    </a>
                  ))}
                </div>
              </div>
            ))}

            <a
              href="#"
              className="text-[0.95vw] font-medium"
            >
              Blog
            </a>
          </nav>

          {/* CTA */}
          <button
            onClick={() => setShowForm(true)}
            className="
            bg-orange-500
            text-white
            px-[1.8vw]
            py-[0.9vw]
            rounded-full
            text-[0.9vw]
            font-medium
            hover:scale-105
            hover:bg-orange-600
            transition-all
            duration-300
            shadow-lg
            "
          >
            Book Free Consultation
          </button>
        </div>

        {/* Mobile Navbar */}
        <div className="lg:hidden flex justify-between items-center px-5 h-[70px]">
             <Image
        src="/assets/logo.webp"
        alt="Syspree Logo"
        width={150}
        height={50}
        priority
      />

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X size={30} />
            ) : (
              <Menu size={30} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
          lg:hidden
          overflow-hidden
          transition-all
          duration-500
          ${
            mobileOpen
              ? "max-h-[800px]"
              : "max-h-0"
          }
          `}
        >
          <div className="px-5 pb-5 bg-white">
            <a className="block py-3 font-medium">
              Home
            </a>

            {menuItems.map((item) => (
              <details
                key={item.title}
                className="border-b"
              >
                <summary className="py-3 cursor-pointer font-medium">
                  {item.title}
                </summary>

                <div className="pl-4 pb-2">
                  {item.dropdown.map((sub) => (
                    <a
                      key={sub}
                      className="block py-2 text-gray-600"
                    >
                      {sub}
                    </a>
                  ))}
                </div>
              </details>
            ))}

            <a className="block py-3 font-medium">
              Blog
            </a>

            <button
              onClick={() => setShowForm(true)}
              className="
              mt-4
              w-full
              bg-orange-500
              text-white
              py-3
              rounded-full
              font-semibold
              "
            >
              Book Free Consultation
            </button>
          </div>
        </div>
      </header>

      {/* Modal Form */}
      <div
        className={`
        fixed inset-0 z-[100]
        flex items-center justify-center
        bg-black/60 backdrop-blur-sm
        transition-all duration-300
        ${
          showForm
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }
        `}
      >
        <div
          className={`
          bg-white
          rounded-3xl
          p-8
          w-[90%]
          max-w-[500px]
          shadow-2xl
          transform
          transition-all
          duration-500
          ${
            showForm
              ? "scale-100 translate-y-0"
              : "scale-90 translate-y-10"
          }
          `}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">
              Book Free Consultation
            </h2>

            <button
              onClick={() => setShowForm(false)}
            >
              <X />
            </button>
          </div>

          <form className="space-y-4">
            <div className="relative">
              <User
                size={18}
                className="absolute left-3 top-4 text-gray-400"
              />

              <input
                type="text"
                placeholder="Your Name"
                className="
                w-full
                border
                rounded-xl
                pl-10
                py-3
                outline-none
                focus:border-orange-500
                "
              />
            </div>

            <div className="relative">
              <Mail
                size={18}
                className="absolute left-3 top-4 text-gray-400"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="
                w-full
                border
                rounded-xl
                pl-10
                py-3
                outline-none
                focus:border-orange-500
                "
              />
            </div>

            <div className="relative">
              <Phone
                size={18}
                className="absolute left-3 top-4 text-gray-400"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="
                w-full
                border
                rounded-xl
                pl-10
                py-3
                outline-none
                focus:border-orange-500
                "
              />
            </div>

            <textarea
              rows="4"
              placeholder="Tell us about your project"
              className="
              w-full
              border
              rounded-xl
              p-3
              outline-none
              focus:border-orange-500
              "
            />

            <button
              type="submit"
              className="
              w-full
              bg-orange-500
              text-white
              py-3
              rounded-xl
              font-semibold
              hover:bg-orange-600
              transition
              "
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </>
  );
}   