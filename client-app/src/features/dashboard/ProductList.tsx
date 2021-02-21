import { List } from "antd";
import React from "react";
import { MobileBar } from "./MobileBar";
import Product from "./Product";

export default function ProductList() {
  return (
    <>
      <MobileBar />
      <List
        itemLayout="vertical"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
        }}
      >
        <Product />
      </List>
    </>
  );
}
