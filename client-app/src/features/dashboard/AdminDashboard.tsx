import React from "react";
import "antd/dist/antd.css";
import "../../app/layout/styles.css";
import { observer } from "mobx-react-lite";
import ProductDashboard from "./ProductDashboard";

const AppDashboard = () => {
  return (
    <div style={{ margin: "200px" }}>
      <ProductDashboard />
    </div>
  );
};
export default observer(AppDashboard);
