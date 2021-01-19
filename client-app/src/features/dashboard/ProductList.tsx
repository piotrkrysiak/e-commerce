import { Avatar, Col, List, Rate, Row, Image, Button } from "antd";
import Title from "antd/lib/skeleton/Title";
import React from "react";
import { IPosts } from "../../app/models/posts";

interface PostType {
  posts: IPosts[];
  loading: boolean;
  selectPost: (id: number) => void;
  openCreateForm: () => void;
  deletePost: (id: number) => void;
}

export const ProductList = ({
  posts,
  loading,
  selectPost,
  openCreateForm,
  deletePost,
}: PostType) => {
  const select = (id: number) => {
    console.log(id);
    selectPost(id);
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div style={{ padding: "20px", backgroundColor: "white" }}>
      <Row
        style={{
          backgroundColor: "grey",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <Button onClick={openCreateForm}>Dodaj produkt</Button>
      </Row>
      <List
        itemLayout="vertical"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
        }}
        dataSource={posts}
        renderItem={(item) => (
          <List.Item>
            <Row gutter={[32, 16]}>
              <Col>
                <Image
                  style={{ width: "180px" }}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
              </Col>
              <Col flex="auto">
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://lp.x-kom.pl/a/podcast/x-kom_sygnet_RGB_2.png" />
                  }
                  title={<a href="#">{item.name}</a>}
                  description={item.body}
                />
                <Row style={{ float: "right" }}>
                  <Rate allowHalf value={4.5} style={{ marginRight: "10px" }} />
                  <Button
                    onClick={() => select(item.id)}
                    style={{ marginRight: "10px" }}
                  >
                    Wyświetl Produkt
                  </Button>
                  <Button onClick={() => deletePost(item.id)}>
                    Usuń Produkt
                  </Button>
                </Row>
              </Col>
            </Row>
          </List.Item>
        )}
      />
    </div>
  );
};
