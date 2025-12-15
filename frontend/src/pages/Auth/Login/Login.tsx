import shared from "../Auth.module.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../Auth/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr("");
    try {
      await login(email, password);
      navigate("/");
    } catch (e: any) {
      setErr(e.message || "Ошибка входа");
    }
  }

  return (
    <div className={shared.page}>
      <form className={shared.card} onSubmit={onSubmit}>
        <h1 className={shared.title}>Вход</h1>
        {!!err && <div className={shared.error}>{err}</div>}

        <input
          className={shared.input}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={shared.input}
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className={shared.button} type="submit">
          Войти
        </button>

        <button
          type="button"
          className={shared.reg_button}
          onClick={() => navigate("/register")}
        >
          Нет аккаунта? Зарегистрироваться
        </button>
      </form>
    </div>
  );
}
