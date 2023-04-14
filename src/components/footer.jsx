import React from "react";
import styled from "styled-components";

// icons
import { CiLinkedin } from "react-icons/ci";
import { BsSlack, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <Container>
      <div className="content">
        <div className="links">
          <a href="#" className="logo link">
            Faisala
          </a>
        </div>
        <div className="icons">
          <a href="#">
            <CiLinkedin className="big blue" />
          </a>
          <a href="#">
            <BsSlack className="icon" />
          </a>
          <a href="#">
            <BsTwitter className="icon blue" />
          </a>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: calc(100vw - 50px);
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0 0 0;
  padding: 40px 0;
  border-top: 1px solid var(--gray);

  .content {
    height: auto;

    @media only screen and (min-width: 1200px) {
      width: 1200px;
    }

    @media only screen and (max-width: 1200px) {
      width: 95%;
    }

    .links {
      width: 100%;
      height: 70px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      a {
        text-decoration: none;
        color: var(--black);
        font-size: 1.2em;
        font-weight: 700;
      }

      p {
        color: var(--green);
      }
    }

    .icons {
      width: 100%;
      height: 50px;
      margin: 10px 0 0 0;
      display: flex;
      flex-direction: row;
      align-items: center;

      a {
        margin: 0 20px 0 0;
        text-align: none;
        color: var(--black);

        .big {
          font-size: 2em;
        }

        .blue {
          color: var(--green);
        }

        .icon {
          font-size: 1.5em;
        }
      }
    }
  }
`;

export default Footer;
