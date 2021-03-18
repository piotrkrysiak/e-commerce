import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import React, { useEffect } from "react";
import { EditOutlined, CloseOutlined } from "@ant-design/icons";
import { useStore } from "../../app/stores/store";
import LoadingComponent from "../components/design/LoadingComponent";
import { Link, useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import styled from "styled-components";

export default observer(function ProductDetails() {
  const { productStore } = useStore();
  const {
    selectedProduct: product,
    loadProduct,
    loadingInitial,
  } = productStore;
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) loadProduct(id);
  }, [id, loadProduct]);

  if (loadingInitial || !product) return <LoadingComponent />;

  return (
    <ProductDetailsContainer>
      <Card
        hoverable
        cover={<img alt="example" src={product.photo} />}
        actions={[
          <Link to={`/manage/${id}`}>
            <EditOutlined key="edit" />
          </Link>,
          <Link to="/products">
            <CloseOutlined key="ellipsis" />
          </Link>,
        ]}
      >
        <Meta title={product.name} />
        <Meta description={product.label} />
        <div>
          {product.price} {product.availability}
        </div>
      </Card>
    </ProductDetailsContainer>
  );
});

const ProductDetailsContainer = styled.div`
  margin: 20vh 10vw;
  display: flex;
  justify-content: center;
  align-items: center;
  .ant-card {
    width: 80vh;
    height: auto;
  }
`;
