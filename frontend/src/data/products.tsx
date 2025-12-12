import { Product } from "../types/shop";

export const products: Product[] = [
  {
    id: "p1",
    title: "Phone Nova X",
    description: "OLED дисплей, 128GB, быстрая зарядка.",
    price: 199990,
    category: "Phones",
    image: "https://picsum.photos/seed/phone1/600/400",
  },
  {
    id: "p2",
    title: "Phone Nova Pro",
    description: "Камера 50MP, 256GB, 120Hz.",
    price: 299990,
    category: "Phones",
    image: "https://picsum.photos/seed/phone2/600/400",
  },
  {
    id: "p3",
    title: "Laptop Air 14",
    description: "Лёгкий, тихий, 16GB RAM.",
    price: 449990,
    category: "Laptops",
    image: "https://picsum.photos/seed/laptop1/600/400",
  },
  {
    id: "p4",
    title: "Laptop Studio 16",
    description: "Экран 16”, мощный процессор, SSD.",
    price: 649990,
    category: "Laptops",
    image: "https://picsum.photos/seed/laptop2/600/400",
  },
  {
    id: "p5",
    title: "Headphones Wave",
    description: "Шумоподавление, Bluetooth 5.3.",
    price: 59990,
    category: "Accessories",
    image: "https://picsum.photos/seed/acc1/600/400",
  },
  {
    id: "p6",
    title: "Charger 65W",
    description: "USB-C PD, компактный адаптер.",
    price: 14990,
    category: "Accessories",
    image: "https://picsum.photos/seed/acc2/600/400",
  },
];