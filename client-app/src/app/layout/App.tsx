import React from "react";
import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import "antd/dist/antd.css";
import NavBar from "../../features/nav/NavBar";
import PageFooter from "../../features/nav/PageFooter";

import { observer } from "mobx-react-lite";
import { Route, useLocation } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import ProductDashboard from "../../features/dashboard/ProductDashboard";
import ProductForm from "../../features/form/ProductForm";
import ProductDetails from "../../features/details/ProductDetails";

const App = () => {
  const location = useLocation();

  return (
    <>
      <Route path="/" exact component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <Layout>
            <Header>
              <NavBar />
            </Header>
            <Content>
              <Route path="/products" exact component={ProductDashboard} />
              <Route path="/products/:id" component={ProductDetails} />
              <Route
                key={location.key}
                path={["/createForm", "/manage/:id"]}
                component={ProductForm}
              />
            </Content>
            <Footer>
              <PageFooter />
            </Footer>
          </Layout>
        )}
      />
    </>
  );
};

export default observer(App);
