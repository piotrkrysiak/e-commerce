import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";
import { Interface } from "readline";
import { IPosts } from "../../app/models/posts";
import { EditOutlined, CloseOutlined } from "@ant-design/icons";

interface IProps {
  post: IPosts;
  setEditMode: (editMode: boolean) => void;
  setSelectedPost: (post: IPosts | null) => void;
}

export const ProductDetails: React.FC<IProps> = ({
  post,
  setEditMode,
  setSelectedPost,
}) => {
  const navigate = () => setEditMode(true);
  return (
    <div>
      <Card
        hoverable
        cover={
          <img
            alt="example"
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        }
        actions={[
          <EditOutlined onClick={navigate} key="edit" />,
          <CloseOutlined
            onClick={() => setSelectedPost(null)}
            key="ellipsis"
          />,
        ]}
      >
        <Meta description={post.name} />
        <Meta description={post.body} />
        <Meta description={post.name} />
      </Card>
      ,
    </div>
  );
};
