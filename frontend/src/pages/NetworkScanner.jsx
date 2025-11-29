import { useState } from "react";
import { motion } from "framer-motion";
import { Laptop, Server, Wifi } from "lucide-react";

export default function NetworkScanner() {
  const [ip, setIp] = useState("");
  const [subnet, setSubnet] = useState("24");
  const [scanType, setScanType] = useState("simple");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const handleScan = async () => {
    setLoading(true);
    setResults([]);

    console.log(ip, subnet, scanType);

    const response = await fetch("http://localhost:5000/api/scan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ip, subnet, scanType }),
    });

    const data = await response.json();
    setResults(data.devices || []);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Network Scanner</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Input Card */}
        <div className="bg-gray-900 p-6 rounded-2xl shadow-xl">
          <h2 className="text-xl font-semibold mb-4">Scan Configuration</h2>

          <label className="block mb-2">IP Address</label>
          <input
            className="w-full p-2 rounded bg-gray-800 mb-4"
            value={ip}
            onChange={(e) => setIp(e.target.value)}
            placeholder="192.168.1.0"
          />

          <label className="block mb-2">Subnet</label>
          <input
            className="w-full p-2 rounded bg-gray-800 mb-4"
            value={subnet}
            onChange={(e) => setSubnet(e.target.value)}
            placeholder="24"
          />

          <label className="block mb-2">Scan Type</label>
          <select
            className="w-full p-2 rounded bg-gray-800 mb-4"
            value={scanType}
            onChange={(e) => setScanType(e.target.value)}
          >
            <option value="simple">Simple Scan (Ping Sweep)</option>
            <option value="deep">Deep Scan (Version Detection)</option>
          </select>

          <button
            onClick={handleScan}
            className="w-full bg-blue-600 p-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? "Scanning..." : "Start Scan"}
          </button>
        </div>

        {/* Topology Animation */}
        <div className="bg-gray-900 p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center">
          <h2 className="text-xl font-semibold mb-4">Network Topology</h2>

          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
            className="flex gap-8"
          >
            <Wifi size={60} />
            <Laptop size={60} />
            <Server size={60} />
          </motion.div>

          <p className="text-sm mt-4 text-gray-400">
            Devices will be visualized here after scan.
          </p>
        </div>
      </div>

      {/* Results */}
      <div className="mt-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Scan Output</h2>

        {results.length === 0 && !loading && (
          <p className="text-gray-500">No results yet.</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {results.map((device, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-800 p-4 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-2">
                <Laptop size={40} />
                <div>
                  <p className="text-lg font-semibold">{device.ip}</p>
                  {device.mac && <p className="text-sm text-gray-400">MAC: {device.mac}</p>}
                </div>
              </div>

              {device.ports && (
                <ul className="text-sm text-gray-300 mt-3">
                  {device.ports.map((p, idx) => (
                    <li key={idx}>• {p.port} — {p.state} ({p.service})</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}