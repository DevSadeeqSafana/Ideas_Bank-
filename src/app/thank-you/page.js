"use client";

import { motion } from "framer-motion";
import Head from 'next/head';
import Link from 'next/link';

const MotionLink = motion(Link);

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 flex flex-col items-center justify-center p-4">
      <Head>
        <title>Registration Complete</title>
      </Head>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md"
      >
        <div className="w-24 h-24 mx-auto mb-6 bg-green-500 rounded-full flex items-center justify-center text-white text-4xl">
          ✓
        </div>
        
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h1>
        <p className="text-lg text-gray-600 mb-8">
          Your registration is now complete. We appreciate you taking the time to provide all the necessary information.
        </p>
        
        <MotionLink
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition"
        >
          Return to Home
        </MotionLink>
      </motion.div>
    </div>
  );
}
