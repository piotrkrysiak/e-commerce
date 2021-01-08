import { Button, Drawer, Menu } from "antd";
import React, { useState } from "react";
import "./nav.css";
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
    border: none;
    width: 31px;
    height: 31px;
  }
  .ant-btn:hover {
    border: none;
  }
  .ant-input-group-addon {
    background-color: transparent;
    border: none;
  }
  .anticon .anticon-search {
    color: #000;
  }
`;

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
            <img alt="logo" src={logo}></img>
            <a href="/">S Tech</a>
          </div>
          <div className="mobileHidden">
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
              <MenuOutlined />
            </Button>
            <Drawer
              title="S Tech"
              placement="right"
              closable={false}
              onClose={onClose}
              visible={visible}
            >
              <p>
                <StyledSearch placeholder="Wyszukaj w sklepie" />
              </p>
              <p>Home</p>
              <p>About</p>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
}
