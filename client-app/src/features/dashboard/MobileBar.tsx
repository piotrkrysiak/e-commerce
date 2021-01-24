import { Button, Col, Drawer, Menu, Row } from "antd";
import React from "react";
import styled from "styled-components";

import {
  UnorderedListOutlined,
  FormOutlined,
  SortAscendingOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { Product } from "./Product";
import { ProductForm } from "../form/ProductForm";
import { IProduct } from "../../app/models/product";

const StyledRow = styled(Row)`
  background-color: white;
  height: 60px;
  width: 100%;
  margin: auto;
  border: solid 1px #dadada;

  .ant-col {
    display: grid;
    text-align: center;
    border-style: solid;
    border-color: #dadada;
    border-width: 0px 0px 0px 1px;
    align-items: center;
    height: 100%;
    justify-content: center;
  }
`;
interface IProps {
  openCreateForm: () => void;
  showDrawer: (show: boolean) => void;
}

export const MobileBar: React.FC<IProps> = ({ openCreateForm, showDrawer }) => {
  const openCreateFormDrawer = () => {
    openCreateForm();
    //showDrawer(true);
  };

  return (
    <StyledRow>
      <Col span={4}>
        <UnorderedListOutlined />
      </Col>
      <Col span={10} onClick={openCreateFormDrawer}>
        <FormOutlined />
        Formularz
      </Col>
      <Col span={10}>
        <SortAscendingOutlined />
        Sortuj
      </Col>
    </StyledRow>
  );
};
