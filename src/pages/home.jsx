import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";

// icons
import { CiMoneyBill } from "react-icons/ci";
import { TbArrowDownRight } from "react-icons/tb";
import { BsRocketTakeoffFill } from "react-icons/bs";
import { BiDollarCircle, BiTimeFive } from "react-icons/bi";

// images

const Home = () => {
  const navigate = useNavigate();

  const goToProduct = () => {
    navigate("/form");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <Container>
      <div className="hero">
        <div className="para">
          <p className="title">Shall I file my consumer case?</p>
          <p className="more">
            Just help us with few key inputs and will help you decide the case
            outcomes by analysing similar cases using our state of art AI.
          </p>
          <div className="button" onClick={goToLogin}>
            <BsRocketTakeoffFill className="icon" />
            <p>Try for free</p>
          </div>
        </div>
        <div className="image">
          <video
            src="https://res.cloudinary.com/f-studios/video/upload/v1681455645/Predixion/Legal_ai/Faisala_product_intro_w0s5ie.mp4"
            alt="hero"
            autoPlay={true}
            loop
            controls
          />
        </div>
      </div>
      <div className="features">
        <div className="about">
          <p className="title">
            With <span>Faisala,</span> You can:
          </p>
          <p className="para">
            Our innovative product leverages advanced data analytics and machine
            learning algorithms to predict the likely outcome of consumer cases,
            empowering consumers to make more informed decisions.
          </p>
          {/* <div className="button" onClick={goToProduct}>
            <BsRocketTakeoffFill className="icon" />
            <p>Try for free</p>
          </div> */}
        </div>
        <div className="content">
          <div className="box">
            <div className="circle">
              <BiDollarCircle className="icon" />
            </div>
            <div className="para">
              <p className="title">Outcome Prediction</p>
              <p>
                Get a probability of winning or loosing a case based on outcomes
                of similar cases in past.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="circle">
              <CiMoneyBill className="icon" />
            </div>
            <div className="para">
              <p className="title">Expected Compensation</p>
              <p>
                Get an compensation amount for winning a case, so you can make a
                decision is it worth your time or not.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="circle">
              <BiTimeFive className="icon" />
            </div>
            <div className="para">
              <p className="title">Duration of the case</p>
              <p>
                Get an estimated duration of the case which help you make the
                best decision in your interest.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="circle">
              <BiDollarCircle className="icon" />
            </div>
            <div className="para">
              <p className="title">Ready to File Court Filing</p>
              <p>
                Generate the case filing documents with one click and start the
                legal process immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="faq">
        <p className="title">Frequently Asked Questions</p>
        <div className="container">
          <div className="div">
            <div className="box">
              <p className="header">
                <TbArrowDownRight className="icon" />
                What sets Faisala apart from other legal AI?
              </p>
              <p className="para">
                Faisala is the only legal AI that can not only predict the
                outcomes of consumer cases with a high degree of accuracy, but
                also generate the necessary case filing documents. This makes
                Faisala the most comprehensive legal AI on the market.
              </p>
            </div>
            <div className="box">
              <p className="header">
                <TbArrowDownRight className="icon" />
                How much time does it take to generate a case filing document
                with Faisala?
              </p>
              <p className="para">
                Faisala can generate a case filing document in mere minutes,
                making it the fastest legal AI on the market.
              </p>
            </div>
          </div>
          <div className="div">
            <div className="box">
              <p className="header">
                <TbArrowDownRight className="icon" />
                How does Faisala accurately predict case outcomes?
              </p>
              <p className="para">
                Faisala uses cutting-edge artificial intelligence technology and
                a vast database of legal precedents to accurately predict the
                outcomes of consumer cases. This makes Faisala the most reliable
                legal AI on the market.
              </p>
            </div>
            <div className="box">
              <p className="header">
                <TbArrowDownRight className="icon" />
                What happens if I don't agree with Faisala's prediction?
              </p>
              <p className="para">
                Faisala is designed to provide the most accurate predictions
                possible. However, if you disagree with Faisala's prediction,
                you are free to take your case to court and pursue other legal
                options.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="waitlist">
        <p className="title">
          Get the future of legal AI - Predict case outcomes, generate
          documents, and win more cases with Faisala.
        </p>
        <div className="button" onClick={goToProduct}>
          <BsRocketTakeoffFill className="icon" />
          <p>Try the product</p>
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

  .hero {
    height: auto;
    display: flex;
    padding: 70px 20px;
    margin: 20px 0 80px 0;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    @media only screen and (min-width: 1200px) {
      width: 1200px;
    }

    @media only screen and (max-width: 1200px) {
      width: 100%;
      flex-direction: column;
    }

    @media only screen and (max-width: 480px) {
      padding: 70px 10px;
      justify-content: center;
    }

    .para {
      width: 45%;
      height: auto;
      display: flex;
      flex-direction: column;

      @media only screen and (max-width: 1024px) {
        width: 90%;
        align-items: center;
      }

      @media only screen and (max-width: 480px) {
        align-items: center;
      }

      p.title {
        font-size: 3.1em;
        font-weight: 800;
        line-height: 70px;
        color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
        background-image: linear-gradient(
          to right bottom,
          var(--tw-gradient-stops-2)
        );
        background-image: linear-gradient(
          to bottom,
          var(--tw-gradient-stops-1)
        );

        @media only screen and (max-width: 1024px) {
          text-align: center;
        }

        @media only screen and (max-width: 480px) {
          text-align: center;
          font-size: 2.5em;
        }
      }

      p.more {
        font-size: 1.1em;
        margin: 20px 0 0 0;
        line-height: 30px;
        font-weight: 500;
        color: var(--dark);

        @media only screen and (max-width: 1024px) {
          text-align: center;
        }
      }

      .button {
        width: 300px;
        height: 60px;
        margin: 20px 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        background: var(--green);
        cursor: pointer;
        transition: 0.3s ease-in-out;

        p {
          color: var(--white);
        }

        .icon {
          font-size: 1.3em;
          margin: 0 10px 0 0;
          color: var(--white);
        }

        :hover {
          background: var(--green);
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);

          p {
            color: var(--white);
          }

          .icon {
            color: var(--white);
          }
        }
      }
    }

    .image {
      width: 50%;
      height: auto;
      display: flex;
      align-items: center;
      justify-content: center;

      video {
        width: 100%;
        border-radius: 10px;
      }

      @media only screen and (max-width: 1024px) {
        width: 100%;
      }
    }
  }

  .features {
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 0 100px 0;

    @media only screen and (min-width: 1200px) {
      width: 1200px;
    }

    @media only screen and (max-width: 1200px) {
      width: 95%;
    }

    @media only screen and (max-width: 1024px) {
      flex-direction: column;
    }

    .about {
      width: 45%;
      height: auto;
      display: flex;
      flex-direction: column;

      @media only screen and (max-width: 1024px) {
        width: 100%;
      }

      p.title {
        font-size: 2em;
        font-weight: 700;
        margin: 0 0 20px 0;
        color: var(--black);

        @media only screen and (max-width: 480px) {
          font-size: 1.7em;
        }

        span {
          color: transparent;
          background-clip: text;
          -webkit-background-clip: text;
          background-image: linear-gradient(
            to right,
            var(--tw-gradient-stops-1)
          );
        }
      }

      p.para {
        font-size: 1.1em;
        color: var(--dark);
        line-height: 30px;
      }

      .button {
        width: 300px;
        height: 60px;
        margin: 20px 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        background: var(--green);
        cursor: pointer;
        transition: 0.3s ease-in-out;

        p {
          color: var(--white);
        }

        .icon {
          font-size: 1.3em;
          margin: 0 10px 0 0;
          color: var(--white);
        }

        :hover {
          background: var(--green);
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);

          p {
            color: var(--white);
          }

          .icon {
            color: var(--white);
          }
        }
      }
    }

    .content {
      width: 50%;
      height: auto;
      display: flex;
      flex-direction: column;

      @media only screen and (max-width: 1024px) {
        width: 100%;
      }

      .box {
        width: 100%;
        height: auto;
        display: flex;
        margin: 50px 0 0 0;

        .circle {
          width: 150px;
          height: 100px;

          @media only screen and (max-width: 480px) {
            margin: 0 10px 0 0;
          }

          .icon {
            padding: 20px;
            font-size: 4em;
            border-radius: 50%;
            color: var(--green);
            background: var(--gray);
          }
        }

        .para {
          width: auto;
          height: auto;
          padding: 10px 0 0 0;

          p.title {
            margin: 0;
            font-size: 1.5em;
            font-weight: 700;
            color: var(--black);

            @media only screen and (max-width: 480px) {
              font-size: 1.2em;
            }
          }

          p {
            line-height: 30px;
            margin: 10px 0 0 0;
            color: var(--dark);
          }
        }
      }
    }
  }

  .faq {
    height: auto;
    display: flex;
    border-radius: 5px;
    flex-direction: column;
    align-items: center;
    margin: 40px 0 0 0;
    padding: 0 20px;

    @media only screen and (min-width: 1200px) {
      width: 1200px;
    }

    @media only screen and (max-width: 1200px) {
      width: 95%;
    }

    .title {
      font-size: 2.5em;
      font-weight: 700;
      margin: 0 0 50px 0;
      color: var(--black);

      @media only screen and (max-width: 480px) {
        font-size: 1.7em;
      }
    }

    .container {
      width: 100%;
      height: auto;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 50px;

      @media only screen and (max-width: 1024px) {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 0px;
      }

      .div {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;

        .box {
          width: 100%;
          height: 180px;
          display: flex;
          margin: 0 0 70px 0;
          flex-direction: column;

          @media only screen and (max-width: 1024px) {
            height: 250px;
            margin: 0 0 0 0;
          }

          @media only screen and (max-width: 480px) {
            height: auto;
            margin: 0 0 50px 0;
          }

          p.header {
            font-size: 1.3em;
            font-weight: 700;
            color: var(--black);

            .icon {
              font-size: 1.6em;
              margin: 0 5px -7px 0;
              color: var(--green);
            }
          }

          p.para {
            margin: 20px 0 0 0;
            line-height: 30px;
            color: var(--dark);
          }
        }
      }
    }
  }

  .waitlist {
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 40px 0;
    padding: 30px 0 10px 0;
    background: var(--green);
    border-radius: 5px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);

    @media only screen and (min-width: 1200px) {
      width: 1200px;
    }

    @media only screen and (max-width: 1200px) {
      width: 95%;
    }

    @media only screen and (max-width: 1024px) {
      padding: 30px;
    }

    p.title {
      font-size: 2em;
      font-weight: 700;
      text-align: center;
      color: var(--white);
    }

    .button {
      width: auto;
      height: 50px;
      margin: 20px 0;
      padding: 0 40px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      background: var(--white);
      cursor: pointer;
      transition: 0.3s ease-in-out;

      p {
        color: var(--green);
      }

      .icon {
        font-size: 1.3em;
        margin: 0 10px 0 0;
        color: var(--green);
      }

      :hover {
        background: var(--green);
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);

        p {
          color: var(--white);
        }

        .icon {
          color: var(--white);
        }
      }
    }
  }
`;

export default Home;
