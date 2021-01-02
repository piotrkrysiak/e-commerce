import { Button, Drawer, Input, Menu } from "antd";
import React, { useState } from "react";
import "../../app/layout/styles.css";
import { MenuOutlined } from "@ant-design/icons";
import logo from "../../app/assets/logo1.png";
import Search from "antd/lib/input/Search";
import styled from "styled-components";

const StyledSearch = styled(Search)`
  .ant-input {
    background-color: transparent;
    border: none;
    font-size: 15px;
  }

  .ant-input::placeholder {
    color: black;
  }
  .ant-btn {
    background-color: transparent;
    border:none;
    width:31px;
    height:31px;
  }
  .ant-btn:hover {
    border: none;
  }
  .ant-input-group-addon {
    background-color: transparent;
    border: none;

  }
  .anticon .anticon-search{
    color: #000;
  }
`;

export default function NavBar() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <img alt="logo" src={logo}></img>
          <a href="/">S Tech</a>
        </div>
        <div>
          <StyledSearch placeholder="Wyszukaj w sklepie" />
        </div>
        <div className="mobileHidden">
          <Menu mode="horizontal">
            <Menu.Item>Home</Menu.Item>
            <Menu.Item>About</Menu.Item>
          </Menu>
        </div>
        <div className="mobileVisible">
          <Button className="buttonColor" type="primary" onClick={showDrawer}>
            <MenuOutlined style={{ color: "rgb(243, 93, 125)" }} />
          </Button>
          <Drawer
            title="S Tech"
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <p>Home</p>
            <p>About</p>
          </Drawer>
        </div>
      </div>
    </div>
  );
}
