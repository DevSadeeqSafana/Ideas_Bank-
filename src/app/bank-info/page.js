"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import FormWrapper from '@/components/FormWrapper';
import FormNavigation from '@/components/FormNavigation';

export default function BankInfoPage() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    bank_name: '',
    account_number: '',
    account_name: '',
    bvn: '',
    trainee_id: ''
  });

  useEffect(() => {
    const data = localStorage.getItem("data");
    if (data) {
      const parsed = JSON.parse(data);
      setFormData({
        bank_name: parsed.bank_name || '',
        account_number: parsed.account_number || '',
        account_name: parsed.account_name || '',
        bvn: parsed.bvn || '',
        trainee_id: parsed.trainee_id || parsed.ID || parsed.id || "",
      });
      
      // Also ensure traineeId is stored if not already
      const traineeId = localStorage.getItem('traineeid');
      if (!traineeId) {
        const id = parsed.ID || parsed.id;
        if (id) {
          localStorage.setItem('traineeId', String(id));
        }
      }
    }
  }, []);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
    };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');

  const traineeId = localStorage.getItem('traineeId') || formData.trainee_id;

  if (!traineeId) {
    setError('Trainee ID not found. Please login again.');
    console.error('Trainee ID not found in localStorage or formData');
    router.push('/login');
    return;
  }

  const payload = {
    ...formData,
    traineeId: Number(traineeId),
  };

  try {
    const response = await fetch('/api/trainee', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error('API error:', text);
      return;
    }

    const data = await response.json();

    if (response.ok) {
    localStorage.setItem("data", JSON.stringify(data?.info));
    console.log(formData)
    router.push(`/verify-info?traineeId=${traineeId}`);
  } else {
    const errorData = await response.json();
    console.error('Submission failed:', errorData);
  }
  } catch (error) {
    console.error('Error:', error);
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
                  value={formData.bvn}
                  onChange={handleChange}
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
                  value={formData.account_name}
                  onChange={handleChange}
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
                  value={formData.bank_name}
                  onChange={handleChange}
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
                  value={formData.account_number}
                  onChange={handleChange}
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
