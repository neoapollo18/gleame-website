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
              <Link href="/signup" className="btn btn-primary btn-lg group">
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

          {/* Right Visual - Browser Mockup with Product Page Widget */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Browser Frame */}
            <div className="relative mx-auto max-w-[580px] rounded-xl shadow-2xl shadow-gray-900/10 overflow-hidden border border-gray-200">
              {/* Browser Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 border-b border-gray-200">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white rounded-md px-3 py-1.5 text-xs text-gray-400 font-light text-center">
                    yourstore.com/products/glow-serum
                  </div>
                </div>
              </div>
              
              {/* Product Page Content */}
              <div className="bg-white p-5">
                {/* Product Info Header */}
                <div className="mb-4">
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Skincare</p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Radiance Glow Serum</h3>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">248 Reviews</span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-5">
                  <span className="text-2xl font-semibold text-gray-900">$49</span>
                  <span className="text-sm text-gray-400 line-through">$65</span>
                  <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded">25% OFF</span>
                </div>

                {/* Gleame Widget */}
                <div className="border border-gray-200 rounded-xl p-4 bg-gray-50/50">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Try It Virtually</h4>
                    <span className="text-[10px] text-primary font-medium">Powered by Gleame</span>
                  </div>
                  
                  <p className="text-xs text-gray-500 mb-4">
                    Upload an image of yourself and see your transformation with the Radiance Glow Serum!
                  </p>

                  {/* Before/After Preview */}
                  <div className="flex gap-3 mb-4">
                    <div className="flex-1 relative">
                      <div className="aspect-square rounded-lg bg-gradient-to-br from-rose-100 to-rose-200 overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-20 rounded-full bg-gradient-to-b from-amber-200 to-amber-300" />
                        </div>
                      </div>
                      <span className="absolute bottom-2 left-2 text-[10px] font-medium text-gray-600 bg-white/80 px-2 py-0.5 rounded">Before</span>
                    </div>
                    <div className="flex-1 relative">
                      <div className="aspect-square rounded-lg bg-gradient-to-br from-pink-100 to-purple-100 overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-20 rounded-full bg-gradient-to-b from-amber-100 to-amber-200 shadow-lg shadow-pink-200/50" />
                        </div>
                      </div>
                      <span className="absolute bottom-2 left-2 text-[10px] font-medium text-white bg-primary/80 px-2 py-0.5 rounded">After</span>
                    </div>
                  </div>

                  {/* Upload Button */}
                  <button className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-sm font-medium text-gray-600 hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Upload a Photo
                  </button>
                  
                  <p className="text-[10px] text-gray-400 text-center mt-2">
                    Results are AI-generated. Images are never saved.
                  </p>
                </div>

                {/* Add to Cart Button */}
                <button className="w-full mt-4 py-3 bg-gray-900 text-white rounded-lg text-sm font-medium">
                  Add to Cart — $49
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
