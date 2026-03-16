// ─────────────────────────────────────────────
//  Step 1 — Your Info
//  Fields: name, email, password
//  Validates before allowing next step
// ─────────────────────────────────────────────

import { useState } from "react";

function validate(fields) {
  const errors = {};

  if (!fields.name.trim()) {
    errors.name = "Name is required";
  }

  if (!fields.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = "Enter a valid email address";
  }

  if (!fields.password) {
    errors.password = "Password is required";
  } else if (fields.password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  }

  return errors;
}

function StepOne({ formData, onNext }) {
  const [fields, setFields] = useState({
    name: formData.name,
    email: formData.email,
    password: formData.password,
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    // Clear error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  }

  function handleNext() {
    const validationErrors = validate(fields);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    onNext(fields); // pass data up to App
  }

  return (
    <div className="step">
      <h2 className="step__title">Personal Info</h2>
      <p className="step__subtitle">
        Please provide your name, email address, and password.
      </p>

      <div className="form-group">
        <div className="form-field">
          <div className="form-field__header">
            <label htmlFor="name">Full Name</label>
            {errors.name && <span className="form-error">{errors.name}</span>}
          </div>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="e.g. Tobi Johnson"
            value={fields.name}
            onChange={handleChange}
            className={errors.name ? "input--error" : ""}
          />
        </div>

        <div className="form-field">
          <div className="form-field__header">
            <label htmlFor="email">Email Address</label>
            {errors.email && <span className="form-error">{errors.email}</span>}
          </div>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="e.g. tobi@gmail.com"
            value={fields.email}
            onChange={handleChange}
            className={errors.email ? "input--error" : ""}
          />
        </div>

        <div className="form-field">
          <div className="form-field__header">
            <label htmlFor="password">Password</label>
            {errors.password && (
              <span className="form-error">{errors.password}</span>
            )}
          </div>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Min. 8 characters"
            value={fields.password}
            onChange={handleChange}
            className={errors.password ? "input--error" : ""}
          />
        </div>
      </div>

      <div className="step__actions step__actions--right">
        <button className="btn btn--primary" onClick={handleNext}>
          Next Step
        </button>
      </div>
    </div>
  );
}

export default StepOne;
