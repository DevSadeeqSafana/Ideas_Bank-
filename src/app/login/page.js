"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [registrationno, setRegistrationNo] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ registrationno}),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("data", JSON.stringify(data?.info));
        router.push(`/personal-info`);
      } else {
        setError(data.error || "Login failed");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-100 to-blue-200 flex items-center justify-center px-4 font-inter">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md p-8 rounded-3xl bg-white/30 backdrop-blur-md border border-white/30 shadow-lg"
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-2 text-center">Welcome Back</h2>
        <p className="text-gray-700 text-sm mb-6 text-center">Enter your credentials to continue</p>

        <form onSubmit={handleSubmit}>
          {error && (
            <div className="mb-4 p-3 text-sm text-red-600 bg-red-100 rounded-md">
              {error}
            </div>
          )}

          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-800 text-sm mb-2 font-medium">
              Registered Email Address
            </label>
            <input
              id="email"
              type="text"
              placeholder="Registered Email Address"
              value={registrationno}
              onChange={(e) => setRegistrationNo(e.target.value)}
              className="w-full px-4 py-2 rounded-xl bg-white/60 text-gray-800 placeholder-gray-500 outline-none border border-transparent focus:ring-2 focus:ring-blue-400 transition"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-300 to-indigo-300 text-white font-semibold py-3 rounded-xl shadow-md hover:from-blue-700 hover:to-indigo-700 transition"
          >
            Continue
          </button>
        </form>
      </motion.div>
    </div>
  );
}
