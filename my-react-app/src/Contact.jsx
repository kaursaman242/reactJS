import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact({ onBack }) {
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
        <span className="text-sm font-semibold">Contact</span>
        <div />
      </div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-6"
      >
        <h2 className="text-lg font-semibold text-center">Get in Touch</h2>
        <p className="text-xs text-white/70 text-center mt-1">
          Feel free to contact me anytime
        </p>
      </motion.div>

      {/* Contact Cards */}
      <div className="mt-6 space-y-3 text-sm">
        <div className="bg-white/10 rounded-xl p-3 flex items-center gap-3">
          <Mail size={18} />
          <span>your@email.com</span>
        </div>

        <div className="bg-white/10 rounded-xl p-3 flex items-center gap-3">
          <Phone size={18} />
          <span>+91 00000 00000</span>
        </div>

        <div className="bg-white/10 rounded-xl p-3 flex items-center gap-3">
          <MapPin size={18} />
          <span>Your City, Country</span>
        </div>
      </div>

      {/* Message Button */}
      <div className=" bottom-6 left-0 right-0 px-6">
        <button className="w-full bg-white text-black py-2 rounded-xl text-sm font-medium">
          Send Message
        </button>
      </div>
    </div>
  );
}