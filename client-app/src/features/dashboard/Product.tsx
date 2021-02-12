import { Button, Col, List, Rate, Row, Image, Grid } from "antd";
import React from "react";
import { IProduct } from "../../app/models/product";
import { FullscreenOutlined, DeleteOutlined } from "@ant-design/icons";

interface IProps {
  products: IProduct[];
  selectProduct: (id: string) => void;
  deleteProduct: (e: any, id: string) => void;
  submitting: boolean;
  target: string
}

const { useBreakpoint } = Grid;

export const Product: React.FC<IProps> = ({
  products,
  selectProduct,
  deleteProduct,
  submitting,
  target
}) => {
  const screens = useBreakpoint();
  const showDetails = (id: string) => {
    selectProduct(id);
  };
  return (
    <>
      {products.map(
        ({
          id,
          name,
          discryption,
          mainPhoto,
          rating,
          feedbackAmount,
          price,
          currency,
          addedDate,
        }) => (
          <List.Item
            key={id}
            style={{ padding: "10px 0", borderRight: "20px" }}
          >
            <Row
              gutter={[0, 8]}
              style={{
                background: "white",
                height: "100%",
                padding: "0",
                borderRadius: "20px",
                alignItems: "center",
              }}
            >
              <Col xs={{ span: 11, offset: 1 }} sm={{ span: 7, offset: 1 }}>
                <Image
                  style={{
                    width: "100%",
                  }}
                  src={mainPhoto}
                />
              </Col>
              <Col xs={{ span: 11, offset: 1 }} sm={{ span: 10, offset: 1 }}>
                <List.Item.Meta
                  title={<a href="/">{name}</a>}
                  description={
                    <Row>
                      {screens.xs ? (
                        <h2>
                          {price} {currency}
                        </h2>
                      ) : null}
                      <Rate allowHalf disabled value={rating} />(
                      {feedbackAmount})
                    </Row>
                  }
                />
                {discryption}

                <Row gutter={[8, 8]}>
                  <Col>
                    <Button
                      type="primary"
                      shape="circle"
                      icon={<FullscreenOutlined />}
                      onClick={() => showDetails(id)}
                    />
                  </Col>
                  <Col>
                    <Button
                      name={id}
                      loading={target === id && submitting}
                      type="primary"
                      shape="circle"
                      icon={<DeleteOutlined />}
                      onClick={(e) => deleteProduct(e, id)}
                    />
                  </Col>
                </Row>
              </Col>
              <Col xs={{ span: 0, offset: 0 }} sm={{ span: 4, offset: 1 }}>
                <h2>
                  {price} {currency}
                </h2>
              </Col>
            </Row>
          </List.Item>
        )
      )}
    </>
  );
};
