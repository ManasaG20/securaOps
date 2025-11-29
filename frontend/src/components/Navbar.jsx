// // --- src/components/Navbar.jsx ---
// import React from "react";
// import { NavLink } from "react-router-dom";
// import { gsap } from "gsap";

// export default function Navbar(){
//   React.useEffect(() => {
//     gsap.from(".nav-item", { y: -10, opacity: 0, duration: 0.6, stagger: 0.08 });
//   }, []);

//   return (
//     <header className="fixed w-full z-40 top-0 backdrop-blur">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         <div className="flex items-center space-x-3">
//           <div className="text-2xl font-extrabold tracking-wider text-white drop-shadow-[0_0_12px_rgba(37,99,235,0.3)]">
//             SECURA<span className="text-[#60a5fa]">OPS</span>
//           </div>
//           <div className="text-xs text-slate-400 hidden sm:block">Unified Security & Simulation</div>
//         </div>

//         <nav className="flex items-center gap-6">
//           <NavLink to="/" className={({isActive}) => `nav-item text-md ${isActive ? 'text-[#60a5fa]' : 'text-slate-700 hover:text-[#93c5fd]'}`}>Home</NavLink>
//           <NavLink to="/network-scanner" className={({isActive}) => `nav-item text-sm ${isActive ? 'text-[#60a5fa]' : 'text-slate-700 hover:text-[#93c5fd]'}`}>Network Scanner</NavLink>
//           <NavLink to="/vulnerability-scanner" className={({isActive}) => `nav-item text-sm ${isActive ? 'text-[#60a5fa]' : 'text-slate-700 hover:text-[#93c5fd]'}`}>Vulnerability Scanner</NavLink>
//           <NavLink to="/attack-simulator" className={({isActive}) => `nav-item text-sm ${isActive ? 'text-[#60a5fa]' : 'text-slate-700 hover:text-[#93c5fd]'}`}>Attack Simulator</NavLink>
//           <NavLink to="/ai-assistant" className={({isActive}) => `nav-item text-sm ${isActive ? 'text-[#60a5fa]' : 'text-slate-700 hover:text-[#93c5fd]'}`}>AI Assistance</NavLink>
//         </nav>
//       </div>
//     </header>
//   );
// }

import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Network Scanner", path: "/network-scanner" },
    { name: "Vulnerability Scanner", path: "/vulnerability-scanner" },
    { name: "Attack Simulator", path: "/attack-simulator" },
    { name: "AI Assistant", path: "/ai-assistant" }
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg 
                 bg-[#0a0f1e]/30 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Link 
          to="/" 
          className="text-xl font-extrabold tracking-wide text-white"
        >
          Secura<span className="text-blue-400">Ops</span>
        </Link>

        {/* NAVLINKS */}
        <div className="flex gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-white/50 text-sm font-medium transition duration-300 
                ${
                  isActive 
                    ? "text-blue-400/60 border-b-2 border-blue-400 pb-1" 
                    : "hover:text-blue-300"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

      </div>
    </motion.nav>
  );
}

