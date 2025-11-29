import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SecurityAwareness from "../components/SecurityAwareness";
import FeaturesSection from "../components/FeaturesSection";
import ServiceOverview from "../components/ServiceOverview";
import DemoPreview from "../components/DemoPreview";
import WebSecurityBasics from "../components/WebSecurityBasics";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import gsap from "gsap";

export default function Home(){
  const containerRef = useRef(null);

  useEffect(() => {
    // subtle page entrance
    const ctx = gsap.context(() => {
      gsap.from(".fade-up", { y: 24, opacity: 0, duration: 0.8, stagger: 0.12 });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#071025] text-slate-200">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6">
        <Hero />
        <motion.section initial={{opacity:20}} animate={{opacity:1}} transition={{delay:0.15, duration:0.6}}>
          <SecurityAwareness />
        </motion.section>

        <motion.section className="mt-12" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.25}}>
          <FeaturesSection />
        </motion.section>

        <motion.section className="mt-16" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.35}}>
          <ServiceOverview />
        </motion.section>

        <motion.section className="mt-16" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.45}}>
          <DemoPreview />
        </motion.section>

        <motion.section className="mt-16" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.55}}>
          <WebSecurityBasics />
        </motion.section>

        <motion.section className="mt-16 mb-24" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.65}}>
          <CallToAction />
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
