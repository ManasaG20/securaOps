// --- src/components/SecurityAwareness.jsx ---
import React from "react";
import { motion } from "framer-motion";

export default function SecurityAwareness(){
  return (
    <section className="mt-8 fade-up">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-semibold text-white">Why Web Security Matters</h3>
          <p className="mt-4 text-slate-300">
            Modern web applications face automated attacks every day. Simple misconfigurations — missing security headers, weak cookies, or outdated libraries — can lead to severe data breaches.
            SecuraOps helps you find and visualize those issues before they are exploited, and teaches developers how to fix them.
          </p>

          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-300">
            <li className="p-3 bg-white/3 rounded-md">Detect exposed endpoints</li>
            <li className="p-3 bg-white/3 rounded-md">Identify weak TLS/cipher suites</li>
            <li className="p-3 bg-white/3 rounded-md">Find sensitive information leaks</li>
            <li className="p-3 bg-white/3 rounded-md">Provide clear remediation steps</li>
          </ul>
        </div>

        <motion.div className="p-6 bg-gradient-to-br from-[#021025] to-[#021833] rounded-xl border border-white/6"
                    whileHover={{ scale: 1.02 }}>
          <h4 className="text-lg font-medium text-[#93c5fd]">Did you know?</h4>
          <div className="mt-4 text-slate-300">
            <p>Over 80% of security incidents stem from misconfiguration and unpatched dependencies. Simple checks prevent complicated breaches.</p>
            <div className="mt-3 flex gap-3">
              <div className="p-3 bg-white/4 rounded">
                <div className="text-xl font-bold">80%</div>
                <div className="text-xs text-slate-400">Incidents from config errors</div>
              </div>
              <div className="p-3 bg-white/4 rounded">
                <div className="text-xl font-bold">10m+</div>
                <div className="text-xs text-slate-400">Daily automated scans reported</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
