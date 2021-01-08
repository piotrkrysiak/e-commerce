import React from "react";
import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import "antd/dist/antd.css";
import NavBar from "../../features/nav/NavBar";
import PageFooter from "../../features/nav/PageFooter";
import Baner from "../../features/dashboard/Banner";
import Dashboard from "../../features/dashboard/Dashboard";


const App = () => {
  return (
    <Layout className="mainLayout">
      <Header>
        <NavBar />
      </Header>
      <Content >
        <Baner />
        <Dashboard />
      </Content>
      <Footer>
        <PageFooter />
      </Footer>
    </Layout>
  );
};

export default App;



