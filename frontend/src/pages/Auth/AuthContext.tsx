import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  apiFetch,
  clearTokens,
  getAccessToken,
  setTokens,
} from "../../api/http";

type User = { id?: number; username?: string; email?: string } | null;

type AuthCtx = {
  isAuthed: boolean;
  user: User;
  login: (email: string, password: string) => Promise<void>;
  register: (
    email: string,
    password: string,
    password2: string
  ) => Promise<void>;
  logout: () => void;
};

const Ctx = createContext<AuthCtx | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null);
  const isAuthed = !!getAccessToken();

  async function loadMe() {
    try {
      const me = await apiFetch("/api/auth/me/");
      setUser(me);
    } catch {
      setUser(null);
      // токен битый/просрочен
      clearTokens();
    }
  }

  useEffect(() => {
    if (getAccessToken()) loadMe();
  }, []);

  async function login(email: string, password: string) {
    // ВАЖНО: у SimpleJWT стандартно поле username, не email
    const data = await apiFetch("/api/auth/token/", {
      method: "POST",
      body: JSON.stringify({ username: email, password }),
    });
    setTokens(data.access, data.refresh);
    await loadMe();
  }

  async function register(email: string, password: string, password2: string) {
    const data = await apiFetch("/api/auth/register/", {
      method: "POST",
      body: JSON.stringify({ email, password, password2 }),
    });
    // можно сразу логиниться после регистрации:
    setTokens(data.access, data.refresh);
    await loadMe();
  }

  function logout() {
    clearTokens();
    setUser(null);
  }

  const value = useMemo(
    () => ({ isAuthed: !!getAccessToken(), user, login, register, logout }),
    [user]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useAuth() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useAuth must be used inside AuthProvider");
  return v;
}
