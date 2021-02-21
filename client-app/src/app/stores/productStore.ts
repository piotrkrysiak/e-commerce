import { makeAutoObservable, runInAction } from "mobx";
import { v4 as uuid } from "uuid";
import agent from "../api/agent";
import { IProduct } from "../models/product";

export default class ProductStore {
  productRegistry = new Map<string, IProduct>();
  selectedProduct: IProduct | undefined = undefined;
  editMode = false;
  loading = false;
  loadingInitial = true;

  constructor() {
    makeAutoObservable(this);
  }

  get productsByName() {
    return Array.from(this.productRegistry.values()).sort((a,b)=> a.storeId - b.storeId);
  }

  loadProducts = async () => {
    try {
      const products = await agent.Products.list();

      products.forEach((product) => {
        product.addedDate = product.addedDate.split(".")[0];
        this.productRegistry.set(product.id, product);
      });

      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);
      this.setLoadingInitial(false);
    }
  };

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state; // runInAction
  };

  selectProduct = (id: string) => {
    this.editMode = false; // ???
    this.selectedProduct = this.productRegistry.get(id);
  };

  cancelSelectedProduct = () => {
    this.selectedProduct = undefined;
  };

  openForm = (id?: string) => {
    id ? this.selectProduct(id) : this.cancelSelectedProduct();
    this.editMode = true;
  };

  closeForm = () => {
    this.editMode = false;
  };

  createProduct = async (product: IProduct) => {
    this.loading = true;
    product.id = uuid();
    try {
      await agent.Products.create(product);
      runInAction(() => {
        this.productRegistry.set(product.id, product);
        this.selectedProduct = product;
        this.editMode = false;
        this.loading = false;
      });
    } catch (error) {
      console.log(error);
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  updateProduct = async (product: IProduct) => {
    this.loading = true;
    try {
      await agent.Products.update(product);
      runInAction(() => {
        this.productRegistry.set(product.id, product);
        this.selectedProduct = product;
        this.editMode = false;
        this.loading = false;
      });
    } catch (error) {
      console.log(error);
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  deleteProduct = async (id: string) => {
    this.loading = true;
    try {
      await agent.Products.delete(id);
      runInAction(() => {
        this.productRegistry.delete(id);
        if (this.selectedProduct?.id === id) this.cancelSelectedProduct();
        this.loading = false;
      });
    } catch (error) {
      console.log(error);
      runInAction(() => {
        this.loading = false;
      });
    }
  };
}
