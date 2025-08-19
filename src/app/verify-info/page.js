"use client";

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import FormWrapper from '@/components/FormWrapper';
import FormNavigation from '@/components/FormNavigation';

function VerifyInfoContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const traineeId = searchParams.get('traineeId');

  const [formData, setFormData] = useState({
    date_of_birth: '',
    nin: '',
  });

  const [traineeData, setTraineeData] = useState(null);

  useEffect(() => {
    if (router && traineeId) {
      fetch(`/api/trainee/${traineeId}`)
        .then(res => res.json())
        .then(data => {
          setTraineeData(data);
          setFormData({
            date_of_birth: data.date_of_birth || '',
            nin: data.nin || '', 
          });
        })
        .catch((err) => console.error("Failed to load trainee data:", err));
    }
  }, [router, traineeId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/trainee/${traineeId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      

      if (response.ok) {
        router.push(`/internship-info?traineeId=${traineeId}`);
      } else {
        const error = await response.text();
        console.error("Submission failed:", error);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  if (!traineeData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-300 via-pink-200 to-blue-200">
        <p className="text-lg font-medium text-gray-700">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 via-pink-200 to-blue-200 flex items-center justify-center px-4 font-inter">
      <div className="w-full max-w-2xl p-8 rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 shadow-xl">
        <FormWrapper
          title="Verify Information"
          description="Please confirm your date of birth and NIN"
        >
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm text-black mb-2 font-medium">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="date_of_birth"
                  value={formData.date_of_birth}
                  onChange={handleChange}
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
                  value={formData.nin}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-xl bg-white/40 text-black placeholder-gray-600 outline-none border border-gray-300 focus:ring-2 focus:ring-gray-400 transition"
                  required
                />
              </div>
            </div>

            <div className="p-6 mb-8 rounded-xl bg-white/30 border border-white/30 shadow-sm text-black">
              <h3 className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full font-semibold mb-3">Personal Information</h3>
              <p><span className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full font-medium">Name:</span> {traineeData.fullname}</p>
              <p><span className="inline-block bg-blue-100 text-blue-800 px-4 py-1 mt-2 rounded-full font-medium">Email:</span> {traineeData.email}</p>
              <p><span className="inline-block bg-blue-100 text-blue-800 px-4 py-1 mt-2 rounded-full font-medium">Phone:</span> {traineeData.phone}</p>
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
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-300 via-pink-200 to-blue-200">
        <p className="text-lg font-medium text-gray-700">Loading...</p>
      </div>
    }>
      <VerifyInfoContent />
    </Suspense>
  );
}
