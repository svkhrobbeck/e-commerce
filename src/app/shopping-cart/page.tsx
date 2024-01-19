import type { Metadata } from "next";
import ClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Ecommerce | Shopping Cart",
};

const ShoppingCartPage = () => {
  return <ClientPage />;
};

export default ShoppingCartPage;
