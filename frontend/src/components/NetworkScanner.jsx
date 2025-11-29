import React from 'react';
import { motion } from 'framer-motion';

const NetworkScanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20 px-6 max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold text-blue-400 mb-6">Network Scanner</h1>
      <p className="text-gray-300">This page will include live packet monitoring and anomaly detection. Coming soon!</p>
    </motion.div>
  );
};

export default NetworkScanner;