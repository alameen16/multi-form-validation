// ─────────────────────────────────────────────
//  Step 2 — Select Plan
//  User picks one plan: free, pro, enterprise
// ─────────────────────────────────────────────

import { useState } from "react";

const PLANS = [
  {
    id: "free",
    name: "Free",
    price: "$0/mo",
    description: "Perfect for getting started",
  },
  {
    id: "pro",
    name: "Pro",
    price: "$12/mo",
    description: "For individuals & small teams",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "$49/mo",
    description: "Advanced features & priority support",
  },
];

function StepTwo({ formData, onNext, onBack }) {
  const [selectedPlan, setSelectedPlan] = useState(formData.plan);

  function handleNext() {
    onNext({ plan: selectedPlan });
  }

  return (
    <div className="step">
      <h2 className="step__title">Select Your Plan</h2>
      <p className="step__subtitle">
        You have the option of monthly or yearly billing.
      </p>

      <div className="plans">
        {PLANS.map((plan) => (
          <div
            key={plan.id}
            className={`plan-card ${selectedPlan === plan.id ? "plan-card--active" : ""}`}
            onClick={() => setSelectedPlan(plan.id)}
          >
            <div className="plan-card__radio">
              <div className={`radio-dot ${selectedPlan === plan.id ? "radio-dot--active" : ""}`} />
            </div>
            <div className="plan-card__info">
              <span className="plan-card__name">{plan.name}</span>
              <span className="plan-card__price">{plan.price}</span>
              <span className="plan-card__desc">{plan.description}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="step__actions">
        <button className="btn btn--ghost" onClick={onBack}>
          Go Back
        </button>
        <button className="btn btn--primary" onClick={handleNext}>
          Next Step
        </button>
      </div>
    </div>
  );
}

export default StepTwo;
