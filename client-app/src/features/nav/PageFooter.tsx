import React from "react";
import { GithubOutlined } from "@ant-design/icons";
import { Row } from "antd";

function PageFooter() {
  return (
    <div style={{ textAlign: "center", background: "white" }}>
      <Row>
        <a
          style={{ color: "black" }}
          href="//github.com/plotrekpl"
          target="blank"
        >
          e-commerce 2020 <GithubOutlined /> plotrekpl
        </a>
      </Row>
    </div>
  );
}

export default PageFooter;
