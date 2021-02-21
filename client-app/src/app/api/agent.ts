import axios, { AxiosResponse } from "axios";
import { IProduct } from "../models/product";

axios.defaults.baseURL = "http://localhost:5000/api";

const responseBody = (response: AxiosResponse) => response.data;
const sleep = (ms: number) => (response: AxiosResponse) =>
  new Promise<AxiosResponse>((resolve) =>
    setTimeout(() => resolve(response), ms)
  );

const request = {
  get: (url: string) => axios.get(url).then(sleep(500)).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(sleep(500)).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(sleep(500)).then(responseBody),
  del: (url: string) => axios.delete(url).then(sleep(500)).then(responseBody),
};

const Products = {
  list: (): Promise<IProduct[]> => request.get("/products"),
  details: (id: string) => request.get(`/products/${id}`),
  create: (product: IProduct) => request.post("/products", product),
  update: (product: IProduct) =>
    request.put(`/products/ ${product.id}`, product),
  delete: (id: string) => request.del(`/products/${id}`),
};

const agent = {
  Products
}

export default agent;
