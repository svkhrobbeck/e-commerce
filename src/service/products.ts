import { IProduct } from "@/interfaces";
import axios from "axios";
import customAxios from "./axios";

const ProductsApi = {
  async get(endpoint: string, params: any = {}) {
    const { data } = await customAxios.get(endpoint, { params });
    return data as IProduct[];
  },
  async getOne(endpoint: string, id: number | string, params: any = {}) {
    const { data } = await customAxios.get(endpoint + id, { params });
    return data as IProduct;
  },
};

export default ProductsApi;
