import React from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Camera, Music, Settings, Mail, Calendar } from "lucide-react";

const apps = [
  { name: "Phone", icon: Phone },
  { name: "Messages", icon: MessageCircle },
  { name: "Camera", icon: Camera },
  { name: "Music", icon: Music },
  { name: "Settings", icon: Settings },
  { name: "Mail", icon: Mail },
  { name: "Calendar", icon: Calendar },
];

export default function HomePage() {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-slate-900 to-black flex items-center justify-center">
      {/* iPhone Frame */}
      <div className="w-[320px] h-[640px] rounded-[40px] bg-black p-3 shadow-2xl">
        {/* Screen */}
        <div className="relative w-full h-full rounded-[30px] overflow-hidden bg-[url('https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5')] bg-cover bg-center">
          {/* Status Bar */}
          <div className="flex justify-between items-center text-white text-xs px-4 pt-2">
            <span>9:41</span>
            <div className="flex gap-1">
              <span>📶</span>
              <span>📡</span>
              <span>🔋</span>
            </div>
          </div>

          {/* Apps Grid */}
          <div className="grid grid-cols-4 gap-4 px-4 mt-6">
            {apps.map((app, i) => {
              const Icon = app.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center text-white"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-lg">
                    <Icon size={28} />
                  </div>
                  <span className="text-[10px] mt-1">{app.name}</span>
                </motion.div>
              );
            })}
          </div>

          {/* Dock */}
          <div className="absolute bottom-4 w-full px-6">
            <div className="bg-white/20 backdrop-blur-xl rounded-3xl py-3 flex justify-around">
              {apps.slice(0, 4).map((app, i) => {
                const Icon = app.icon;
                return (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.2 }}
                    className="w-12 h-12 rounded-xl bg-white/30 flex items-center justify-center text-white"
                  >
                    <Icon size={24} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
