import { Button, Drawer, Menu } from "antd";
import React, { useState } from "react";
import "./nav.css";
import { MenuOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [visible, setVisible] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className={navbar ? "active" : ""}>
      <div className="container-fluid">
        <div className="header">
          <div className="logo">
            <a href="/">S Tech</a>
          </div>
          <div className="mobileHidden"></div>
          <div className="mobileHidden">
            <Menu mode="horizontal">
              <Menu.Item>
                Menu
                <NavLink to="/"></NavLink>
              </Menu.Item>
              <Menu.Item>
                Products
                <NavLink to="/Products"></NavLink>
              </Menu.Item>
              <Menu.Item>
                Form
                <NavLink to="/createForm"></NavLink>
              </Menu.Item>
            </Menu>
          </div>
          <div className="mobileVisible">
            <Button className="buttonColor" onClick={showDrawer}>
              <MenuOutlined />
            </Button>
            <Drawer
              title="S Tech"
              placement="right"
              closable={false}
              onClose={onClose}
              visible={visible}
            >
              <Menu mode="vertical">
                <Menu.Item>
                  Menu
                  <NavLink to="/"></NavLink>
                </Menu.Item>
                <Menu.Item>
                  Products
                  <NavLink to="/Products"></NavLink>
                </Menu.Item>
                <Menu.Item>
                  Form
                  <NavLink to="/createForm"></NavLink>
                </Menu.Item>
              </Menu>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
}
