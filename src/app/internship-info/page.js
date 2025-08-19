"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import FormWrapper from "@/components/FormWrapper";
import FormNavigation from "@/components/FormNavigation";
import { motion } from "framer-motion";

export default function InternshipInfoPage() {
  const router = useRouter();
  const [traineeId, setTraineeId] = useState("");
  const [acceptanceFile, setAcceptanceFile] = useState(null);
  const [completionFile, setCompletionFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    has_started_internship: false,
    internship_letter_url: "",
    has_completed_internship: false,
    completion_letter_url: "",
    state_of_internship: "",
    LGA_of_internship: "",
  });

  useEffect(() => {
    // Try multiple sources for traineeId
    const storedTraineeId = sessionStorage.getItem("traineeId") || localStorage.getItem("traineeId");
    
    if (storedTraineeId) {
      setTraineeId(storedTraineeId);
    } else {
      // Fallback: try to get from stored data
      const data = localStorage.getItem("data");
      if (data) {
        const parsed = JSON.parse(data);
        const id = parsed.SN || parsed.sn;
        if (id) {
          setTraineeId(String(id));
          localStorage.setItem("traineeId", String(id));
        }
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e, fileType) => {
    const file = e.target.files[0];
    
    if (file) {
      const maxSize = 5 * 1024 * 1024; // 5MB
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'application/pdf'];
      
      if (file.size > maxSize) {
        setError(`File size must be less than 5MB`);
        e.target.value = '';
        return;
      }
      
      if (!allowedTypes.includes(file.type)) {
        setError(`Invalid file type. Please upload an image or PDF`);
        e.target.value = '';
        return;
      }
      
      setError("");
      
      if (fileType === "acceptance") {
        setAcceptanceFile(file);
      } else if (fileType === "completion") {
        setCompletionFile(file);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!traineeId) {
      setError("Trainee ID not found. Please log in again.");
      return;
    }
    
    if (!formData.state_of_internship || !formData.LGA_of_internship) {
      setError("Please fill in all required fields");
      return;
    }
    
    if (formData.has_started_internship && !acceptanceFile && !formData.internship_letter_url) {
      setError("Please upload or provide URL for acceptance letter");
      return;
    }
    
    if (formData.has_completed_internship && !completionFile && !formData.completion_letter_url) {
      setError("Please upload or provide URL for completion letter");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const submitFormData = new FormData();
      submitFormData.append("traineeId", traineeId);
      submitFormData.append("has_started_internship", formData.has_started_internship);
      submitFormData.append("has_completed_internship", formData.has_completed_internship);
      submitFormData.append("state_of_internship", formData.state_of_internship);
      submitFormData.append("LGA_of_internship", formData.LGA_of_internship);
      submitFormData.append("internship_letter_url", formData.internship_letter_url);
      submitFormData.append("completion_letter_url", formData.completion_letter_url);
      
      if (acceptanceFile) {
        submitFormData.append("acceptancePhoto", acceptanceFile);
      }
      
      if (completionFile) {
        submitFormData.append("completionPhoto", completionFile);
      }

      const response = await fetch("/api/internship", {
        method: "POST",
        body: submitFormData,
      });

      if (response.ok) {
        router.push("/thank-you");
      } else {
        const errorData = await response.json();
        setError(errorData.error || "An error occurred while submitting the form");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-100 to-blue-200 flex items-center justify-center px-4 font-inter">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl bg-white/30 backdrop-blur-md shadow-lg border border-white/30 rounded-3xl p-8"
      >
        <FormWrapper
          title="Internship Information"
          description="Please provide details about your internship"
        >
          <form onSubmit={handleSubmit}>
            {error && (
              <div className="mb-4 p-3 bg-red-100/60 border border-red-300 rounded-xl text-red-700 text-sm">
                {error}
              </div>
            )}
            <div className="space-y-6 mb-8">

              {/* Aligned checkboxes */}
              <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 items-start md:items-center">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="has_started_internship"
                    name="has_started_internship"
                    checked={formData.has_started_internship}
                    onChange={handleChange}
                    className="w-3 h-3 text-blue-600 bg-white border border-gray-300 rounded focus:ring-1 focus:ring-gray-400"
                  />
                  <label htmlFor="has_started_internship" className="text-gray-800 text-sm font-small">
                    I have started my internship
                  </label>
                </div>

                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="has_completed_internship"
                    name="has_completed_internship"
                    checked={formData.has_completed_internship}
                    onChange={handleChange}
                    className="w-3 h-3 text-blue-600 bg-white border border-gray-300 rounded focus:ring-1 focus:ring-gray-400"
                  />
                  <label htmlFor="has_completed_internship" className="text-gray-800 text-sm font-small">
                    I have completed my internship
                  </label>
                </div>
              </div>

              {formData.has_started_internship && (
                <>
                  <div>
                    <label className="block text-gray-800 text-sm mb-2 font-small">
                      Upload Acceptance Letter (Photo/PDF)
                    </label>
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      onChange={(e) => handleFileChange(e, "acceptance")}
                      className="w-full px-4 py-2 rounded-xl bg-white/60 text-gray-800 outline-none border border-gray-300 focus:ring-1 focus:ring-gray-400 transition file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                    />
                    {acceptanceFile && (
                      <p className="text-sm text-gray-600 mt-1">Selected: {acceptanceFile.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-800 text-sm mb-2 font-small">
                      Or Enter Acceptance Letter URL (Optional)
                    </label>
                    <input
                      type="text"
                      name="internship_letter_url"
                      value={formData.internship_letter_url}
                      onChange={handleChange}
                      placeholder="https://example.com/acceptance-letter"
                      className="w-full px-4 py-2 rounded-xl bg-white/60 text-gray-800 placeholder-gray-500 outline-none border border-gray-300 focus:ring-1 focus:ring-gray-400 transition"
                    />
                  </div>
                </>
              )}

              {formData.has_completed_internship && (
                <>
                  <div>
                    <label className="block text-gray-800 text-sm mb-2 font-small">
                      Upload Completion Letter (Photo/PDF)
                    </label>
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      onChange={(e) => handleFileChange(e, "completion")}
                      className="w-full px-4 py-2 rounded-xl bg-white/60 text-gray-800 outline-none border border-gray-300 focus:ring-1 focus:ring-gray-400 transition file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                    />
                    {completionFile && (
                      <p className="text-sm text-gray-600 mt-1">Selected: {completionFile.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-800 text-sm mb-2 font-small">
                      Or Enter Completion Letter URL (Optional)
                    </label>
                    <input
                      type="text"
                      name="completion_letter_url"
                      value={formData.completion_letter_url}
                      onChange={handleChange}
                      placeholder="https://example.com/completion-letter"
                      className="w-full px-4 py-2 rounded-xl bg-white/60 text-gray-800 placeholder-gray-500 outline-none border border-gray-300 focus:ring-1 focus:ring-gray-400 transition"
                    />
                  </div>
                </>
              )}

              <div>
                <label className="block text-gray-800 text-sm mb-2 font-small">
                  State of Internship
                </label>
                <select
                  name="state_of_internship"
                  value={formData.state_of_internship}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-xl bg-white/60 text-gray-800 outline-none border border-gray-300 focus:ring-1 focus:ring-gray-400 transition"
                  required
                >
                  <option value="">Select State</option>
                  <option value="Lagos">Lagos</option>
                  <option value="Abuja">Abuja</option>
                  <option value="Kano">Kano</option>
                  <option value="Enugu">Enugu</option>
                  {/* Add more states as needed */}
                </select>
              </div>

              <div>
                <label className="block text-gray-800 text-sm mb-2 font-small">
                  LGA of Internship
                </label>
                <input
                  type="text"
                  name="LGA_of_internship"
                  value={formData.LGA_of_internship}
                  onChange={handleChange}
                  placeholder="e.g., Bwari"
                  className="w-full px-4 py-2 rounded-xl bg-white/60 text-gray-800 placeholder-gray-500 outline-none border border-gray-300 focus:ring-1 focus:ring-gray-400 transition"
                  required
                />
              </div>
            </div>

            <FormNavigation
              currentStep={4}
              totalSteps={5}
              onNext={handleSubmit}
              onBack={() => router.back()}
              isLastStep={true}
              isLoading={isLoading}
            />
          </form>
        </FormWrapper>
      </motion.div>
    </div>
  );
}
