import { Product } from "../types/shop";
import iPhone15 from "../assets/iPhone15.png";
import iPhone15PM from "../assets/iPhone15PM.png";
import MacBookAir15 from "../assets/MacBookAir15.png";
import MacBookPro16 from "../assets/MacBookPro16.png";
import AirPods4 from "../assets/AirPods4.png";
import AppleWatchSE from "../assets/AppleWatchSE.png";

export const products: Product[] = [
  {
    id: "p1",
    title: "iPhone 15",
    description: "OLED дисплей, 128GB, 60Hz.",
    price: 349990,
    category: "Phones",
    image: iPhone15,
  },
  {
    id: "p2",
    title: "iPhone 15 Pro Max",
    description: "OLED дисплей, 256GB, 120Hz.",
    price: 839990,
    category: "Phones",
    image: iPhone15PM,
  },
  {
    id: "p3",
    title: "MacBook Air 15 M3",
    description: "8/512GB, 15.3-дюймовый дисплей.",
    price: 849990,
    category: "Laptops",
    image: MacBookAir15,
  },
  {
    id: "p4",
    title: "MacBook Pro 16 M3",
    description: "16/512GB, 16-дюймовый дисплей.",
    price: 1239990,
    category: "Laptops",
    image: MacBookPro16,
  },
  {
    id: "p5",
    title: "AirPods 4",
    description: "Шумоподавление, Bluetooth 5.3",
    price: 59990,
    category: "Accessories",
    image: AirPods4,
  },
  {
    id: "p6",
    title: "Apple Watch SE",
    description: "40mm, GPS, Cellular",
    price: 64990,
    category: "Accessories",
    image: AppleWatchSE,
  },
];
