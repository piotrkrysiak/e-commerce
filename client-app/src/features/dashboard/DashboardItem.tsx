import { Avatar, Col, List, Rate } from "antd";
import React from "react";
interface IPosts {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

type PostType = {
  posts: IPosts[];
  loading: boolean;
};

export const DashboardItem = ({ posts, loading }: PostType) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div style={{ margin: "20px", backgroundColor: 'white' }}>
      <List
        itemLayout="vertical"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
        }}
        dataSource={posts}
        renderItem={(item) => (
          <List.Item
            extra={
              <img
                style={{ float: "left" }}
                width={272}
                alt="logo"
                src="https://www.freepnglogos.com/uploads/macbook-png/macbook-cleanmymac-the-best-mac-cleanup-app-for-macos-get-32.png"
              />
            }
          >
            <List.Item.Meta
              avatar={
                <Avatar src="https://lp.x-kom.pl/a/podcast/x-kom_sygnet_RGB_2.png" />
              }
              title={<a href="#">{item.name}</a>}
              description={item.body}
            />
            <Rate allowHalf value={4.5} style={{ marginLeft: "48px" }} />
          </List.Item>
        )}
      />
    </div>
  );
};
