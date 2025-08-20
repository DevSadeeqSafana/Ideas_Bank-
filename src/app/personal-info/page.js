"use client";

import { useRouter } from "next/navigation";
import FormWrapper from "@/components/FormWrapper";
import FormNavigation from "@/components/FormNavigation";
import { motion } from "framer-motion";
import { useFormData } from "@/hooks/useUserInfo";
import React from "react";

export default function PersonalInfoPage() {
  const router = useRouter();
  const [formData, setFormData] = React.useState(null);
  React.useEffect(() => {

    const info =  JSON.parse(localStorage.getItem("data"))
    console.log(info)
    setFormData(info);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Get trainee ID from current formData
    router.push(`/bank-info`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-100 to-blue-200 flex items-center justify-center px-4 font-inter">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl p-8 rounded-3xl bg-white/30 backdrop-blur-md border border-white/30 shadow-lg"
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-2 text-center">
          Personal Information
        </h2>
        <p className="text-gray-700 text-sm mb-6 text-center">
          Please review and confirm your personal details
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-8">
            <div className="bg-white/60 rounded-xl p-6 shadow-md space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-800">
                    {formData?.fullname}
                  </h1>
                  <p className="text-blue-600 font-medium">
                    {formData?.registrationno}
                  </p>
                </div>
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {formData?.gender}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex">
                  <div className="w-1/3 text-gray-600 font-medium">Email:</div>
                  <div className="w-2/3">
                    <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
                      {formData?.email}
                    </span>
                  </div>
                </div>

                {/* <div className="flex">
                  <div className="w-1/3 text-gray-600 font-medium">LGA:</div>
                  <div className="w-2/3 font-medium">{formData?.lga}</div>
                </div> */}

                <div className="flex">
                  <div className="w-1/3 text-gray-600 font-medium">Phone:</div>
                  <div className="w-2/3 font-medium">
                    <a
                      href={`tel:${formData?.phone}`}
                      className="text-blue-600 hover:underline"
                    >
                      +234 {formData?.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <FormNavigation
            currentStep={1}
            totalSteps={5}
            onNext={handleSubmit}
            onBack={() => router.back()}
          />
        </form>
      </motion.div>
    </div>
  );
}
