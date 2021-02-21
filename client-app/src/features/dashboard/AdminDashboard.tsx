import React, { useEffect } from "react";
import "antd/dist/antd.css";
import "../../app/layout/styles.css";
import LoadingComponent from "../components/design/LoadingComponent";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";
import ProductDashboard from "./ProductDashboard";

const AppDashboard = () => {
  const { productStore } = useStore();

  useEffect(() => {
    productStore.loadProducts();
  }, [productStore]);

  if (productStore.loadingInitial) return <LoadingComponent />;

  return (
    <div style={{ margin: "200px" }}>
      <ProductDashboard />
    </div>
  );
};
export default observer(AppDashboard);
