const API_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:8000";

export async function register(email: string, password: string) {
  const r = await fetch(`${API_URL}/api/auth/register/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await r.json();
  if (!r.ok) throw new Error(data?.detail || "Register failed");
  return data;
}

export async function login(email: string, password: string) {
  const r = await fetch(`${API_URL}/api/auth/token/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: email, password }),
  });

  const data = await r.json();
  if (!r.ok) throw new Error(data?.detail || "Login failed");

  localStorage.setItem("access", data.access);
  localStorage.setItem("refresh", data.refresh);

  return data;
}

export function logout() {
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
}

export async function me() {
  const token = localStorage.getItem("access");
  const r = await fetch(`${API_URL}/api/auth/me/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await r.json();
  if (!r.ok) throw new Error(data?.detail || "Not authorized");
  return data;
}
