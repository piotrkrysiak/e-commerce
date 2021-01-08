import React, { useEffect, useState } from "react";
import axios from "axios";
import { DashboardItem } from "./DashboardItem";
import "antd/dist/antd.css";
import "../../app/layout/styles.css";
import { Col, Row } from "antd";

interface IPosts {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const Dashboard = () => {
  const [posts, setPost] = useState<IPosts[]>([]);
  const [loading, setLoading] = useState(false);

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
  console.log(posts);

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={16}>
          <DashboardItem posts={posts} loading={loading} />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
