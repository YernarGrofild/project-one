export type Product = {
    id: string;
    title: string;
    description: string;
    price: number;
    category: "Phones" | "Laptops" | "Accessories";
    image: string; // url
  };
  
  export type CartItem = {
    product: Product;
    qty: number;
  };