import { Product } from "../../types/shop";
import styles from "./ProductCard.module.scss";

type Props = {
  product: Product;
  onAdd: (p: Product) => void;
};

export default function ProductCard({ product, onAdd }: Props) {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={product.image} alt={product.title} />

      <div className={styles.body}>
        <div className={styles.top}>
          <div className={styles.title}>{product.title}</div>
          <div className={styles.category}>{product.category}</div>
        </div>

        <div className={styles.desc}>{product.description}</div>

        <div className={styles.bottom}>
          <div className={styles.price}>
            {product.price.toLocaleString("ru-RU")} ₸
          </div>
          <button className={styles.btn} onClick={() => onAdd(product)}>
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
}
