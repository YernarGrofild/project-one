import styles from "./Header.module.scss";

type Props = {
  query: string;
  onQueryChange: (v: string) => void;
  category: string;
  onCategoryChange: (v: string) => void;
  cartCount: number;
  onOpenCart: () => void;
};

export default function Header({
  query,
  onQueryChange,
  category,
  onCategoryChange,
  cartCount,
  onOpenCart,
}: Props) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.logo} />
          <div>
            <div className={styles.title}>ProjectOne Shop</div>
            <div className={styles.subtitle}>Базовый магазин на React</div>
          </div>
        </div>

        <div className={styles.controls}>
          <input
            className={styles.search}
            placeholder="Поиск товара..."
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
          />

          <select
            className={styles.select}
            value={category}
            onChange={(e) => onCategoryChange(e.target.value)}
          >
            <option value="All">Все категории</option>
            <option value="Phones">Phones</option>
            <option value="Laptops">Laptops</option>
            <option value="Accessories">Accessories</option>
          </select>

          <button className={styles.cartBtn} onClick={onOpenCart}>
            Корзина
            <span className={styles.badge}>{cartCount}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
