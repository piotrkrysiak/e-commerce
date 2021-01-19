import { Col, Row } from "antd";
import React from "react";
import { IPosts } from "../../app/models/posts";
import { ProductList } from "./ProductList";
import { ProductDetails } from "../details/ProductDetails";
import { ProductForm } from "../form/ProductForm";

interface IProps {
  posts: IPosts[];
  loading: boolean;
  selectPost: (id: number) => void;
  selectedPost: IPosts | null;
  editMode: boolean;
  setEditMode: (editMode: boolean) => void;
  openCreateForm: () => void;
  setSelectedPost: (post: IPosts | null) => void;
  createPost: (post: IPosts) => void;
  editPost: (post: IPosts) => void;
  deletePost: (id: number) => void;

}
export const ProductDashboard: React.FC<IProps> = ({
  posts,
  loading,
  selectPost,
  selectedPost,
  editMode,
  setEditMode,
  openCreateForm,
  setSelectedPost,
  createPost,
  editPost,
  deletePost
}) => {
  return (
    <div style={{ margin: "200px" }}>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <ProductList
            posts={posts}
            loading={loading}
            selectPost={selectPost}
            openCreateForm={openCreateForm}
            deletePost={deletePost}

          />
        </Col>
        <Col span={12}>
          {selectedPost && !editMode && (
            <ProductDetails
              post={selectedPost}
              setEditMode={setEditMode}
              setSelectedPost={setSelectedPost}
            />
          )}
          {editMode && (
            <ProductForm
              key={(selectedPost && selectedPost.id) || 0}
              setEditMode={setEditMode}
              post={selectedPost}
              createPost={createPost}
              editPost={editPost}
            />
          )}
        </Col>
      </Row>
    </div>
  );
};
