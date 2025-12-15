import shared from "../Auth.module.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const navigate = useNavigate();

  return (
    <div className={`${shared.page}`}>
      <form className={shared.card}>
        <h1 className={shared.title}>Регистрация</h1>

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

        <button className={shared.button}>Создать аккаунт</button>

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
