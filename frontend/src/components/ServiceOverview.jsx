// --- src/components/ServiceOverview.jsx ---
import React from "react";
import { motion } from "framer-motion";

export default function ServiceOverview(){
  return (
    <section>
      <h3 className="text-2xl font-semibold text-white">Services & Capabilities</h3>
      <div className="mt-6 space-y-6">
        <motion.div className="bg-white/4 p-4 rounded-lg border border-white/6" whileHover={{ scale: 1.01 }}>
          <h4 className="font-semibold text-white">Network Mapping</h4>
          <p className="text-slate-300 mt-2">Identify open ports, services and visualize the topology in a compact map. Helps you prioritize network hardening.</p>
        </motion.div>

        <motion.div className="bg-white/4 p-4 rounded-lg border border-white/6" whileHover={{ scale: 1.01 }}>
          <h4 className="font-semibold text-white">Web Vulnerability Reports</h4>
          <p className="text-slate-300 mt-2">Single-click scans that detect missing headers, exposed endpoints, outdated dependencies, and provide fix suggestions.</p>
        </motion.div>

        <motion.div className="bg-white/4 p-4 rounded-lg border border-white/6" whileHover={{ scale: 1.01 }}>
          <h4 className="font-semibold text-white">Attack Flow Visualization</h4>
          <p className="text-slate-300 mt-2">Replay simulated attack chains step-by-step showing exactly which step caused the breach and how to mitigate it.</p>
        </motion.div>
      </div>
    </section>
  );
}
