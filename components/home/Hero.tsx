"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary-100 to-primary-200 blur-3xl opacity-60" />
        <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary-50 to-primary-100 blur-3xl opacity-50" />
        <div className="absolute -bottom-20 right-1/3 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-coral/10 to-coral/20 blur-3xl opacity-40" />
      </div>

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-180px)] py-16 lg:py-24">
          {/* Left Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-coral font-medium italic tracking-widest uppercase text-xs mb-4">
                AI Virtual Try-On
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-display-lg font-semibold text-gray-900 mb-6 tracking-tight"
            >
              Turn browsers into buyers with{" "}
              <span className="gradient-text">AI previews</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-500 mb-8 leading-relaxed font-light"
            >
              Eliminate purchase anxiety and increase conversions with realistic
              before-and-after visualizations for beauty products. Let shoppers
              see their transformation instantly.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Link href="https://apps.shopify.com/glimpse-app?search_id=0a3368ea-475d-43f7-9c29-34c4325d4bd7&surface_detail=gleame&surface_inter_position=1&surface_intra_position=5&surface_type=search" className="btn btn-primary btn-lg group">
                Start free trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="btn btn-ghost btn-lg group">
                <Play className="w-5 h-5 text-primary" />
                Watch demo
              </button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
                <span className="ml-2 text-sm font-medium text-gray-600">
                  4.9/5
                </span>
              </div>
              <span className="text-sm text-gray-400 font-light">
                500+ brands trust Gleame
              </span>
              <div className="flex items-center gap-2">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-[#96BF47]"
                  fill="currentColor"
                >
                  <path d="M15.337 3.415c-.193-.016-.389.024-.553.128-.163.104-.282.261-.337.449l-1.13 3.882-3.964.011c-.2 0-.391.085-.527.233-.136.148-.203.347-.183.545.02.199.119.383.273.508l3.203 2.593-1.143 3.879c-.058.198-.03.41.078.585.107.175.28.298.475.34.195.041.398-.002.559-.12l3.255-2.39 3.254 2.39c.161.118.364.161.559.12.195-.042.368-.165.475-.34.108-.175.136-.387.078-.585l-1.143-3.879 3.203-2.593c.154-.125.253-.309.273-.508.02-.198-.047-.397-.183-.545-.136-.148-.327-.233-.527-.233l-3.964-.011-1.13-3.882c-.055-.188-.174-.345-.337-.449-.163-.104-.36-.144-.553-.128z" />
                </svg>
                <span className="text-sm text-gray-400 font-light">Shopify Partner</span>
              </div>
            </motion.div>
          </div>

          {/* Right Visual - Laptop with Pureskin Screenshot */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Laptop Frame */}
            <div className="relative mx-auto max-w-[600px]">
              {/* Screen */}
              <div className="relative rounded-t-xl bg-gray-800 p-2">
                {/* Browser Chrome */}
                <div className="rounded-lg overflow-hidden bg-white">
                  {/* Browser Header */}
                  <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 border-b border-gray-200">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 mx-3">
                      <div className="bg-white rounded px-3 py-1 text-[10px] text-gray-400 font-light text-center">
                        pureskin.com/products
                      </div>
                    </div>
                  </div>
                  
                  {/* Screenshot Content */}
                  <div className="relative">
                    <img 
                      src="/pureskin.png" 
                      alt="Gleame widget demo on product page" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              
              {/* Laptop Base */}
              <div className="relative h-4 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-lg">
                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-16 h-1 bg-gray-600 rounded-b" />
              </div>
              <div className="relative h-2 bg-gray-800 rounded-b-xl mx-8 shadow-xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
