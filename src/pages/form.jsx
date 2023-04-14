import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router";

const Form = () => {
  return (
    <Container>
      <div className="content">
        <Outlet />
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;

  .content {
    height: auto;

    @media only screen and (min-width: 1200px) {
      width: 1200px;
    }

    @media only screen and (max-width: 1200px) {
      width: 95%;
    }
  }
`;

export default Form;
