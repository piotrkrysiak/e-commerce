import React, { useEffect } from "react";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";
import ProductList from "./ProductList";
import LoadingComponent from "../components/design/LoadingComponent";
import Row from "antd/lib/grid/row";
import Col from "antd/lib/grid/col";
import styled from "styled-components";

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
    <ProductContainer>
      <Row>
        <Col xs={{ span: 24 }} sm={{ span: 24 }}>
          <ProductList />
        </Col>
      </Row>
    </ProductContainer>
  );
});

const ProductContainer = styled.div`
  margin: 20vh 10vw;
  display: flex;
  justify-content: center;
  align-items: center;
  .ant-card {
    width: 80vh;
    height: auto;
  }
`;