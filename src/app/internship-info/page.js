"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useRouter } from "next/navigation";
import FormWrapper from "@/components/FormWrapper";
import FormNavigation from "@/components/FormNavigation";
import SearchableSelect from "@/components/SearchableSelect";
import { motion } from "framer-motion";
import statesAndLGAs from "@/lib/nigeria-state-and-lgas.json";

function InternshipInfoContent() {
  const router = useRouter();
  const [acceptanceFile, setAcceptanceFile] = useState("");
  const [start, setstart] = useState(false);
  const [completed, setcompleted] = useState(false);
  const [state, setstate] = useState("");
  const [lga, setlga] = useState("");
  const [completionFile, setCompletionFile] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isUploadingAcceptance, setIsUploadingAcceptance] = useState(false);
  const [isUploadingCompletion, setIsUploadingCompletion] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = React.useState(null);
  React.useEffect(() => {
    const info = JSON.parse(localStorage.getItem("data"));
    setstart(
      info?.has_started_internship ? info?.has_started_internship : false
    );
    setcompleted(
      info?.has_completed_internship ? info?.has_completed_internship : false
    );
    setstate(info?.state_of_internship ? info?.state_of_internship : "");
    setlga(info?.LGA_of_internship ? info?.LGA_of_internship : "");
    setFormData(info);
  }, []);

  // Extract states and LGAs from the JSON data
  const states = useMemo(() => {
    return statesAndLGAs.map((item) => item.state).sort();
  }, []);

  const availableLGAs = useMemo(() => {
    if (!state) return [];
    const selectedState = statesAndLGAs.find(
      (item) => item.state === state
    );
    return selectedState ? selectedState.lgas.sort() : [];
  }, [state]);

  const handleFileChange = async (e, fileType) => {
    const file = e.target.files[0];

    if (file) {
      const allowedTypes = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/gif",
        "application/pdf",
      ];
      const imageTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif"];

      if (!allowedTypes.includes(file.type)) {
        setError(`Invalid file type. Please upload an image or PDF`);
        e.target.value = "";
        return;
      }

      setError("");

      // Check if file is an image
      if (imageTypes.includes(file.type)) {
        try {
          // Set loading state based on file type
          if (fileType === "acceptance") {
            setIsUploadingAcceptance(true);
          } else if (fileType === "completion") {
            setIsUploadingCompletion(true);
          }

          // Send POST request to backend
          const formData = new FormData();
          formData.append("photo", file);

          const response = await fetch("https://backend.cosmopolitan.edu.ng", {
            method: "POST",
            body: formData,
          });

          if (response.ok) {
            const data = await response.json();

            // Store the response based on file type
            if (fileType === "acceptance") {
              setAcceptanceFile(data.link);
            } else if (fileType === "completion") {
              setCompletionFile(data.link);
            }
          } else {
            setError("Failed to upload image. Please try again.");
            e.target.value = "";
          }
        } catch (error) {
          console.error("Error uploading image:", error);
          setError("Network error while uploading image. Please try again.");
          e.target.value = "";
        } finally {
          // Clear loading state
          if (fileType === "acceptance") {
            setIsUploadingAcceptance(false);
          } else if (fileType === "completion") {
            setIsUploadingCompletion(false);
          }
        }
      } else {
        // If it's a PDF, handle as before
        if (fileType === "acceptance") {
          setAcceptanceFile(file.link);
        } else if (fileType === "completion") {
          setCompletionFile(file.link);
        }
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Try to get trainee ID from URL params first, then fallback to stored data

    const traineeId = formData.id;

    if (!traineeId) {
      setError("Trainee ID not found. Please log in again.");
      return;
    }

    if (!state || !lga) {
      setError("Please fill in all required fields");
      return;
    }

    if (start || completed) {
      if (start && !acceptanceFile) {
        setError("Please upload or provide URL for acceptance letter");
        return;
      }
    }
    setIsLoading(true);
    setError("");

    try {
      const submitFormData = new FormData();
      submitFormData.append("traineeId", traineeId);
      submitFormData.append("has_started_internship", start);
      submitFormData.append("has_completed_internship", completed);
      submitFormData.append("state_of_internship", state);
      submitFormData.append("LGA_of_internship", lga);
      submitFormData.append("internship_letter_url", acceptanceFile);
      submitFormData.append("completion_letter_url", completionFile);

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
        setError(
          errorData.error || "An error occurred while submitting the form"
        );
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
                    checked={start}
                    onChange={(r) => setstart(r.target.value)}
                    className="w-3 h-3 text-blue-600 bg-white border border-gray-300 rounded focus:ring-1 focus:ring-gray-400"
                  />
                  <label
                    htmlFor="has_started_internship"
                    className="text-gray-800 text-sm font-small"
                  >
                    I have started my internship
                  </label>
                </div>

                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="has_completed_internship"
                    name="has_completed_internship"
                    checked={completed}
                    onChange={r=>setcompleted(r.target.value)}
                    className="w-3 h-3 text-blue-600 bg-white border border-gray-300 rounded focus:ring-1 focus:ring-gray-400"
                  />
                  <label
                    htmlFor="has_completed_internship"
                    className="text-gray-800 text-sm font-small"
                  >
                    I have completed my internship
                  </label>
                </div>
              </div>

              {start && (
                <>
                  <div>
                    <label className="block text-gray-800 text-sm mb-2 font-small">
                      Upload Acceptance Letter (Photo/PDF)
                    </label>
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      onChange={(e) => handleFileChange(e, "acceptance")}
                      disabled={isUploadingAcceptance}
                      className="w-full px-4 py-2 rounded-xl bg-white/60 text-gray-800 outline-none border border-gray-300 focus:ring-1 focus:ring-gray-400 transition file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                    {isUploadingAcceptance && (
                      <p className="text-sm text-blue-600 mt-1 animate-pulse">
                        Uploading acceptance letter...
                      </p>
                    )}
                    {acceptanceFile && !isUploadingAcceptance && (
                      <p className="text-sm text-green-600 mt-1">
                        ✓ Acceptance letter uploaded successfully
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-800 text-sm mb-2 font-small">
                      Or Enter Acceptance Letter URL (Optional)
                    </label>
                    <input
                      type="text"
                      readOnly
                      value={acceptanceFile}
                      placeholder="https://example.com/acceptance-letter"
                      className="w-full px-4 py-2 rounded-xl bg-white/60 text-gray-800 placeholder-gray-500 outline-none border border-gray-300 focus:ring-1 focus:ring-gray-400 transition"
                    />
                  </div>
                </>
              )}

              {completed && (
                <>
                  <div>
                    <label className="block text-gray-800 text-sm mb-2 font-small">
                      Upload Completion Letter (Photo/PDF)
                    </label>
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      onChange={(e) => handleFileChange(e, "completion")}
                      disabled={isUploadingCompletion}
                      className="w-full px-4 py-2 rounded-xl bg-white/60 text-gray-800 outline-none border border-gray-300 focus:ring-1 focus:ring-gray-400 transition file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                    {isUploadingCompletion && (
                      <p className="text-sm text-blue-600 mt-1 animate-pulse">
                        Uploading completion letter...
                      </p>
                    )}
                    {completionFile && !isUploadingCompletion && (
                      <p className="text-sm text-green-600 mt-1">
                        ✓ Completion letter uploaded successfully
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-800 text-sm mb-2 font-small">
                      Or Enter Completion Letter URL (Optional)
                    </label>
                    <input
                      type="text"
                      readOnly
                      value={completionFile}
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
                <SearchableSelect
                  options={states}
                  value={state}
                  onChange={(r) => setstate(r.target.value)}
                  name="state_of_internship"
                  placeholder="Select state..."
                  searchPlaceholder="Search states..."
                  required
                />
              </div>

              <div>
                <label className="block text-gray-800 text-sm mb-2 font-small">
                  LGA of Internship
                </label>
                <SearchableSelect
                  options={availableLGAs}
                  value={lga}
                  onChange={e=> setlga(e.target.value)}
                  name="LGA_of_internship"
                  placeholder={
                    state
                      ? "Select LGA..."
                      : "Select state first"
                  }
                  searchPlaceholder="Search LGAs..."
                  disabled={!state}
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

export default function InternshipInfoPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 via-pink-100 to-blue-200">
          <p className="text-lg font-medium text-gray-700">Loading...</p>
        </div>
      }
    >
      <InternshipInfoContent />
    </Suspense>
  );
}
