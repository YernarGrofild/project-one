import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          © {new Date().getFullYear()} ProjectOne Shop
        </div>
        <div className={styles.right}>Demo UI · React + TS + SCSS</div>
      </div>
    </footer>
  );
}
