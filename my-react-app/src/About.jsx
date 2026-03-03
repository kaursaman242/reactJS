import React from "react";
import { motion } from "framer-motion";

export default function About({ onBack }) {
  return (
    <div className=" inset-0 bg-black/70 backdrop-blur-xl text-white p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={onBack}
          className="text-xs bg-white/20 px-3 py-1 rounded-lg"
        >
          Back
        </button>
        <span className="text-sm font-semibold">About</span>
        <div />
      </div>

      {/* Profile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center mt-6"
      >
        <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl">
          👤
        </div>
        <h2 className="mt-3 text-lg font-semibold">Your Name</h2>
        <p className="text-xs text-white/70">React Developer</p>
      </motion.div>

      {/* Info Cards */}
      <div className="mt-6 space-y-3 text-sm">
        <div className="bg-white/10 rounded-xl p-3">
          📱 iPhone UI Demo built in React
        </div>
        <div className="bg-white/10 rounded-xl p-3">
          ⚛️ Framer Motion animations
        </div>
        <div className="bg-white/10 rounded-xl p-3">
          🎨 Tailwind glassmorphism design
        </div>
      </div>
    </div>
  );
}