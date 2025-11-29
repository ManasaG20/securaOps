// --- src/components/WebSecurityBasics.jsx ---
import React from "react";
import { motion } from "framer-motion";

const topics = [
  { title: "XSS (Cross-site Scripting)", desc: "When untrusted input is rendered as HTML, an attacker can run scripts in user browsers." },
  { title: "SQL Injection", desc: "Unsanitized inputs in SQL queries allow data leakage and auth bypass." },
  { title: "CSRF", desc: "Cross-site requests can cause state changes if no anti-CSRF tokens are used." },
  { title: "Insecure Cookies", desc: "Missing flags like HttpOnly/Secure cause cookie theft and session hijack." }
];

export default function WebSecurityBasics(){
  return (
    <section>
      <h3 className="text-2xl font-semibold text-white">Web Security Basics</h3>
      <p className="mt-2 text-slate-300 max-w-2xl">Short explanations to help developers quickly understand common web flaws.</p>

      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        {topics.map((t,i) => (
          <motion.div key={i} className="p-4 rounded-lg bg-white/4 border border-white/6" whileHover={{ scale: 1.02 }}>
            <h4 className="font-semibold text-white">{t.title}</h4>
            <p className="mt-2 text-slate-300 text-sm">{t.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
