import { Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function HomePage() {
  return (
    <HomeContainer>
      <Row>
        <p>Kilinkij by przejść dalej:</p>
        <Link to="/products">Products</Link>
      </Row>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(var(--vh, 1vh) * 100);
  font-size: 2rem;
`;
