import React, { useState } from "react";
import { Form, Input, Button, DatePicker, InputNumber, Row } from "antd";
import { IPosts } from "../../app/models/posts";

interface IProps {
  setEditMode: (editMode: boolean) => void;
  post: IPosts | null;
  createPost: (post: IPosts) => void;
  editPost: (post: IPosts) => void;
}

export const ProductForm: React.FC<IProps> = ({
  setEditMode,
  post: initializeFormPost,
  createPost,
  editPost,
}) => {
  const initializeForm = () => {
    if (initializeFormPost) {
      return initializeFormPost;
    } else {
      return {
        id: 0,
        postId: 0,
        name: "",
        email: "",
        body: "",
      };
    }
  };

  const [post, setPost] = useState<IPosts>(initializeForm);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = () => {
    if (post.name.length === 0) {
      let newPost = {
        ...post,
        id: 51,
      };
      createPost(newPost);
    } else editPost(post);
  };

  return (
    <div style={{ backgroundColor: "white", padding: "30px" }}>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={{ size: "default" }}
      >
        <Form.Item label="Input">
          <Input
            onChange={handleInputChange}
            name="postID"
            placeholder="postID"
            value={post.postId}
          />
        </Form.Item>
        <Form.Item label="Input">
          <Input placeholder="id" value={post.id} />
        </Form.Item>
        <Form.Item label="Input">
          <Input onChange={handleInputChange} name="name" placeholder="name" value={post.name}/>
        </Form.Item>
        <Form.Item label="Input">
          <Input
            onChange={handleInputChange}
            name="email"
            placeholder="email"
            value={post.email}
          />
        </Form.Item>
        <Form.Item label="Input">
          <Input.TextArea
            onChange={handleInputChange}
            name="body"
            placeholder="body"
            value={post.body}
          />
        </Form.Item>
        <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>
        <Form.Item label="InputNumber">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item>
        <Row>
          <Button onClick={handleSubmit} type="primary">
            Submit
          </Button>
          <Button onClick={() => setEditMode(false)}>Cancel</Button>
        </Row>
      </Form>
    </div>
  );
};
