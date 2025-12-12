import { CartItem } from "../../types/shop";
import styles from "./CardDrawer.module.scss";

type Props = {
  open: boolean;
  items: CartItem[];
  onClose: () => void;
  onInc: (id: string) => void;
  onDec: (id: string) => void;
  onRemove: (id: string) => void;
  onClear: () => void;
};

export default function CartDrawer({
  open,
  items,
  onClose,
  onInc,
  onDec,
  onRemove,
  onClear,
}: Props) {
  const total = items.reduce((s, it) => s + it.product.price * it.qty, 0);

  return (
    <div
      className={`${styles.overlay} ${open ? styles.open : ""}`}
      onMouseDown={onClose}
    >
      <aside className={styles.drawer} onMouseDown={(e) => e.stopPropagation()}>
        <div className={styles.head}>
          <div className={styles.hTitle}>Корзина</div>
          <button className={styles.iconBtn} onClick={onClose}>
            ✕
          </button>
        </div>

        {items.length === 0 ? (
          <div className={styles.empty}>
            Пока пусто. Добавь товар из каталога 🙂
          </div>
        ) : (
          <>
            <div className={styles.list}>
              {items.map(({ product, qty }) => (
                <div key={product.id} className={styles.item}>
                  <img
                    className={styles.thumb}
                    src={product.image}
                    alt={product.title}
                  />
                  <div className={styles.meta}>
                    <div className={styles.name}>{product.title}</div>
                    <div className={styles.sub}>
                      {product.price.toLocaleString("ru-RU")} ₸ ·{" "}
                      {product.category}
                    </div>

                    <div className={styles.row}>
                      <div className={styles.qty}>
                        <button
                          className={styles.qBtn}
                          onClick={() => onDec(product.id)}
                        >
                          -
                        </button>
                        <span className={styles.qVal}>{qty}</span>
                        <button
                          className={styles.qBtn}
                          onClick={() => onInc(product.id)}
                        >
                          +
                        </button>
                      </div>

                      <button
                        className={styles.remove}
                        onClick={() => onRemove(product.id)}
                      >
                        Удалить
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.footer}>
              <div className={styles.total}>
                Итого: <span>{total.toLocaleString("ru-RU")} ₸</span>
              </div>

              <div className={styles.actions}>
                <button className={styles.secondary} onClick={onClear}>
                  Очистить
                </button>
                <button
                  className={styles.primary}
                  onClick={() => alert("Заглушка оформления заказа")}
                >
                  Оформить
                </button>
              </div>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
