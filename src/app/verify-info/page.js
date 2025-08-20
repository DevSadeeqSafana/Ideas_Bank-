"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useRouter } from "next/navigation";
import FormWrapper from "@/components/FormWrapper";
import FormNavigation from "@/components/FormNavigation";

function VerifyInfoContent() {
  const router = useRouter();
  const [nin, setnin] = useState("");
  const [dob, setdob] = useState("");
  const [error, seterror] = useState("");
  const [formData, setFormData] = React.useState(null);
  React.useEffect(() => {
    const info = JSON.parse(localStorage.getItem("data"));
    setFormData(info);
    setnin(formData?.nin ? formData?.nin : "")
    setdob(formData?.date_of_birth ? formData?.date_of_birth : "")
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nin || !dob ) {
      seterror("Please fill the form properly");
      return;
    }

    try {
      const response = await fetch(`/api/trainee`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ date_of_birth: dob, nin: nin, id: formData.id }),
      });

      if (response.ok) {
        // Update global state with the submitted data
        router.push(`/internship-info`);
      } else {
        const error = await response.text();
        console.error("Submission failed:", error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 via-pink-200 to-blue-200 flex items-center justify-center px-4 font-inter">
      <div className="w-full max-w-2xl p-8 rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 shadow-xl">
        <FormWrapper
          title="Verify Information"
          description="Please confirm your date of birth and NIN"
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
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="date_of_birth"
                  value={dob}
                  onChange={(r) => setdob(r.target.value)}
                  className="w-full px-4 py-2 rounded-xl bg-white/40 text-black placeholder-gray-200 outline-none border border-gray-300 focus:ring-2 focus:ring-gray-400 transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-black mb-2 font-medium">
                  National Identification Number
                </label>
                <input
                  type="text"
                  name="nin"
                  value={nin}
                  onChange={(e) => setnin(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl bg-white/40 text-black placeholder-gray-600 outline-none border border-gray-300 focus:ring-2 focus:ring-gray-400 transition"
                  required
                />
              </div>
            </div>

            <div className="p-6 mb-8 rounded-xl bg-white/30 border border-white/30 shadow-sm text-black">
              <h3 className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full font-semibold mb-3">
                Personal Information
              </h3>
              <p>
                <span className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full font-medium">
                  Name:
                </span>{" "}
                {formData?.fullname}
              </p>
              <p>
                <span className="inline-block bg-blue-100 text-blue-800 px-4 py-1 mt-2 rounded-full font-medium">
                  Email:
                </span>{" "}
                {formData?.email}
              </p>
              <p>
                <span className="inline-block bg-blue-100 text-blue-800 px-4 py-1 mt-2 rounded-full font-medium">
                  Phone:
                </span>{" "}
                {formData?.phone}
              </p>
            </div>

            <FormNavigation
              currentStep={3}
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

export default function VerifyInfoPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-300 via-pink-200 to-blue-200">
          <p className="text-lg font-medium text-gray-700">Loading...</p>
        </div>
      }
    >
      <VerifyInfoContent />
    </Suspense>
  );
}
