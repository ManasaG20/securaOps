// --- src/components/Footer.jsx ---
import React from "react";

export default function Footer(){
  return (
    <footer className="mt-12 py-8 border-t border-white/6 bg-gradient-to-t from-transparent to-[#021025]">
      <div className="max-w-7xl mx-auto px-6 text-slate-400 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm">© {new Date().getFullYear()} SecuraOps — Student Project</div>
        <div className="flex gap-4">
          <a href="#" className="text-slate-300 hover:text-[#60a5fa]">GitHub</a>
          <a href="#" className="text-slate-300 hover:text-[#60a5fa]">Documentation</a>
          <a href="#" className="text-slate-300 hover:text-[#60a5fa]">Contact</a>
        </div>
      </div>
    </footer>
  );
}
