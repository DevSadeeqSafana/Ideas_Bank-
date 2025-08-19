export default function FormNavigation({ currentStep, totalSteps, onNext, onBack, isLastStep, isLoading }) {
  return (
    <div className="flex justify-between mt-6">
      {currentStep > 0 && (
        <button
          onClick={onBack}
          disabled={isLoading}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Back
        </button>
      )}
      <button
        onClick={onNext}
        disabled={isLoading}
        className={`px-4 py-2 ml-auto ${isLastStep ? 'bg-green-600' : 'bg-blue-600'} text-white rounded hover:bg-opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {isLoading ? 'Processing...' : (isLastStep ? 'Submit' : 'Continue')}
      </button>
    </div>
  );
}