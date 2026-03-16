// ─────────────────────────────────────────────
//  Step 4 — Summary
//  Shows a review of all data, then submits
//  to the API when user confirms
// ─────────────────────────────────────────────

import { useState } from "react";
import { createAccount } from "../../api/createAccount";

const PLAN_LABELS = {
  free: { name: "Free Plan", price: "$0/mo" },
  pro: { name: "Pro Plan", price: "$12/mo" },
  enterprise: { name: "Enterprise Plan", price: "$49/mo" },
};

const ADDON_LABELS = {
  newsletter: "Weekly Newsletter",
  sms: "SMS Alerts",
  analytics: "Advanced Analytics",
};

function StepFour({ formData, onBack, onSuccess }) {
  // 3 states: idle | loading | error
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const plan = PLAN_LABELS[formData.plan];

  async function handleSubmit() {
    setStatus("loading");
    setErrorMsg("");

    try {
      await createAccount(formData);
      setStatus("idle");
      onSuccess(); // tell App to show success screen
    } catch (err) {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="step">
      <h2 className="step__title">Finishing Up</h2>
      <p className="step__subtitle">
        Double-check everything looks OK before confirming.
      </p>

      <div className="summary">
        {/* Personal Info */}
        <div className="summary__section">
          <h3 className="summary__section-title">Account Details</h3>
          <div className="summary__row">
            <span className="summary__label">Name</span>
            <span className="summary__value">{formData.name}</span>
          </div>
          <div className="summary__row">
            <span className="summary__label">Email</span>
            <span className="summary__value">{formData.email}</span>
          </div>
        </div>

        {/* Plan */}
        <div className="summary__section">
          <h3 className="summary__section-title">Plan</h3>
          <div className="summary__row">
            <span className="summary__label">{plan.name}</span>
            <span className="summary__value summary__value--highlight">
              {plan.price}
            </span>
          </div>
        </div>

        {/* Add-ons */}
        {formData.addons.length > 0 && (
          <div className="summary__section">
            <h3 className="summary__section-title">Add-ons</h3>
            {formData.addons.map((id) => (
              <div key={id} className="summary__row">
                <span className="summary__label">{ADDON_LABELS[id]}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Error message */}
      {status === "error" && (
        <p className="api-error">{errorMsg}</p>
      )}

      <div className="step__actions">
        <button className="btn btn--ghost" onClick={onBack} disabled={status === "loading"}>
          Go Back
        </button>
        <button
          className="btn btn--confirm"
          onClick={handleSubmit}
          disabled={status === "loading"}
        >
          {status === "loading" ? "Creating Account..." : "Confirm"}
        </button>
      </div>
    </div>
  );
}

export default StepFour;
