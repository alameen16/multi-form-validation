// ─────────────────────────────────────────────
//  Step 3 — Add-ons
//  User picks any combination of extras
// ─────────────────────────────────────────────

import { useState } from "react";

const ADDONS = [
  {
    id: "newsletter",
    label: "Weekly Newsletter",
    description: "Tips and updates straight to your inbox",
    price: "Free",
  },
  {
    id: "sms",
    label: "SMS Alerts",
    description: "Get notified via text message",
    price: "+$2/mo",
  },
  {
    id: "analytics",
    label: "Advanced Analytics",
    description: "Deeper insights into your activity",
    price: "+$5/mo",
  },
];

function StepThree({ formData, onNext, onBack }) {
  const [selected, setSelected] = useState(formData.addons);

  function toggleAddon(id) {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  }

  function handleNext() {
    onNext({ addons: selected });
  }

  return (
    <div className="step">
      <h2 className="step__title">Pick Add-ons</h2>
      <p className="step__subtitle">
        Add-ons help enhance your experience.
      </p>

      <div className="addons">
        {ADDONS.map((addon) => {
          const isChecked = selected.includes(addon.id);
          return (
            <div
              key={addon.id}
              className={`addon-card ${isChecked ? "addon-card--active" : ""}`}
              onClick={() => toggleAddon(addon.id)}
            >
              <div className={`checkbox ${isChecked ? "checkbox--checked" : ""}`}>
                {isChecked && (
                  <svg viewBox="0 0 12 10" fill="none">
                    <path
                      d="M1 5l3.5 3.5L11 1"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
              <div className="addon-card__info">
                <span className="addon-card__label">{addon.label}</span>
                <span className="addon-card__desc">{addon.description}</span>
              </div>
              <span className="addon-card__price">{addon.price}</span>
            </div>
          );
        })}
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

export default StepThree;
