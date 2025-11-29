// --- src/components/CallToAction.jsx ---
import React from "react";
import { Link } from "react-router-dom";

export default function CallToAction(){
  return (
    <section className="py-12">
      <div className="bg-gradient-to-r from-[#021025] to-[#04213a] p-8 rounded-xl border border-white/6 flex flex-col md:flex-row items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold text-white">Ready to secure your application?</h3>
          <p className="text-slate-300 mt-2">Start a scan or run a sandboxed simulation to see how vulnerabilities are exploited and how to fix them.</p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-3">
          <Link to="/vulnerability-scanner" className="px-5 py-3 rounded bg-[#60a5fa] text-[#021025] font-semibold">Start Scan</Link>
          <Link to="/attack-simulator" className="px-5 py-3 rounded border border-white/6 text-slate-200">Open Simulator</Link>
        </div>
      </div>
    </section>
  );
}
