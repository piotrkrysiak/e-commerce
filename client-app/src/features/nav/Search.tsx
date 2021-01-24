import styled from "styled-components";
import React from "react";
import Search from "antd/lib/input/Search";

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
export const SearchInput = () => {
  return (
    <div>
      <StyledSearch placeholder="Wyszukaj w sklepie" />
    </div>
  );
};
