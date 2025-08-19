"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-100 to-blue-200 flex items-center justify-center p-6 font-inter">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="backdrop-blur-lg bg-white/30 border border-white/40 shadow-xl rounded-3xl p-10 max-w-md w-full text-center"
      >
        <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full shadow-lg border-4 border-white/30">
          <img src="/ideas-logo.jpg" alt="Logo" className="object-cover w-full h-full" />
        </div>

        <h1 className="text-4xl font-semibold text-gray-800 mb-4 drop-shadow-sm">
          Welcome, Trainee!
        </h1>

        <p className="text-lg text-gray-700 mb-8">
          We’re excited to have you back. Please complete your bank information registration.
        </p>

        <Link href="/login">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-300 to-indigo-300 text-white font-medium shadow-md hover:from-blue-700 hover:to-indigo-700 transition-all"
          >
            Click to Continue
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
