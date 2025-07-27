"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen hero-bg relative">
      {/* Simplified Header */}
      <header className="relative z-20 container-padding py-6">
        <div className="max-w-7xl mx-auto">
          <div className="glass-header rounded-2xl px-6 py-4 border border-white/10">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center space-x-3"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-black rounded-full shadow-lg border-2 border-black">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-label="Feather logo" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7 25C21 25 25 7 25 7C16 9 9 16 7 25Z"
                      stroke="#fff"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="#222"
                    />
                  </svg>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-black">Omni.Monster</h1>
                </div>
              </motion.div>

              {/* Coming Soon Only */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="glass-pill px-4 py-2 rounded-full border border-green-400/20 bg-green-400/10">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-black text-sm font-medium">Coming Soon</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-start pt-8">
        <div className="max-w-7xl mx-auto container-padding w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Swap Interface - Made More Bulky */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center lg:justify-start mt-12"
            >
              <div className="w-full max-w-lg">
                <div className="glass-card rounded-3xl p-8 border border-white/10">
                  <div className="space-y-8">
                    {/* Header */}
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-black">Cross-Chain Swap</h3>
                    </div>

                    {/* From */}
                    <div className="space-y-3">
                      <label className="text-black/80 text-base font-semibold">From</label>
                      <div className="glass-pill rounded-3xl p-6 border border-white/10">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-lg font-bold">ETH</span>
                            </div>
                            <span className="text-black font-semibold text-lg">Ethereum</span>
                          </div>
                          <span className="text-black/60 font-mono text-lg">0.0</span>
                        </div>
                      </div>
                    </div>

                    {/* Swap Icon */}
                    <div className="flex justify-center">
                      <div className="glass-pill p-4 rounded-full border border-white/10">
                        <svg className="w-6 h-6 text-black/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                        </svg>
                      </div>
                    </div>

                    {/* To */}
                    <div className="space-y-3">
                      <label className="text-black/80 text-base font-semibold">To</label>
                      <div className="glass-pill rounded-3xl p-6 border border-white/10">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-lg font-bold">ATOM</span>
                            </div>
                            <span className="text-black font-semibold text-lg">Cosmos</span>
                          </div>
                          <span className="text-black/60 font-mono text-lg">0.0</span>
                        </div>
                      </div>
                    </div>

                    {/* Swap Button */}
                    <button
                      disabled
                      className="w-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-white/20 text-black/40 font-semibold py-5 px-8 rounded-3xl transition-all duration-200 cursor-not-allowed text-lg"
                    >
                      Swap (Coming Soon)
                    </button>
                  </div>
                </div>

                
              </div>
            </motion.div>

            {/* Content - Using swap.garden style typography */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8 mt-16 lg:mt-20"
            >
              <div className="space-y-6">
                {/* Main headline - swap.garden style */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-black leading-tight tracking-tight">
                  <span>One monster.</span>
                  <br />
                  <span>Every chain.</span>
                </h1>
                
                {/* Subtitle - swap.garden style */}
                <p className="text-xl md:text-2xl text-black font-medium leading-relaxed max-w-2xl">
                  <span>Trustless atomic swaps across DeFi ecosystems.</span>
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="inline-block"
              >
                <div className="glass-pill px-6 py-3 rounded-full border border-green-400/30 bg-green-400/15 inline-flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-black font-semibold text-base">Coming Soon</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Subtle Background Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>
    </main>
  );
}