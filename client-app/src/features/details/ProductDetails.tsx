import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";
import { EditOutlined, CloseOutlined } from "@ant-design/icons";
import { IProduct } from "../../app/models/product";

interface IProps {
  product: IProduct;
  setEditMode: (editMode: boolean) => void;
  setSelectedProduct: (product: IProduct | null) => void;
}

export const ProductDetails: React.FC<IProps> = ({
  product,
  setEditMode,
  setSelectedProduct,
}) => {
  const navigate = () => setEditMode(true);
  return (
    <div>
      <Card
        hoverable
        cover={<img alt="example" src={product.photo} />}
        actions={[
          <EditOutlined onClick={navigate} key="edit" />,
          <CloseOutlined
            onClick={() => setSelectedProduct(null)}
            key="ellipsis"
          />,
        ]}
      >
        <Meta title={product.name} />
        {/* <Meta description={product.body} /> */}
        <Meta description={product.discryption} />
        <div>
          {" "}
          {product.price} {product.currency}
        </div>
      </Card>
    </div>
  );
};
