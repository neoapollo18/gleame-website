"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    brand: "MenPen",
    image: "/menpencasestudy.png",
    stat: "+13% lift in CVR",
    description:
      "How MenPen used AI try-on to boost conversion by 13% and generate 174 incremental orders per month.",
    href: "/case-studies/menpen",
  },
  {
    brand: "HoliCow",
    image: "/holicow-hero-ku12d_yK.png",
    stat: "3% → 6% CVR",
    description:
      "How HoliCow doubled their conversion rate with AI-powered skin transformation previews for their tallow skincare line.",
    href: "/case-studies/holicow",
  },
  {
    brand: "Haven",
    image: "/havencasestudy.png",
    stat: "+106% lift in CVR",
    description:
      "How Haven more than doubled their conversion rate with personalized skin transformation previews.",
    href: "/case-studies/haven",
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="relative py-24 lg:py-36 bg-gray-50 border-y border-gray-200">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 rounded-full text-xs font-medium tracking-wide uppercase mb-4"
          >
            Case Studies
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-display-sm font-semibold text-gray-900 mb-4 tracking-tight"
          >
             Results from Leading Brands
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500 font-light"
          >
            See how beauty brands are increasing conversions and revenue with
            Gleame.
          </motion.p>
        </div>

        {/* Case Study Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={`${study.brand}-${index}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {study.placeholder ? (
                <div className="relative group rounded-2xl border border-dashed border-gray-300 bg-white overflow-hidden h-full flex flex-col items-center justify-center min-h-[420px]">
                  <div className="text-center p-8">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                      <span className="text-gray-400 text-lg">?</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-400 mb-2">
                      {study.brand}
                    </h3>
                    <p className="text-gray-400 font-light text-sm">
                      {study.description}
                    </p>
                  </div>
                </div>
              ) : (
                <Link href={study.href} className="block h-full">
                  <div className="relative group rounded-2xl border border-gray-200 bg-white overflow-hidden hover:border-primary-200 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 h-full flex flex-col shadow-sm">
                    {/* Image */}
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <Image
                        src={study.image!}
                        alt={`${study.brand} case study`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Stat badge */}
                      {study.stat && (
                        <div className="absolute top-4 left-4">
                          <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-white/95 backdrop-blur-sm text-primary shadow-sm">
                            {study.stat}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {study.brand}
                      </h3>
                      <p className="text-gray-500 font-light text-[15px] leading-relaxed mb-5 flex-1">
                        {study.description}
                      </p>
                      <span className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-2 gap-1 transition-all">
                        Read case study
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
