import { IProduct } from "@/interfaces";
import axios from "axios";

const ProductsApi = {
  async get(endpoint: string, params: any = {}) {
    const { data } = await axios.get(endpoint, { params });
    return data as IProduct[];
  },
  async getOne(endpoint: string, id: number, params: any = {}) {
    const { data } = await axios.get(endpoint + id, { params });
    return data as IProduct;
  },
};

export default ProductsApi;
