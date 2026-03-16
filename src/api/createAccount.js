// ─────────────────────────────────────────────
//  API layer — all network calls live here
//  Swap the URL when you have a real backend
// ─────────────────────────────────────────────

const API_URL = "https://jsonplaceholder.typicode.com/users";

export async function createAccount(formData) {
  const payload = {
    name: formData.name,
    email: formData.email,
    username: formData.name.toLowerCase().replace(/\s+/g, "_"),
    plan: formData.plan,
    addons: formData.addons,
  };

  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  const data = await response.json();
  return data; // JSONPlaceholder echoes back { id: 11, ...payload }
}
