import { List, Row, Button, Grid } from "antd";
import React from "react";
import { IProduct } from "../../app/models/product";
import Icon from "../components/design/Icon";
import { MobileBar } from "./MobileBar";
import { Product } from "./Product";

const { useBreakpoint } = Grid;

interface IProps {
  products: IProduct[];
  loading: boolean;
  selectProduct: (id: number) => void;
  openCreateForm: () => void;
  deleteProduct: (id: number) => void;
  showDrawer: (show: boolean) => void;

}

export const ProductList = ({
  products,
  loading,
  selectProduct,
  openCreateForm,
  deleteProduct,
  showDrawer
}: IProps) => {
  const screens = useBreakpoint();
  if (loading) {
    return (
      <>
        <Icon />
      </>
    );
  }
  return (
    <>

      <MobileBar openCreateForm={openCreateForm} showDrawer={showDrawer}/>
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
          showDrawer={showDrawer}
        />
      </List>
    </>
  );
};
