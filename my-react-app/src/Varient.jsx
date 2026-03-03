import React from "react";
import { motion } from "framer-motion";

export default function Varient({ onBack }) {
  return (
    <div className=" inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 text-white p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={onBack}
          className="text-xs bg-white/20 px-3 py-1 rounded-lg backdrop-blur"
        >
          Back
        </button>
        <span className="text-sm font-semibold">Gradient</span>
        <div />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center h-[80%] text-center"
      >
        <h1 className="text-2xl font-bold">Beautiful Gradient</h1>
        <p className="text-sm mt-2 text-white/90 max-w-[220px]">
          This is a colorful gradient screen for your iPhone React UI.
        </p>

        <div className="mt-6 bg-white/20 backdrop-blur-lg rounded-2xl px-6 py-4">
          <p className="text-sm">🌈 Modern UI Style</p>
        </div>
      </motion.div>
    </div>
  );
}