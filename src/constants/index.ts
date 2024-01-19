import { INavLink } from "@/interfaces";

export const navLinks: INavLink[] = [
  {
    route: "/",
    text: "Home",
  },
  {
    route: "/contacts",
    text: "Contacts",
  },
  {
    route: "/products",
    text: "All Products",
  },
];

export const API_BASE_URL = "https://fakestoreapi.com";
export const API_ENDPOINTS = {
  PRODUCTS: "/products",
  PRODUCT: "/products/",
  CATEGORIES: "/products/categories",
  CATEGORY: "/products/category/",
};
