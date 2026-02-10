"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const brands = [
  { name: "BioTech Beauty", logo: "/logo-biotechbeauty.svg" },
  { name: "Men Pens", logo: "/menpen.png" },
  { name: "Haven", logo: "/haven.png" },
  { name: "Wett Skincare", logo: "/wett.png" },
  { name: "Holicow", logo: "/holicow.png" },
  { name: "Glossed by Nae", logo: "/glossedbynae.png", light: true },
];

export function LogoCloud() {
  return (
    <section className="py-16 bg-gray-50/50 border-y border-gray-100 overflow-hidden">
      <div className="container">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-medium text-gray-400 mb-8 uppercase tracking-wider"
        >
          Trusted by leading beauty brands
        </motion.p>
      </div>
      
      {/* Infinite scrolling container */}
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50/50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50/50 to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling track */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex"
        >
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="flex-shrink-0 mx-10 flex items-center justify-center w-[140px] h-12"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={140}
                  height={48}
                  className={`max-h-12 w-auto max-w-[140px] object-contain grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 ${
                    "light" in brand && brand.light ? "opacity-90 contrast-[2] brightness-50" : "opacity-60"
                  }`}
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {brands.map((brand) => (
              <div
                key={`${brand.name}-duplicate`}
                className="flex-shrink-0 mx-10 flex items-center justify-center w-[140px] h-12"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={140}
                  height={48}
                  className={`max-h-12 w-auto max-w-[140px] object-contain grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 ${
                    "light" in brand && brand.light ? "opacity-90 contrast-[2] brightness-50" : "opacity-60"
                  }`}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
