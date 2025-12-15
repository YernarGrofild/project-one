import styles from "./Header.module.scss";

type Props = {
  cartCount: number;
  onOpenCart: () => void;
  isAuthed: boolean;
  onLoginClick: () => void;
  onLogoutClick: () => void;
};

export default function Header({
  cartCount,
  onOpenCart,
  isAuthed,
  onLoginClick,
  onLogoutClick,
}: Props) {
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
          {!isAuthed ? (
            <button className={styles.loginBtn} onClick={onLoginClick}>
              Войти
            </button>
          ) : (
            <button className={styles.loginBtn} onClick={onLogoutClick}>
              Выйти
            </button>
          )}

          {isAuthed && (
            <button className={styles.cartBtn} onClick={onOpenCart}>
              Корзина <span className={styles.badge}>{cartCount}</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
