import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import React from "react";
import "antd/dist/antd.css";
import NavBar from "../../features/nav/NavBar";
import "./styles.css";
import PageFooter from "../../features/nav/PageFooter";
import Baner from "../../features/dashboard/Banner";

const App = () => {
  return (
    <Layout className="mainLayout">
      <Header>
        <NavBar />
      </Header>
      <Content style={{ backgroundColor: 'pink'}}>
      <Baner/>
      </Content>
      <Footer>
        <PageFooter />
      </Footer>
    </Layout>
  );
};

export default App;
