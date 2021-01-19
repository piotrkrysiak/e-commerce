import React, { useState } from "react";
import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import "antd/dist/antd.css";
import NavBar from "../../features/nav/NavBar";
import PageFooter from "../../features/nav/PageFooter";
import Baner from "../../features/dashboard/Banner";
import AppDashboard from "../../features/dashboard/AppDashboard";
import { IPosts } from "../models/posts";

const App = () => {
  return (
    <Layout>
      <Header>
        <NavBar />
      </Header>
      <Content>
        <AppDashboard />
      </Content>
      <Footer>
        <PageFooter />
      </Footer>
    </Layout>
  );
};

export default App;
