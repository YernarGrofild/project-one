import { useMemo, useState } from "react";
import Header from "../../components/Header/Header";
import ProductCard from "../../components/ProductCards/ProductCard";
import CartDrawer from "../../components/CardDrawer/CardDrawer";
import Footer from "../../components/Footer/Footer";
import { products } from "../../data/products";
import { CartItem, Product } from "../../types/shop";

import styles from "./Home.module.scss";

export default function Home() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const catOk = category === "All" ? true : p.category === category;
      const qOk =
        q.length === 0
          ? true
          : (p.title + " " + p.description).toLowerCase().includes(q);
      return catOk && qOk;
    });
  }, [query, category]);

  const cartCount = cart.reduce((s, it) => s + it.qty, 0);

  const addToCart = (p: Product) => {
    setCart((prev) => {
      const idx = prev.findIndex((x) => x.product.id === p.id);
      if (idx === -1) return [...prev, { product: p, qty: 1 }];
      return prev.map((x) =>
        x.product.id === p.id ? { ...x, qty: x.qty + 1 } : x
      );
    });
    setCartOpen(true);
  };

  const inc = (id: string) =>
    setCart((prev) =>
      prev.map((x) => (x.product.id === id ? { ...x, qty: x.qty + 1 } : x))
    );

  const dec = (id: string) =>
    setCart((prev) =>
      prev
        .map((x) => (x.product.id === id ? { ...x, qty: x.qty - 1 } : x))
        .filter((x) => x.qty > 0)
    );

  const remove = (id: string) =>
    setCart((prev) => prev.filter((x) => x.product.id !== id));
  const clear = () => setCart([]);

  return (
    <div className={styles.page}>
      <Header cartCount={cartCount} onOpenCart={() => setCartOpen(true)} />

      <main className={styles.main}>
        <section className={styles.filters}>
          <input
            className={styles.search}
            placeholder="Поиск товара..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <select
            className={styles.select}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">Все категории</option>
            <option value="Phones">Phones</option>
            <option value="Laptops">Laptops</option>
            <option value="Accessories">Accessories</option>
          </select>
        </section>

        <section className={styles.hero}>
          <div className={styles.hTitle}>Каталог товаров</div>
          <div className={styles.hSub}>
            Поиск + фильтр + корзина. Дальше можно подключить API и оплату.
          </div>
        </section>

        <section className={styles.grid}>
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={addToCart} />
          ))}
        </section>
      </main>

      <Footer />

      <CartDrawer
        open={cartOpen}
        items={cart}
        onClose={() => setCartOpen(false)}
        onInc={inc}
        onDec={dec}
        onRemove={remove}
        onClear={clear}
      />
    </div>
  );
}
