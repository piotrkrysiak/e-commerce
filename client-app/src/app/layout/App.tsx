import React from "react";
import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import "antd/dist/antd.css";
import NavBar from "../../features/nav/NavBar";
import PageFooter from "../../features/nav/PageFooter";
import AppDashboard from "../../features/dashboard/AdminDashboard";

import { observer } from "mobx-react-lite";

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

export default observer(App);
