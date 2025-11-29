// --- src/components/DemoPreview.jsx ---
import React from "react";
import { motion } from "framer-motion";

export default function DemoPreview(){
  // fake scan data for preview
  const findings = [
    { id: 1, title: "X-Content-Type-Options missing", sev: "low" },
    { id: 2, title: "Outdated Express version (CVE-2023-XXXX)", sev: "high" },
    { id: 3, title: "Reflected XSS potential", sev: "critical" }
  ];

  return (
    <section>
      <h3 className="text-2xl font-semibold text-white">Live Demo Preview</h3>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div className="p-4 rounded-xl bg-[#021025]/60 border border-white/6" whileHover={{ scale: 1.01 }}>
          <div className="text-xs text-slate-400">Scan Console</div>
          <div className="mt-3 bg-black/60 p-3 rounded text-xs font-mono text-green-300 h-40 overflow-auto">
            <div>✓ Resolving target: http://localhost:3000</div>
            <div>✓ Running whatweb... detected: Express</div>
            <div>✓ Running nikto... found 3 issues</div>
            <div>✓ Running trivy (SCA)... scanning dependencies</div>
            <div>✓ Scan complete — 3 findings (see panel)</div>
          </div>
        </motion.div>

        <motion.div className="p-4 rounded-xl bg-[#021025]/60 border border-white/6" whileHover={{ scale: 1.01 }}>
          <div className="flex items-center justify-between">
            <div className="text-xs text-slate-400">Findings</div>
            <div className="text-xs text-slate-300">Severity</div>
          </div>

          <div className="mt-3 space-y-3">
            {findings.map(f => (
              <div key={f.id} className="flex items-center justify-between p-3 bg-white/4 rounded">
                <div>
                  <div className="text-sm font-medium text-white">{f.title}</div>
                  <div className="text-xs text-slate-300">Tool: Nikto</div>
                </div>
                <div className={`text-xs px-2 py-1 rounded ${f.sev==="critical" ? "bg-red-600" : f.sev==="high" ? "bg-orange-500" : "bg-slate-600"}`}>{f.sev.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
