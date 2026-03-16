// ─────────────────────────────────────────────
//  useFormData — single source of truth for
//  all form data across every step
// ─────────────────────────────────────────────

import { useState } from "react";

const INITIAL_DATA = {
  // Step 1
  name: "",
  email: "",
  password: "",
  // Step 2
  plan: "free",
  // Step 3
  addons: [],
};

export function useFormData() {
  const [formData, setFormData] = useState(INITIAL_DATA);

  // Merge partial data from any step into the full formData
  function updateFormData(newData) {
    setFormData((prev) => ({ ...prev, ...newData }));
  }

  function resetFormData() {
    setFormData(INITIAL_DATA);
  }

  return { formData, updateFormData, resetFormData };
}
