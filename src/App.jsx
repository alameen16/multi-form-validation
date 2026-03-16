// ─────────────────────────────────────────────
//  App.jsx — the brain
//  Controls which step is shown, holds formData
//  across all steps via useFormData hook
// ─────────────────────────────────────────────

import { useState } from "react";
import Sidebar from "./components/Sidebar";
import StepOne from "./components/steps/StepOne";
import StepTwo from "./components/steps/StepTwo";
import StepThree from "./components/steps/StepThree";
import StepFour from "./components/steps/StepFour";
import SuccessScreen from "./components/SuccessScreen";
import { useFormData } from "./hooks/useFormData";
import "./index.css";

const TOTAL_STEPS = 4;

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  const { formData, updateFormData } = useFormData();

  // Called by each step with its data → merge + advance
  function handleNext(stepData) {
    updateFormData(stepData);
    setCurrentStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
  }

  function handleBack() {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  }

  function handleSuccess() {
    setIsSuccess(true);
  }

  function renderStep() {
    if (isSuccess) return <SuccessScreen />;

    switch (currentStep) {
      case 1:
        return <StepOne formData={formData} onNext={handleNext} />;
      case 2:
        return (
          <StepTwo formData={formData} onNext={handleNext} onBack={handleBack} />
        );
      case 3:
        return (
          <StepThree
            formData={formData}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 4:
        return (
          <StepFour
            formData={formData}
            onBack={handleBack}
            onSuccess={handleSuccess}
          />
        );
      default:
        return null;
    }
  }

  return (
    <div className="app-container">
      <Sidebar currentStep={isSuccess ? TOTAL_STEPS : currentStep} />
      <div className="main-content">{renderStep()}</div>
    </div>
  );
}

export default App;
