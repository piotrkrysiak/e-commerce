import React from "react";
import styled from "styled-components";

const LoadingComponent = () => {
  return (
    <LoadingContainer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ margin: "auto" }}
        width="200"
        height="200"
        display="block"
        preserveAspectRatio="xMidYMid"
        viewBox="0 0 100 100"
      >
        <path fill="#222" d="M10 50a40 40 0 0080 0 40 42 0 01-80 0">
          <animateTransform
            attributeName="transform"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="rotate"
            values="0 50 51;360 50 51"
          ></animateTransform>
        </path>
      </svg>
    </LoadingContainer>
  );
};

export default LoadingComponent;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(var(--vh, 1vh) * 100);
  font-size: 2rem;
`;
