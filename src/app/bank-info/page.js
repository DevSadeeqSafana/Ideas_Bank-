"use client";

import React, { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import FormWrapper from "@/components/FormWrapper";
import FormNavigation from "@/components/FormNavigation";

function BankInfoContent() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [bvn, setbvn] = useState("");
  const [name, setname] = useState("");
  const [bank, setbank] = useState("");
  const [number, setnumber] = useState("");

  const [formData, setFormData] = React.useState(null);
  React.useEffect(() => {
    const info = JSON.parse(localStorage.getItem("data"));
    setbvn(info?.bvn ? info?.bvn : "");
    setname(info?.account_name ? info?.account_name : "");
    setbank(info?.bank_name ? info?.bank_name : "");
    setnumber(info?.account_number ? info?.account_number : "");
    setFormData(info);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const traineeId = formData.id;
    if (!traineeId) {
      setError("Trainee ID not found. Please login again.");
      console.error("Trainee ID not found in URL params or stored data");
      router.push("/login");
      return;
    }

    const payload = {
      bank_name: bank,
      account_number: number,
      account_name: name,
      bvn: bvn,
      traineeId: Number(traineeId),
    };

    if (!bank || !number || !name || !bvn) {
      setError("Data not found. Please fill the form.");
      return;
    }

    try {
      const response = await fetch("/api/trainee", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const text = await response.text();
        setError(text);
        return;
      }

      const data = await response.json();

      if (response.ok) {
        // Update the stored data with the response
        router.push(`/verify-info`);
      } else {
        const errorData = await response.json();
        console.error("Submission failed:", errorData);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 via-pink-200 to-blue-200 flex items-center justify-center px-4 font-inter">
      <div className="w-full max-w-2xl p-8 rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 shadow-xl">
        <FormWrapper
          title="Bank Information"
          description="Please provide your bank details"
        >
          <form onSubmit={handleSubmit}>
            {error && (
              <div className="mb-4 p-3 bg-red-100/60 border border-red-300 rounded-xl text-red-700 text-sm">
                {error}
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm text-black mb-2 font-medium">
                  BVN
                </label>
                <input
                  type="text"
                  name="bvn"
                  value={bvn}
                  onChange={(e) => setbvn(e.target.value)}
                  // placeholder="e.g., 22334455667"
                  className="w-full px-4 py-2 rounded-xl bg-white/40 text-black placeholder-gray-600 outline-none border border-gray-300 focus:ring-2 focus:ring-gray-400 transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-black mb-2 font-medium">
                  Account Name
                </label>
                <input
                  type="text"
                  name="account_name"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  // placeholder="e.g., John Doe"
                  className="w-full px-4 py-2 rounded-xl bg-white/40 text-black placeholder-gray-600 outline-none border border-gray-300 focus:ring-2 focus:ring-gray-400 transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-black mb-2 font-medium">
                  Bank Name
                </label>
                <input
                  type="text"
                  name="bank_name"
                  value={bank}
                  onChange={(e) => setbank(e.target.value)}
                  // placeholder="e.g., Zenith Bank"
                  className="w-full px-4 py-2 rounded-xl ring-black bg-white/40 text-black placeholder-gray-600 outline-none border border-gray-300 focus:ring-2 focus:ring-gray-400 transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-black mb-2 font-medium">
                  Account Number
                </label>
                <input
                  type="text"
                  name="account_number"
                  value={number}
                  onChange={(e) => setnumber(e.target.value)}
                  // placeholder="e.g., 1234567890"
                  className="w-full px-4 py-2 rounded-xl bg-white/40 text-black placeholder-gray-600 outline-none border border-gray-300 focus:ring-2 focus:ring-gray-400 transition"
                  required
                />
              </div>
            </div>

            <FormNavigation
              currentStep={2}
              totalSteps={5}
              onNext={handleSubmit}
              onBack={() => router.back()}
            />
          </form>
        </FormWrapper>
      </div>
    </div>
  );
}

export default function BankInfoPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-300 via-pink-200 to-blue-200">
          <p className="text-lg font-medium text-gray-700">Loading...</p>
        </div>
      }
    >
      <BankInfoContent />
    </Suspense>
  );
}
