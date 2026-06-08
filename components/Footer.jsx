import Image from "next/image";
import Link from "next/link";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiTwitterXLine,
} from "@remixicon/react";
const quickLinks = [
  "Blogs",
  "About Us",
  "Careers",
  "Contact Us",
  "Case Studies",
  "Policies",
];
const socialIcons = [
  { name: "facebook", Icon: RiFacebookFill, href: "https://www.facebook.com/Syspree/" },
  { name: "instagram", Icon: RiInstagramLine, href: "https://www.instagram.com/syspree/?hl=en" },
  { name: "linkedin", Icon: RiLinkedinFill, href: "https://in.linkedin.com/company/syspreedigital" },
  { name: "twitter", Icon: RiTwitterXLine, href: "https://x.com/SySpree" },
];
const services = [
  "Web Design And Development",
  "Digital Marketing",
  "Artificial Intelligence",
  "Information Technology",
  "Outsourcing",
];

const industries = [
  "E-commerce",
  "Technology and SaaS",
  "Consulting and Corporate Services",
  "Education and Training",
  "Healthcare",
  "Interior Designers and Renovators",
  "Travel and Tourism",
  "Hospitality and FnB",
];

const locations = [
  "India",
  "Singapore",
  "Australia",
  "USA",
  "Europe",
  "Middle East",
  "Africa",
  "Thailand",
  "Philippines",
  "Canada",
  "Sri Lanka",
  "Malaysia",
  "New Zealand",
];

export default function Footer() {
  return (
    <footer className="bg-[#fffefe] border-t flex items-center justify-center border-gray-200">
      <div className="max-w-[95vw] mx-auto py-8 md:py-[2vw]">
        <div className="grid grid-cols-1 md:grid-cols-[12vw_10vw_12vw_12vw_10vw] gap-10 md:gap-[3vw]">
          {/* LEFT SECTION */}
          <div>
            <Link href="/">
              <div className="relative w-[120px] h-[45px] md:w-[8vw] md:h-[3vw]">
                <Image
                  src="/assets/logo.webp"
                  alt="SySpree"
                  fill
                  sizes="(max-width:768px) 120px, 8vw"
                  className="object-contain"
                />
              </div>
            </Link>

         <div className="mt-8 md:mt-[2vw]">
  <h4 className="text-[#f36a10] font-bold text-[16px] md:text-[0.9vw]">
    Socials
  </h4>

  <div className="flex gap-3 md:gap-[0.6vw] mt-3">
    {socialIcons.map(({ name, Icon, href }) => (
     <Link key={name} href={href} target="_blank">
  <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#f36a10] hover:bg-[#e85f0e] transition-colors">
    <Icon size={18} className="text-white" />
  </div>
</Link>
    ))}
  </div>
</div>

            <div className="mt-8 md:mt-[2vw]">
              <h4 className="text-[#f36a10] font-bold text-[16px] md:text-[0.9vw]">
                Payments
              </h4>

              <div className="flex flex-wrap gap-4 mt-4">
                {[
                  "f1",
                  "f2",
                  
                ].map((payment) => (
                  <div key={payment} className="relative md:w-[25vw]  md:h-[4vw]">
      <Image
        src={`/assets/${payment}.webp`}
        alt={payment}
        fill
        className="object-contain"
      />
    </div>
                ))}
              </div>

              <button className="mt-6 bg-[#6c6c6c] text-white rounded-full px-5 py-2 text-sm md:text-[0.8vw]">
                Pay Here
              </button>
             <Link target="_blank" href={'https://threebestrated.in/web-designers-in-thane-mh'}>
             <div className="relative mt-6 w-[90px] h-[90px] md:w-[5vw] md:h-[5vw]">
                <Image
                  src="/assets/award.webp"
                  alt="Award"
                  fill
                  className="object-contain"
                />
              </div>
</Link>
            </div>
          </div>

          {/* QUICK LINKS */}
          <FooterColumn title="QUICKLINKS">
            {quickLinks.map((item) => (
              <Link key={item} href="#">
                {item}
              </Link>
            ))}
          </FooterColumn>

          {/* SERVICES */}
          <FooterColumn title="SERVICES">
            {services.map((item) => (
              <Link key={item} href="#">
                {item}
              </Link>
            ))}
          </FooterColumn>

          {/* INDUSTRIES */}
          <FooterColumn title="INDUSTRIES">
            {industries.map((item) => (
              <Link key={item} href="#">
                {item}
              </Link>
            ))}
          </FooterColumn>

          {/* LOCATIONS */}
          <FooterColumn title="LOCATIONS">
            {locations.map((item) => (
              <Link key={item} href="#">
                {item}
              </Link>
            ))}
          </FooterColumn>
        </div>

        <div className="border-t border-gray-300 mt-10 md:mt-[2vw] pt-5">
          <p className="text-center md:text-left text-[#6f665f] text-xs md:text-[0.8vw]">
            © 2014 – 2026 · SySpree.com · All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }) {
  return (
    <div>
      <h3 className="text-[#f36a10] font-bold uppercase text-[18px] md:text-[1vw] mb-4 md:mb-[1vw]">
        {title}
      </h3>

      <div className="flex flex-col gap-3 md:gap-[0.7vw] text-[#6f665f]">
        {Array.isArray(children)
          ? children.map((child, index) => (
              <div
                key={index}
                className="text-[14px] md:text-[0.85vw] hover:text-[#f36a10] transition-colors"
              >
                {child}
              </div>
            ))
          : children}
      </div>
    </div>
  );
}