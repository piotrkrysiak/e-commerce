import React, { useEffect } from "react";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";
import ProductList from "./ProductList";
import LoadingComponent from "../components/design/LoadingComponent";
import Row from "antd/lib/grid/row";
import Col from "antd/lib/grid/col";

export default observer(function ProductDashboard() {
  const { productStore } = useStore();
  const {loadProducts, productRegistry}= productStore
  
  useEffect(() => {
    if(productRegistry.size <= 1) {
      loadProducts();
    }
  }, [productRegistry.size, loadProducts]);

  if (productStore.loadingInitial) return <LoadingComponent />;

  return (
    <div style={{ margin: "200px 0px 200px" }}>
      <Row>
        <Col xs={{ span: 22, offset: 1 }} sm={{ span: 13, offset: 1 }}>
          <ProductList />
        </Col>
      </Row>
    </div>
  );
});
