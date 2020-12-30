import { Button, Drawer, Input, Menu } from "antd";
import React, { useState } from "react";
import "../../app/layout/styles.css";
import { MenuOutlined } from "@ant-design/icons";
import logo from "../../app/assets/logo1.png";

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
          <Input.Search  size="large" placeholder="input here" />
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
