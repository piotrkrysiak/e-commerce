import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";
import { EditOutlined, CloseOutlined } from "@ant-design/icons";
import { useStore } from "../../app/stores/store";
import LoadingComponent from "../components/design/LoadingComponent";

export const ProductDetails = () => {
  const { productStore } = useStore();
  const {
    selectedProduct: product,
    openForm,
    cancelSelectedProduct,
  } = productStore;

  if (!product) return <LoadingComponent />;

  return (
    <div>
      <Card
        hoverable
        cover={<img alt="example" src={product.photo} />}
        actions={[
          <EditOutlined onClick={() => openForm(product.id)} key="edit" />,
          <CloseOutlined onClick={cancelSelectedProduct} key="ellipsis" />,
        ]}
      >
        <Meta title={product.name} />
        {/* <Meta description={product.body} /> */}
        <Meta description={product.discryption} />
        <div>
          {product.price} {product.currency}
        </div>
      </Card>
    </div>
  );
};
