import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//icons
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <Container>
      <div className="container">
        <div className="image"></div>
        <div className="content">
          <div className="header">
            <p className="title">
              <span>Sign</span> into your account
            </p>
            <p className="para">Sign into your account now.</p>
            <div className="button">
              <FcGoogle className="icon" />
              <p>Google</p>
            </div>
            <div className="or">
              <div className="line"></div>
              <p>Or</p>
              <div className="line"></div>
            </div>
          </div>
          <div className="form">
            <div className="input">
              <label htmlFor="email">Mobile number or email</label>
              <input type="text" id="email" />
            </div>
            <div className="input">
              <label htmlFor="password">Password</label>
              <input type="text" id="password" />
            </div>
            <div className="something">
              <div className="remember">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <Link to="/forgot">Forgot password?</Link>
            </div>
            <button>Sign in</button>
          </div>
          <div className="signup">
            <p>
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
          </div>
        </div>
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
  padding: 50px 20px;

  .container {
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    @media only screen and (min-width: 1200px) {
      width: 1200px;
    }

    @media only screen and (max-width: 1200px) {
      width: 100%;
      flex-direction: column;
    }

    .image {
      width: 50%;
      height: 700px;
      margin: 0 40px 0 0;
      background: var(--gray);

      @media only screen and (max-width: 1024px) {
        width: 95%;
        height: 300px;
        margin: 0 0 30px 0;
      }

      @media only screen and (max-width: 480px) {
        width: 100%;
      }
    }

    .content {
      width: auto;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;

      @media only screen and (max-width: 1024px) {
        width: 75%;
      }

      @media only screen and (max-width: 768px) {
        width: 90%;
      }

      @media only screen and (max-width: 480px) {
        width: 100%;
      }

      .header {
        width: 100%;

        p.title {
          font-size: 2em;
          font-weight: 700;
          line-height: 50px;

          span {
            color: var(--green);
          }
        }

        p.para {
          margin: 0 0 20px 0;
          line-height: 40px;
        }

        .button {
          width: 100%;
          height: 50px;
          margin: 15px 0;
          border-radius: 4px;
          background: var(--gray);
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          cursor: pointer;

          .icon {
            font-size: 1.3em;
            margin: 0 10px 0 0;
          }
        }

        .or {
          width: 100%;
          height: 10px;
          margin: 30px 0;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;

          .line {
            width: 45%;
            height: 1px;
            background: var(--green);
          }
        }
      }

      .form {
        width: 500px;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;

        @media only screen and (max-width: 1024px) {
          width: 100%;
        }

        .input {
          width: 100%;
          height: 80px;
          margin: 0 0 20px 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;

          input {
            width: 100%;
            height: 50px;
            background: var(--gray);
            border: none;
            border-radius: 4px;
            padding: 0 20px;
            outline: none;
          }
        }

        .something {
          width: 100%;
          height: 50px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;

          @media only screen and (max-width: 480px) {
            width: 100%;
            height: 70px;
          }

          .remember {
            display: flex;
            flex-direction: row;

            input {
              width: 18px;
              margin: 0 5px 0 0;

              @media only screen and (max-width: 480px) {
                width: 20px;
                margin: 0 10px 0 0;
              }
            }
          }

          a {
            text-decoration: none;
            color: var(--black);
          }
        }

        button {
          width: 100%;
          height: 50px;
          border-radius: 4px;
          margin: 10px 0 20px 0;
          background: var(--green);
          color: var(--white);
          font-size: 1em;
          border: none;
        }
      }

      .signup {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        a {
          text-decoration: none;
          color: var(--green);
        }
      }
    }
  }
`;

export default Login;
