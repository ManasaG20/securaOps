// --- src/components/Hero.jsx ---
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import * as d3 from "d3";
import gsap from "gsap";

export default function Hero(){
  const svgRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    // GSAP subtle float for hero
    gsap.to(heroRef.current, { y: 4, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut", opacity: 1 });

    // D3 network-like small animation
    const svg = d3.select(svgRef.current);
    const width = 420, height = 300;
    svg.attr("viewBox", `0 0 ${width} ${height}`);

    const nodes = d3.range(8).map((d, i) => ({ id: i }));
    const links = [
      { source: 0, target: 1 }, { source: 0, target: 2 }, { source: 1, target: 3 },
      { source: 2, target: 4 }, { source: 2, target: 5 }, { source: 4, target: 6 },
      { source: 5, target: 7 }
    ];

    const simulation = d3.forceSimulation(nodes)
      .force("charge", d3.forceManyBody().strength(-80))
      .force("center", d3.forceCenter(width/2, height/2))
      .force("link", d3.forceLink(links).distance(70).strength(0.9));

    svg.selectAll("*").remove();
    const gLinks = svg.append("g").attr("class","links");
    const gNodes = svg.append("g").attr("class","nodes");

    const link = gLinks.selectAll("line")
      .data(links).enter().append("line")
      .attr("stroke","#0ea5e9").attr("stroke-opacity",0.24).attr("stroke-width",1.5);

    const node = gNodes.selectAll("circle")
      .data(nodes).enter().append("circle")
      .attr("r", 7)
      .attr("fill", (d,i) => i===0 ? "#60a5fa" : "#2563eb")
      .attr("stroke","#ffffff10")
      .attr("stroke-width",1.2)
      .call(d3.drag().on("start", dragstarted).on("drag", dragged).on("end", dragended));

    node.append("title").text(d => `Service ${d.id}`);

    simulation.on("tick", () => {
      link.attr("x1", d => d.source.x)
          .attr("y1", d => d.source.y)
          .attr("x2", d => d.target.x)
          .attr("y2", d => d.target.y);

      node.attr("cx", d => d.x)
          .attr("cy", d => d.y);
    });

    function dragstarted(event,d){
      if(!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = event.x; d.fy = event.y;
    }
    function dragged(event,d){
      d.fx = event.x; d.fy = event.y;
    }
    function dragended(event,d){
      if(!event.active) simulation.alphaTarget(0);
      d.fx = null; d.fy = null;
    }

    return () => simulation.stop();
  }, []);

  return (
    <section className="pt-28 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h1 initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="text-5xl sm:text-6xl font-extrabold leading-tight">
            SECUR<span className="text-[#60a5fa]">A</span>OPS
          </motion.h1>
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.1}} className="mt-4 text-slate-300 max-w-xl">
            Unified offensive + defensive platform — scan, visualize and simulate web security issues with interactive, explainable reports. Great for learning, demos and pre-production checks.
          </motion.p>

          <div className="mt-6 flex gap-3">
            <Link to="/vulnerability-scanner" className="inline-flex items-center gap-2 bg-[#60a5fa] text-[#021025] px-5 py-3 rounded-md font-semibold shadow-lg hover:bg-[#4f9bf0] transition">
              Start Scanning
            </Link>
            <Link to="/attack-simulator" className="inline-flex items-center gap-2 border border-[#2b6cb0] text-slate-100 px-5 py-3 rounded-md font-medium hover:bg-white/3 transition">
              Try Attack Simulator
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 text-xs text-slate-400">
            <div className="px-3 py-2 bg-white/3 rounded-md">Network Mapping</div>
            <div className="px-3 py-2 bg-white/3 rounded-md">Vulnerability Reports</div>
            <div className="px-3 py-2 bg-white/3 rounded-md">Attack Visualization</div>
            <div className="px-3 py-2 bg-white/3 rounded-md">AI Assistance</div>
          </div>
        </div>

        <div ref={heroRef} className="mx-auto">
          <div className="relative w-full max-w-md h-72 bg-gradient-to-br from-[#071022] to-[#062334] rounded-2xl border border-white/6 shadow-[0_10px_40px_rgba(2,6,23,0.7)] overflow-hidden">
            <svg ref={svgRef} className="w-full h-full" />
            <div className="absolute bottom-4 left-4 text-xs text-slate-300/80">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#60a5fa] animate-pulse inline-block"></span>
                Live topology preview
              </div>
            </div>
            <div className="absolute top-4 right-4 px-3 py-1 bg-[#021025]/60 rounded-md text-xs text-slate-300">Demo Mode</div>
          </div>
        </div>
      </div>
    </section>
  );
}
