// --- src/components/FeaturesSection.jsx ---
import React from "react";
import { motion } from "framer-motion";

const features = [
  { title: "Network Scanner", desc: "Scan ports, detect services & map topology.", icon: "🌐" },
  { title: "Vulnerability Scanner", desc: "Detect headers, outdated libs, exposed secrets.", icon: "🛠️" },
  { title: "Attack Simulator", desc: "Safe, local attack simulations with visual replay.", icon: "⚔️" },
  { title: "AI Assistance", desc: "Explain findings & generate human-friendly fixes.", icon: "🤖" }
];

export default function FeaturesSection(){
  return (
    <section>
      <h3 className="text-3xl font-semibold text-white">What SecuraOps Offers</h3>
      <p className="mt-2 text-slate-300 max-w-2xl">A single platform to test, visualize and learn — from network discovery to exploit visualization and remediation guidance.</p>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div key={i} className="p-6 bg-white/4 rounded-xl border border-white/6"
                      whileHover={{ y: -6, boxShadow: "0 12px 40px rgba(2,6,23,0.6)" }} >
            <div className="text-3xl">{f.icon}</div>
            <h4 className="mt-3 font-semibold text-white">{f.title}</h4>
            <p className="mt-2 text-slate-300 text-sm">{f.desc}</p>
            <div className="mt-4">
              <button className="text-sm text-[#60a5fa] font-medium">Learn more →</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
