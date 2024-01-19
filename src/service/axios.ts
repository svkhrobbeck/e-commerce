import { API_BASE_URL } from "@/constants";
import axios from "axios";

const customAxios = axios.create({
  baseURL: API_BASE_URL,
});

export default customAxios;
