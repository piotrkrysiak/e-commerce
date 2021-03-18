import { List } from "antd";
import React from "react";
import Product from "./Product";

export default function ProductList() {
  return (
    <>
      <List
        itemLayout="vertical"
        pagination={{
          onChange: (page) => {
            console.log(page);
          }
        }}
      >
        <Product />
      </List>
    </>
  );
}
