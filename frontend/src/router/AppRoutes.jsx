// --- src/router/AppRoutes.jsx ---
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NetworkScanner from "../pages/NetworkScanner";
import VulnerabilityScanner from "../pages/VulnerabilityScanner";
import AttackSimulator from "../pages/AttackSimulator";
import AiAssistant from "../pages/AiAssistant";

export default function AppRoutes(){
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/network-scanner" element={<NetworkScanner />} />
      <Route path="/vulnerability-scanner" element={<VulnerabilityScanner />} />
      <Route path="/attack-simulator" element={<AttackSimulator />} />
      <Route path="/ai-assistant" element={<AiAssistant />} />
    </Routes>
  );
}
