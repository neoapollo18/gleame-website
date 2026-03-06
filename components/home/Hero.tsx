"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Star } from "lucide-react";

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
              Show Every Shopper <br />  their   {" "}
              <span className="gradient-text">  Future Self</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-500 mb-8 leading-relaxed font-light"
            >
              Increase conversions with realistic before-and-after visualizations for Shopify-native beauty & cosmetics products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Link 
                href="https://calendly.com/aaron-gleame/gleame-discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg group"
              >
                Book Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="https://apps.shopify.com/glimpse-app?search_id=0a3368ea-475d-43f7-9c29-34c4325d4bd7&surface_detail=gleame&surface_inter_position=1&surface_intra_position=5&surface_type=search" className="btn btn-ghost btn-lg group">
                Start free trial
              </Link>
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
                  5.0/5
                </span>
              </div>
              <div className="flex items-center gap-2">
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
                        biotechbeauty.com/products
                      </div>
                    </div>
                  </div>
                  
                  {/* Screenshot Content */}
                  <div className="relative">
                    <img 
                      src="/biotechbeautyhero1.png" 
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
