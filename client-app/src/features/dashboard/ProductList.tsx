import { List } from "antd";
import React from "react";
import { IProduct } from "../../app/models/product";
import LoadingComponent from "../components/design/LoadingComponent";
import { MobileBar } from "./MobileBar";
import { Product } from "./Product";

interface IProps {
  products: IProduct[];
  loading: boolean;
  selectProduct: (id: string) => void;
  openCreateForm: () => void;
  deleteProduct: (e: any, id: string) => void;
  submitting: boolean;
  target: string;
}

export const ProductList = ({
  products,
  loading,
  selectProduct,
  openCreateForm,
  deleteProduct,
  submitting,
  target,
}: IProps) => {
  if (loading) {
    return (
      <>
        <LoadingComponent />
      </>
    );
  }
  return (
    <>
      <MobileBar openCreateForm={openCreateForm} />
      <List
        itemLayout="vertical"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
        }}
      >
        <Product
          products={products}
          selectProduct={selectProduct}
          deleteProduct={deleteProduct}
          submitting={submitting}
          target={target}
        />
      </List>
    </>
  );
};
