import type { Metadata } from "next";

import { ShoppingCart } from "@/components";

export const metadata: Metadata = {
  title: "Ecommerce | Shopping Cart",
};

const ShoppingCartPage = () => {
  return <ShoppingCart />;
};

export default ShoppingCartPage;
