import { Col, Row } from "antd";
import React from "react";
import { ProductDetails } from "../details/ProductDetails";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";
import ProductForm from "../form/ProductForm";
import ProductList from "./ProductList";



export default observer(function ProductDashboard() {
  const { productStore } = useStore();
  const { selectedProduct, editMode } = productStore;

  return (
    <div style={{ margin: "200px 0px 200px" }}>
      <Row>
        <Col xs={{ span: 22, offset: 1 }} sm={{ span: 13, offset: 1 }}>
          <ProductList />
        </Col>
        <Col xs={{ span: 0, offset: 1 }} sm={{ span: 8, offset: 1 }}>
          {selectedProduct && !editMode && <ProductDetails />}
          {editMode && <ProductForm />}
        </Col>
      </Row>
    </div>
  );
});
