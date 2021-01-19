import React, { useEffect, useState } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import "../../app/layout/styles.css";
import { IPosts } from "../../app/models/posts";
import { ProductDashboard } from "./ProductDashboard";

const AppDashboard = () => {
  const [posts, setPost] = useState<IPosts[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedPost, setSelectedPost] = useState<IPosts | null>(null);
  const [editMode, setEditMode] = useState(false);

  const handleSelectPost = (id: number) => {
    setSelectedPost(posts.filter((p) => p.id === id)[0]);
  };

  const handleOpenCreateForm = () => {
    setSelectedPost(null);
    setEditMode(true);
  };

  const handleCreatePost = (post: IPosts) => {
    setPost([...posts, post]);
    setSelectedPost(post);
    setEditMode(false);
  };

  const handleEditPost = (post: IPosts) => {
    setPost([...posts.filter((p) => p.id !== post.id), post]);
    setSelectedPost(post);
    setEditMode(false);
  };

  const handleDeletePost = (id: number) => {
    setPost([...posts.filter((p)=> p.id !== id)])
  }

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setPost(res.data);
      setLoading(false);
    };
    fetchPost();
  }, []);

  return (
    <>
      <ProductDashboard
        posts={posts}
        loading={loading}
        selectPost={handleSelectPost}
        selectedPost={selectedPost}
        editMode={editMode}
        setEditMode={setEditMode}
        openCreateForm={handleOpenCreateForm}
        setSelectedPost={setSelectedPost}
        createPost={handleCreatePost}
        editPost={handleEditPost}
        deletePost={handleDeletePost}
      />
    </>
  );
};

export default AppDashboard;
