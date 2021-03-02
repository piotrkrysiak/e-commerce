import { Button, Col, List, Rate, Row, Image, Grid } from "antd";
import React, { useState } from "react";
import { FullscreenOutlined, DeleteOutlined } from "@ant-design/icons";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";
import {  NavLink } from "react-router-dom";

export default observer(function Product() {
  const { useBreakpoint } = Grid;

  const { productStore } = useStore();
  const { deleteProduct, productsByName: products, loading } = productStore;
  const [target, setTarget] = useState("");

  const screens = useBreakpoint();

  function handleDeleteProduct(e: any, id: string) {
    setTarget(e.currentTarget.name);
    deleteProduct(id);
  }

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
                    <NavLink to={`/products/${id}`}>
                      <Button
                        type="primary"
                        shape="circle"
                        icon={<FullscreenOutlined />}
                      ></Button>
                    </NavLink>
                  </Col>
                  <Col>
                    <Button
                      name={id}
                      loading={target === id && loading}
                      type="primary"
                      shape="circle"
                      icon={<DeleteOutlined />}
                      onClick={(e) => handleDeleteProduct(e, id)}
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
});
