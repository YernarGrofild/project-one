import { useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";

type Props = {
  cartCount: number;
  onOpenCart: () => void;
};

export default function Header({ cartCount, onOpenCart }: Props) {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.logo} />
          <div>
            <div className={styles.title}>ProjectOne Shop</div>
            <div className={styles.subtitle}>
              Тестовый сайт на проверку безопасности
            </div>
          </div>
        </div>

        <div className={styles.controls}>
          <button className={styles.loginBtn} onClick={handleLogin}>
            Войти
          </button>

          <button className={styles.cartBtn} onClick={onOpenCart}>
            Корзина
            <span className={styles.badge}>{cartCount}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
