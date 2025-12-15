import shared from "../Auth.module.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../../pages/Auth/AuthContext";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [err, setErr] = useState("");
  const { register } = useAuth();
  const navigate = useNavigate();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr("");
    try {
      await register(email, password, password2);
      navigate("/");
    } catch (e: any) {
      setErr(e.message || "Ошибка регистрации");
    }
  }

  return (
    <div className={shared.page}>
      <form className={shared.card} onSubmit={onSubmit}>
        <h1 className={shared.title}>Регистрация</h1>
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
        <input
          className={shared.input}
          type="password"
          placeholder="Повтор пароля"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />

        <button className={shared.button} type="submit">
          Создать аккаунт
        </button>

        <button
          type="button"
          className={shared.reg_button}
          onClick={() => navigate("/login")}
        >
          Назад
        </button>
      </form>
    </div>
  );
}
